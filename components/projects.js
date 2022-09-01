import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image'

import { useAppContext } from '../context/app-state';

export default function Projects({allProjects, allContent, allImages}) {

    const {
        currentProject,
        setCurrentProject,
      } = useAppContext()

    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)

    const refMediaContainer = useRef()

    useEffect(() => {
        if(refMediaContainer.current) {
            refMediaContainer.current.scrollLeft = 0
        }
    }, [currentProject])

    return (
    <section className={`projects ${showAdditionalInfo ? 'projects--show' : ''}`}>
        <div className={'projects__info'}>
            <div className={`projects__title-container ${showAdditionalInfo ? 'projects__title-container--show': ''}`}
                    onMouseEnter={() => setShowAdditionalInfo(true)}
                    onMouseLeave={() => setShowAdditionalInfo(false)}
                    onClick={() => setShowAdditionalInfo(state => !state)}
            >
                <div className={`projects__additional-info-tech ${showAdditionalInfo ? 'projects__additional-info-tech--show': ''}`}>
                    <p className={'projects__additional-info-header'}>TECHNOLOGY:</p>
                    <p>{allProjects[currentProject].technology}</p>
                    <p className={'projects__additional-info-header'}>FRAMEWORK:</p>
                    <p>{allProjects[currentProject].framework}</p>
                </div>
                <div className={`projects__additional-info-links ${showAdditionalInfo ? 'projects__additional-info-links--show': ''}`}>
                    <p>{allProjects[currentProject].year}</p>
                    <a target="_blank" href={allProjects[currentProject].url} rel="noopener noreferrer">
                        Visit
                    </a>
                </div>
                <div className={'projects__title'}>
                    <h1>{allProjects[currentProject].title}</h1>
                    <p className={'projects__number'}>{`0${currentProject + 1}`}</p>
                </div>
            </div>
            <div className={`projects__description ${showAdditionalInfo ? 'projects__description--hide': ''}`}>
                <div className={'projects__description-info'}>
                    <p>INFO:</p>
                    <div
                        className={'projects__description-info-body'}
                        dangerouslySetInnerHTML={{ __html: allContent[currentProject] }}
                    />
                </div>
                <div className={'projects__index'}>
                    <p>PROJECTS:</p>
                    <ol>
                        {allProjects.map((project, index) => {
                            return (
                                <li 
                                    key={index}
                                    onClick={() => setCurrentProject(index)}
                                >
                                    <div>
                                        <span>{project.title}</span>
                                        <span>({project.year})</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
        <div className={'projects__media'}>
            <div className={'projects__media-container'} ref={refMediaContainer}>
                {allImages[currentProject].map(({base64, img}, index) => {
                    let rand = Math.random() * 4;
                    rand = Math.floor(rand) + 1;
                    return (
                        <div className={`projects__media-item ${index !== 0 ? `projects__media-item--${rand}` : ''}`} key={index}>
                            <div className={'projects___media-item-browser'}>
                                <div className="top">
                                    <span className="dot"></span>
                                </div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className={`image-container ${img.height === 926 ? 'image-container--tall' : 'image-container--wide'}`}>
                                    <Image
                                        className={'image'}
                                        src={img.src}
                                        alt={img.alt}
                                        height={img.height}
                                        width={img.width}
                                        blurDataURL={base64}
                                        placeholder="blur"
                                        layout="intrinsic"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className={`projects__indicator  ${showAdditionalInfo ? 'projects__indicator--show': ''}`}>
            <div>&#9632;</div>
        </div>
    </section>
    )
}
