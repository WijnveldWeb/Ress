import { Link } from '@inertiajs/inertia-react';
import parse, { domToReact } from 'html-react-parser';
import React from 'react'

const ParseHTMLWithLinks = ({html}) => {
    const options = {
        replace: ({ name, attribs, children }) => {
            if (name === 'a' && attribs.href && !attribs.href.includes('add-to-cart')) {
                return <Link href={attribs.href}>{domToReact(children)}</Link>;
            }
        }
    };
            
    return parse(html, options)
}

export default ParseHTMLWithLinks