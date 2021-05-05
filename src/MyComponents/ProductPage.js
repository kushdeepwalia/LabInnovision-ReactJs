import React from 'react'

export const ProductPage = (props) => {
    let title;
    switch (props.product) {
        case "CleanRoom":                   title = "Clean Room"; break;
        case "GarmentCubicle":              title = "Garment Cubicle"; break;
        case "BiosafetyLabValidation":      title = "Biosafety Lab Validation"; break;
        case "LargeScaleAnimalFacility":    title = "Large Scale Animal Facility"; break;
        case "DunkTank":                    title = "Dunk Tank"; break;
        case "ArthopodBiosafety":           title = "Arthopod Biosafety"; break;
        case "AnimalBioSafetyLabs":         title = "Animal BioSafety Labs"; break;
        case "PassBox":                     title = "Pass Box"; break;
        case "BioSafetyLabsFacility":       title = "BioSafety Labs Facility"; break;
        default: break;
    }
    return (
        <div className="mainbody" id="introDivElement">
        <div className="left">
            <img src={props.src} alt={props.product} className="bb-8-green" />
        </div>
        <div className="right">
            <h3>{title}</h3>
            {props.p1 ? <p>{props.p1}</p>: ""}
            {props.p2 ? <p>{props.p2}</p>: ""}
            {props.p3 ? <p>{props.p3}</p>: ""}
            {props.p4 ? <p>{props.p4}</p>: ""}
            {props.p5 ? <p>{props.p5}</p>: ""}
            {props.p6 ? <p>{props.p6}</p>: ""}
        </div>
    </div>
    )
}
