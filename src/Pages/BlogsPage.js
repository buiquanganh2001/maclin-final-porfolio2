import React from 'react'
import blogs from '../data/blogs';
import styled from 'styled-components';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Blogs'} span={'Blogs'}/>
                <InnerLayout className={'blog'}>
                {
                blogs.map((blog) => {
                    
                    return <div key={blog.id} className={'blog-item'}>
                        <div className="image">
                            <img src={blog.image} alt="" />
                        </div>
                        <div className="title">
                            <a href={blog.link}>
                                {blog.title}
                            </a>
                        </div>
                    </div>
                })
                }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-column-gap: rem;
        grid-row-gap: 3rem;
        grid-template-columns: repeat(2, 1fr);
        .blog-item{
            padding: 1rem 1rem;
            background-color: var(--background-dark-grey);
            &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 70%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                
            }
        }
        .title{
            a{
                font-size: 1.8rem;
                color: var(--white-color);
                padding:  2rem 0;
                cursor: pointer;
                &:hover{
                    color: var(--primary-color);
                    transition: all .4s ease-in-out;
                }

            }
        }
    }
`;
export default BlogsPage;


