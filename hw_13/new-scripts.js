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
	//documents.button.classList.remove('active');

	buttons.forEach((button) => {
		button.classList.remove('active');
		if (button.classList.contains(classActive)) {
			button.classList.add('active');
		}
	});
}
//addClassActive('theme-gold');
addClassActive('theme-pink');
//*

/* --- 08 --- */

/* --- 09 --- */

/* --- 10 --- */
