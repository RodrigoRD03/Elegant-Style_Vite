import React from "react";
import image from "../../constants/image";
import "./LineCaution.css"

const LineCaution = (props) => {
    const items = []
    for(let i = 0; i < 20; i++){
        items.push(<img className="app__LineCaution-img" key={i} src={image.Caution} alt={`Imagen ${i}`} />)
    }
    return (
        <div className="app__LineCaution" id={props.id}>
            {items}
        </div>
    )
}

export default LineCaution;