/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collapse.js
class Collapse {
  constructor(container) {
    this.container = container;
  }
  startAnim() {
    this.btn = this.container.querySelector('.btn');
    this.wrap = this.container.querySelector('.wrapper');
    this.btn.addEventListener('click', e => {
      e.preventDefault();
      if (!this.wrap.classList.contains('active')) {
        this.wrap.classList.add('active');
        this.wrap.style.maxHeight = `${this.wrap.scrollHeight}px`;
      } else {
        this.wrap.classList.remove('active');
        this.wrap.style.maxHeight = '';
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const anim = new Collapse(document.body);
anim.startAnim();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;