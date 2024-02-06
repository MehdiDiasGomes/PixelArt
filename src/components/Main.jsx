import { CirclePicker } from "react-color"
import Drawing from "./Drawing"
import { useState } from "react"
import "../Styles/main.css"

const Main = () => {

    const [colorSelected, SetColorSelected] = useState("#f44336")
    const [panelWidth, setPanelWidth] = useState(16)
    const [panelHeight, setPanelHeight] = useState(16)
    const [hideOption, setHideOption] = useState(false)
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
    const [btnText, setBtnText] = useState("VALIDER")

    const setColor = (color) => {
        SetColorSelected(color.hex)
    }

    const initializeDrwaing = () => {
        setHideOption(!hideOption)
        setHideDrawingPanel(!hideDrawingPanel)

        btnText === "VALIDER" ? setBtnText("RESET") : setBtnText("VALIDER")
    };

    return (
        <div className="main">
            <div className="container flex items-center py-10 flex-col gap-3">
                <h1 className="text-6xl font-bold text-white">
                    Pixel Art
                </h1>

                <div className="flex flex-col items-center">
                    {hideDrawingPanel && (<div className="flex gap-4 text-center py-12 justify-center items-center">
                        <div className="in flex flex-col gap-3">
                            <input className="panelParam" type="number" defaultValue={panelWidth} onChange={(e) => setPanelWidth(e.target.value)} max={20} />
                            <span className="text-white text-1xl">Largeur</span>
                        </div>
                        <div className="in flex flex-col gap-3">
                            <input className="panelParam" type="number" defaultValue={panelHeight} onChange={(e) => setPanelHeight(e.target.value)} max={20} />
                            <span className="text-white text-1xl">Hauteur</span>
                        </div>
                    </div>)}
                    <div className="btn">
                        <button className="btn-valid" onClick={initializeDrwaing}>{btnText}</button>
                    </div>
                </div>

                <div className=" py-5 flex justify-center items-center gap-20">
                    {<div className="circlePicker py-12 absolute bottom-0 left-10">
                        <CirclePicker color={colorSelected} colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#000000", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#b71c1c", "#607d8b"]} onChangeComplete={setColor} />
                    </div>}

                    {hideOption && <Drawing width={panelWidth} height={panelHeight} selectedColor={colorSelected} />}
                </div>
            </div>
        </div>

    )
}

export default Main;
