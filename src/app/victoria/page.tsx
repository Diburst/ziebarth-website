import { HamburgerMenu } from "../hamburger-menu";

export default function VictoriaPage() {
  return (
    <>
      <HamburgerMenu />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <section className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-text-primary">
            Victoria
          </h1>
          <p className="mt-4 text-xl text-text-secondary">Coming soon...</p>
        </section>
      </main>
    </>
  );
}
