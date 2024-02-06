import React from 'react'
import "../Styles/row.css"
import Pixels from './Pixels'

const Row = ({ width, selectedColor }) => {

    let pixels = []

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixels key={i} selectedColor={selectedColor} />) 
    }

    return (
        <div id="row">{pixels}</div>
    )
}

export default Row;
