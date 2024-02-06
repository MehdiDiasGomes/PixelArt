import React from 'react'
import "../Styles/pixels.css"
import { useState } from 'react'

const Pixels = ({ selectedColor}) => {

    const [pixelColor, setPixelColor] = useState("#fff")

    function applyColor() {
        setPixelColor(selectedColor)
    }

    const handDoubleClick = (event) => {
        setPixelColor("#fff")
        event.preventDefault();
    }

    return (
        <div className="pixel" onDoubleClick={handDoubleClick} onContextMenu={handDoubleClick} onClick={applyColor} style={{ backgroundColor: pixelColor}}></div>
    )

}

export default Pixels;
