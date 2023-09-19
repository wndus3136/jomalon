document.addEventListener('DOMContentLoaded', () => {

  const searchOpen = document.getElementById('search_btn');
  const searchClose = document.getElementById('search_close');
  const searchBox = document.getElementById('search_ex');
  const header = document.getElementById('header');

  const menuBack = document.querySelectorAll('.menu');

  menuBack.forEach(function (back) {
    back.addEventListener('mouseover', function () {
      header.style.height = '140px';
    });
    back.addEventListener('mouseout', function () {
      header.style.height = '';
    });
  }) //header_height

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
  //pagination

const COUNT_PER_PAGE = 6; // 한 페이지 당 최대 6개의 요소를 보여줄 것

const getTotalPageCount = () => {
  return Math.ceil(bestProductList.length / COUNT_PER_PAGE);
};

const numberButtonWrapper = document.querySelector('.number-button-wrapper');

const setPageButtons = () => {
  numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌

  for (let i = 1; i <= getTotalPageCount(); i++) {
    numberButtonWrapper.innerHTML += `<span class="number-button">${i}</span>`;
  }
};

setPageButtons();





  /* **************************************** */

  const menuBtns = document.querySelectorAll(".footer_menu_btn");

  menuBtns.forEach((menuBtn) => {
    const div = menuBtn.nextElementSibling;

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


import bestProductList from "../js/data.js";

let currentSortOption = 'best'; // 현재 선택된 정렬 옵션

function filterProducts() {
  const sortSelect = document.getElementById('sort_select');
  const selectedValue = sortSelect.value;

  if (selectedValue === currentSortOption) {
    return; // 선택된 정렬 옵션이 이전과 동일하면 함수 종료
  }

  currentSortOption = selectedValue; // 현재 정렬 옵션 업데이트

  let filteredList = [];

  if (selectedValue === 'best') {
    // 베스트 순으로 정렬 (기본 정렬 유지)
    filteredList = bestProductList;
  } else if (selectedValue === 'low_price') {
    // 가격이 낮은 순으로 정렬
    filteredList = bestProductList.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (selectedValue === 'high_price') {
    // 가격이 높은 순으로 정렬
    filteredList = bestProductList.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  renderProducts(filteredList);
  setDetailPageListeners(); // 필터링 후에도 디테일 페이지 이동 가능하도록 이벤트 리스너 설정
}

function renderProducts(productList) {
  const bestProduct = document.querySelector('.best_product');
  bestProduct.innerHTML = '';

  for (let i = 0; i < productList.length; i++) {
    const bestDiv = document.createElement('div');
    bestDiv.setAttribute('class', 'best_box');

    const bestImg = document.createElement('img');
    bestImg.setAttribute('src', productList[i].src);
    bestDiv.appendChild(bestImg);

    const engName = document.createElement('p');
    engName.textContent = productList[i].engname;
    bestDiv.appendChild(engName);

    const korName = document.createElement('p');
    korName.textContent = productList[i].korname;
    bestDiv.appendChild(korName);

    const bestPrice = document.createElement('p');
    bestPrice.textContent = '￦ ' + productList[i].price;
    bestDiv.appendChild(bestPrice);

    bestProduct.appendChild(bestDiv);
  }
}

function setDetailPageListeners() {
  document.querySelectorAll('.best_box').forEach((box) => {
    box.addEventListener('click', () => {
      window.location.href = '../detail/detail.html';
    });
  });
}

// 가격 필터 버튼에 이벤트 리스너를 추가
const sortSelect = document.getElementById('sort_select');
sortSelect.addEventListener('change', filterProducts);

renderProducts(bestProductList);
setDetailPageListeners();