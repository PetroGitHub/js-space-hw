'use strict';
const colorsArray = [
	'#090979',
	'#0a087a',
	'#0c087b',
	'#0e087d',
	'#10087e',
	'#12087f',
	'#140881',
	'#150882',
	'#170883',
	'#190885',
	'#1b0886',
	'#1d0887',
	'#1f0889',
	'#21088a',
	'#22088b',
	'#24088d',
	'#26088e',
	'#28088f',
	'#2a0891',
	'#2c0892',
	'#2e0893',
	'#300895',
	'#310896',
	'#330897',
	'#350899',
	'#37089a',
	'#39089b',
	'#3b089d',
	'#3d089e',
	'#3f089f',
	'#4108a1',
	'#4208a2',
	'#4408a3',
	'#4608a5',
	'#4808a6',
	'#4a08a7',
	'#4c08a9',
	'#4e08aa',
	'#5008ab',
	'#5208ad',
	'#5308ae',
	'#5508af',
	'#5708b1',
	'#5908b2',
	'#5b08b3',
	'#5d08b5',
	'#5f08b6',
	'#6108b7',
	'#6308b9',
	'#6408ba',
	'#6608bb',
	'#6808bd',
	'#6a08be',
	'#6c08bf',
	'#6e08c1',
	'#7008c2',
	'#7208c3',
	'#7408c5',
	'#7508c6',
	'#7708c7',
	'#7908c9',
	'#7b08ca',
	'#7d08cb',
	'#7f08cd',
	'#8108ce',
	'#8308cf',
	'#8508d1',
	'#8608d2',
	'#8808d3',
	'#8a08d5',
	'#8c08d6',
	'#8e08d7',
	'#9008d9',
	'#9208da',
	'#9408db',
	'#9608dd',
	'#9708de',
	'#9908df',
	'#9b08e1',
	'#9d08e2',
	'#9f08e3',
	'#a108e5',
	'#a308e6',
	'#a508e7',
	'#a708e9',
	'#a908ea',
	'#ab08eb',
	'#ac08ed',
	'#ae08ee',
	'#b008ef',
	'#b208f1',
	'#b408f2',
	'#b608f3',
	'#b808f5',
	'#ba08f6',
	'#bc08f7',
	'#be08f9',
	'#bf08fa',
	'#c108fb',
	'#c308fd',
	'#c508fe',
	'#c708ff',
];

//* task # 1
let clickCounter = 0;
let scoreCounter = 0;

const wrapperEL = document.querySelector('.wrapper');
wrapperEL.insertAdjacentHTML('afterbegin', '<div class="grid"></div>');
const gridEl = document.querySelector('.grid');
for (let i = 0; i < 100; i++) {
	gridEl.insertAdjacentHTML('beforeend', `<div class="cell">${i + 1}</div>`);
}
gridEl.classList.add('start');

//* task # 2

wrapperEL.insertAdjacentHTML(
	'afterbegin',
	`
<div class="top">
	<button class="btn btn-start btn-blue" title="Перемішати"></button>
</div>`
);

const creatElementOnPage = (tagName, ClassNames, content = '') => {
	const newElement = document.createElement(tagName);
	newElement.className = ClassNames;
	newElement.textContent = content;
	return newElement;
};
const clickCounterEl = creatElementOnPage('div', 'counter click-counter', '0');
const scoreCounterEl = creatElementOnPage('div', 'counter score-counter', '0');
const btnPlayEl = creatElementOnPage('button', 'btn btn-replay btn-violet', '');

//* task # 3

const allGridCellsEl = gridEl.getElementsByClassName('cell');

const getShuffledNumbers = (elementList) => {
	const cellsValuesArray = [...elementList].map((cell) => cell.textContent);
	return cellsValuesArray.sort(() => Math.random() - 0.5);
};
const shuffledCellsArray = getShuffledNumbers(allGridCellsEl);

//* task # 4
const headTitleEl = document.querySelector('title');
const topEl = wrapperEL.querySelector('.top');

const handleStartBtnClick = () => {
	headTitleEl.textContent = 'Гра почалась';
	const shuffledCellsArray = getShuffledNumbers(allGridCellsEl);
	[...allGridCellsEl].forEach(
		(cell, index) => (cell.textContent = shuffledCellsArray[index])
	);
	gridEl.classList.remove('start');
	document.querySelector('.btn-start').classList.add('btn-disabled');
	topEl.insertAdjacentElement('beforeend', clickCounterEl);
	topEl.insertAdjacentElement('beforeend', scoreCounterEl);
	topEl.insertAdjacentElement('beforeend', btnPlayEl);
};

//* task # 5

//* task # 6

const handleCellClick = (cellItem) => {
	const buttonIndex = [...allGridCellsEl].findIndex(
		(cell) => cell === cellItem
	);
	if (!cellItem.classList.contains('clicked')) {
		cellItem.classList.add('clicked');
		cellItem.style.backgroundColor = colorsArray[buttonIndex];
		clickCounter = clickCounter + 1;
		scoreCounter = scoreCounter + +cellItem.textContent;
		clickCounterEl.textContent = clickCounter;
		scoreCounterEl.textContent = scoreCounter;
	}
	const FINAL_RESULT = 1000;
	if (scoreCounter === FINAL_RESULT) {
		gridEl.classList.add('win');
		headTitleEl.textContent = 'Виграш!!!';
		getFinalGameResult();
	} else if (scoreCounter > FINAL_RESULT) {
		gridEl.classList.add('loss');
		headTitleEl.textContent = 'Невдача';
		getFinalGameResult();
	}
};

//* task # 7

const handleGameProgressResset = () => {
	headTitleEl.textContent = 'Гра почалася';
	gridEl.className = 'grid';
	clickCounter = 0;
	scoreCounter = 0;
	clickCounterEl.textContent = 0;
	scoreCounterEl.textContent = 0;
	[...allGridCellsEl].forEach((cell) => {
		cell.classList.remove('clicked');
		cell.style = '';
	});
	const shuffledCellsArray = getShuffledNumbers(allGridCellsEl);
	[...allGridCellsEl].forEach(
		(cell, index) => (cell.textContent = shuffledCellsArray[index])
	);
};

wrapperEL.addEventListener('click', (e) => {
	const targetBtn = e.target;
	if (targetBtn.classList.contains('btn-start')) {
		handleStartBtnClick();
	}
	if (targetBtn.classList.contains('cell')) {
		handleCellClick(targetBtn);
	}
	if (targetBtn.classList.contains('btn-replay')) {
		handleGameProgressResset();
	}
});

//! HW # 15---------------------------------------------

//* task # 1

const getFinalGameResult = () => {
	const finalGameResult = {
		clicks: clickCounter,
		score: scoreCounter,
	};
	return finalGameResult;
};
