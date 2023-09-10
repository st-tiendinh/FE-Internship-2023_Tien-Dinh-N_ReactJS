import { useEffect, useState } from 'react';

export const ProductImage = ({ src, alt }: any) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <>
      {loaded ? (
        <img src={src} alt={alt} className="product-image" />
      ) : (
        <div className="skeleton mb-20"></div>
      )}
    </>
  );
};
