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
const HeadEl = document.querySelector('head');
const wrapperEl = document.querySelector('.wrapper');
console.log(HeadEl);
console.log(wrapperEl);
const gridEl = document.createElement('div');

wrapperEl.insertAdjacentElement('afterbegin', gridEl);

for (let i = 100; i > 0; i--) {
	const cellEl = document.createElement('div');
	cellEl.textContent = i;
	gridEl.insertAdjacentElement('afterbegin', cellEl);
	cellEl.classList.add('cell');
}

//* task # 2
//! 2.1
const topEl = document.createElement('div');
const startBtn = document.createElement('button');
startBtn.setAttribute('title', 'Перемішати');
//! 2.2
const clickCounter = document.createElement('div');
const scoreCounter = document.createElement('div');
const replayBtn = document.createElement('button');
clickCounter.textContent = '0';
scoreCounter.textContent = '0';
function addElementIntoWrapper(commonEl, insertedEl, position = 'afterbegin') {
	commonEl.insertAdjacentElement(position, insertedEl);
}
addElementIntoWrapper(wrapperEl, gridEl);
addElementIntoWrapper(wrapperEl, topEl);
addElementIntoWrapper(topEl, startBtn);
addElementIntoWrapper(topEl, clickCounter, 'beforeend');
addElementIntoWrapper(topEl, scoreCounter, 'beforeend');
addElementIntoWrapper(topEl, replayBtn, 'beforeend');

function addClassToElements(elementName, className) {
	elementName.className = className;
}
addClassToElements(gridEl, 'grid start');
addClassToElements(topEl, 'top');
addClassToElements(startBtn, 'btn btn-start btn-blue ');
addClassToElements(clickCounter, 'counter click-counter');
addClassToElements(scoreCounter, 'counter score-counter');
addClassToElements(replayBtn, 'btn btn-replay btn-violet;');

//* task # 3
function randomMixCells() {
	let cellArray = [...gridEl.children];
	cellArray.sort(() => Math.random() - 0.5);
	cellArray.forEach((cell) => gridEl.prepend(cell));
}
//! 3.2

//* task # 4
function handlePlayGame() {
	HeadEl.querySelector('title').textContent = 'Гра почалась';
	randomMixCells();
	gridEl.classList.remove('start');
	startBtn.classList.add('btn-disabled');
}
//! 4.1
//handlePlayGame();

//* task # 5
wrapperEl.addEventListener('click', (e) => {
	const targetBtn = e.target;
	if (targetBtn.classList.contains('btn-start')) {
		handlePlayGame();
	}
});
