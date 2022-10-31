import React from "react";
import { motion, useScroll } from "framer-motion";
import react from "react";
import { useInView } from "framer-motion";

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
    console.log(scrollYProgress.current);
    scrollY.onChange((val) => {
      setscrolly(val);
    });
  }, [scroll]);

  const styles = {
    background: `radial-gradient(circle, #ff0000bb ${
      progress * 100
    }%, #4c4fff ${100}%)`,
  };

  return (
    <div style={styles} className="featured-product-container" ref={container}>
      <h2>Featured products</h2>

      <div className="flex-row product-card-container">
        <div className="product-card">
          <img src="/t1.png" />
          <div className="hover-show">
            <p>The Devil Show</p>

            <div className="color-box">
              <div className="color  color-red"> </div>
              <div className="color color-green"> </div>
              <div className="color color-blue"> </div>
            </div>

            <div className="size-box">
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <img src="/t2.png" />
          <div className="hover-show">
            <p>The Devil Show</p>

            <div className="color-box">
              <div className="color  color-red"> </div>
              <div className="color color-green"> </div>
              <div className="color color-blue"> </div>
              <div className="color color-blue"> </div>
    
            </div>

            <div className="size-box">
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
              <div className="size">L</div>

            </div>
          </div>
        </div>

        <div className="product-card">
          <img src="/t2.png" />
          <div className="hover-show">
            <p>The Devil Show</p>

            <div className="color-box">
              <div className="color  color-red"> </div>
              <div className="color color-green"> </div>
              <div className="color color-blue"> </div>
            </div>

            <div className="size-box">
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src="/t1.png" />
          <div className="hover-show">
            <p>The Devil Show</p>

            <div className="color-box">
              <div className="color  color-red"> </div>
              <div className="color color-green"> </div>
              <div className="color color-blue"> </div>
            </div>

            <div className="size-box">
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
