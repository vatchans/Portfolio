import React from 'react';
import { Slide } from "react-awesome-reveal";

const AchievementsSection = () => {
    return (
        <div className='abt'>
            <h1>Achievements</h1>
            <Slide>
                <div className='achievements'>
                    <img src='award.jpeg' alt="First prize award for Smart Water Tank Monitoring System" />
                    <p>
                        Awarded first prize for remarkable project Smart Water Tank Monitoring System by SRM Institute of Science and Technology on Project Day 2022
                    </p>
                </div>
            </Slide>
        </div>
    );
};

export default AchievementsSection;
