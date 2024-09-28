import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

const Reveal = ({ children }) => {
    const ref = useRef(null);

    const inView = useInView(ref , {once : true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if(inView){
            mainControls.start("visible");
        }
    } , [inView])

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal
