import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Gallery images with captions
  const slides = [
    { src: "chethan.jpg", description: "Beautiful sunset at the beach" },
    { src: "/images/travel2.jpg", description: "Mountain hiking adventure" },
    { src: "/images/travel3.jpg", description: "City skyline at night" },
    { src: "/images/travel4.jpg", description: "Historical monument visit" },
  ];

  return (
    <div className="p-6">
      {/* Grid of thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slides.map((slide, i) => (
          <div key={i} className="relative group">
            <img
              src={slide.src}
              alt={slide.description}
              className="w-full h-40 object-cover rounded-xl shadow-md cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
            {/* Caption under thumbnail */}
            <p className="text-center mt-2 text-sm text-gray-700">{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Lightbox with navigation + captions */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Captions]}
        />
      )}
    </div>
  );
}
