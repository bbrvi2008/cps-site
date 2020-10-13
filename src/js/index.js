import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

import 'swiper/swiper-bundle.css';
import 'normalize.css';
import '../scss/style.scss';

let Page = {
  lock: function() {
    document.querySelector('body').classList.add('page-locked');
  },
  unlock: function() {
    document.querySelector('body').classList.remove('page-locked');
  }
};

let initComponents = function(componentSelector, initializer) {
  let components = document.querySelectorAll(componentSelector);
  Array.from(components).forEach(component => {
    initializer(component);
  });
}

let initPopup = function(btnOpen) {
  let popupId = btnOpen.dataset.popupTarget;
  if(!popupId) return;
  
  let popup = document.getElementById(popupId);
  if(!popup) return;

  let btnClose = popup.querySelector('.popup-btn-close');

  popup.addEventListener('click', function(e) {
    let target = e.target;
    if(popup.id === target.id) {
      Page.unlock();
      popup.removeAttribute("active");
    }
  });

  btnOpen.addEventListener('click', function(e) {
    e.preventDefault();
    Page.lock();
    popup.setAttribute("active", "");
  });

  if(!btnClose) return;
  btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    Page.unlock();
    popup.removeAttribute("active");
  });
}

let initGridShowAll = function(btnShowAll) {
  let containerId = btnShowAll.dataset.hiddenTarget;
  if(!containerId) return;
  
  let container = document.getElementById(containerId);
  if(!container) return;
  
  let grid = container.querySelector('.grid');
  if(!grid) return;

  let toggleClass = Array.from(grid.classList).filter(className => {
    return className.startsWith("grid--hide-overflow");
  })[0];

  btnShowAll.addEventListener('click', function(e) {
    e.preventDefault();
    grid.classList.remove(toggleClass);
    btnShowAll.hidden = true;
  });
}

let initButtonShowMore = function(btnShowMore) {
  let targetBlockId = btnShowMore.dataset.showTarget;
  if(!targetBlockId) return;
  let targetBlock = document.getElementById(targetBlockId);
  if(!targetBlock) return;

  btnShowMore.addEventListener('click', function(e) {
    e.preventDefault();
    targetBlock.hidden = false;
    btnShowMore.hidden = true;
  });
}

let initSliders = function(containerSelector) {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
}

let addSlideMenuItemClickHandler = function(menuItem, menu) {
  menuItem.addEventListener('click', function() {
    menu
      .querySelector('.slide-menu__item[active]')
      .removeAttribute('active');

    menuItem.setAttribute('active', '');
  });
}

let initSlideMenu = function(menu) {
  initComponents('.slide-menu__item', function(menuItem) {
    addSlideMenuItemClickHandler(menuItem, menu);
  });
}

initComponents('.popup-btn-open', initPopup);
initComponents('.grid-btn-show-all', initGridShowAll);
initComponents('.btn-show-more', initButtonShowMore);
initComponents('.slide-menu', initSlideMenu);

if(window.innerWidth < 768) {
  initSliders();
}