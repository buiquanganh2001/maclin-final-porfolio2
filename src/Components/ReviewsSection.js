import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from './ReviewItem';

function ReviewsSection() {
    return (
        
            <ReviewsStyled>
                <Title title= {'Reviews'} span = {'Reviews'} />
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem 
                        text= {'“When I Had Nothing And No One, I Always Had Pain.”'}
                        />
                        <ReviewItem 
                        text= {'“Love Breeds Sacrifice, Which In Turn Breeds Hatred. Then You Can Know Pain.”'}
                        />
                    </div>
                </InnerLayout>
            </ReviewsStyled>
        
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: flex;
    }
`;

export default ReviewsSection;
