import React, {useEffect, useState} from 'react';
import './Tabs.css';
import './Technology.css';

import Navbar from '../Navbar/Navbar';

import data from '../../data.json';

export default function Technology() {

    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        let tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 1; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        } 

        //Fetch technologies
        setTechnologies(data[0].technology);
    });

    function openCity(evt, cityName) {
        evt.preventDefault();
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        } 
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(cityName).style.display = "flex";
        evt.currentTarget.className += " active";
    }

    return (
        <div className='technology'>
            <Navbar />
            <div className='technology__content'>
                <h5 className='section__title'>space launch 101</h5>
                <div className='tabs__container'>
                    <div className="tab">
                        <button className="tablinks" onClick={(event)=> openCity(event, 'launch_vehicle')}>1</button>
                        <button className="tablinks" onClick={(event)=> openCity(event, 'spaceport')}>2</button>
                        <button className="tablinks" onClick={(event)=> openCity(event, 'capsule')}>3</button>
                    </div>
                    
                    {technologies && technologies.map((item) => {
                        return (<div key={item.key} id={item.id} className={"tabcontent"}>
                            <div>
                                <small>The Terminology...</small>
                                <h1>{item.name}</h1>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <img src={item.images.portrait} alt="image" />
                        </div>);
                    })}
                </div>
            </div>
        </div>
    );
}
