import React from 'react';
import {previewData} from "./PreviewImages";
// import {mainContainer} from "./styles.js";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Preview = () => {

  const sliderLeft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const sliderRight = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return(
              // max-w-[xxxpx]
    <div >
      <br />
      <div className='flex items-center self-center max-w-[1000px]'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderLeft} size={40} />
        {/* scrollbar hide used install (npm install tailwind-scrollbar-hide) and plugin (tailwind.config.js) */}
        <div id='slider' className="w-full h-full overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth 
        ">
          
          {previewData.map((item) => (
            <a href={item.link} target="_blank">
              {/* Let's work on getting all images to uniform sizing with 4:3 ratio */}
               <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt="/" />
            </a>
          ))}

        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderRight} size={40} />
      </div>

    </div>
  )
}

export default Preview;