import React from 'react'
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import ProductGrid from '../Components/ProductGrid/ProductGrid';

const Shop = (props) => {
    console.log(props.products)
    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <Header />
                <ProductGrid products={props.products} />
            <Footer />
        </>
    )
}

export default Shop