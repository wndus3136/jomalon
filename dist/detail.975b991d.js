// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/detail.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var searchOpen = document.getElementById('search_btn');
  var searchClose = document.getElementById('search_close');
  var searchBox = document.getElementById('search_ex');
  var header = document.getElementById('header');
  var menuBack = document.querySelectorAll('.menu');
  menuBack.forEach(function (back) {
    back.addEventListener('mouseover', function () {
      header.style.height = '140px';
    });
    back.addEventListener('mouseout', function () {
      header.style.height = '';
    });
  }); //header_height

  searchOpen.onclick = showSearch;
  searchClose.onclick = hiddenSearch;
  function showSearch() {
    searchBox.style.display = 'block';
    searchOpen.style.display = 'none';
  }
  function hiddenSearch() {
    searchBox.style.display = 'none';
    searchOpen.style.display = 'block';
  } //search_page

  /* content_swiper */
  var swiper = new Swiper(".newSwiper2", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true
  });
  var swiper2 = new Swiper(".newSwiper1", {
    /*   autoplay: {
        delay: 3000,
        disableOnInteraction: false // autoplay되었을때 클릭하면 멈춤 //해결방법
      }, */
    slidesOffsetBefore: 20,
    loop: true,
    spaceBetween: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
  }); //swiper

  var label = document.querySelector('.label');
  var options = document.querySelectorAll('.optionItem');
  label.addEventListener('click', function () {
    var optionList = label.parentNode.querySelector('.optionList');
    optionList.style.display = optionList.style.display === 'block' ? 'none' : 'block';
  });

  // 클릭한 옵션의 텍스트를 라벨 안에 넣음
  var handleSelect = function handleSelect(item) {
    label.parentNode.classList.remove('active');
    label.innerHTML = item.textContent;

    // 옵션 선택 후에 optionList를 닫음
    var optionList = label.parentNode.querySelector('.optionList');
    optionList.style.display = 'none';
  };

  // 옵션 클릭시 클릭한 옵션을 넘김
  options.forEach(function (option) {
    option.addEventListener('click', function () {
      return handleSelect(option);
    });
  });

  // 라벨을 클릭시 옵션 목록이 열림/닫힘
  label.addEventListener('click', function () {
    if (label.parentNode.classList.contains('active')) {
      label.parentNode.classList.remove('active');
    } else {
      label.parentNode.classList.add('active');
    }
  }); //label 

  var cartPop = document.querySelector('.cart_pop');
  var cartClose = document.querySelector('.cart_pop_close');
  var addCart = document.querySelector('.add_cart');
  var popBack = document.querySelector('.popup_back');
  addCart.addEventListener('click', function () {
    cartPop.style.right = '300px'; // 팝업 표시
    cartPop.style.transition = '0.4s';
    popBack.style.display = 'block';
  });
  cartClose.addEventListener('click', function () {
    cartPop.style.right = '-700px'; // 팝업 숨김
    popBack.style.display = 'none';
  });
  //cart_pop

  var increaseBtn = document.querySelector('.quantity_increase');
  var decreaseBtn = document.querySelector('.quantity_decrease');
  var quantityInput = document.querySelector('.quantity_input');
  var priceElement = document.querySelector('.price');
  increaseBtn.addEventListener('click', function () {
    var currentQuantity = parseInt(quantityInput.value);
    if (!isNaN(currentQuantity)) {
      quantityInput.value = currentQuantity + 1;
      updatePrice();
    }
  });
  decreaseBtn.addEventListener('click', function () {
    var currentQuantity = parseInt(quantityInput.value);
    if (!isNaN(currentQuantity) && currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
      updatePrice();
    }
  });
  function updatePrice() {
    var currentQuantity = parseInt(quantityInput.value);
    var unitPrice = 218000; // 단위 가격 설정
    var totalPrice = unitPrice * currentQuantity;
    priceElement.textContent = "\uFFE6 ".concat(totalPrice);
  }

  // 초기 가격 표시
  updatePrice();
  var noteBtn = document.querySelector('.note_btn');
  var ingredientBtn = document.querySelector('.ingredient_btn');
  var reviewBtn = document.querySelector('.review_btn');
  var noteBox = document.querySelector('.note');
  var ingredientBox = document.querySelector('.ingredient');
  var reviewBox = document.querySelector('.review_ex');

  /*   'is'라고 들어가면 isOpen 은 true 또는 flase값을 가지는 변수이다. */
  var isOpen = false; /* 상태변수 */

  noteBtn.addEventListener('click', function () {
    if (isOpen === false) {
      noteBox.style.display = 'block';
      noteBtn.textContent = '-';
      isOpen = true;
    } else {
      noteBox.style.display = 'none';
      noteBtn.textContent = '+';
      isOpen = false;
    }
  }); //note_btn

  ingredientBtn.addEventListener('click', function () {
    if (isOpen === false) {
      ingredientBox.style.display = 'block';
      ingredientBtn.textContent = '-';
      isOpen = true;
    } else {
      ingredientBox.style.display = 'none';
      ingredientBtn.textContent = '+';
      isOpen = false;
    }
  }); //ingredient_btn

  reviewBtn.addEventListener('click', function () {
    if (isOpen === false) {
      reviewBox.style.display = 'block';
      reviewBtn.textContent = '-';
      isOpen = true;
    } else {
      reviewBox.style.display = 'none';
      reviewBtn.textContent = '+';
      isOpen = false;
    }
  }); //review_btn

  /* 리뷰쓰기 */

  var reviewPop = document.querySelector('.review_write');
  var reviewClose = document.querySelector('#cancle');
  var reviewOpen = document.querySelector('.review_open');
  var reviewList = document.querySelector('.review_up ul');
  var nameInput = document.querySelector('.review_name input');
  var titleInput = document.querySelector('.review_tit input');
  var reviewTextarea = document.querySelector('.review_textarea');
  reviewOpen.addEventListener('click', function () {
    reviewPop.style.display = 'block';
  });
  reviewClose.addEventListener('click', function () {
    reviewPop.style.display = 'none';
  });
  document.querySelector('.review_textarea').addEventListener('keydown', function () {
    //리뷰 300자 초과 안되게 자동 자름
    var review = document.querySelector('.review_textarea');
    var lengthCheckEx = /^.{300,}$/;
    if (lengthCheckEx.test(review.value)) {
      //300자 초과 컷
      review.value = review.value.substr(0, 300);
    }
  });

  //저장 전송전 필드 체크 이벤트 리스너
  document.querySelector('#save').addEventListener('click', function (e) {
    // 닉네임 확인
    var nameValue = document.querySelector('.review_name input').value;
    if (!nameValue) {
      alert('닉네임을 입력해주세요.');
      return false;
    }

    // 제목 확인
    var titleValue = document.querySelector('.review_tit input').value;
    if (!titleValue) {
      alert('제목을 입력해주세요.');
      return false;
    }

    // 리뷰 내용 확인
    var reviewValue = document.querySelector('.review_textarea').value;
    if (!reviewValue) {
      alert('리뷰를 입력해주세요.');
      return false;
    }

    // 리뷰 등록 처리
    var review = {
      name: nameValue,
      title: titleValue,
      content: reviewValue
    };
    console.log('리뷰 등록:', review);
    reviewPop.style.display = 'none';
    var li = document.createElement('li');
    li.textContent = "\uB2C9\uB124\uC784: ".concat(review.name, ", \uC81C\uBAA9: ").concat(review.title, ", \uB0B4\uC6A9: ").concat(review.content);
    reviewList.appendChild(li);
    resetReviewForm(); //작성한 내용 초기화
  });
  //초기화
  function resetReviewForm() {
    nameInput.value = '';
    titleInput.value = '';
    reviewTextarea.value = '';
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $('.btn_top').fadeIn();
    } else {
      $('.btn_top').fadeOut();
    }
  });
  $('.btn_top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

  //btn_top_click_event

  /* page03 review_slider */
  var reviewSwiper = new Swiper(".review_slider", {
    loop: true,
    centeredSlides: true,
    loopedSlides: 2,
    slidesPerView: 5,
    spaceBetween: 16,
    width: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
    /*  autoplay: true */
  }); //swiper1

  /* contents05_swiper */
  var instarSwiper = new Swiper(".instar", {
    loop: true,
    centeredSlides: true,
    loopedSlides: 2,
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: true
  }); //swiper2

  var menuBtns = document.querySelectorAll(".footer_menu_btn");
  menuBtns.forEach(function (menuBtn) {
    var div = menuBtn.nextElementSibling;
    menuBtn.addEventListener("click", function () {
      div.style.display = div.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", function (event) {
      if (!menuBtn.contains(event.target) && !div.contains(event.target)) {
        div.style.display = "none";
      }
    });
  }); //footer_menu
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12064" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map