import React from 'react'
import { Link } from "react-router-dom";

export const ProductItem = (props) => {
    let title;
    switch (props.itemName) {
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
    let href = "/products/" + props.itemName;
    return (
        <div className="product-item bb-8-green">
            <img src={props.src} alt={props.itemName} />
            <h3 className="grey">{title}</h3>
            <Link to={href}><button className="bg-royal-blue">Know More</button></Link>
        </div>
    )
}