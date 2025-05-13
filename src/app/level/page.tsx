import NavbarWCAG from "../components/navbar/navbar-WCAG";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
    return (
        <div className="grid p-4 pb-20 font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <NavbarWCAG />
                <Navbar />
                <article className="mx-auto px-8 max-w-screen-lg w-full">
                    <h1>Poziomy WCAG:</h1>
                    <ol className="list-inside list-decimal  text-left">
                        <li><strong>Poziom A (Minimalna dostępność)</strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li>Strona spełnia <strong>podstawowe wymagania dostępności.</strong></li>
                            <li>Jest to najniższy poziom, który usuwa najpoważniejsze bariery.</li>
                            <li>Przykłady wymagań:</li>
                            <ol className="list-inside list-[square] text-left">
                                <li className="pl-6">Strona powinna być nawigowalna przy użyciu klawiatury.</li>
                                <li className="pl-6">Obrazy muszą mieć alternatywny tekst (<code>alt</code>).</li>
                                <li className="pl-6">Treść nie powinna powodować napadów padaczkowych (np. brak migających elementów).</li>
                            </ol>
                        </ul>

                        <li><strong>Poziom AA (Rekomendowana dostępność)</strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li>To standardowy poziom wymagany dla instytucji publicznych i większości stron.</li>
                            <li>Strony na tym poziomie są dostępne dla większej liczby osób.</li>
                            <li>Przykłady wymagań:</li>
                            <ol className="list-inside list-[square] text-left">
                                <li className="pl-6"><strong>Kontrast tekstu względem tła wynosi co najmniej 4.5:1.</strong></li>
                                <li className="pl-6">Strona działa dobrze zarówno na urządzeniach mobilnych, jak i desktopowych.</li>
                                <li className="pl-6">Nagłówki i etykiety są jednoznaczne i pomagają w nawigacji.</li>
                            </ol>
                        </ul>

                        <li><strong>Poziom AAA (Najwyższa dostępność)</strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li>Jest to najbardziej rygorystyczny poziom dostępności.</li>
                            <li>Wymagany w przypadku treści dla osób z dużymi niepełnosprawnościami (np. osoby niewidome, słabowidzące).</li>
                            <li>Przykłady wymagań:</li>
                            <ol className="list-inside list-[square] text-left">
                                <li className="pl-6"><strong>Kontrast tekstu wynosi co najmniej 7:1.</strong></li>
                                <li className="pl-6">Język strony jest prosty i łatwy do zrozumienia.</li> 
                                <li className="pl-6">Wszystkie multimedia mają transkrypcje i napisy.</li>
                            </ol>
                        </ul>
                    </ol>
                </article>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
