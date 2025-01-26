'use client'

import React from 'react'
const Category = ({params} : { params: {category: string} })=> {
    console.log(params)
    return(
        <div>

        <h1> Category page </h1>
<h3> {params.category} </h3>
</div>
    )
}
export default Category