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

// Section: Channel => button: more info
const description = document.querySelector('.description');
const moreInfoBtn = document.querySelector('.more__info');

moreInfoBtn.addEventListener('click', () => {
  const result = description.classList.toggle('description');
  moreInfoBtn.textContent = '';
  moreInfoBtn.textContent = `${result ? '더보기' : '간략히'}`;
});

// Section: Channel => subscribe
const titleSubscribe = document.querySelector('.title__subscribe');
const bellMain = document.querySelector('.bell__main');

titleSubscribe.addEventListener('click', () => {
  const result = titleSubscribe.classList.toggle('change');
  result
    ? changeColorAndText(titleSubscribe, '#cc0103', 'white', '구독')
    : changeColorAndText(titleSubscribe, '#ececec', '#606060', '구독중');
  bellMain.classList.toggle('hide');
});

function changeColorAndText(element, background, font, text) {
  element.style.backgroundColor = background;
  element.style.color = font;
  element.textContent = text;
}

// Section: Channel => bell
const bellMainIcon = document.querySelector('.bell__main i');
const bells = document.querySelector('.bells');

bellMain.addEventListener('click', (event) => {
  bells.classList.toggle('hide');
});

bells.addEventListener('click', (event) => {
  bellMainIcon.classList.remove('fa-regular');
  bellMainIcon.classList.remove('fa-bell');
  bellMainIcon.classList.remove('fa-solid');
  bellMainIcon.classList.remove('fa-bell-slash');

  const target = event.target.dataset.name;
  switch (target) {
    case 'all':
      changeClassName(bellMainIcon, 'fa-solid');
      changeClassName(bellMainIcon, 'fa-bell');
      break;
    case 'set':
      changeClassName(bellMainIcon, 'fa-regular');
      changeClassName(bellMainIcon, 'fa-bell');
      break;
    case 'none':
      changeClassName(bellMainIcon, 'fa-regular');
      changeClassName(bellMainIcon, 'fa-bell-slash');
      break;
    default:
  }

  bells.classList.toggle('hide');
});

function changeClassName(element, className) {
  element.classList.remove();
  element.classList.add(className);
}

// Section: RelatedVideo
const filterVideos = document.querySelector('.filter__videos');
const filterClassName = [
  '.filter__all',
  '.filter__relatedcontents',
  '.filter__nbcProvide',
  '.filter__recentUpload',
  '.filter__alreadySeen',
];

const filterElementList = makeElementList(filterClassName);

filterVideos.addEventListener('click', (event) => {
  const target = event.target.dataset.id;
  if (target == null) {
    return;
  }
  filterElementList.map((e) => {
    if (e.dataset.id === target) {
      e.classList.add('checked');
    } else {
      e.classList.remove('checked');
    }
  });
});

function makeElementList(list) {
  const result = [];
  list.forEach((r) => result.push(document.querySelector(r)));
  return result;
}

// Section: Comments
const buttonArrangeShow = document.querySelector('.button__arrange__show');
const buttonArrangeSubstitle = document.querySelector(
  '.button__arrange__subtitle'
);
const replyWrap = document.querySelector('.reply__wrap');
const replyComments = document.querySelector('.reply__comments');
const caretDownIcon = document.querySelector('.fa-solid.fa-caret-down');

buttonArrangeShow.addEventListener('click', () => {
  buttonArrangeSubstitle.classList.toggle('hide');
});

replyWrap.addEventListener('click', () => {
  const result = replyComments.classList.toggle('hide');
  if (result) {
    caretDownIcon.classList.remove('fa-caret-up');
    caretDownIcon.classList.add('fa-caret-down');
  } else {
    caretDownIcon.classList.remove('fa-caret-down');
    caretDownIcon.classList.add('fa-caret-up');
  }
});
