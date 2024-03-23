/* --- 01 --- */
//const head = document.querySelector('head');
//const darkTheme = `<link rel="stylesheet" href="dark-theme.css"/>`;
//head.insertAdjacentHTML('beforeEnd', darkTheme);

/* --- 02 --- */
//const themes = '<link rel="stylesheet" href="./themes.css"/>';
//head.insertAdjacentHTML('beforeEnd', themes);
//console.log(head);

/* --- 03 --- */
const head = document.querySelector('head');
const objStyles = {};

function makeTheme(file) {
	if (objStyles[file]) {
		const wrapper = document.querySelector('.wrapper');
		const warning = document.createElement('div');
		warning.classList.add('msg');
		warning.textContent = `Файл  стилів ${file} вже було додано`;
		wrapper.appendChild(warning);
	}
	const styleTheme = `<link rel="stylesheet" href="${file}"/>`;
	head.insertAdjacentHTML('beforeEnd', styleTheme);
	objStyles[file] = true;
}
makeTheme('dark-theme.css');
//makeTheme('dark-theme.css');
makeTheme('themes.css');

/* --- 04 --- */

/* --- 05 --- */

/* --- 06 ---
  Задача 06 виконується у файлі new-scripts.js 
*/

/* --- 07 --- */

/* --- 08 ---
  Задача 08 виконується у файлі new-scripts.js 
*/

/* --- 09 ---
  Задача 09 виконується у файлі new-scripts.js 
*/

/* --- 10 ---
  Задача 10 виконується у файлі new-scripts.js 
*/
