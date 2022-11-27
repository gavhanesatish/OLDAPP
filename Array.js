
const language = ['java'];
console.log(language);
language.push('python');
console.log(language);
language.unshift('c');
console.log(language);
language[3] = 'css';
console.log(language);
language.pop();
console.log(language);
console.log(Array.isArray(language));
console.log(language.indexOf('python'));