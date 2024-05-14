const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log('window.scrollY');
    if (window.scrollY > 500) {
        //배지숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼보이기
        gsap.to(toTopEl, .2, {
          x: 0
         }); 

    } else {
        //배지보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });   
       //버튼숨기기
       gsap.to(toTopEl, .2, {
        x: 100
       }); 
    }   
}, 300));
// _.throttle(함수, 시간)

  
  toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
      scrollTo: 0
    });
  });


    const fadeEls = document.querySelectorAll('.visual .fade-in');
    fadeEls.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
            delay: (index + 1) * .7,
            opacity: 1
        });
    });



    

    //여기이상
    new Swiper('.notice-line .swiper-container', {
        direction: 'vertical',
        autoplay: true, 
        loop: true 
      });
      new Swiper('.promotion .swiper-container', {       
        autoplay: { 
          delay: 5000 // 5초마다 슬라이드 바뀜
        },
        loop: true, 
        slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
        spaceBetween: 10, // 슬라이드 사이 여백
        centeredSlides: true, // 1번 슬라이드가 가운데 보이기
        pagination: { 
          el: '.promotion .swiper-pagination', 
          clickable: true 
        },
        navigation: { 
          prevEl: '.promotion .swiper-prev', 
          nextEl: '.promotion .swiper-next' 
        }
      });
      //여기스와이프도 안넘어감
      new Swiper('.awards .swiper-container', {       
        autoplay: true, 
        loop: true, 
        spaceBetween: 30, 
        slidesPerView: 5, 
        navigation: { 
          prevEl: '.awards .swiper-prev', 
          nextEl: '.awards .swiper-next' 
        }
      });

      const promotionEl = document.querySelector('.promotion')
      const promotionToggleBtn = document.querySelector('.toggle-promotion')
      let isHidePromotion = false
      promotionToggleBtn.addEventListener('click', function () {
        isHidePromotion = !isHidePromotion
        if (isHidePromotion) {
            promotionEl.classList.add('hide')
        } else {
            promotionEl.classList.remove('hide')
          }
        });


        //여기도 적용 안됨
        function random(min, max) {
            // `.toFixed()`를 통해 반환된 '문자 데이터'를,
            // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
            return parseFloat((Math.random() * (max - min) + min).toFixed(2))
          }
          // 부유하는(떠 다니는) 요소를 만드는 함수
          function floatingObject(selector, delay, size) {

            gsap.to(
                selector,
                random(1.5, 2.5), 
                {
                    y: size,
                    repeat: -1,
                    yoyo: true, 
                    ease: Power1.easeInOut,
                    delay: random(0, delay) 
              }
            );
          }
          floatingObject('.floating1', 1, 15);
          floatingObject('.floating2', .5, 15);
          floatingObject('.floating3', 1.5, 20);

          
          const spyEls = document.querySelectorAll('section.scroll-spy')
          spyEls.forEach(function (spyEl) {
            new ScrollMagic.
                 Scene({triggerElement: spyEl,
                        triggerHook: .8
                 })
                .setClassToggle(spyEl, 'show')
                .addTO(new ScrollMagic.Controller());
          });   


          const thisYear = document.querySelector('.this-year');
          thisYear.textContent = new Date().getFullYear();
          