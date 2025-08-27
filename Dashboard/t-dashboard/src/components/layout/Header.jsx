import React from "react";
import {Menu, Search} from "lucide-react";


function Header() {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b 
        border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
            <div className="flex items-center justify-between">
                  {/* Left section */}
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300
                    hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<Menu className="w-5 h-5"></Menu>
                    </button>

                    <div className="hidden md:block">
                        <h1 className="text-2xl font-black text-slate-800 dark:text-white">Dashboard</h1>
<p>Welcome back, Alex! Here's what's happening today</p>
                    </div>
                  </div>
                  {/* Center */}

                <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform translate-y-1/2
                        text-slate-400"/>
                        <input type="text" placeholder="Search" classNAme="w-full pl-10 pr-4
                        py-2.5 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-200"/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header;