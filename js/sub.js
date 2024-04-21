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
  });

  searchOpen.onclick = showSearch;
  searchClose.onclick = hiddenSearch;

  function showSearch() {
    searchBox.style.display = 'block';
    searchOpen.style.display = 'none';
  }

  function hiddenSearch() {
    searchBox.style.display = 'none';
    searchOpen.style.display = 'block';
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

  const COUNT_PER_PAGE = 12;

  const getTotalPageCount = () => {
    return Math.ceil(bestProductList.length / COUNT_PER_PAGE);
  };

  const numberButtonWrapper = document.querySelector('.number-button-wrapper');

  const setPageButtons = () => {
    numberButtonWrapper.innerHTML = '';

    for (let i = 1; i <= getTotalPageCount(); i++) {
      numberButtonWrapper.innerHTML += `<span class="number-button">${i}</span>`;
    }

    const numberButtons = document.querySelectorAll('.number-button');
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        numberButtons.forEach(btn => {
          btn.classList.remove('bold');
        });
        button.classList.add('bold');

        const pageNumber = parseInt(button.textContent);
        renderPage(pageNumber);
      });
    });
  };

  // 페이지를 렌더링
  function renderPage(pageNumber) {
    const startIndex = (pageNumber - 1) * COUNT_PER_PAGE;
    const endIndex = startIndex + COUNT_PER_PAGE;
    const currentPageItems = currentSortOption === 'best' ? bestProductList.slice(startIndex, endIndex) : filteredList.slice(startIndex, endIndex);
    renderProducts(currentPageItems);
    window.scrollTo(0, 0);

    // Call setDetailPageListeners after rendering products
    setDetailPageListeners();
  }

  setPageButtons();

  const firstPageButton = document.querySelector('.number-button');
  if (firstPageButton) {
    firstPageButton.classList.add('bold');
    renderPage(1);
  }

  function applySorting() {
    filterProducts();
    const currentPageNumber = 1;
    setPageButtons();
    renderPage(currentPageNumber);
    const firstPageButton = document.querySelector('.number-button');
    firstPageButton.classList.add('bold');
  }

  const prevButton = document.querySelector('.prev-button');
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      const currentButton = document.querySelector('.number-button.bold');
      const prevButton = currentButton.previousElementSibling;
      if (prevButton) {
        prevButton.click();
      }
    });
  }

  const nextButton = document.querySelector('.next-button');
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const currentButton = document.querySelector('.number-button.bold');
      const nextButton = currentButton.nextElementSibling;
      if (nextButton) {
        nextButton.click();
      }
    });
  }

});

import bestProductList from "../js/data.js";

let currentSortOption = 'best';
let filteredList = [];

renderProducts(filteredList);

function filterProducts() {
  const sortSelect = document.getElementById('sort_select');
  const selectedValue = sortSelect.value;

  if (selectedValue === currentSortOption) {
    return;
  }

  currentSortOption = selectedValue;

  if (selectedValue === 'best') {
    filteredList = bestProductList;
  } else if (selectedValue === 'low_price') {
    filteredList = bestProductList.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (selectedValue === 'high_price') {
    filteredList = bestProductList.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  renderProducts(filteredList);
  const firstPageButton = document.querySelector('.number-button');
  firstPageButton.classList.add('bold');

  const secondButton = document.querySelector('.number-button:nth-child(2)');
  secondButton.classList.remove('bold');
}

function renderProducts(productList) {
  const bestProduct = document.querySelector('.best_product');
  bestProduct.innerHTML = '';

  productList.forEach((product) => {
    const bestDiv = document.createElement('div');
    bestDiv.setAttribute('class', 'best_box');
    bestDiv.setAttribute('data-product-id', product.id); // Assuming productList has an 'id' field

    const bestImg = document.createElement('img');
    bestImg.setAttribute('src', product.src);
    bestDiv.appendChild(bestImg);

    const engName = document.createElement('p');
    engName.textContent = product.engname;
    bestDiv.appendChild(engName);

    const korName = document.createElement('p');
    korName.textContent = product.korname;
    bestDiv.appendChild(korName);

    const bestPrice = document.createElement('p');
    bestPrice.textContent = '￦ ' + product.price;
    bestDiv.appendChild(bestPrice);

    bestProduct.appendChild(bestDiv);
  });

  // Call setDetailPageListeners after rendering products
  setDetailPageListeners();
}

function setDetailPageListeners() {
  document.querySelectorAll('.best_box').forEach((box) => {
    box.addEventListener('click', () => {
      const productId = box.getAttribute('data-product-id');
      const detailUrl = `../detail/detail.html?id=${productId}`;
      window.location.href = detailUrl;
    });
  });
}

const sortSelect = document.getElementById('sort_select');
if (sortSelect) {
  sortSelect.addEventListener('change', filterProducts);
}

renderProducts(bestProductList);