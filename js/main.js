/* $(function () {
  $('#rolling_banner').load('../rolling_banner/rolling_banner.html')
}) */

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


  /* contents_swiper */
  const swiper = new Swiper(".newSwiper2", {
    loop: true,
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".newSwiper1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false // autoplay되었을때 클릭하면 멈춤 //해결방법
    },
    loop: true,
    spaceBetween: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  }); //swiper



  const page1 = document.querySelector('.page1');
  const page2 = document.querySelector('.page2');
  const page3 = document.querySelector('.page3');
  const page4 = document.querySelector('.page4');
  const page1Back = document.querySelector('.page1 .contents02_back');
  const pageImgs = document.querySelectorAll('.page_img');
  const contents02 = document.querySelector('.contents02');
  
  // 기본 이미지 (page_img1)를 표시하는 함수
  function showDefaultImage() {
    pageImgs.forEach((img) => {
      img.style.display = 'none';
    });
    pageImgs[0].style.display = 'block';
  }
  
  // 해당 페이지에 마우스 진입 시 해당 이미지를 표시하는 함수
  function showImageOnPage(page, index) {
    page.addEventListener('mouseover', () => {
      pageImgs.forEach((img) => {
        img.style.display = 'none';
      });
      pageImgs[index].style.display = 'block';
    });
  }
  
  // 모든 페이지에서 마우스 진입 시 기본 이미지를 표시합니다.
  page1.addEventListener('mouseover', () => {
    page1Back.style.display = 'none';
  });
  page2.addEventListener('mouseover', () => {
    page1Back.style.display = 'block';
  });
  page3.addEventListener('mouseover', () => {
    page1Back.style.display = 'block';
  });
  page4.addEventListener('mouseover', () => {
    page1Back.style.display = 'block';
  });
  
  // 모든 페이지에서 마우스가 나갈 때 page1 이미지를 유지합니다.
  contents02.addEventListener('mouseout', () => {
    pageImgs.forEach((img, index) => {
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
  const instarSwiper = new Swiper(".instar", {
    /* centeredSlides: true, */
    loop: true,
    loopedSlides: 5,
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  //swiper2

  /************************************************** */
  function togglePop(snsPop) {
    $(snsPop).toggle();
  }

  const instarSlides = document.querySelectorAll('.instar_slide');
  for (let i = 0; i <= instarSlides.length; i++) {
    const slideSelector = `.instar_slide:nth-child(${i + 1})`;
    const snsPop = `.insta_pop_0${i + 1}`;

    $(slideSelector).on("click", function () {
      togglePop(snsPop);
    });

    $(snsPop).find('.close').on("click", function () {
      togglePop(snsPop);
    });
  } //insta_pop


  const previewPop = document.querySelector('.preview_popup');
  const productPopButtons = document.querySelectorAll('.product_pop');
  const popupBack = document.querySelector('.popup_back');
  const previewBtn = document.querySelectorAll('.preview_pop_btn');
  
  productPopButtons.forEach((button) => {
    button.addEventListener('click', () => {
      previewPop.style.display = 'block';
      popupBack.style.display = 'block';
    });
  });
  previewBtn.forEach((button) => {
    button.addEventListener('click', () => {
      previewPop.style.display = 'none';
      popupBack.style.display = 'none';
    })
  })//product_pop




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
  });//footer_menu


  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $('.btn_top').fadeIn();
    } else {
      $('.btn_top').fadeOut();
    }
  });

  $('.btn_top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 2000);
  });


  //btn_top_click_event

  $(function () {
    const tabLi = $('.contents04 .contents04_tab li');
    const sheetUl = $('.contents04 .contents04_sheet');

    tabLi.click(function () {
      tabLi.removeClass('on');
      sheetUl.removeClass('sheet_on');

      $(this).addClass('on');
      const sheetId = $(this).attr('id');
      const targetSheet = $('.' + sheetId + '_sheet');
      targetSheet.addClass('sheet_on');
    });
  });


});