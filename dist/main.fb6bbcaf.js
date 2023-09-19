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
})({"js/main.js":[function(require,module,exports) {
/* $(function () {
  $('#rolling_banner').load('../rolling_banner/rolling_banner.html')
}) */

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

  /* contents_swiper */
  var swiper = new Swiper(".newSwiper2", {
    loop: true,
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  });
  var swiper2 = new Swiper(".newSwiper1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false // autoplay되었을때 클릭하면 멈춤 //해결방법
    },

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

  var page1 = document.querySelector('.page1');
  var page2 = document.querySelector('.page2');
  var page3 = document.querySelector('.page3');
  var page4 = document.querySelector('.page4');
  var page1Back = document.querySelector('.page1 .contents02_back');
  var pageImgs = document.querySelectorAll('.page_img');
  var contents02 = document.querySelector('.contents02');

  // 기본 이미지 (page_img1)를 표시하는 함수
  function showDefaultImage() {
    pageImgs.forEach(function (img) {
      img.style.display = 'none';
    });
    pageImgs[0].style.display = 'block';
  }

  // 해당 페이지에 마우스 진입 시 해당 이미지를 표시하는 함수
  function showImageOnPage(page, index) {
    page.addEventListener('mouseover', function () {
      pageImgs.forEach(function (img) {
        img.style.display = 'none';
      });
      pageImgs[index].style.display = 'block';
    });
  }

  // 모든 페이지에서 마우스 진입 시 기본 이미지를 표시합니다.
  page1.addEventListener('mouseover', function () {
    page1Back.style.display = 'none';
  });
  page2.addEventListener('mouseover', function () {
    page1Back.style.display = 'block';
  });
  page3.addEventListener('mouseover', function () {
    page1Back.style.display = 'block';
  });
  page4.addEventListener('mouseover', function () {
    page1Back.style.display = 'block';
  });

  // 모든 페이지에서 마우스가 나갈 때 page1 이미지를 유지합니다.
  contents02.addEventListener('mouseout', function () {
    pageImgs.forEach(function (img, index) {
      if (index === 0) {
        img.style.display = 'block';
        page1Back.style.display = 'block';
      } else {
        img.style.display = 'none';
        page1Back.style.display = 'none';
      }
    });
  });

  // 각 페이지에 대해 마우스 진입 시 해당 이미지를 표시합니다.
  showImageOnPage(contents02.querySelector('.page1'), 0);
  showImageOnPage(contents02.querySelector('.page2'), 1);
  showImageOnPage(contents02.querySelector('.page3'), 2);
  showImageOnPage(contents02.querySelector('.page4'), 3);

  //contens02

  /* contents05_swiper */
  var instarSwiper = new Swiper(".instar", {
    /* centeredSlides: true, */
    loop: true,
    loopedSlides: 5,
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
  //swiper2

  /************************************************** */
  function togglePop(snsPop) {
    $(snsPop).toggle();
  }
  var instarSlides = document.querySelectorAll('.instar_slide');
  var _loop = function _loop() {
    var slideSelector = ".instar_slide:nth-child(".concat(i + 1, ")");
    var snsPop = ".insta_pop_0".concat(i + 1);
    $(slideSelector).on("click", function () {
      togglePop(snsPop);
    });
    $(snsPop).find('.close').on("click", function () {
      togglePop(snsPop);
    });
  };
  for (var i = 0; i <= instarSlides.length; i++) {
    _loop();
  } //insta_pop

  var previewPop = document.querySelector('.preview_popup');
  var productPopButtons = document.querySelectorAll('.product_pop');
  var popupBack = document.querySelector('.popup_back');
  var previewBtn = document.querySelectorAll('.preview_pop_btn');
  productPopButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      previewPop.style.display = 'block';
      popupBack.style.display = 'block';
    });
  });
  previewBtn.forEach(function (button) {
    button.addEventListener('click', function () {
      previewPop.style.display = 'none';
      popupBack.style.display = 'none';
    });
  }); //product_pop

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

  $(function () {
    var tabLi = $('.contents04 .contents04_tab li');
    var sheetUl = $('.contents04 .contents04_sheet');
    tabLi.click(function () {
      tabLi.removeClass('on');
      sheetUl.removeClass('sheet_on');
      $(this).addClass('on');
      var sheetId = $(this).attr('id');
      var targetSheet = $('.' + sheetId + '_sheet');
      targetSheet.addClass('sheet_on');
    });
  });
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map