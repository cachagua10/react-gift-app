import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {
    /*Esta constante la uso unicamente si no va a cambiar nunca..
    const categories =['One Punch man', 'Dragon Ball', 'Sailor Moon'];*/

    const [categories, setCategories] = useState(['Dragon Ball'])
   
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories = { setCategories }/>
            <ol>
                {
                    categories.map( category =>( 
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    ))

                }
            </ol>
        </>
    )
}


export default GifExpertApp
