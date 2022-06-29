import React from 'react'
import './HeroProject.scss'

const HeroProject = ({fields, key}) => {
    return (
        <section className="hero-project">
            <div className="contentimage">
                <div className="contentimagebefore">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1497 870">
                        <defs></defs>
                        <g id="Laag_2" data-name="Laag 2">
                            <g id="Laag_1-2" data-name="Laag 1">
                                <path fill={fields.color} className="cls-1" d="M1497,0S741,0,743,422C738,784,0,870,0,870V0Z" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="contenthomepage">
                    {fields?.image && <img src={fields.image.url} alt="" className="image" />}
                </div>
            </div>
        </section>
    )
}

export default HeroProject