import { motion } from "motion/react";
function App(){
  return(
    // <div>
    //   <motion.div
    //   initial={{
    //     x:0,
    //   }}
    //    animate={{

    //     x:300,
    //     rotate:360,
        
        
    //   }}

    //   transition={{
    //     duration:2,
    //     repeat:3,
    //     ease:'anticipate'
    //   }}
    //   className="box">

    //   </motion.div>
      
    // </div>
    <motion.div className="box"
    animate={{
      x:[0,800,800,0,0],
      y:[0,0,300,300,0],
    }}
    transition={{
      duration:3,
      delay:1,
    }}
    ></motion.div>
  )
}
export default App; 