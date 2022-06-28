import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import parse, { domToReact } from 'html-react-parser';


const AddToCartButton = ({html}) => {
    function parseWithLinks(text) {
        const options = {
            replace: ({ name, attribs, children }) => {
                if (name === 'a' && attribs.href && !attribs.href.includes('add-to-cart')) {
                    return <Link href={attribs.href}>{domToReact(children)}</Link>;
                }
            }
        };
            
        return parse(text, options);
    }
    console.log(parseWithLinks(html))
    return (
        <div className="add-to-cart">
            {parseWithLinks(html)}
        </div>
    )
}

export default AddToCartButton