import { Link } from '@inertiajs/inertia-react'
import { getYear, parseISO } from 'date-fns'
import React from 'react'

const ProjectenListItem = ({link, date, title, thumbnail, key}) => {

    const jsDate = parseISO(date, new Date())

    return (
        <div className="project-list_item" key={key}>
            <Link href={link}>
    
                <div className="project-image-link clickable">
                    <img src={thumbnail} alt="" />
                </div>
            </Link>
    
            <Link href={link}>
                <div className="project-info clickable">
                    {jsDate && <div className="date">
                        {getYear(jsDate)}
                    </div>}
                    {title && <h2>{title}</h2>}
                </div>
            </Link>
        </div>
    )
}

export default ProjectenListItem