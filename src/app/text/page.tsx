import NavbarWCAG from "../components/navbar/navbar-WCAG";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
    return (
        <div className="grid p-4 pb-20 font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <NavbarWCAG />
                <Navbar />
                <article className="mx-auto px-8 max-w-screen-lg w-full">
                    <h1>Aby tekst był zgodny z wytycznymi WCAG 2.2, powinien spełniać następujące zasady:</h1>
                    <ol className="list-inside list-decimal  text-left">

                        <li><strong>Rozmiar tekstu </strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li>14 pt i 18 pt ( Poziom AAA)

                                <p>Przeliczenie 18 pt na px:</p>
                                <p>Zgodnie z typowym przelicznikiem ekranowym (96 DPI):</p>
                                <p>1 pt ≈ 1.333 px</p>
                                <p>Więc:</p>
                                <p>14 pt × 1.333 ≈ 19 px</p>
                                <p>18 pt × 1.333 ≈ 24 px</p>
                                <p>Źródła: </p>
                                <p><a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html#intent">- WCAG22</a></p>
                                <p><a href="https://www.w3.org/Translations/WCAG21-pl/#dfn-duzy-tekst">- duży tekst</a></p>

                            </li>
                        </ul>


                        <li><strong>Kontrast</strong></li>
                        <ul className="list-[square] list-inside text-left">
                            <li> Kontrast (Poziom AAA)</li>
                            <ol className="list-inside list-decimal text-left">
                                <li><strong>Normalny lub ≤ 14pt ≈ 18.66px - kontrast</strong> powinien wynosić <strong>7:1</strong> </li>
                                <li><strong>Duży tekst (normal ≥  min. 18pt ≈ 24px) - kontrast</strong> powinien wynosić <strong>4.5:1</strong>  </li> 
                                <li><strong>Duży tekst (bold ≥  min. 14pt ≈ 18.66px) - kontrast</strong> powinien wynosić <strong>4.5:1</strong>  </li> 

                                
                                <li>czyli dla małego tekstu duży kontrast, dla dużego tekstu mały kontrast</li>
                                <li><strong> Czarny (#000000), </strong> na <strong>biały (#FFFFFF)</strong> =<strong> 21:1</strong> — to <strong>maksymalna możliwa wartość kontrastu</strong></li>
                                <p>Źródła: </p>
                                <p><a href="https://wcag.lepszyweb.pl/?showtechniques=146#contrast-enhanced">- Kontrast (wzmocniony) Poziom AAA</a></p>
                                <p>Sprawdź kontrast: </p>
                                <p><a href="https://webaim.org/resources/contrastchecker/">- Sprawdź kontrast</a></p>
                            </ol>
                        </ul>

                       
                        <li><strong>Skalowalność i możliwość powiększenia</strong></li>
                        <ol>
                            <ul className="list-[square] list-inside text-left">
                                <li>Tekst musi być czytelny po powiększeniu do 200% bez utraty funkcjonalności. (1.4.4, Poziom AA)</li>
                                <li>Zachowanie odstępów między znakami i wierszami (1.4.12, Poziom AA):</li>
                            </ul>
                            <ol className="list-inside list-decimal text-left">
                                <li>Wysokość linii (line-height): co najmniej 1.5x wielkości czcionki
                                    <p>Zródło:</p>
                                    <p>
                                        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">line-height = font-size *1.5</a>
                                    </p>


                                </li>
                                <li>Odstęp między akapitami: co najmniej 2x wielkości czcionki</li>
                                <li>Odstęp między znakami (letter-spacing): co najmniej 0.12x wielkości czcionki
                                    <p>Zródło:</p>
                                    <p>
                                        <a href="https://www.w3.org/WAI/standards-guidelines/act/rules/24afc2/">letter-spacing = font-size *0.12</a>
                                    </p>
                                </li>
                                <li>Odstęp między słowami (word-spacing): co najmniej 0.16x wielkości czcionki
                                <p>Zródło:</p>
                                    <p>
                                        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">word-spacing = font-size *0.16</a>
                                    </p> 
                                </li>
                            </ol>
                        </ol>

                        <li><strong>Struktura i semantyka</strong></li>
                        <ol>
                            <ul className="list-[square]  list-inside text-left">
                                <li>Nagłówki powinny być logicznie uporządkowane (np. &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt; itd.) (1.3.1, Poziom A)</li>
                                <li>Etykiety formularzy powinny być jednoznaczne i poprawnie powiązane z polami (&lt;label for=&quot;id&quot;) (2.4.6, Poziom AA)</li>
                                <li>Linki powinny mieć opisowy tekst (np. zamiast &quot;kliknij tutaj&quot;, użyj &quot;Pobierz raport PDF&quot;) (2.4.4, Poziom A)</li>
                            </ul>
                        </ol>


                        <li><strong>Język i prostota treści</strong></li>
                        <ol>
                            <ul className="list-[square]  list-inside text-left">
                                <li>Ustaw język strony (&lt;html lang=&quot;pl&quot;) (3.1.1, Poziom A)</li>
                                <li>Unikaj trudnych słów i żargonu – jeśli są konieczne, dodaj definicję (3.1.3, Poziom AAA)</li>
                                <li>Tekst powinien być zrozumiały dla osób na poziomie edukacyjnym szkoły podstawowej (3.1.5, Poziom AAA)</li>
                            </ul>
                        </ol>

                        <li><strong>Unikanie migotania i animacji</strong></li>
                        <ol>
                            <ul className="list-[square]  list-inside text-left">
                                <li>Tekst i obrazy nie mogą migać częściej niż 3 razy na sekundę (2.3.1, Poziom A)</li>
                                <li>Jeśli tekst jest animowany, użytkownik powinien mieć możliwość zatrzymania animacji (2.2.2, Poziom A)</li>
                            </ul>
                        </ol>
                        <li><strong>Dostępność dla czytników ekranu</strong></li>
                        <ol>
                            <ul className="list-[square]  list-inside  text-left">
                                <li>Używaj semantycznego HTML-a, np. &lt;p&gt; dla akapitów, &lt;ul&gt;i &lt;ol&gt; dla list. </li>
                                <li>Zapewnij poprawne znaczniki ARIA dla dynamicznych treści.</li>
                                <li>Zapewnij tekst alternatywny (<code>alt</code>) dla obrazów z tekstem (1.4.5, Poziom AA).</li>
                            </ul>
                        </ol>
                    </ol>
                </article>
                <article>
                    <h1>Jak sprawdzić zgodność tekstu z WCAG 2.2?</h1>
                </article>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
