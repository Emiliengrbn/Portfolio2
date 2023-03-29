import { useState } from "react"

// const leftArrow = require("../assets/images/leftArrow.png");
// const rightArrow = require("../assets/images/rightArrow.png");

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

 
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    if(slides.length > 1) {
        return (
            <div className="sliderStyle">
                <div className="leftArrowStyles" onClick={goToPrevious} >
                〉
                </div>
                <div className="rightArrowStyles" onClick={goToNext}>
                〉
                </div>
                <div className="slideStyles" style={{backgroundImage: `url(${slides[currentIndex].cover})`}}>
                    {/* <h3 className="title__slide">{slides[currentIndex].title}</h3>
                    <p className="description__slide">{slides[currentIndex].description}</p> */}
                </div>
                    <div className="dotsContainerStylestwo">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="dotStyletwo" onClick={() => goToSlide(slideIndex)}>
                                ●
                            </div>
                        ))}
                    </div>
            </div>
        )
    } else {
        return (
            <div className="sliderStyle">
                <div className="slideStyles" style={{backgroundImage: `url(${slides[currentIndex]})`}}>
                    <div className="dotsContainerStyles">
                        <div className="dotStyle">
                            {currentIndex + 1}/{slides.length}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default ImageSlider