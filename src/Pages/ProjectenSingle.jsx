import React from 'react'
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import FlexibleLayout from '../Components/FlexibleLayout';

const Single = (props) => {
    console.log(props)
    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <Header />
                {props?.acf?.flexible && <FlexibleLayout fields={props.acf.flexible} />}
            <Footer />
        </>
    )
}

export default Single