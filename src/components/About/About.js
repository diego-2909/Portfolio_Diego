import React, { useEffect } from 'react';
import "./About.css"
import "aos/dist/aos.css";

const About = () => {
    return (
        <div className='background-About' id='aboutme'>

            <div data-aos="fade-up" data-aos-duration="1000" className="bloc-about" >
                <h2 className='titre-about'> À propos de moi</h2>

                <span className='description-about'>

                    Étudiant Toulousain de 21 ans en L2 informatique à l'université Paul Sabatier, je me dirige dès Septembre 2022 vers une licence Professionnelle RTAI (Responsable Technique d'Application Internet) à l'Université de Toulouse Capitole. <br /><br /> J'ai décidé de postuler dans cette licence  professionnelle après avoir commencé, en autodidacte, à faire de l'HTML et du CSS qui m'ont procuré un réel coup de coeur.
                    j'ai donc appris ces langages, puis appris les bases de Javascript pour ensuite m'interesser et utiliser la librairie React. Et en plus de tout ça, plus j'avance dans mon apprentissage , plus celà me passionne !
                    <br /><br />Étant donc très motivé et passioné, c'est pour celà que j'ai envie de trouver une alternance en developpement web afin de rentrer dans le monde du travail, d'acquérir une solide expérience professionnelle et de pouvoir mettre en pratique les notions prochainement étudiées au cours de ma licence professionnelle.
                </span>

            </div>


        </div >
    );
};

export default About;