import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <div className="w-full p-4 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
            <div className="flex justify-end col-span-1">
                <div className="flex items-center justify-center gap-4 text-center">
                    <Link href="/wcag" className="h-[42px] px-4 flex items-center justify-center border border-black whitespace-nowrap">WCAG</Link>
                    <Link href="/level" className="h-[42px] px-4 flex items-center justify-center border border-black whitespace-nowrap">Poziomy WCAG</Link>
                    <Link href="/text" className="h-[42px] px-4 flex items-center justify-center border border-black whitespace-nowrap">Tekst</Link>
                    <Link href="/link" className="h-[42px] px-4 flex items-center justify-center border border-black whitespace-nowrap">Linki, odsyłacze, przyciski</Link>
                    <Link href="/keyboard_navigation" className="h-[42px] px-4 flex items-center justify-center border border-black whitespace-nowrap">Nawigacja za pomocą klawiatury</Link>
                    <Link href="/website_map" className="h-[42px] px-4 flex items-center justify-center border border-black whitespace-nowrap">Mapa strony</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;