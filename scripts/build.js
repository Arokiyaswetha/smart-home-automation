const { spawnSync } = require('child_process');
const path = require('path');

const reactScriptsBin = path.join(
  __dirname,
  '..',
  'node_modules',
  'react-scripts',
  'bin',
  'react-scripts.js'
);

const nodeOptions = [process.env.NODE_OPTIONS, '--no-deprecation']
  .filter(Boolean)
  .join(' ');

const result = spawnSync(process.execPath, [reactScriptsBin, 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_OPTIONS: nodeOptions,
  },
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
