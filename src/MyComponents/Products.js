import React from 'react'
import { ProductBox } from './ProductBox'
import CleanRoom from "../Images/CleanRoom.jpg"
import GarmentCubicle from "../Images/GarmentCubicle.jpg"
import BiosafetyLabValidation from "../Images/BiosafetyLabValidation.jpg"
import LargeScaleAnimalFacility from "../Images/LargeScaleAnimalFacility.jpg"
import DunkTank from "../Images/DunkTank.jpg"
import ArthopodBiosafety from "../Images/ArthopodBiosafety.jpg"
import AnimalBioSafetyLabs from "../Images/AnimalBioSafetyLabs.jpg"
import PassBox from "../Images/PassBox.jpg"
import BioSafetyLabsFacility from "../Images/BioSafetyLabsFacility.jpg"

export const Products = (props) => {
    return (
        <div>
            <div className="product-div">
                <span className="head">{props.title}</span>
                <ProductBox item1="CleanRoom" item2="GarmentCubicle" item3="BiosafetyLabValidation" src1={CleanRoom} src2={GarmentCubicle} src3={BiosafetyLabValidation} />
                <ProductBox item1="LargeScaleAnimalFacility" item2="DunkTank" item3="ArthopodBiosafety" src1={LargeScaleAnimalFacility} src2={DunkTank} src3={ArthopodBiosafety} />
                <ProductBox item1="AnimalBioSafetyLabs" item2="PassBox" item3="BioSafetyLabsFacility" src1={AnimalBioSafetyLabs} src2={PassBox} src3={BioSafetyLabsFacility} />
            </div>
        </div>
    )
}
