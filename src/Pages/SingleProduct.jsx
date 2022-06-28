import React from 'react'
import AppHead from '../Components/Shared/AppHead';
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import '../assets/scss/components/_SingleProduct.scss'
import AddToCartButton from '../Components/AddToCartButton/AddToCartButton';

const Single = (props) => {

    console.log(props)

    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <Header />
                <section className="single-product py-12">
                    <div className="single-product__wrap container">
                        <h1 className="title">{props.title}</h1>

                        <div className="single-product__main">
                            <div className="images">
                                <img src={props.thumbnail} alt={props.title} />
                            </div>
                            <div className="info">
                                <p className="price mb-6">
                                    {props.price.sale !== '' && <span className={'sale'}>€ {props.price?.sale}</span>}
                                    {props.price.regular !== '' && <span className={props.price.sale === '' ? 'sale' : 'regular'}>€ {props.price.regular}</span>}
                                </p>
                                <p className="stock mb-6">{props.stock}</p>
                                <div className="description mb-6" dangerouslySetInnerHTML={{__html: props.content}}/>
                                <AddToCartButton html={props.add_to_cart} />
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Single