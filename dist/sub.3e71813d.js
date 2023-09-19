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
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var bestProductList = [{
  id: "product01",
  engname: "Blackberry & Bay Cologne",
  korname: "블랙베리 앤 베이 코롱",
  price: "218,000",
  src: "../image/sub_cologne/sub_item01.png"
}, {
  id: "product02",
  engname: "Lime Basil & Mandarin Cologne",
  korname: "라임 바질 앤 만다린 코롱",
  price: "218,000",
  src: "../image/sub_cologne/sub_item02.png"
}, {
  id: "product03",
  engname: "Lime Basil & Mandarin Cologne",
  korname: "우드 세이지 앤 씨 솔트 코롱",
  price: "218,000",
  src: "../image/sub_cologne/sub_item03.png"
}, {
  id: "product04",
  engname: "Star Magnolia Cologne",
  korname: "스타 매그놀리아 코롱",
  price: "225,000",
  src: "../image/sub_cologne/sub_item04.png"
}, {
  id: "product05",
  engname: "Nashi Blossom Cologne",
  korname: "나시 블로썸 코롱",
  price: "225,000",
  src: "../image/sub_cologne/sub_item05.png"
}, {
  id: "product06",
  engname: "Waterlily Cologne",
  korname: "워터릴리 코롱 ",
  price: "225,000",
  src: "../image/sub_cologne/sub_item06.png"
}, {
  id: "product07",
  engname: "Special-Edition Red Roses Cologne",
  korname: "스페셜 에디션 레드 로즈 코롱",
  price: "160,000",
  src: "../image/sub_cologne/sub_item07.png"
}, {
  id: "product08",
  engname: "Rose Water & Vanilla Cologne",
  korname: "로즈 워터 앤 바닐라 코롱",
  price: "160,000",
  src: "../image/sub_cologne/sub_item08.png"
}, {
  id: "product09",
  engname: "Rose Blush Cologne",
  korname: "로즈 블러쉬 코롱",
  price: "160,000",
  src: "../image/sub_cologne/sub_item09.png"
}, {
  id: "product10",
  engname: "The Golden & Sweet Duo",
  korname: "더 골든 앤 스윗 듀오",
  price: "220,000",
  src: "../image/sub_cologne/sub_item10.png"
}, {
  id: "product11",
  engname: "Spirited & Addictive Duo",
  korname: "스피릿 앤 에딕티드 듀오",
  price: "220,000",
  src: "../image/sub_cologne/sub_item11.png"
}, {
  id: "product12",
  engname: "Fruity & Sweet Duo",
  korname: "프루티 앤 스윗 듀오",
  price: "220,000",
  src: "../image/sub_cologne/sub_item12.png"
}];
/* 배열 */
/* id를 반드시 넣어주어야 한다. 가장중요.  */
var _default = bestProductList;
/* 반드시 export로 내보내야한다. import로 가져와서 쓸수있다. */
exports.default = _default;
},{}],"js/sub.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("../js/data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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

  /* **************************************** */

  /* **************************************** */
  //pagination

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

var currentSortOption = 'best'; // 현재 선택된 정렬 옵션

function filterProducts() {
  var sortSelect = document.getElementById('sort_select');
  var selectedValue = sortSelect.value;
  if (selectedValue === currentSortOption) {
    return; // 선택된 정렬 옵션이 이전과 동일하면 함수 종료
  }

  currentSortOption = selectedValue; // 현재 정렬 옵션 업데이트

  var filteredList = [];
  if (selectedValue === 'best') {
    // 베스트 순으로 정렬 (기본 정렬 유지)
    filteredList = _data.default;
  } else if (selectedValue === 'low_price') {
    // 가격이 낮은 순으로 정렬
    filteredList = _data.default.slice().sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  } else if (selectedValue === 'high_price') {
    // 가격이 높은 순으로 정렬
    filteredList = _data.default.slice().sort(function (a, b) {
      return parseFloat(b.price) - parseFloat(a.price);
    });
  }
  renderProducts(filteredList);
  setDetailPageListeners(); // 필터링 후에도 디테일 페이지 이동 가능하도록 이벤트 리스너 설정
}

function renderProducts(productList) {
  var bestProduct = document.querySelector('.best_product');
  bestProduct.innerHTML = '';
  for (var i = 0; i < productList.length; i++) {
    var bestDiv = document.createElement('div');
    bestDiv.setAttribute('class', 'best_box');
    var bestImg = document.createElement('img');
    bestImg.setAttribute('src', productList[i].src);
    bestDiv.appendChild(bestImg);
    var engName = document.createElement('p');
    engName.textContent = productList[i].engname;
    bestDiv.appendChild(engName);
    var korName = document.createElement('p');
    korName.textContent = productList[i].korname;
    bestDiv.appendChild(korName);
    var bestPrice = document.createElement('p');
    bestPrice.textContent = '￦ ' + productList[i].price;
    bestDiv.appendChild(bestPrice);
    bestProduct.appendChild(bestDiv);
  }
}
function setDetailPageListeners() {
  document.querySelectorAll('.best_box').forEach(function (box) {
    box.addEventListener('click', function () {
      window.location.href = '../detail/detail.html';
    });
  });
}

// 가격 필터 버튼에 이벤트 리스너를 추가
var sortSelect = document.getElementById('sort_select');
sortSelect.addEventListener('change', filterProducts);
renderProducts(_data.default);
setDetailPageListeners();
},{"../js/data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map