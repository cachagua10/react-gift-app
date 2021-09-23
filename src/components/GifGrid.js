import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    
    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className= "animate__animated animate__zoomIn animate__delay-1s"> { category } </h3>
            { loading && <p>Cargando gifs...</p> }
            <div className = 'card-grid'>
                 
                    {
                        images.map(img => (
                            <GifGridItem
                                key = { img.id }
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}


export default GifGrid
