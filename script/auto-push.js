import { execSync } from 'child_process';
import { appendFileSync } from 'fs';
import { join } from 'path';

const logFile = join(process.cwd(), 'auto-push.log');

const log = (msg) => {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  try {
    appendFileSync(logFile, line);
  } catch (e) {
    // Ignore log errors if file cannot be written
  }
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  log('Starting automated Git push workflow...');

  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
  } catch (err) {
    log('Error: Not a git repository.');
    process.exit(1);
  }

  try {
    // Stage all modified and untracked files
    execSync('git add .');
    
    // Check status
    const status = execSync('git status --porcelain').toString().trim();
    if (!status) {
      log('No changes detected. Exiting.');
      process.exit(0);
    }

    // Generate commit message based on changes
    const lines = status.split('\n').map(line => line.trim());
    const files = lines.map(line => {
      // Porcelain status output format is "XY filename"
      return line.substring(2).trim();
    }).slice(0, 3);

    let commitMessage = `Auto-commit: update ${files.join(', ')}`;
    if (lines.length > 3) {
      commitMessage += ` and ${lines.length - 3} more file(s)`;
    }

    log(`Committing with message: "${commitMessage}"`);
    execSync(`git commit -m "${commitMessage}"`);

    log('Pushing to remote repository...');
    let pushSuccess = false;
    let retries = 3;
    while (!pushSuccess && retries > 0) {
      try {
        execSync('git push', { stdio: 'pipe' });
        pushSuccess = true;
        log('Successfully pushed changes to remote.');
      } catch (pushErr) {
        const errMsg = (pushErr.stderr || pushErr.message || '').toString();
        
        // Handle no upstream branch error
        if (errMsg.includes('--set-upstream')) {
          const match = errMsg.match(/git push\s+--set-upstream\s+[^\s]+\s+[^\s]+/);
          if (match) {
            try {
              log(`Setting upstream branch: ${match[0]}`);
              execSync(match[0], { stdio: 'pipe' });
              pushSuccess = true;
              log('Successfully pushed changes to remote and set upstream.');
              continue;
            } catch (setUpstreamErr) {
              log(`Failed to push with upstream configured. Error: ${setUpstreamErr.message}`);
            }
          } else {
              // Try a fallback if there's a remote named 'origin'
              try {
                  const branch = execSync('git branch --show-current').toString().trim();
                  log(`Setting upstream to origin/${branch}`);
                  execSync(`git push -u origin ${branch}`, { stdio: 'pipe' });
                  pushSuccess = true;
                  continue;
              } catch (e) {}
          }
        }

        retries--;
        log(`Failed to push. ${retries > 0 ? 'Retrying in 5 seconds...' : 'Giving up.'}`);
        if (errMsg) log(`Error message: ${errMsg.split('\\n')[0]}`);
        if (retries > 0) {
          await sleep(5000);
        } else {
          throw new Error('Network failure or remote error during push.');
        }
      }
    }

  } catch (err) {
    log(`Error during automated workflow: ${err.message || err}`);
    if (err.stdout) log(`stdout: ${err.stdout.toString()}`);
    if (err.stderr) log(`stderr: ${err.stderr.toString()}`);
    process.exit(1);
  }
}

run();
