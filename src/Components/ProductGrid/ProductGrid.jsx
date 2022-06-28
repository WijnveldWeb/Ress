import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import './ProductGrid.scss'

const ProductGrid = ({products}) => {
    return (
        <section className='product-grid'>
            <div className="product-grid__wrap container grid grid-cols-4 gap-4">
                {products.map(product => {

                    return (
                        <div key={product.id} className="product-grid__item">
                            <Link href={product.url}>
                                <img src={product.image} alt="" className="thumbnail" />
                                <p className="title">{product.title}</p>
                            </Link>
                            <div className="add-to-cart" dangerouslySetInnerHTML={{__html: product.add_to_cart}} />
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProductGrid