import React from 'react'
import { Link } from '@inertiajs/inertia-react';
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import FlexibleLayout from '../Components/FlexibleLayout';

const Index = (props) => {
    const acf_fields = props.acf_fields

    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <div className='front-page'>
                <Header />

                    {acf_fields?.flexible && <FlexibleLayout fields={acf_fields.flexible} />}

                <Footer />
            </div>

        </>
    )
}

export default Index