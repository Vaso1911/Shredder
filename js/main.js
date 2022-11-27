const swiper = new Swiper('.swiper', {
  speed: 1000,
      loop:true,
      autoplay: {
        delay: 2000,
      },
  breakpoints: {
    320: {
    
      slidesPerView: 1,
      spaceBetween: 10,
    },

1280: {
    slidesPerView: 2,
    spaceBetween: 30,
}
  },

  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const colors = ['#20dbd8', '#1da6bd', '#146d89','#11b5e2','#0ad6be','#06eba6','#12fa86'],
colorsTwo = ['#ca1bd7', '#4f068a','#122233']
      svgEl = document.querySelectorAll('.animation-svg-path-1'),
      svgElTwo = document.querySelectorAll('.animation-svg-path-2')

      function setColor() {
        const color = getRandomColor(colors)
        svgEl.forEach( e => {
          e.style.color = color
        });
      }


      function setColorTwo() {
        const color = getRandomColor(colorsTwo)
        svgElTwo.forEach( e => {
          e.style.color = color
        });
      }

        function getRandomColor(arr) {
          const index = Math.floor(Math.random() * arr.length)
          return arr[index]
          }

      setInterval(setColor, 1800) 
      setInterval(setColorTwo, 2100) 

      const anchors = [].slice.call(document.querySelectorAll('[data-scroll]')),
      animationTime = 350,
      framesCount = 40;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      }
      else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }

    }, animationTime / framesCount);
  });
});
