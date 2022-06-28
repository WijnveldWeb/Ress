import React from 'react'
import './Hero.scss'

const Hero = ({fields, key}) => {
    return (
        <section className="hero" key={key}>
            <div className="hero__wrap container flex items-center justify-center">
                <div className="imgtext">
                    <div className="middle">
                        {fields?.image &&
                            <img src={fields.image.url} alt={fields.image.alt} />
                        }
                        {/* <Image layout='fill' priority src={devimg.src} alt="" /> */}
                    </div>
                    <div className="slide">
                        <h1 className="maintitle" dangerouslySetInnerHTML={{__html: fields.title}}></h1>
                    </div>
                </div>

                <div className="skills flex items-center justify-end">
                    <div className="metawrapper">
                        <div className="line"></div>
                        <p className="first-title">
                            Skills
                        </p>
                        <ul>
                            {fields?.skills && fields.skills.map((skill, index) => {
                                return (
                                    <li key={index}>
                                        {skill.skill}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero