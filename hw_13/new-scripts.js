/* --- 06 --- */
////! 6.1
//const buttons = document.querySelectorAll('button.checker');
//const button1 = buttons[0];
//button1.classList.add('active');
////! 6.3
//const button2 = buttons[1];
//button2.classList.add('active');

//! 6.4-6
function addClassActiveForTheme(checkerActive) {
	//body.classList.add(checkerActive);
	const buttons = document.querySelectorAll('button.' + checkerActive);
	buttons.forEach((button) => {
		//button.classList.remove('active');
		if (button.classList.contains(checkerActive)) {
			button.classList.add('active');
		}
	});
}
addClassActiveForTheme('theme-gold');
addClassActiveForTheme('theme-pink');
addClassActiveForTheme('theme-dark');
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
//! 8.4
//applyBodyBackground('styler-80');
//applyBodyBackground('styler-90');
//applyBodyBackground('styler-90');

/* --- 09 --- */
//! 9.1
//function applyBodyBackgroundAndStyles(bodyBackground, bodyTheme) {
//	document.body.classList.add(bodyBackground, bodyTheme);
//}
//applyBodyBackgroundAndStyles('styler-80', 'theme-pink');

/* --- 10 --- */
//! 10.1
//function addClassActiveForBackground(stylerActive) {
//	//body.classList.add(stylerActive);
//	const btns = document.querySelectorAll('button.' + stylerActive);
//	btns.forEach(function (btn) {
//		btn.classList.remove('active');
//		if (btn.classList.contains(stylerActive)) {
//			btn.classList.add('active');
//		}
//	});
//}
//////////! 10.3
//addClassActiveForBackground('styler-80');

//! 10.4
function addActiveForCheckerAndStyler(checker, styler) {
	body.classList.add(styler, checker);
	const checkerbtns = document.querySelectorAll('button.checker.' + checker);

	checkerbtns.forEach(function (checkerbtn) {
		checkerbtn.classList.remove('active');
		if (checkerbtn.classList.contains(checker)) {
			checkerbtn.classList.add('active');
		}
	});
	const stylerbtns = document.querySelectorAll('button.' + styler);

	stylerbtns.forEach((stylerbtn) => {
		console.log(stylerbtns);
		stylerbtn.classList.remove('active');
		if (stylerbtn.classList.contains(styler)) {
			stylerbtn.classList.add('active');
		}
	});
}
addActiveForCheckerAndStyler('theme-dark', 'styler-00');
