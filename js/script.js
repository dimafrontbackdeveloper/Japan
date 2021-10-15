// Смена шапки start
const headerTop = document.querySelector('.header__top');
(function () {
  addEventListener('scroll', () => {
    if (pageYOffset >= 100) {
      headerTop.classList.add('header__top--active');
    } else {
      headerTop.classList.remove('header__top--active');
    }
  });
})();
// Смена шапки end

// Бургер start
const burgerLines = document.querySelector('.burger__lines'),
  body = document.body;

burgerLines.addEventListener('click', () => {
  burgerLines.classList.toggle('burger__lines--active');
  body.classList.toggle('body--active');

  const headerNavigation = document.querySelector('.header__navigation');
  headerNavigation.classList.toggle('header__navigation--active');

  const headerNavigationItem = document.querySelectorAll('.header__navigation-item');
  for (item of headerNavigationItem) {
    item.addEventListener('click', () => {
      burgerLines.classList.remove('burger__lines--active');
      headerNavigation.classList.remove('header__navigation--active');
      body.classList.remove('body--active');
    });
  }
});
// Бургер end

// Плавное появление контента start
window.onscroll = () => {
  const animationBlocks = document.querySelectorAll('.animation-block');

  for (animationBlock of animationBlocks) {
    const elemBoundingClientRect =
      animationBlock.getBoundingClientRect().top - document.documentElement.clientHeight + 100;
    if (elemBoundingClientRect <= 0) {
      animationBlock.classList.add('animation-block--active');
    }
  }
};
// Плавное появление контента end
