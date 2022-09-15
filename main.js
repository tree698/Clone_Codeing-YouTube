'use strict';

// header: substitle
const searchIcon = document.querySelector('.input__search');
const searchIconSubtitle = document.querySelector('.input__search__subtitle');
const microphoneIcon = document.querySelector('.input__microphone');
const microphoneIconSubtitle = document.querySelector(
  '.input__microphone__subtitle'
);
const recordingIcon = document.querySelector('.function__recording');
const recordingIconSubtitle = document.querySelector(
  '.function__recording__subtitle'
);
const bellIcon = document.querySelector('.function__bell');
const bellIconSubtitle = document.querySelector('.function__bell__subtitle');

displaySubtitle(searchIcon, searchIconSubtitle);
displaySubtitle(microphoneIcon, microphoneIconSubtitle);
displaySubtitle(recordingIcon, recordingIconSubtitle);
displaySubtitle(bellIcon, bellIconSubtitle);

removeSubtitle(searchIcon, searchIconSubtitle);
removeSubtitle(microphoneIcon, microphoneIconSubtitle);
removeSubtitle(recordingIcon, recordingIconSubtitle);
removeSubtitle(bellIcon, bellIconSubtitle);

function displaySubtitle(element, targetElement) {
  element.addEventListener('mouseover', () => {
    targetElement.style.display = 'block';
  });
}

function removeSubtitle(element, targetElement) {
  element.addEventListener('mouseleave', () => {
    targetElement.style.display = 'none';
  });
}

// header: sidebar
const headBars = document.querySelector('button.bars.head');
const sideBars = document.querySelector('button.bars.sideBar');
const logoSideBar = document.querySelector('.logo__sideBar');
const backgroundBlack = document.querySelector('.background-black');

headBars.addEventListener('click', () => {
  logoSideBar.style.left = '0px';

  headBars.classList.toggle('buttonBars__animation');
  setTimeout(() => {
    headBars.classList.toggle('buttonBars__animation');
  }, 1001);
  backgroundBlack.classList.toggle('hide');
});

sideBars.addEventListener('click', () => {
  logoSideBar.style.left = '-360px';
  sideBars.classList.toggle('buttonBars__animation');
  setTimeout(() => {
    sideBars.classList.toggle('buttonBars__animation');
  }, 1001);
  backgroundBlack.classList.toggle('hide');
});

// Section: Video => subtitle
const infoMiddleThumbsup = document.querySelector('.info__middle.thumbsup');
const infoMiddleThumbsdown = document.querySelector('.info__middle.thumbsdown');
const infoMiddleshare = document.querySelector('.info__middle.share');
const infoMiddleofflineSave = document.querySelector(
  '.info__middle.offline-save'
);
const infoMiddlesave = document.querySelector('.info__middle.save');

const thumbsupSubtitle = document.querySelector('.thumbsup__subtitle');
const thumbsdownSubtitle = document.querySelector('.thumbsdown__subtitle');
const shareSubtitle = document.querySelector('.share__subtitle');
const offlieSaveSubtitle = document.querySelector('.offline-save__subtitle');
const saveSubtitle = document.querySelector('.save__subtitle');

displaySubtitle(infoMiddleThumbsup, thumbsupSubtitle);
displaySubtitle(infoMiddleThumbsdown, thumbsdownSubtitle);
displaySubtitle(infoMiddleshare, shareSubtitle);
displaySubtitle(infoMiddleofflineSave, offlieSaveSubtitle);
displaySubtitle(infoMiddlesave, saveSubtitle);

removeSubtitle(infoMiddleThumbsup, thumbsupSubtitle);
removeSubtitle(infoMiddleThumbsdown, thumbsdownSubtitle);
removeSubtitle(infoMiddleshare, shareSubtitle);
removeSubtitle(infoMiddleofflineSave, offlieSaveSubtitle);
removeSubtitle(infoMiddlesave, saveSubtitle);

// Section: Video => ellipsis
const ellipsisBtn = document.querySelector('.ellipsisBtn');
const ellipsis = document.querySelector('.ellipsis');

ellipsisBtn.addEventListener('click', () => {
  ellipsis.classList.toggle('hide');
  ellipsisBtn.classList.toggle('ellipsisBtn__animation');

  setTimeout(() => {
    ellipsisBtn.classList.toggle('ellipsisBtn__animation');
  }, 1001);
});
