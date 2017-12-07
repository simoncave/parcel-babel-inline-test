import fs from 'fs';

try {
  const name = fs.readFileSync(__dirname + '/name.txt', 'utf8');
  document.body.innerHTML = `Hello, ${name}! Inlining via fs.readFileSync is working!`;
} catch (error) {
  document.body.innerHTML = `Oh no, inlining via fs.readFileSync is not working: ${error}`;
}
