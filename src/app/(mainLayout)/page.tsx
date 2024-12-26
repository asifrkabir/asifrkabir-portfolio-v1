import Banner from "./components/Banner";
import Skills from "./components/Skill/Skills";

export default function HomePage() {
  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <div className="mb-40">
        <Banner />
      </div>

      <div className="flex items-center justify-center mb-8">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          Technologies I Work With
        </h1>
      </div>
      <Skills />

      {/* <div className="flex items-center justify-center mb-8 mt-20">
        <h1 className="text-lg font-semibold md:text-2xl">Hot Deals 🔥</h1>
      </div>
      <Suspense>
        <HotDealsProducts />
      </Suspense> */}

      {/* <div className="flex items-center justify-center mb-8 mt-40">
        <h1 className="text-lg font-semibold md:text-2xl">All Products</h1>
      </div>
      <Suspense>
        <Products />
      </Suspense> */}
    </div>
  );
}
