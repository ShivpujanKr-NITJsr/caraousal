// import React, { useState } from 'react';
// import './rnews.css';

// const Rnews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     'https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1579684453401-966b11832744?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="new-carousel">
//       <button className="prev" onClick={prevSlide}>
//         ❮
//       </button>
//       <div className="image-container">
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//       </div>
//       <button className="next" onClick={nextSlide}>
//         ❯
//       </button>
//     </div>
//   );
// };

// export default Rnews;

// const images = [
//     'https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1579684453401-966b11832744?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   ];

import React, { useEffect, useState } from 'react';
import './rnews.css';

const Rnews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'This is the first slide description.',
      pdfLink: '/path/to/first.pdf',
    },
    {
      image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'This is the second slide description.',
      pdfLink: '/path/to/second.pdf',
    },
    {
      image: 'https://images.unsplash.com/photo-1579684453401-966b11832744?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'This is the third slide description.',
      pdfLink: '/path/to/third.pdf',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  return (
    <div className="new-carousel">
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <div className="image-container">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="slide-content">
          <p>{slides[currentIndex].text}</p>
          <a href={slides[currentIndex].pdfLink} className="download-button">
            Download PDF
          </a>
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Rnews;