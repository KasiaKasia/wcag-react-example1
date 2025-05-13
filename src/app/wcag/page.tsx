import NavbarWCAG from "../components/navbar/navbar-WCAG";
import Navbar from "../components/navbar/Navbar";

export default function Page() {
    return (
        <div className="grid p-4 pb-20 font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <NavbarWCAG />
                <Navbar />
                <article className="mx-auto px-8 max-w-screen-lg w-full">
                    <p>
                        <strong> WCAG (Web Content Accessibility Guidelines) to zbiór wytycznych opracowanych przez W3C (World Wide Web Consortium)</strong> mających na <strong>celu zapewnienie, że strony internetowe będą dostępne dla jak najszerszej grupy użytkowników, 
                        w tym osób z różnymi rodzajami niepełnosprawności.</strong>
                    </p>
                    <p>Wytyczne WCAG obejmują m.in. dostosowanie kolorów, zapewnienie alternatywnych tekstów do obrazów, umożliwienie nawigacji przy użyciu klawiatury oraz poprawę czytelności treści.</p>
                    <p>Celem WCAG jest poprawa dostępności sieci dla osób z problemami ze wzrokiem, słuchem, motoryką czy poznawaniem treści.</p>
                </article>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
