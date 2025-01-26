"use client";
import Image from "next/image";
import { useState } from "react";
export default function Blog() {
  const [showMore, setShowMore] = useState(false);
  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  const [tryMore, setTryMore] = useState(false);
  const handleLearnMore = () => {
    setTryMore(!tryMore);
  };
  // comment 
  type Comment = {
    name: string;
    email: string;
    message: string;
  };

  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState<Comment>({ name: "", email: "" , message: ""});

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setComments([...comments, formData]); // Add new comment to the list
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } else {
      alert("Please fill out all fields.");
    }
  };
  
  
  return (
    <div className="bg-slate-200 w-full h-full px-4 sm:px-8">
      <section className="blog-posts">
        <h1 className="font-bold text-blue-800 text-center p-4 underline text-4xl">
          Cooking at Home: A Journey into Health and Happiness
        </h1>
        <h2 className="font-bold text-blue-800 pt-[5px] text-center p-4 underline text-4xl m-auto">
          Latest Blog Posts
        </h2>

        <div className="flex flex-col w-[500px] sm:w-[500px] h-auto m-auto">
          <h3 className=" underline font-bold text-red-800 pt-2 pb-2 p-4 text-lg text-center sm:text-2xl">
            The Benefits of Cooking at Home
          </h3>
          <p className=" font-sans italic text-blue-900 font-bold text-center px-2 sm:px-4">
            &ldquo;Cooking at home offers numerous benefits! It allows for
            healthier eating, stress relief, and quality time with family. You
            can control calories, save money, and preserve cultural traditions.
            Plus, it boosts confidence and promotes mental well-being. Cooking
            at home is a simple yet effective way to improve overall health and
            happiness.&ldquo;
          </p>
          <button
            className="w-auto px-4 py-2 border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-700 font-bold flex justify-center items-center rounded-[5px] bg-blue-300 p-2 m-auto"
            onClick={handleReadMore}
          >
            Read More
          </button>
          {/* Conditionally render more content based on state */}
          {showMore && (
            <div className="mt-4">
              <p className="font-sans italic text-blue-900 text-center px-2 sm:px-4">
                &ldquo;You can control calories, save money, and preserve
                cultural traditions. Plus, it boosts confidence and promotes
                mental well-being.&rdquo;
              </p>
            </div>
          )}
          {/* <Image src="/benefits-cooking-at-home.webp" alt="blog1" width={500} height={500} className="mt-[30px]"/> */}
        </div>

        <div className="w-[500px] h-auto m-auto">
          <h3 className=" underline font-bold text-red-800 pt-2 pb-2 p-4 text-lg text-center sm:text-2xl ">
            Top 5 Healthy Recipes for Busy Days
          </h3>
          <p className="font-sans italic text-blue-900 font-bold px-2 sm:px-4 text-center">
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
            features marinated chicken thighs that grill or bake to perfection.{" "}
            <em>
              {" "}
              <b>Mediterranean and Orzo bundles tenderloin</b>
            </em>
            , orzo pasta, spinach, and feta cheese for a perfect busy-day
            meal.&ldquo;
          </p>
          <button
            className=" w-auto px-4 py-2 border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-700 font-bold flex justify-center items-center rounded-[5px] bg-blue-300 p-2 m-auto mt-[10px]"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
          {tryMore && (
            <div className="mt-4">
              <p className="font-sans italic text-blue-900 text-center px-2 sm:px-4">
                For something vegetarian, try Caprese Stuffed Portobello
                Mushrooms, filled with fresh mozzarella, cherry tomatoes, and
                basil, baked to melty perfection. Lemon Garlic Salmon is a
                one-pan dish that pairs flaky salmon with a burst of citrus and
                garlic. Need a quick breakfast-for-dinner? Whip up Avocado Toast
                with Poached Eggs, topped with chili flakes and microgreens for
                added flavor. For a hearty soup, make Thai Coconut Curry Soup, a
                blend of creamy coconut milk, curry spices, chicken, and
                veggies, ready in under 30 minutes. Finally, indulge in Turkey
                and Veggie Lettuce Wraps, loaded with lean protein, crunchy
                vegetables, and a hint of soy sauce for a guilt-free treat.
                These recipes ensure that even on the busiest days, you can
                enjoy delicious, wholesome meals that fuel your body and satisfy
                your taste buds.
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center pt-4 gap-[20px] mt-[10px]">
          <Image
            src="/cheeese-cake-tarts.jpg"
            alt="Cheese Cake Tarts Recipe"
            width={400}
            height={400}
            className="w-full sm:w-[400px] h-auto"
          />
          <Image
            src="/Minestrone-Soup.jpg"
            alt="Minestrone Soup Recipe"
            width={400}
            height={300}
            className="w-full sm:w-[400px] h-auto "
          />
          <Image
            src="/winter-pizza-recipe.jpg"
            alt="Winter Pizza Recipe"
            width={400}
            height={400}
            className="w-full sm:w-[400px] h-auto"
          />
        </div>
        {/* <button className=" w-auto px-4 py-2 mt-[10px] border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-700 font-bold flex justify-center items-center rounded-[5px] bg-blue-300 p-2 m-auto">
          Try and Comment
        </button> */}
        </section>

        {/* Comment Section */}
      <section className="comment-section w-full sm:w-[500px] m-auto mt-10">
        <h2 className="underline font-bold text-red-800 pt-2 pb-2 p-4 text-xl">
          Comments
        </h2>

        {/* Comment Form */}
        <form
          className="w-full bg-gray-300 p-4 rounded-md shadow-md"
          onSubmit={handleSubmitComment}
        >
          <div className="mb-4">
            <label className="block font-bold text-gray-700" htmlFor="name"> Name:</label>
            <input
              type="text"
              name="name"
              id="name" 

              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-700" htmlFor='email'>Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          {/* Message Field */}
    <div className="mb-4">
      <label className="block font-bold text-gray-700">Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Write your comment here..."
        required
      ></textarea>
    </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
          >
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="comments-list mt-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index} // Use index as key since we are not using an ID
                className="bg-gray-100 p-4 rounded-md shadow-md mb-4"
              >
                <p className="font-bold text-gray-800">{comment.name}</p>
                <p className="text-gray-600">{comment.email}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No comments yet. Be the first!</p>
          )}
        </div>
      </section>
  
      
      
    </div>
  );
}
