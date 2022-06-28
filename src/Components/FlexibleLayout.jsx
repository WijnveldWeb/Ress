import React from 'react'
import Code from './partials/Code/Code'
import Hero from './partials/Hero/Hero'
import Map from './partials/Map/Map'

const FlexibleLayout = ({fields}) => {
    console.log(fields)
    return (
        <div className='flexible-layout'>
            {fields.map((field, index) => {
                if (field.acf_fc_layout === 'hero') {return <Hero key={index} fields={field.hero} />}
                if (field.acf_fc_layout === 'map') {return <Map key={index} fields={field.map} />}
                if (field.acf_fc_layout === 'code') {return <Code key={index} fields={field.code} />}
            })}
        </div>
    )
}

export default FlexibleLayout