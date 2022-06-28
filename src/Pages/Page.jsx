import React from 'react'
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import FlexibleLayout from '../Components/FlexibleLayout';

const Page = (props) => {
    const acf_fields = props.acf_fields
    console.log(props.posts)
    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <div className='container mx-auto px-2'>
                <Header />
                    {acf_fields?.flexible && <FlexibleLayout fields={acf_fields.flexible} />}
                    {props?.content && <div dangerouslySetInnerHTML={{ __html: props.content }} />}
                <Footer />
            </div>
        </>
    )
}

export default Page