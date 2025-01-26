import React from 'react'
import Link from 'next/link'
const page = () => {
    return(
        <div>

    <h2 className=" underline font-bold text-red-800 pt-2 pb-2 p-4  text-2xl ">Categories</h2>
    <ul>
<li className='font-bold hover:text-blue-800 pl-4'>
<Link href="/categories/recipes">Healthy Recipes</Link>
</li>
<li className='font-bold hover:text-blue-800 pl-4'>
<Link href="/categories/photography">Food Photography</Link>
</li>
<li className='font-bold hover:text-blue-800 pl-4'>
<Link href="/categories/tips">Cooking Tips</Link>
</li>
<li className='font-bold hover:text-blue-800 pl-4'>
<Link href="/categories/reviews">Restaurant Reviews</Link>
</li>
</ul>

</div>
  )
}

export default page