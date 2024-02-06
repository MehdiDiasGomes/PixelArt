import Row from "./Row"
import "../Styles/drawing.css"
import { exportComponentAsPNG } from "react-component-export-image"
import { useState, useRef } from 'react'

export default function Drawing({ width, height, selectedColor }) {

    const drawingRef = useRef();

    let row = [];

    for (let i = 0; i < height; i++) {
        row.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return (
        <div id='drawing' className='flex flex-col gap-5 items-center'>
            <div id='pixels' ref={drawingRef}>{row}</div>
            <button id='btn-valid' onClick={() => { exportComponentAsPNG(drawingRef) }}>EXPORT</button>
        </div>
    )
}