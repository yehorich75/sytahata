import {} from './external/jquery';
// Import only bootstrap packages you need
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/affix';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/alert';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/button';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/carousel';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/collapse';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/dropdown';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/modal';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/scrollspy';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/tooltip';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/tab';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/transition';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/popover';
// Or import everything
import {} from 'bootstrap-sass'; // eslint-disable-line import/imports-first
// import {
//     sayHello,
// } from './modules/utils';
// import AOS from '../../node_modules/aos/src/js/aos';

// sayHello();

// AOS.init();

function Scroll() {
  const topHeader = document.getElementById('header');
  const ypos = window.pageYOffset;
  if (ypos > 300) {
    topHeader.classList.add('header-toggle');
  } else {
    topHeader.classList.remove('header-toggle');
  }
}
window.addEventListener('scroll', Scroll);
