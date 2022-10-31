import {motion} from "framer-motion"

export default function MainSliderC() {


  return (
    <div className="sliderimage">
      {/* <video src="/12.mp4" width={"100%"} autoPlay={true} loop={true}/> */}

      <img src="/11.png" width={"100%"}/>

      <motion.h1
      animate={{opacity : 1 }}
      transition={{duration : 1}}
      initial={{opacity : 0}}
      >WEEDZADA</motion.h1>
      
    </div>
  )
}
