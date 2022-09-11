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
const logoSideBar = document.querySelector('.logo__sideBar');
const bars = document.querySelector('.bars');
const barsSideBar = document.querySelector('.bars.sideBar');
const header = document.querySelector('.header');
const contents = document.querySelector('.contents');

bars.addEventListener('click', () => {
  logoSideBar.classList.remove('hide');
  header.style.opacity = '0.7';
  contents.style.opacity = '0.7';
});

barsSideBar.addEventListener('click', () => {
  logoSideBar.classList.add('hide');
  header.style.opacity = '1';
  contents.style.opacity = '1';
});
