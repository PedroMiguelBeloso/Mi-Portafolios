import React, { useEffect, useState } from "react";

export default function ImageCarousel({ images, interval = 2500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(t);
  }, [images.length, interval]);

  return <img src={images[index]} alt="preview" />;
}
