export default function About() {
    return (
      <div className="bg-slate-200">
        <h1 className="font-bold text-blue-800 pt-1 pb-2 text-center p-4 underline text-4xl font-bold underline">
          About Us
        </h1>
        <p className="font-sans-serif italic text-blue-900 font-bold p-4">
          Our story began with a vision to make a difference. <br />
          Founded in 2010, our <br />
          company has grown from a small startup to a renowned industry leader.
        </p>
  
        <h2 className=" underline font-bold text-red-800 pt-2 pb-2 p-4 underline text-2xl ">
          Mission
        </h2>
        <p className="font-sans-serif italic text-blue-900 font-bold p-4">
          To empower businesses through cutting-edge technology.
        </p>
  
        <h2 className="underline font-bold text-red-800 pt-2 pb-2 p-4 text-2xl ">
          Vision
        </h2>
        <p className="font-sans-serif italic text-blue-900 font-bold p-4">
          To revolutionize the digital landscape.
        </p>
  
        <h2 className="  underline font-bold text-red-800 pt-2 pb-2 p-4 text-2xl ">
          Team
        </h2>
  
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
          <div className="bg-white shadow-md p-4 rounded">
            <h4 className="text-lg font-medium">Mr. Muhammad Wasay</h4>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h4 className="text-lg font-medium">Mr. Shayan</h4>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h4 className="text-lg font-medium">Mr. Arfain</h4>
            <p className="text-gray-600">Marketing Manager</p>
          </div>
        </div>
  
        <h2 className=" underline  font-bold text-red-800 pt-2 pb-2 p-4 text-2xl ">
          Contact
        </h2>
        <p className="pl-4">Email: info@example.com</p>
        <p className="pl-4">Phone: +92 321 4567890</p>
        <p className="pl-4">Address: 123 Main St, Lahore, Pakistan</p>
      </div>
    );
  }
  