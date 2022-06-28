import React from 'react'
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'

const Archive = (props) => {
    console.log(props.posts)
    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <div className='container mx-auto px-2'>
                <Header />
                    <h1>{props.title}</h1>
                    {props?.content && <div dangerouslySetInnerHTML={{ __html: props.content }} />}
                <Footer />
            </div>
        </>
    )
}

export default Archive