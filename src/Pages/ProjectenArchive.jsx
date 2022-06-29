import React from 'react'
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import '../assets/scss/components/_ProjectenArchive.scss'
import ProjectenListItem from '../Components/ProjectenListItem/ProjectenListItem';

const Archive = (props) => {
    console.log(props.posts)
    return (
        <>
            <div className='maincontainer'>

                <AppHead seo={props.yoast_meta} pageTitle={props.title} />
        
                <Header />
        
                    <main className="main">
                        <div className="projects-title">
                            <h1>{props.title}</h1>
                        </div>

                        <section className="project-list">

                            <div className="project-line">
                            </div>

                            {props.posts.map((post, index) => <ProjectenListItem key={index} title={post.title} date={post.date} link={post.link} thumbnail={post.thumbnail} />)}
                        
                        </section>
                    </main>
        
                <Footer />
            </div>
        </>
    )
}

export default Archive