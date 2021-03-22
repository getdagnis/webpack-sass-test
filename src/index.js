import './style.scss';
import { homepage } from './containers';

document.querySelector('app').innerHTML = '<div class="app"></div>';
document.querySelector('.app').innerHTML = homepage;

var tabLinks = document.querySelectorAll('.app-contents__tab-link');

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    tabLinks.forEach((tablink) => {
      tablink.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});

var gridItems = document.querySelectorAll('.changes-form__grid-item');

gridItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('changes-form__grid-item')) {
      gridItems.forEach((gridItem) => {
        gridItem.classList.remove('active-grid-item');
      });
      e.target.classList.add('active-grid-item');
    } else {
      gridItems.forEach((gridItem) => {
        gridItem.classList.remove('active-grid-item');
      });
      e.target.parentElement.classList.add('active-grid-item');
    }
  });
});
