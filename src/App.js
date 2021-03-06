import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { Home } from "./MyComponents/Home";
import { Products } from "./MyComponents/Products";
import { Services } from "./MyComponents/Services";
import { OurWork } from "./MyComponents/OurWork";
import { Contact } from "./MyComponents/Contact";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './MyComponents/css/style.css'
import { ProductPage } from './MyComponents/ProductPage';
import CleanRoom from "./Images/CleanRoom.jpg"
import GarmentCubicle from "./Images/GarmentCubicle.jpg"
import BiosafetyLabValidation from "./Images/BiosafetyLabValidation.jpg"
import LargeScaleAnimalFacility from "./Images/LargeScaleAnimalFacility.jpg"
import DunkTank from "./Images/DunkTank.jpg"
import ArthopodBiosafety from "./Images/ArthopodBiosafety.jpg"
import AnimalBioSafetyLabs from "./Images/AnimalBioSafetyLabs.jpg"
import PassBox from "./Images/PassBox.jpg"
import BioSafetyLabsFacility from "./Images/BioSafetyLabsFacility.jpg"

function App() {
	return (
		<Router basename="LabInnovision-ReactJs">
			<Header title="LabInnovision"/>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/products">
					<Products title="Products" />
				</Route>
				<Route exact path="/services">
					<Services vertical />
				</Route>
				<Route exact path="/our-work">
					<OurWork />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route path="/contact?name=" render={() => {
                    return (
                      <Redirect to="/contact" /> 
                    )}
				}>

				</Route>
				<Route exact path="/products/CleanRoom">
					<ProductPage
						product="CleanRoom"
						src={CleanRoom}
						p1="We do clean room planning and design of clean room facilities on turnkey basis."
						p2="Clean room is a room in which the concentration of airborne particles is controlled to specified limits. Eliminating sub-micron airborne contamination is really a process of control. These contaminants are generated by people, process, facilities and equipment. They must be continually removed from the air. The level to which these particles need to be removed depends upon the standards required. The most frequently used standard is the Federal Standard 209E."
						p3="The only way to control contamination is to control the total environment. Air flow rates and direction, pressurization, temperature, humidity and specialized filtration all need to be tightly controlled. And the sources of these particles need to controlled or eliminated whenever possible. There is more to a clean room than air filters. Cleanrooms are planned and manufactured using strict protocol and methods.."
						p4="A Class 100 cleanroom is designed to never allow more than 100 particles (0.5 microns or larger) per cubic foot of air. Class 1000 and Class 10,000 cleanrooms are designed to limit particles to 1000 and 10,000 respectively."
						p5="Once a cleanroom is built it must be maintained and cleaned to the same high standards."
					/>
				</Route>
				<Route exact path="/products/GarmentCubicle">
					<ProductPage 
						product="GarmentCubicle" 
						src={GarmentCubicle}
						p1="Dynamic Garment Cubicle &amp; Shoe rack cabinet made of SS 304 to store at least 10 garments along with ten set of shoes, disposable head gear and face mask. The Garment Cubicle is with Blower, HEPA filter and UV Lamp .Blower assembly is with volume control damper for air circulation within the cabinet."
						p2="Blower unit is activated upon closing the unit door. The Filtered air re-circulating within the unit removes any floating particle from the suit stored within the unit."
					/>
				</Route>
				<Route exact path="/products/BiosafetyLabValidation">
					<ProductPage 
						product="BiosafetyLabValidation" 
						src={BiosafetyLabValidation}
						p1="Biosafety Laboratory Validation is a process that determines the fitness of the reagents, tests and equipment, which has been properly developed, optimized and standardized, for an intended purpose. 
						The validation process of a laboratory when being performed for the first time after taking over the facility from the construction company includes verification of laboratory installations and all the processes in total. 
						The validation ensures that all appropriate facility controls and prudent practices are in place to minimize to the greatest extent possible, the risks associated with the laboratory operations and the use of biohazardous material."
						p2="Our American Biological Safety Association( ABSA) Trained experienced team perform verification/commissioned of lab design, operational parameters, test results of HVAC system, BSCs/fume hoods, Alarms, HVAC controls, waste treatments ,etc. and documented prior to operation."
					/>
				</Route>
				<Route exact path="/products/LargeScaleAnimalFacility">
					<ProductPage 
						product="LargeScaleAnimalFacility" 
						src={LargeScaleAnimalFacility}
						p1="We do Large Scale Facility planning for use of primary and secondary barriers, facility design to balance hazard containment andprotection of personnel, product and environment on turnkey on the basis of international Guidelines: NIH RDNA Guidelines, OSHA Bloodborne Pathogen Rule,HIV/HBV Prod. / Research Facilities, BMBL ??? Agent Summary Statements, ASM Guideline, Canada, UK, EC."
						p2="Goals of Large Scale Work Practices"
						p3="GLSP:  Prevent adverse effect to employees"
						p4="BSL-1 LS - Minimize release of viable materials"
						p5="BSL-2 LS - Prevent release and employee exposure"
						p6="BSL-3 LS - Prevent release and employee exposure"
					/>
				</Route>
				<Route exact path="/products/DunkTank">
					<ProductPage 
						product="DunkTank" 
						src={DunkTank}
						p1="A barrier-designed dunk tank allows for the passage of materials that are heat sensitive or capable of being decontaminated using a liquid disinfectant or virucide across the bio containment barrier. The types of disinfectants (phenolics, glutaraldehydes, quaternary ammonium compounds, hydrogen peroxide, alcohols, proteinated iodines, and sodium hypochlorite) vary both for the types of infectious agents and their characteristics, such as corrosiveness, viability over time, and concentrations in use. Biosafety protocols will determine which disinfectant is used, when it is replenished, and what concentrations are required."
					/>
				</Route>
				<Route exact path="/products/ArthopodBiosafety">
					<ProductPage 
						product="ArthopodBiosafety" 
						src={ArthopodBiosafety}
						p1="We do planning and design of Arthropod facilities ( ACL 1-3 ) as per BMBL, Arthropod Containment Guidelines and as per Risk Assessment for Arthropod Vectors."
					/>
				</Route>
				<Route exact path="/products/AnimalBioSafetyLabs">
					<ProductPage 
						product="AnimalBioSafetyLabs" 
						src={AnimalBioSafetyLabs}
						p1="LABINNOVISION is engaged in Design, Construction, Testing, commissioning, Validation and maintenance of Animal Biosafety Labs"
						p2="ABSL Lab ( Level 1 to Level 4)"
						p3="ABSL 1
						work with RG 1 agents on animals. ABSL-1 used for animal work with well characterized, non-infectious materials."
						p4="ABSL 2
						work with animals inoculated with RG 2 agents in animals. Some RG3 agents where the agent won???t Grow in the animals. Special concerns over sharps usage and mucous membrane exposure as well aerosols because of area/person contamination."
						p5="ABSL 3
						Handling RG 3 agents with potential for aerosol transmission /disease may have serious health effects."
						p6="ABSL 4
						Work with animals inoculated with RG pathogens that pose a  high risk of life threatening disease, aerosol transmission, and pose high individual and community risk."
					/>
				</Route>
				<Route exact path="/products/PassBox">
					<ProductPage 
						product="PassBox" 
						src={PassBox}
						p1="Static Pass Box
						Static Pass Box cabinets are made of 304/316 grade stainless steel with electromagnetic interlocking arrangement between two doors with LED indication to show if any door is open, short wave UV light with hour meter and CFL lamp."
						p2="Dynamic Pass Box
						Pass-through cabinets are made of 304/316 grade stainless steel with mechanical interlocks with short wave UV light and HEPA filter for decontamination.The operational principle is based on the double sanitization by UV germicidal lamps and by sterile vertical laminar flow inside a pass through chamber with a flow from the top to the bottom."
					/>
				</Route>
				<Route exact path="/products/BioSafetyLabsFacility">
					<ProductPage 
						product="BioSafetyLabsFacility" 
						src={BioSafetyLabsFacility} 
						p1="LABINNOVISION is engaged in Design, Construction, Testing, commissioning, Validation and maintenance of Biosafety Labs. Lab design include Lab location
						planning , lab layout planning , HVAC layout, plumbing layout, electrical layout, human flow layout, material flow layout, Access control planning, construction
						material, power requirement planning for all systems, power backup system planning, Critical backup system planning ,system backup with redundant control , monitoring and control system logic planning, liquid effluent decontamination systems, plumbing service backflow protection, negative pressure gradient and directional airflow and safety equipment etc."
						p2="BSL 1- 
						suitable for work involving well characterized"
						p3="BSL 2-
						suitable for work with agents that pose moderate hazards to personal and the environment."
						p4="BSL 3-
						work performed with indigenous or exotic agents that may cause serious or potentially lethal disease."
						p5="BSL 4-
						work with dangerous/exotic agents with a high risk of aerosol transmitted lab infections and Life- threatening disease."
					/>
				</Route>
				<Route path="/" render={() => {
                    return (
                      <Redirect to="/" /> 
                    )}
				}>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
