import Header from "@/components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between">
        <section className="w-full md:w-3/4 bg-blue-400">Preview Component</section>
        <aside className="w-full md:w-1/4 bg-red-400">Aside Component</aside>
      </main>
    </>
  );
}
export default HomePage;