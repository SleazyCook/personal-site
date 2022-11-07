import React, {useState, useEffect, useRef} from 'react';

const Preview = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(320);
  const sCont = useRef()
  const hScroll = useRef()
  const [maxScroll, setMaxScroll] = useState(0)
  useEffect( () => {
    setMaxScroll(-sCont.current.offsetWidth + hScroll.current.offsetWidth)
  }, [sCont, hScroll])
  // const [btnScrollLeft, setBtnScrollLeft] = useState(0);

  // const sCont = document.querySelector(".storys-container");
  // const hScroll = document.querySelector(".horizontal-scroll");
  // const btnScrollLeft = document.getElementById("btn-scroll-left");
  // const btnScrollRight = document.getElementById("btn-scroll-right");

  // btnScrollLeft.style.opacity= "0";

  // const maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
  console.log("sCont:", sCont)
  console.log("hScroll:", hScroll)
  function scrollHorizontally(event){
    setCurrentScrollPosition(currentScrollPosition + (currentScrollPosition * scrollAmount)) 

    if(currentScrollPosition >= 0){
      setCurrentScrollPosition(0)
      event.target.style.opacity = 0;
    } else {
      event.target.style.opacity= 1;
    }

    if(currentScrollPosition <= maxScroll) {
      setCurrentScrollPosition(maxScroll)
      event.target.style.opacity = 0;
    } else {
      event.target.style.opacity= 1;
    }

    sCont.current.style.left = currentScrollPosition + "px"
  }

  return(
    <div>
      <div className="body">
        <div className="container">
          <div className="horizontal-scroll" ref={hScroll}>
            {/* left button */}
            <button className="btn-scroll" id="btn-scroll-left" 
            onClick={scrollHorizontally}><i className="fas fa-chevron-left"></i></button>
            {/* right button */}
            <button className="btn-scroll" id="btn-scroll-right" 
            onClick={scrollHorizontally}><i className="fas fa-chevron-right"></i></button>

            <div className="storys-container" ref={sCont}>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
              <div className="story-circle"><img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview;