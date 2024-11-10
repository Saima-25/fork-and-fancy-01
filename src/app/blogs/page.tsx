import Image from "next/image";
export default function Blog() {
  return (
    <div className="bg-slate-200">
      <main>
        <section className="blog-posts">
          <h2 className="font-bold text-blue-800 pt-1 pb-2 text-center p-4 underline text-4xl font-bold">
            Latest Blog Posts
          </h2>
          <ul>
            <li>
              <h3 className=" underline font-bold text-red-800 pt-2 pb-2 p-4 underline text-2xl ml-[450px]">
                The Benefits of Cooking at Home
              </h3>
              <p className="w-[500px] font-sans-serif italic text-blue-900 font-bold p-4 items-center text center ml-[450px]">
              &ldquo;Cooking at home offers numerous benefits! It allows for
                healthier eating, stress relief, and quality time with family.
                You can control calories, save money, and preserve cultural
                traditions. Plus, it boosts confidence and promotes mental
                well-being. Cooking at home is a simple yet effective way to
                improve overall health and happiness.&ldquo;
              </p>
              <button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-700 font-bold py-1 px-2 rounded bg-blue-300 p-4 ml-[630px]">
                Read More
              </button>
            </li>
            <li>
              <div className="flex items-center justify-center pt-4">
                <Image src="/blog1.jpeg" alt="blog1" width={500} height={500} />
              </div>

              <h3 className=" underline font-bold text-red-800 pt-2 pb-2 p-4 underline text-2xl ml-[450px]">
                Top 5 Healthy Recipes for Busy Days
              </h3>
              <p className="font-sans-serif italic text-blue-900 font-bold p-4 ml-[450px] mr-[300px]">
              &ldquo;For busy days, try these 5 healthy recipes that are quick,
                easy, and nutritious.{" "}
                <em>
                  {" "}
                  <b> Flavorful Chicken Fajitas</b>
                </em>{" "}
                , packed with marinated chicken and veggies, cooks in just 20
                minutes.{" "}
                <em>
                  {" "}
                  <b>Spaghetti & Meatball Skillet</b>
                </em>{" "}
                Supper is another speedy option.{" "}
                <em>
                  {" "}
                  <b>Shrimp Orzo with Feta</b>
                </em>{" "}
                combines protein and fiber for a satisfying meal.{" "}
                <em>
                  {" "}
                  <b>Herbed Balsamic Chicken</b>
                </em>{" "}
                features marinated chicken thighs that grill or bake to
                perfection.{" "}
                <em>
                  {" "}
                  <b>Mediterranean and Orzo bundles tenderloin</b>
                </em>
                , orzo pasta, spinach, and feta cheese for a perfect busy-day
                meal.&ldquo;
              </p>
              <button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-700 font-bold py-1 px-2 rounded bg-blue-300 p-4 ml-[630px]">
                Read More
              </button>
            </li>
            <div className="flex items-center justify-center pt-4 gap-20">
              <Image src="/blog2.jpeg" alt="blog2" width={500} height={500} />

              <Image src="/blog3.jpeg" alt="blog3" width={500} height={500} />
            </div>
          </ul>
        </section>
        <section className="categories">
          <h2 className=" underline font-bold text-red-800 pt-2 pb-2 p-4 underline text-2xl ">
            Categories
          </h2>
          <ul>
            <li className="font-bold hover:text-blue-800 pl-4">
              Healthy Recipes
            </li>
            <li className="font-bold hover:text-blue-800 pl-4">
              Food Photography
            </li>
            <li className="font-bold hover:text-blue-800 pl-4">Cooking Tips</li>
            <li className="font-bold hover:text-blue-800 pl-4">
              Restaurant Reviews
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
