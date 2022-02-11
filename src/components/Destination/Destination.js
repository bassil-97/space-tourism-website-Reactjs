import React, {useState, useEffect} from 'react';
import './Destination.css';

import data from '../../data.json';

import Navbar from '../Navbar/Navbar';


export default function Destination() {

    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState();
   
    useEffect(() => {
        setPlanets(data[0].destinations);
        setSelectedPlanet(data[0].destinations["Moon"]);
    }, []);

    const fetchPlanetData = (planet) => {
        let item = planets.filter(function(el) {
            return el.name === planet;
        });
        setSelectedPlanet(item[0]);
    };

    return(
        <div className='destination'>
            <Navbar />
            <div className='destination__content'>
                <h5 className='section__title'>pick your destination</h5>
                <div className='planets__info'>
                    <div className='row'>
                        <div className='col-lg-6'>
                        {selectedPlanet && <img src={selectedPlanet.images["png"]} width="350px" height="350px" alt="Destination" />}
                        </div>
                        <div className='col-lg-6'>
                            <div className='planets__list'>
                                {planets && planets.map((item) => {
                                    return <span key={item.name} onClick={() => fetchPlanetData(item.name)}>{item.name}</span>
                                })}
                            </div>
                            <div className='destination__info'>
                                <h3>{selectedPlanet && selectedPlanet.name}</h3>
                                {<p>{selectedPlanet && selectedPlanet.description}</p>}
                            </div>
                            <hr />
                            <div className='measuers__content'>
                                <div className='measure'>
                                    <small className='text-uppercase mb-2'>avg. distance</small>
                                    <h6>{selectedPlanet && selectedPlanet.distance}</h6>
                                </div>
                                <div className='measure'>
                                    <small className='text-uppercase mb-2'>est. travel time</small>
                                    <h6>{selectedPlanet && selectedPlanet.travel}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
