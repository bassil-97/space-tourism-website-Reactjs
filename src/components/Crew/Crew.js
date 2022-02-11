import React from 'react';
import './Crew.css';

import Navbar from '../Navbar/Navbar';
import CrewMember from '../../assets/crew/image-anousheh-ansari.png';

export default function Crew() {
  return (
        <div className='crew__container'>
            <Navbar />
            <div className='crew__content'>
                <h5 className='section__title'>meet your crew</h5>
                <div className='crew__members'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h4 className='crew__job'>Flight Engineer</h4>
                            <h1 className='crew__member__name'>anousheh ansari</h1>
                            <p className='crew__member__description'>
                                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                                Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, 
                                and the first Iranian in space.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <img src={CrewMember} className='img-responsive' width="375px" height="402" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
