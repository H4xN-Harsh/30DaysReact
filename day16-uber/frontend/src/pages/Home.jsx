import { Link } from "react-router-dom"
export default function Home(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#c2d3c2] px-4">
      
      <div className="text-center space-y-10">
        
        
        <h1 className="text-4xl  md:text-5xl font-bold  text-neutral-900  ">
          Book a ride.
        </h1>

        
        <Link to="/login"
          className="
            flex
            items-center
            justify-center
            px-10 py-4 
            rounded-full 
            bg-[#262626] 
            text-white 
            text-base font-medium
            transition
            hover:bg-[#404040]
            active:scale-95
           
          "
        >
          Continue
        </Link>

        
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Fast. Safe. Simple.
        </p>

      </div>
    </div>
    )
}