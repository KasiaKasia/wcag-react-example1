"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const NavbarWCAG: React.FC = () => {

    const [fontSize, setFontSize] = useState(19); // domyślnie 19px

    useEffect(() => {
        document.body.style.fontSize = `${fontSize}px`;      
      
        document.body.style.lineHeight = `${fontSize * 1.5}px`;
        document.body.style.letterSpacing = `${(fontSize * 0.12).toFixed(2)}px`;
        document.body.style.wordSpacing = `${(fontSize * 0.16).toFixed(2)}px`; 


    }, [fontSize]);

    return (
        <div className="w-full p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
            <div className="grid grid-cols-3">
                <div className="col-span-2 sm:col-span-1">
                    <div className="flex justify-start col-span-1">
                        <div className="flex gap-4 ">
                            <div className="w-[44px] h-[44px] p-2 flex items-center justify-center border border-black">
                                <Image src="/height.svg" alt="Ikonka" width={26} height={26} className="invert" />
                            </div>
                            <div className="w-[44px] h-[44px] p-2 flex items-center justify-center border border-black">
                                <Image src="/width.svg" alt="Ikonka" width={26} height={26} className="invert" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center hidden col-span-1 space-x-2 sm:flex"></div>
                <div className="flex justify-end col-span-1">
                    <div className="flex gap-4 ">
                        <button onClick={() => setFontSize(19)} className="w-[60px] h-[60px] p-2 flex items-center justify-center border border-black"
                            aria-label="Zmień rozmiar czcionki na 19px">A</button>
                        <button onClick={() => setFontSize(24)} className="w-[60px] h-[60px] p-2 flex items-center justify-center border border-black"
                            aria-label="Zmień rozmiar czcionki na 24px">A+</button>
                        <button onClick={() => setFontSize(30)} className="w-[60px] h-[60px] p-2 flex items-center justify-center border-1 border-black"
                            aria-label="Zmień rozmiar czcionki na 30px">A++</button>
                        <div className="w-[60px] h-[60px] p-2 flex items-center justify-center border-1 border-black">
                            <Image src="/contrast.svg" alt="Ikonka" width={26} height={26} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavbarWCAG;