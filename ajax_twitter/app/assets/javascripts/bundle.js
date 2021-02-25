/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

const FollowToggle = function ($el) {
  
  this.$el = $el;
  this.userId = $el.data('user-id');
  this.followState = $el.data('initial-follow-state');

  const handleClick = () => {
    console.log('hello');
    // $.ajax({
    //   method: 'POST',
    //   url: `/user/${this.userId}/follow`,
    //   success: (response) =>{
    //   }
    // });
  };
};

FollowToggle.prototype.render = function(){
  
  if (this.followState){
    this.$el.html('Unfollow!');
  } else{
    this.$el.html('Follow!');
  }
};

module.exports = FollowToggle;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

// for iterate from 0 to $li.length
// cont $button = new FollowToggle($btn)
// followToggle.render();

$(() => {
  const $btm = $(".follow-toggle");
  for (let i = 0; i < $btm.length; i++) {
    const $followToggle = new FollowToggle($($btm[i]));
    $followToggle.render();
  }
  $('.follow-toggle').on('click', (e) => {
    const newToggle = new FollowToggle($(e.target));
    debugger
    e.preventDefault();
    debugger
    newToggle.handleClick();
  }
  );
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map