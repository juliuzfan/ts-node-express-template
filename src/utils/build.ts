import shell from 'shelljs';

const buildFolder = './dist/';

// Add more array elements to copy directories 
// on Typesscript & Docker Builds

const folders = new Set(['./src/views']);

// Copy files
shell.cp('./src/config/example.json', `${buildFolder}/config/example.json`);

// Copy directories
folders.forEach((folder) => {
  shell.cp('-R', folder, buildFolder);
});