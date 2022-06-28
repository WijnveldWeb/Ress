import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import CodeSVG from '../../../assets/images/code.svg'
import ParseHTMLWithLinks from '../ParseHTMLWithLinks'
import './Code.scss'

const Code = ({fields, key}) => {
    return (
        <section className="code">
            <div className="code__wrap container">
                <div className="inner-wrapper flex justify-between">
                    <div className="code-icon">
                        <img src={CodeSVG} alt="" />
                    </div>
                    <div className="ontwikkeling-maintext">
                        <h1 dangerouslySetInnerHTML={{__html: fields.title}} />
                        <ParseHTMLWithLinks html={fields.text} />
                    </div>
                    <div className="ontwikkeling-talen">
                        <div className="metawrapper">
                            <div className="line"></div>
                            <p className="first-title">
                                Programmeerskills
                            </p>
                            <ul>
                                <li>React.js</li>
                                <li>React native</li>
                                <li>NEXT.js</li>
                                <li>Wordpress development</li>
                                <li>VUE.js</li>
                                <li>Laravel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Code