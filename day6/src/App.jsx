import { motion } from "motion/react";
function App(){
  return(
    <div>
      <motion.div
      initial={{
        x:0,
      }}
       animate={{

        x:300,
        rotate:360,
        
        
      }}

      transition={{
        duration:2,
        repeat:3,
        ease:'anticipate'
      }}
      className="box">

      </motion.div>
      
    </div>
  )
}
export default App; 