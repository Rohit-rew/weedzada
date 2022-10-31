import React from "react";
import { motion } from "framer-motion";

export default function ProductCard() {
  return (
    <motion.div 
    animate={{opacity : 1}}
    transition={{duration : .5}}
    initial={{opacity : 0}}
    className="product-card">

        <div className="soldout">Sold Out</div>
      <img src="/t1.png" />
      <div className="hover-show">
        <div className="product-title">
            <p>The Devil Show </p>
            <p>599 INR</p>
        </div>

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
    </motion.div>
  );
}
