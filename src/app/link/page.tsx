import NavbarWCAG from "../components/navbar/navbar-WCAG";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
    return (
        <div className="grid p-4 pb-20 font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <NavbarWCAG />
                <Navbar />
                <article className="mx-auto px-8 max-w-screen-lg w-full">
                    <h1>Linki, odsyłacze, przyciski:</h1>
                    <ol className="list-inside list-decimal  text-left">
                        <li><strong>Linki, odsyłacze, przyciski</strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li>Linki, odsyłacze, przycisk powinien mieć <strong>obszar klikalny co najmniej 44x44 px (Kryterium 2.5.5 (Target Size) – poziom AAA)</strong>
                                <p>Jeśli nie możesz zwiększyć rozmiaru, dodaj odpowiedni padding lub elementy odstępu dookoła.</p>
                                <p>Linki w akapitach tekstu nie muszą spełniać wymagań 44 na 44 (szerokość × wysokość_ pikseli CSS.</p>
                                <p>Źródła: </p>
                                <p>1. <a href="https://www.w3.org/Translations/WCAG21-pl/#rozmiar-celu-dotykowego">Kryterium sukcesu 2.5.5 Rozmiar celu dotykowego</a></p>
                                <p>2. <a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#examples">Link tekstowy w akapicie</a></p>
                            </li>

                            <li>Linki, odsyłacze <strong>musi być wyraźnie oznaczony</strong>, gdy jest w fokusie (np. obramowanie, zmiana koloru, podkreślenie).</li>
                            <p>przykład:</p>
                            <p className="list-inside list-[square] text-left">
                                <code> a:focus &#123;</code>
                                <code> outline: 2px solid #000;</code>
                                <code> outline-offset: 4px;
                                    &#125;
                                </code>


                            </p>
                            <p>Źródła: </p>
                            <p>1. <a href="https://www.w3.org/WAI/WCAG22/Techniques/css/C45#description">:focus-visible</a></p>
                            <li>Jeśli link otwiera np. nową kartę (<code>target=&quot;_blank&quot; </code>), warto dodać: </li>
                            <code>
                                <a href="..." target="_blank" rel="noopener noreferrer" aria-label="Otwiera się w nowej karcie">target=&quot;_blank&quot; rel=&quot;noopener noreferre&quot; aria-label=&quot;Otwiera się w nowej karcie&quot;</a>
                            </code>

                            <p> 🔐<code>noopener</code> </p> 
                            <p>Zapobiega, aby nowo otwarta strona miała  <strong>dostęp do window.opener.</strong></p>
                            <p> Dzięki temu <strong>zabezpiecza przed atakiem typu <code>&quot; tabnabbing &quot;</code> , w którym nowa strona mogłaby zmienić zawartość oryginalnej strony</strong> (np. podmienić formularz logowania).</p>
                            
                             <p> 🕵️‍♂️<code>noreferrer</code> </p>
                            <p><code>Nie przekazuje nagłówka Referer do docelowego URL.</code> </p>
                            <p>
                                Czyli strona, do której prowadzi link, nie dowie się, z jakiej strony użytkownik przeszedł.
                            </p>

                            <li> <strong>Kontrast tekstu (Contrast, Poziom AAA)</strong>
                                <p>Kontrast między kolorem tekstu a tłem:<strong>minimum 7:1</strong> (dla zwykłego tekstu, np. link niepogrubiony)</p>
                            </li>
                            <li>Dla przycisku jeśli używasz ikony bez tekstu, musi być aria-label.</li>
                            <p>Przykład:</p>
                            <p>
                                <code>
                                    &lt;button aria-label=&quot;Zamknij okno&quot;&gt; &lt;svg&gt;..&lt;/svg&gt; &lt;/button&gt;
                                </code>
                            </p>
                        </ul>




                    </ol>


                </article>

            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
