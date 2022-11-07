import React from 'react';

const Preview = () => {
  let currentScrollPostion = 0;
  let scrollAmount = 320;

  const sCont = document.querySelector(".storys-container");
  const hScroll = document.querySelector(".horizontal-scroll");
  const btnScrollLeft = document.getElementById("btn-scroll-left");
  const btnScrollRight = document.getElementById("btn-scroll-right");

  btnScrollLeft.style.opacity= "0";

  let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
  
  function scrollHorizontally(val){
    currentScrollPostion += (val * scrollAmount);

    if(currentScrollPostion >= 0){
      currentScrollPostion = 0
      btnScrollLeft.style.opacity= "0";
    } else {
      btnScrollLeft.style.opacity= "1";
    }

    if(currentScrollPostion <= maxScroll) {
      currentScrollPostion = maxScroll
      btnScrollRight.style.opacity= "0";
    } else {
      btnScrollRight.style.opacity= "1";
    }

    sCont.style.left = currentScrollPostion + "px"
  }
  return(
    <div>
      <body>
        <div class="container">
          <div class="horizontal-scroll">
            {/* left button */}
            <button class="btn-scroll" id="btn-scroll-left" onClick="scrollHorizontally(1)"><i class="fas fa-chevron-left"></i></button>
            {/* right button */}
            <button class="btn-scroll" id="btn-scroll-right" onClick="scrollHorizontally(-1)"><i class="fas fa-chevron-right"></i></button>

            <div class="storys-container">
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div class="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Preview;