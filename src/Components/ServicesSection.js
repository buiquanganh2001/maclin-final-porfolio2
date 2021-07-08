import React from 'react'
import {InnerLayout} from '../styles/Layouts.js';
import styled from 'styled-components';
import Title from './Title.js';
import ServiceCard from './ServiceCard.js';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span = {'services'} />
                <div className="services">
                    <ServiceCard 
                    image={design} 
                    title={'Web Design'} 
                    paragraph={'“Love is sacrifice...”.'}
                    />
                    <div className="mid-card">
                    <ServiceCard 
                    image={intelligence} 
                    title={'Rinnegan Intelligence'} 
                    paragraph={'Those who do not understand true pain can never understand true peace.'}
                    />
                    </div>
                    
                    <ServiceCard 
                    image={gamedev} 
                    title={'Game Dev'} 
                    paragraph={'“if you do not understand someone pain then you do not understand him”'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}
const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        .mid-card{
            margin: 0 1.2rem;
        }
    }
`;


export default ServicesSection;
