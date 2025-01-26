import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <main>
        <section>
          <h2 className="bg-blue-300 font-bold text-red-800 pt-4 pb-4 text-center text-3xl underline mx-auto max-w-4xl">
            Featured Recipes
          </h2>
          <ul>
            <li className="mb-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-sans-serif underline text-center">
                Herb-Roasted Chicken
              </h3>
              <p className="font-sans-serif italic text-blue-900 text-center mx-6 sm:mx-12 md:mx-20">
                &ldquo;To make Herb-Roasted Chicken, rinse and dry a 3-4 lb whole
                chicken. Mix 2 tbsp olive oil, 2 tbsp chopped rosemary, 2 tbsp
                chopped thyme, 2 minced garlic cloves, 1 tsp salt, 1 tsp black
                pepper, and 1 tsp paprika. Rub mixture on chicken and stuff 1
                lemon quarter in cavity. Roast in oven at 425°F (220°C) for
                45-50 minutes. Let rest 10-15 minutes, then carve and serve.&ldquo;
              </p>
            </li>
            <li className="mb-8">
              <div className="flex justify-center">
                <Image
                  src="/r1.jpeg"
                  alt="Herb-Roasted Chicken"
                  width={300}
                  height={300}
                />
              </div>

              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-sans-serif underline text-center">
                Smoothie Bowl
              </h3>
              <p className="font-sans-serif italic text-blue-900 text-center mx-6 sm:mx-12 md:mx-20">
                &ldquo;A delicious meal for kids&ldquo;
              </p>
            </li>

            <div className="flex justify-center mb-8">
              <Image
                src="/r2.jpeg"
                alt="Smoothie Bowl"
                width={300}
                height={300}
              />
            </div>
            <li>
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-sans-serif underline text-center">
                Tandoori-Chicken-Recipe
              </h3>
              <div className="flex justify-center mb-8">
                <Image
                  src="/r3.jpeg"
                  alt="Tandoori-Chicken-Recipe"
                  width={300}
                  height={300}
                />
              </div>
              <p className="font-sans-serif italic text-blue-900 text-center mx-6 sm:mx-12 md:mx-20">
                To make delicious Tandoori Chicken, marinate 1 1/2 pounds
                boneless chicken pieces in a mixture of 1/2 cup plain yogurt, 2
                tablespoons lemon juice, 2 tablespoons ghee or oil, 2 teaspoons
                garam masala, 1 teaspoon cumin powder, 1 teaspoon coriander
                powder, 1/2 teaspoon cayenne pepper (optional), 1/2 teaspoon
                salt, 1/4 teaspoon black pepper, 2 cloves garlic (minced), and 1
                tablespoon ginger paste for 30 minutes to 2 hours. Then, preheat
                your oven to 400°F (200°C) or tandoor/grill. Remove the chicken
                from the marinade, shaking off excess, and cook for 15-20
                minutes or until cooked through. Finally, garnish with chopped
                cilantro and serve with naan or rice.
              </p>
            </li>
          </ul>
        </section>
        <section className="latest-posts">
          <h2 className="bg-blue-300 font-bold text-red-800 pt-4 pb-4 text-center text-2xl underline mx-auto max-w-4xl">
            Latest Posts
          </h2>
          <div className="flex justify-center pt-4">
            <Image src="/post1.jpeg" alt="post" width={300} height={300} />
          </div>
          <div className="flex justify-center pt-4">
            <Image src="/post2.jpeg" alt="post" width={300} height={300} />
          </div>

          <ul>
            <li className="mb-6">
              <h3 className="text-xl font-bold text-purple-800 font-sans-serif text-center underline">
                Greek Chicken Souvlaki
              </h3>
              <p className="font-sans-serif italic text-blue-900 p-4 text-center mx-6 sm:mx-12 md:mx-20">
                endless satisfaction
              </p>
            </li>
            <li className="mb-6">
              <h3 className="text-xl font-bold text-purple-800 font-sans-serif text-center underline">
                Greek Biscuit Bake
              </h3>
              <p className="font-sans-serif italic text-blue-900 p-4 text-center mx-6 sm:mx-12 md:mx-20">
                Kid&lsquo;s Favourite
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold text-purple-800 font-sans-serif text-center underline">
                Spankopita
              </h3>
              <p className="font-sans-serif italic text-blue-900 p-4 text-center mx-6 sm:mx-12 md:mx-20">
                try this
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
