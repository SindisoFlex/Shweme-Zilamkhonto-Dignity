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
    const branch = execSync('git branch --show-current').toString().trim();

    while (!pushSuccess && retries > 0) {
      try {
        // Try pushing to origin first
        log(`Attempting push to origin/${branch}...`);
        execSync(`git push -u origin ${branch}`, { stdio: 'pipe' });
        pushSuccess = true;
        log('Successfully pushed changes to origin.');
      } catch (pushErr) {
        const errMsg = (pushErr.stderr || pushErr.message || '').toString();
        log(`Failed to push to origin: ${errMsg.split('\n')[0]}`);
        
        // Fallback to gitsafe-backup if it exists
        try {
          const remotes = execSync('git remote').toString();
          if (remotes.includes('gitsafe-backup')) {
            log(`Attempting fallback push to gitsafe-backup/${branch}...`);
            execSync(`git push gitsafe-backup ${branch}`, { stdio: 'pipe' });
            pushSuccess = true;
            log('Successfully pushed changes to gitsafe-backup.');
            continue;
          }
        } catch (fallbackErr) {
          log(`Fallback push also failed: ${fallbackErr.message}`);
        }

        retries--;
        if (retries > 0) {
          log(`Retrying in 5 seconds... (${retries} retries left)`);
          await sleep(5000);
        } else {
          throw new Error('All push attempts failed. Please check your network and remote configuration.');
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
