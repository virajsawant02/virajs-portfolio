"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems:string[] = ["Home", "Projects","Blogs", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const router = useRouter()
  const handlenav = (e:any,item:any)=>{
    e.preventDefault()
    if(item==="Home"){
       router.push(`/`)
       return
    }
    router.push(`/${item.toLowerCase()}`)
   
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 max-w-[calc(100vw-1rem)] -translate-x-1/2">
  <div className="flex gap-1 sm:gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-2 sm:px-3 py-2 rounded-full shadow-lg">
        
        {
        navItems.map((item:string) => (
          <button key={item} onClick={(e)=>{setActive(item);handlenav(e,item) }} className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-300
              ${
                active === item
                  ? "bg-[#3a3a3a] text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-[#3a3a3a]/50"
              }`}
          >
            {item}
          </button>
        )
        )}
      </div>
    </div>
  );
}