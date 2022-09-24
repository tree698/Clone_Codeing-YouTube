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
    targetElement.style.opacity = '0.6';
  });
}

function removeSubtitle(element, targetElement) {
  element.addEventListener('mouseleave', () => {
    targetElement.style.opacity = '0';
  });
}

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
const titleSubscribeRed = document.querySelector('.title__subscribe-red');
const titleSubscribeGrey = document.querySelector('.title__subscribe-grey');
const bellMain = document.querySelector('.bell__main');

titleSubscribeRed.addEventListener('click', () => {
  titleSubscribeRed.classList.add('hide');
  titleSubscribeGrey.classList.remove('hide');
  bellMain.classList.toggle('hide');
});

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

// Section: RelatedVideos => more vidoes
const relatedVideosMoreBtn = document.querySelector(
  '.relatedVideos__more__button'
);
const relatedVideosMore = document.querySelector('.relatedVideos__more');

relatedVideosMoreBtn.addEventListener('click', () => {
  const result = relatedVideosMore.classList.toggle('hide');
  result
    ? showText(relatedVideosMoreBtn, '더보기')
    : showText(relatedVideosMoreBtn, '간략히');
});

function showText(element, text) {
  element.textContent = text;
}

// Section: Comments => arrange (정렬 기준)
const buttonArrangeShow = document.querySelector('.button__arrange__show');
const buttonArrangeSubstitle = document.querySelector(
  '.button__arrange__subtitle'
);

buttonArrangeShow.addEventListener('click', () => {
  buttonArrangeSubstitle.classList.toggle('hide');
});

// Section: Comments => input (댓글 추가)
const textInput = document.querySelector('.text__input');
const textInputSubBanner = document.querySelector('.text__input__sub-banner');
const commentsCancel = document.querySelector('.comments__cancel');
const commentsSubmit = document.querySelector('.comments__submit');

textInput.addEventListener('click', () => {
  textInputSubBanner.classList.toggle('hide');
});

textInput.addEventListener('input', () => {
  commentsSubmit.style.color = 'var(--color-white)';
  commentsSubmit.style.backgroundColor = 'var(--color-blue)';
});

commentsCancel.addEventListener('click', () => {
  textInput.value = '';
  textInputSubBanner.classList.toggle('hide');

  commentsSubmit.style.color = 'var(--font-color-sub)';
  commentsSubmit.style.backgroundColor = '#ececec';
});

// Section: Comments => show detail
const showDetailBtn = document.querySelector('.show__details');
const overFourLine = document.querySelector('.content.overFourLine');

showDetailBtn.addEventListener('click', () => {
  const result = overFourLine.classList.toggle('detail');
  showDetailBtn.textContent = '';
  showDetailBtn.textContent = `${result ? '간략히' : '자세히 보기'}`;
});

// Section: Comments => 답글
document.addEventListener('click', (e) => {
  const targetName = e.target.dataset.name;
  const targetId = e.target.dataset.id;

  if (targetName !== 'response') {
    return;
  }

  const result = document.querySelector(
    `.response__input[data-id="${targetId}"]`
  );
  result.classList.toggle('hide');
});

document.addEventListener('input', (e) => {
  const targetName = e.target.dataset.name;
  const targetId = e.target.dataset.id;

  if (targetName !== 'input-text') {
    return;
  }
  const result = document.querySelector(
    `.response__submit[data-id="${targetId}"]`
  );

  result.style.color = 'var(--color-white)';
  result.style.backgroundColor = 'var(--color-blue)';
});

document.addEventListener('click', (e) => {
  const targetName = e.target.dataset.name;
  const targetId = e.target.dataset.id;

  if (targetName !== 'cancel') {
    return;
  }
  const responseInputText = document.querySelector(
    `.response__input-text[data-id="${targetId}"]`
  );
  const responseInput = document.querySelector(
    `.response__input[data-id="${targetId}"]`
  );
  const responseSubmit = document.querySelector(
    `.response__submit[data-id="${targetId}"]`
  );

  responseInputText.value = '';
  responseInput.classList.toggle('hide');

  responseSubmit.style.color = 'var(--font-color-sub)';
  responseSubmit.style.backgroundColor = '#ececec';
});

// Section: Comments => reply (답답글)
const replyWrap = document.querySelector('.reply__wrap');
const replyComments = document.querySelector('.reply__comments');
const caretDownIcon = document.querySelector('.fa-solid.fa-caret-down');

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

// aside: logo__sidebar
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
('');

// aside: cancel subscribe
const cancelSubscribeBtn = document.querySelector('.cancelSubscribe');
const bannerCancelBtn = document.querySelector('.banner__cancel');
const subscribeCancelBtn = document.querySelector('.subscribe__cencel');

titleSubscribeGrey.addEventListener('click', () => {
  cancelSubscribeBtn.classList.toggle('hide');
  backgroundBlack.classList.toggle('hide');
});

bannerCancelBtn.addEventListener('click', () => {
  cancelSubscribeBtn.classList.toggle('hide');
  backgroundBlack.classList.toggle('hide');
});

subscribeCancelBtn.addEventListener('click', () => {
  cancelSubscribeBtn.classList.toggle('hide');
  titleSubscribeRed.classList.remove('hide');
  titleSubscribeGrey.classList.add('hide');
  backgroundBlack.classList.toggle('hide');
  bellMain.classList.add('hide');
});
