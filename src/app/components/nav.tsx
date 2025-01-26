import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-blue-900 text-white font-sans  p-2 ">
      <Link href="/" className=" font-bold hover:bg-blue-700 p-2 rounded">Home</Link>
      
      <Link href="/blogs" className=" font-bold hover:bg-blue-700 p-2  rounded">Blogs</Link> 
      <Link href="/about" className=" font-bold hover:bg-blue-700 p-2 rounded">About</Link> 
      <Link href="/contact" className=" font-bold hover:bg-blue-700 p-2  rounded">Contact</Link> 
      <Link href="/faq" className=" font-bold hover:bg-blue-700 p-2  rounded">FAQ</Link> 
      <Link href="/services" className=" font-bold hover:bg-blue-700 p-2  rounded">Services</Link>

    </div>
  );
}
