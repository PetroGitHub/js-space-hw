/* --- 06 --- */
////! 6.1
//const buttons = document.querySelectorAll('button.checker');
//const button1 = buttons[0];
//button1.classList.add('active');
////! 6.3
//const button2 = buttons[1];
//button2.classList.add('active');

//! 6.4-6
//function addClassActiveForTheme(checkerActive) {
//	//document.body.classList.add(checkerActive);
//	const buttons = document.querySelectorAll('button.checker.' + checkerActive);
//	buttons.forEach((button) => {
//		button.classList.remove('active');
//		if (button.classList.contains(checkerActive)) {
//			button.classList.add('active');
//		}
//	});
//}
////addClassActiveForTheme('theme-gold');
////addClassActiveForTheme('theme-pink');
//addClassActiveForTheme('theme-gold');
/* --- 08 --- */
//!8.1
//document.body.classList.add('styler-80');
//document.body.classList.remove('styler-80');
//! 8.2
//document.body.classList.add('styler-90');
//document.body.classList.add('styler-00');
//! 8.3
//function applyBodyBackground(bodyBackground) {
//	body.classList.add(bodyBackground);
//}
////! 8.4
////applyBodyBackground('styler-80');
////applyBodyBackground('styler-90');
//applyBodyBackground('styler-00');

/* --- 09 --- */
//! 9.1
function applyBodyBackgroundAndStyles(bodyBackground, bodyTheme) {
	return body.classList.add(bodyBackground, bodyTheme);
}
applyBodyBackgroundAndStyles('styler-80', 'theme-dark');

/* --- 10 --- */
//! 10.1
//function addClassActiveForBackground(stylerActive) {
//	document.body.classList.add(stylerActive);
//	const btns = document.querySelectorAll('button.styler.' + stylerActive);
//	btns.forEach((btn) => {
//		btn.classList.remove('active');
//		if (btn.classList.contains(stylerActive)) {
//			btn.classList.add('active');
//		}
//	});
//}
////////! 10.3
//addClassActiveForBackground('styler-00');

//! 10.4
function addActiveForCheckerAndStyler(checker, styler) {
	body.classList.add(checker, styler);
	const checkerbtns = document.querySelectorAll('button.checker.' + checker);
	const stylerbtns = document.querySelectorAll('button.styler.' + styler);
	checkerbtns.forEach((checkerbtn) => {
		checkerbtn.classList.remove('active');
		if (checkerbtn.classList.contains(checker)) {
			checkerbtn.classList.add('active');
		}
	});
	stylerbtns.forEach((stylerbtn) => {
		stylerbtn.classList.remove('active');
		if (stylerbtn.classList.contains(styler)) {
			stylerbtn.classList.add('active');
		}
	});
}
addActiveForCheckerAndStyler('theme-dark', 'styler-80');
