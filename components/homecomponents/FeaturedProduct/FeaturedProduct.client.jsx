import React from "react";
import { motion, useScroll } from "framer-motion";
import react from "react";
import { useInView } from "framer-motion";


import ProductCard from "../../productcard/ProductCard.client";

export default function FeaturedProductC() {
  const container = React.useRef(null);
  const [scroll, setscrolly] = React.useState();
  const [progress, setprogress] = React.useState();
  const data = useInView(container);
  const { scrollY, scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  React.useEffect(() => {
    setprogress(1 - scrollYProgress.current);
    scrollY.onChange((val) => {
      setscrolly(val);
    });
  }, [scroll]);

  const styles = {
    background: `radial-gradient(circle, #4c4fff ${
      progress * 100
    }%, #ff0000bb ${100}%)`,
  };

  return (

    <div style={styles} className="featured-product-container" ref={container}>
      <h2>Featured products</h2>


      <div className="product-card-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
