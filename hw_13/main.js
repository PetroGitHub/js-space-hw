/* --- 01 --- */
//const head = document.querySelector('head');
//const darkTheme = `<link rel="stylesheet" href="dark-theme.css"/>`;
//head.insertAdjacentHTML('beforeEnd', darkTheme);

/* --- 02 --- */
//const themes = '<link rel="stylesheet" href="./themes.css"/>';
//head.insertAdjacentHTML('beforeEnd', themes);
//console.log(head);

/* --- 03 --- */
//! 3.1
const head = document.querySelector('head');
const objStyles = {};
function makeTheme(file) {
	if (objStyles[file]) {
		//const wrapper = document.querySelector('.wrapper');
		//const warning = document.createElement('div');
		//warning.classList.add('msg');
		//warning.textContent = `Файл  стилів ${file} вже було додано`;
		//wrapper.appendChild(warning);
		//! 7.4
		displayMessage(`'Файл  стилів ${file} вже було додано'`);
		return;
	}
	const styleTheme = `<link rel="stylesheet" href="${file}"/>`;

	head.insertAdjacentHTML('beforeEnd', styleTheme);
	objStyles[file] = true;
}
//! 3.3
makeTheme('dark-theme.css');
//! 3.4
makeTheme('themes.css');
//! 3.5
//makeTheme('themes.css');
//! 5.2
makeTheme('checkers.css');
//! 7.1
makeTheme('stylers.css');

/* --- 04 --- */
//! 4.1
const body = document.querySelector('body');
//body.classList.replace('theme-gold', 'theme-pink');
//! 4.2
//body.classList.replace('theme-pink', 'theme-dark');
body.classList.remove('theme-gold');
////! 4.3
const applyBodyClass = (bodyClass) => {
	body.classList.add(bodyClass);
};
////! 4.5
//applyBodyClass(`theme-gold`);
applyBodyClass(`theme-pink`);
//applyBodyClass(`theme-dark`);

/* --- 05 --- */
//! 5.1
const script = document.querySelector('[src="./main.js"]');
//const scriptElement = document.createElement('script');
//scriptElement.src = './checkers.js';
//script.before(scriptElement);

//! 5.3
//const scriptElement2 = document.createElement('script');
//scriptElement2.src = './new-scripts.js';
//script.after(scriptElement2);

//! 5.4
const objScript = {};

function addScript(scriptFile) {
	if (objScript[scriptFile]) {
		//const wrapper = document.querySelector('.wrapper');
		//const warning = document.createElement('div');
		//warning.classList.add('msg');
		//warning.textContent = `Файл  скриптів ${scriptFile} вже було додано`;
		//wrapper.appendChild(warning);
		//! 7.4
		displayMessage(`'Файл  скриптів ${scriptFile} було додано'`);
		return;
	}

	const scriptElement = document.createElement('script');
	scriptElement.src = scriptFile;
	if (scriptFile === './new-scripts.js') {
		script.after(scriptElement);
		objScript[scriptFile] = true;
	} else {
		script.before(scriptElement);
		objScript[scriptFile] = true;
	}
}
//! 5.6
addScript('./checkers.js');
//addScript('./checkers.js');
//! 7.2
addScript('./new-scripts.js');
addScript('./stylers.js');

console.log(body);

/* --- 06 ---
  Задача 06 виконується у файлі new-scripts.js 
*/

/* --- 07 --- */
//! 7.3
function displayMessage(message) {
	const wrapper = document.querySelector('.wrapper');
	const warning = document.createElement('div');
	warning.classList.add('msg');
	warning.textContent = `${message}`;
	wrapper.appendChild(warning);
}

/* --- 08 ---
  Задача 08 виконується у файлі new-scripts.js 
*/

/* --- 09 ---
  Задача 09 виконується у файлі new-scripts.js 
*/

/* --- 10 ---
  Задача 10 виконується у файлі new-scripts.js 
*/
