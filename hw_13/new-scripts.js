/* --- 06 --- */
////! 6.1
//const buttons = document.querySelectorAll('button.checker');
//const button1 = buttons[0];
//button1.classList.add('active');
////! 6.3
//const button2 = buttons[1];
//button2.classList.add('active');

//! 6.4-6
function addClassActive(classActive) {
	document.body.classList.add(classActive);
	const buttons = document.querySelectorAll('button.checker.' + classActive);
	buttons.forEach((button) => {
		button.classList.remove('active');
		if (button.classList.contains(classActive)) {
			button.classList.add('active');
		}
	});
}
//addClassActive('theme-gold');
addClassActive('theme-pink');
//addClassActive('theme-dark');

/* --- 08 --- */
//!8.1
//document.body.classList.add('styler-80');
//document.body.classList.remove('styler-80');
//! 8.2
//document.body.classList.add('styler-90');
//document.body.classList.add('styler-00');
//! 8.3
const applyBodyBackground = (bodyBackground) => {
	body.classList.add(bodyBackground);
};
//! 8.4
applyBodyBackground('styler-80');
applyBodyBackground('styler-90');
//applyBodyBackground('styler-00');
/* --- 09 --- */

/* --- 10 --- */
