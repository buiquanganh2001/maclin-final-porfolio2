import React from 'react'
import Particle from '../Components/Particle';
import styled from 'styled-components';

import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            
            <div className="typography">
                <h1>Hi I'm   <span>B-Pain </span></h1>
                <p> “Pain Is The Only Way To Teach, Pain Is The Only Solution To Peace. If You Want To Know Pain, You Need To Understand Pain.”  B-Pain                
                </p>
                    <div className="icons">
                        <a href="https://codepen.io/pen" className="icon i-facebook">
                            <FacebookIcon />
                        </a>
                        <a href="https://codepen.io/pen" className="icon i-github">
                        <GithubIcon />
                        </a>
                        <a href="https://codepen.io/pen" className="icon i-youtube">
                            <YoutubeIcon />
                        </a>
                        
                    </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                    
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    color: red;
                    border: 2px solid red;
                }
            }
            .i-github{
                &:hover{
                    color: #5F4687;
                    border: 2px solid #5F4687;
                }
            }

        }



        
    }


`;

export default HomePage ;
