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


    /* content_swiper */
    const swiper = new Swiper(".newSwiper2", {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".newSwiper1", {
        /*   autoplay: {
            delay: 3000,
            disableOnInteraction: false // autoplay되었을때 클릭하면 멈춤 //해결방법
          }, */
        slidesOffsetBefore: 20,
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


    const label = document.querySelector('.label');
    const options = document.querySelectorAll('.optionItem');

    label.addEventListener('click', () => {
        const optionList = label.parentNode.querySelector('.optionList');
        optionList.style.display = optionList.style.display === 'block' ? 'none' : 'block';
    });

    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect = (item) => {
        label.parentNode.classList.remove('active');
        label.innerHTML = item.textContent;

        // 옵션 선택 후에 optionList를 닫음
        const optionList = label.parentNode.querySelector('.optionList');
        optionList.style.display = 'none';
    }

    // 옵션 클릭시 클릭한 옵션을 넘김
    options.forEach(option => {
        option.addEventListener('click', () => handleSelect(option))
    })

    // 라벨을 클릭시 옵션 목록이 열림/닫힘
    label.addEventListener('click', () => {
        if (label.parentNode.classList.contains('active')) {
            label.parentNode.classList.remove('active');
        } else {
            label.parentNode.classList.add('active');
        }
    }); //label 




    const cartPop = document.querySelector('.cart_pop');
    const cartClose = document.querySelector('.cart_pop_close');
    const addCart = document.querySelector('.add_cart');
    const popBack = document.querySelector('.popup_back');

    addCart.addEventListener('click', () => {
        cartPop.style.right = '300px'; // 팝업 표시
        cartPop.style.transition = '0.4s';
        popBack.style.display = 'block';
    });

    cartClose.addEventListener('click', () => {
        cartPop.style.right = '-700px'; // 팝업 숨김
        popBack.style.display = 'none';
    });
    //cart_pop


    const increaseBtn = document.querySelector('.quantity_increase');
    const decreaseBtn = document.querySelector('.quantity_decrease');
    const quantityInput = document.querySelector('.quantity_input');
    const priceElement = document.querySelector('.price');

    increaseBtn.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        if (!isNaN(currentQuantity)) {
            quantityInput.value = currentQuantity + 1;
            updatePrice();
        }
    });

    decreaseBtn.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        if (!isNaN(currentQuantity) && currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
            updatePrice();
        }
    });

    function updatePrice() {
        let currentQuantity = parseInt(quantityInput.value);
        const unitPrice = 218000; // 단위 가격 설정
        let totalPrice = unitPrice * currentQuantity;
        priceElement.textContent = `￦ ${totalPrice}`;
    }

    // 초기 가격 표시
    updatePrice();


    const noteBtn = document.querySelector('.note_btn')
    const ingredientBtn = document.querySelector('.ingredient_btn')
    const reviewBtn = document.querySelector('.review_btn')
    const noteBox = document.querySelector('.note')
    const ingredientBox = document.querySelector('.ingredient')
    const reviewBox = document.querySelector('.review_ex')

    /*   'is'라고 들어가면 isOpen 은 true 또는 flase값을 가지는 변수이다. */
    let isOpen = false /* 상태변수 */

    noteBtn.addEventListener('click', function () {

        if (isOpen === false) {
            noteBox.style.display = 'none'
            noteBtn.textContent = '+'
            isOpen = true
        } else {
            noteBox.style.display = 'block'
            noteBtn.textContent = '-'
            isOpen = false
        }

    }) //note_btn

    ingredientBtn.addEventListener('click', function () {

        if (isOpen === false) {
            ingredientBox.style.display = 'block'
            ingredientBtn.textContent = '-'
            isOpen = true
        } else {
            ingredientBox.style.display = 'none'
            ingredientBtn.textContent = '+'
            isOpen = false
        }

    }) //ingredient_btn

    reviewBtn.addEventListener('click', function () {

        if (isOpen === false) {
            reviewBox.style.display = 'block'
            reviewBtn.textContent = '-'
            isOpen = true
        } else {
            reviewBox.style.display = 'none'
            reviewBtn.textContent = '+'
            isOpen = false
        }

    }) //review_btn











    /* 리뷰쓰기 */

    const reviewPop = document.querySelector('.review_write');
    const reviewClose = document.querySelector('#cancle');
    const reviewOpen = document.querySelector('.review_open');
    const reviewList = document.querySelector('.review_up ul');


    const nameInput = document.querySelector('.review_name input');
    const titleInput = document.querySelector('.review_tit input');
    const reviewTextarea = document.querySelector('.review_textarea');

    reviewOpen.addEventListener('click', () => {
        reviewPop.style.display = 'block';
    });
    reviewClose.addEventListener('click', () => {
        reviewPop.style.display = 'none';
    });



    document.querySelector('.review_textarea').addEventListener('keydown', function () {
        //리뷰 120자 초과 안되게 자동 자름
        let review = document.querySelector('.review_textarea');
        let lengthCheckEx = /^.{120,}$/;
        if (lengthCheckEx.test(review.value)) {
            //120자 초과 컷
            review.value = review.value.substr(0, 120);
        }
    });







    //저장 전송전 필드 체크 이벤트 리스너
    document.querySelector('#save').addEventListener('click', function (e) {


        // 닉네임 확인
        const nameValue = document.querySelector('.review_name input').value;
        if (!nameValue) {
            alert('이름을 입력해주세요.');
            return false;
        }

        // 제목 확인
        const titleValue = document.querySelector('.review_tit input').value;
        if (!titleValue) {
            alert('제목을 입력해주세요.');
            return false;
        }

        // 리뷰 내용 확인
        const reviewValue = document.querySelector('.review_textarea').value;
        if (!reviewValue) {
            alert('리뷰를 입력해주세요.');
            return false;
        }

        // 이미지 확인
        const previewImg = document.querySelector('.review_photo img');
        let imageSrc = '';
        if (previewImg) {
            imageSrc = previewImg.src;
        }

        // 리뷰 등록 처리
        const review = {
            name: nameValue,
            title: titleValue,
            content: reviewValue,
            image: imageSrc,
        };

        console.log('리뷰 등록:', review);

        const li = document.createElement('li');

        const nameTxt = document.createElement('p');
        nameTxt.textContent = `이름: ${review.name}`
        li.appendChild(nameTxt);

        const titleTxt = document.createElement('p');
        titleTxt.textContent = `제목: ${review.title}`
        li.appendChild(titleTxt);

        const contentTxt = document.createElement('p');
        contentTxt.textContent = `내용: ${review.content}`
        li.appendChild(contentTxt);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('review-content');
        li.appendChild(contentDiv);

        if (review.image) {
            const imgTag = document.createElement('img');
            imgTag.src = review.image;
            imgTag.classList.add('preview-image');
            contentDiv.appendChild(imgTag);
        }

        const reviewBox = document.querySelector('.review_box');
        reviewBox.prepend(li);

        reviewList.style.display = 'block';

        resetReviewForm(); // 작성한 내용 초기화
        hideReviewWrite(); //review_write 폼 숨기기
    });

    // 초기화
    function resetReviewForm() {
        const nameInput = document.querySelector('.review_name input');
        const titleInput = document.querySelector('.review_tit input');
        const reviewTextarea = document.querySelector('.review_textarea');
        const upLoad = document.querySelector('.upload-name');


        // 리뷰 등록 처리

        nameInput.value = '';
        titleInput.value = '';
        reviewTextarea.value = '';
        upLoad.value = '';

        const previewImg = document.querySelector('.review_photo img');
        if (previewImg) {
            previewImg.parentNode.removeChild(previewImg);
        }
    }


    function hideReviewWrite() {
        const reviewWrite = document.querySelector('.review_write');
        reviewWrite.style.display = 'none';
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageSrc = e.target.result;

                const reviewPhoto = document.querySelector('.review_photo');
                const previewImg = reviewPhoto.querySelector('.preview-image');

                if (previewImg) {
                    previewImg.src = imageSrc;
                } else {
                    const newPreviewImg = document.createElement("img");
                    newPreviewImg.src = imageSrc;
                    newPreviewImg.classList.add("preview-image");
                    reviewPhoto.appendChild(newPreviewImg);
                }
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    document.querySelector('#file').addEventListener('change', function () {
        var fileName = this.value;
        $(".upload-name").val(fileName);
        readURL(this);
    });








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
    const reviewSwiper = new Swiper(".review_slider", {
        loop: true,
        centeredSlides: true,
        loopedSlides: 2,
        slidesPerView: 5,
        spaceBetween: 16,
        width: 900,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        /*  autoplay: true */
    }); //swiper1

    /* contents05_swiper */
    const instarSwiper = new Swiper(".instar", {
        loop: true,
        centeredSlides: true,
        loopedSlides: 2,
        slidesPerView: 5,
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: true
    }); //swiper2

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