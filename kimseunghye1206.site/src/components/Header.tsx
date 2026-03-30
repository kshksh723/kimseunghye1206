import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md z-40 px-6 md:px-12 flex items-center justify-between border-b border-gray-100">
            
          
            <div className="flex items-center gap-2"></div>

            <ul className="flex items-left gap-6 md:gap-10">
                {['HOME', 'ABOUT', 'TOOLKIT', 'PROJECTS', 'JOURNEY', 'BLOG'].map((item) => (
                    <li key={item}>
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            className="text-[11px] md:text-[13px] font-bold text-gray-500 hover:text-black transition-colors tracking-widest"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;