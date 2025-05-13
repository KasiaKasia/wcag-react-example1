import NavbarWCAG from "../components/navbar/navbar-WCAG";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
    return (
        <div className="grid p-4 pb-20 font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <NavbarWCAG />
                <Navbar />
                <article className="mx-auto px-8 max-w-screen-lg w-full">
                    <h1>Nawigacja za pomocą klawiatury:</h1>
                    <ol className="list-inside list-decimal  text-left">
                        <li><strong>Nawigacja za pomocą klawiatury</strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li>  <strong>TAB (idź do przodu), </strong></li>
                            <li>  <strong>Shift+TAB (idź do tyłu), </strong></li>
                            <li>  <strong>Enter (wybierz), </strong></li>
                            <li>  <strong>Esc (wyjdź/zamknij),  </strong></li>
                            <li>  <strong>Spacja (oznacz/rozwiń w np. pola rozwijane, listy rozwijane), </strong></li>
                            <li>  <strong>strzałki „góra” i „dół” (przechodzenie po elementach listy rozwijanej), </strong></li>
                            <li>Wykonanie powyższych punktów uzyskuje się dodając właściwość <code>tabindex = &quot;0&quot; do np.: div, input, button</code>:</li>
                        </ul>
                    </ol>
                </article>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
