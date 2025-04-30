const path = require('path');

// Joining paths
const filePath = path.join('users', 'john', 'docs', 'file.txt');
console.log('Joined Path:', filePath); // e.g., users/john/docs/file.txt

// Resolving to absolute path
const absolutePath = path.resolve('docs', 'file.txt');
console.log('Absolute Path:', absolutePath); // e.g., /home/user/project/docs/file.txt

// Getting file name and extension
console.log('Basename:', path.basename('docs/file.txt')); // file.txt
console.log('Extension:', path.extname('docs/file.txt')); // .txt
console.log('Directory:', path.dirname('docs/file.txt')); // docs

// Parsing a path
const parsed = path.parse('/home/user/docs/file.txt');
console.log('Parsed:', parsed);
// Output: { root: '/', dir: '/home/user/docs', base: 'file.txt', ext: '.txt', name: 'file' }

// Platform-specific separator
console.log('Separator:', path.sep); // '/' on Unix, '\' on Windows