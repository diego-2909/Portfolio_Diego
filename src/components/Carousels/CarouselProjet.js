import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousele.css"
import projetPortfolio from "../../media/Projet1.png"
import imageprojetjava1 from "../../media/imageprojetjava1.png"
import imageprojetjava2 from "../../media/imageprojetjava2.png"


const CarouselProjet = () => {



    return (
        <div className='background-carousel' id="idprojets">


            <h2 data-aos="fade-up" data-aos-duration="1000" className='nomProjet'>Projets</h2>

            <div data-aos="fade-up" data-aos-duration="1000" className="bloc-carousel">

                <Carousel showStatus={false} infiniteLoop={true} swipeable={true} emulateTouch={true} >
                    <div key="slide1" className='slideabc'>

                        <div className='image-carousel'>
                            <img src={imageprojetjava2} alt="" className='image-projet-carousel imagecache' />
                            <img src={imageprojetjava1} alt="" className='image-projet-carousel' />



                        </div>
                        <h4>Blockchain en C et en Java</h4>
                        <p> lien Github : <a className='lienProjet' href='https://github.com/diego-2909/Projet_Blockchain/tree/main/Projet_Blockchain'>ici</a></p>



                    </div>

                    <div key="slide2" className='slideabc'>

                        <div className='image-carousel'>
                            <img src={projetPortfolio} alt="" className='image-projet-carousel' />
                        </div>
                        <h4>Portfolio</h4>
                        <p> lien Github : <a className='lienProjet' href='https://github.com/diego-2909/Portfolio_Diego'>ici</a></p>



                    </div>
                </Carousel>


            </div>



        </div >
    );
};

export default CarouselProjet;