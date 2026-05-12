import React from "react";
import able from '../App/Assets/images/able1.jpg';
import lpd from '../App/Assets/images/latrobePD.png';
import lvpd from '../App/Assets/images/LVPD.jpg';
import ems from '../App/Assets/images/ems.jpg';
import gpd from '../App/Assets/images/gpd.jpg';


function    PartnersList() {
    const partners = [

        {
            name: "ABLE Communications",
            logo: able,
            url: "https://www.Morethanmeetstheeye.info/"
            
        },
        
        {
            name: "Latrobe PD",
            logo: lpd,
            url: "https://cityoflatrobe.com/services/police/index.php"

        },
        
        {
            name: "ligoner Valley PD",
            logo: lvpd,
            url: "https://www.ligoniervalleypolice.org/"
        }  
        /*
        {
            name: "Greensburg PD",
            logo: gpd,
            url: "https://www.greensburgpa.org/police-department"

        },
        
        {
            name: "Mutual Aid EMS",
            logo: ems,
            url: "https://www.mutual-aid.com/",
        }
        */

    ];

    return (
        <div className="partners">
            <h2>Our Partners</h2>

            <div className="partners-grid">
                {partners.map((partners, index) => (
                    <a
                    key={index}
                    href={partners.url}
                    target="blank"
                    rel="noreferrer"
                    className="partner-card"
                    >
                     <img src={partners.logo} alt={partners.name} /> 
                    </a>
                    
                ))}
            </div>
        </div>
    );   


}

export default PartnersList ;