import {motion , useScroll} from "framer-motion"
import react from "react"
import React from "react"


export default function TextMoving() {

    const [progress , setprogress] = React.useState()
    const [scroll , setscroll] = React.useState()
    const text = React.useRef(null)
    const {scrollYProgress , scrollY} = useScroll({
        target : text,
        offset : ["end start", "start end"]
    })

    React.useEffect(()=>{
        setprogress(scrollYProgress.current)

        scrollY.onChange(val=>{
            setscroll(val)
        })
    },[scroll])



  return (
    <>
    <div ref={text} className="text-moving">
        <motion.p
        style={{translateX : `${progress*20}vw`}}
        >We Weave Peace   We Weave Peace   We Weave Peace We Weave Peace   We Weave Peace   We Weave Peace  We Weave Peace</motion.p>
    </div>
    <div className="text-moving">
        <motion.p
        style={{translateX : `-${progress*20}vw`}}
        >We Weave Peace   We Weave Peace   We Weave Peace We Weave Peace   We Weave Peace   We Weave Peace  We Weave Peace</motion.p>
    </div>
    </>
  )
}
