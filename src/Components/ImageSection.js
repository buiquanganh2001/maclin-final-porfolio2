import React from 'react'
import styled from 'styled-components';
import resume from "../img/resume.png";
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content"><img src={resume} alt="resume image" /></div>
            
            <div className="right-content">
                
                    <h4>I am  <span>B-Pain</span></h4>
                
                <p className="pargraphy">
                “Pain Is The Only Way To Teach, Pain Is The Only Solution To Peace. If You Want To Know Pain, You Need To Understand Pain”. - B-Pain
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Languages</p>
                        <p>Nationality</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: B-Pain</p>
                        <p>: 18</p>
                        <p>: Rain Village</p>
                        <p>: Japanese</p>
                        <p>: Amegakure</p>
                        <p>: Akatsuki</p>
                    </div>
                </div>
                <PrimaryButton title= { 'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
            
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
            font-size: 2rem;
            
            }
        }
        .paragrpah{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            
            .info-title{
                padding-right: 3rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }


            }
        }
    }

`;
export default ImageSection
