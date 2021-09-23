import React from 'react'


const GifGridItem = ({id, title, url}) => {
    //console.log( id, tittle, url );
    return (
        <div className = 'card animate__animated animate__fadeIn animate__delay-2s'>
            <h5>{ title }</h5>
            <img src = { url } alt = { title } />
        </div>
    )
}



export default GifGridItem
