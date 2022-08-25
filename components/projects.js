import React, {useState} from 'react'
import Image from 'next/image'

import fpo from '../public/assets/FPO.png'
import fpo2 from '../public/assets/FPO2.png'
import fpo3 from '../public/assets/FPO3.png'
import fpo4 from '../public/assets/FPO4.png'

export default function Projects() {
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)

    return (
    <section className={'projects'}>
        <div className={'projects__info'}>
            <div className={`projects__title-container ${showAdditionalInfo ? 'projects__title-container--show': ''}`}
                    onMouseEnter={() => setShowAdditionalInfo(true)}
                    onMouseLeave={() => setShowAdditionalInfo(false)}
            >
                <div className={`projects__additional-info-tech ${showAdditionalInfo ? 'projects__additional-info-tech--show': ''}`}>
                    <p className={'projects__additional-info-header'}>TECHNOLOGY:</p>
                    <p>Tech, Tech, Tech, Tech, Tech</p>
                    <p className={'projects__additional-info-header'}>FRAMEWORK:</p>
                    <p>GATSBY.js</p>
                </div>
                <div className={`projects__additional-info-links ${showAdditionalInfo ? 'projects__additional-info-links--show': ''}`}>
                    <p>2021</p>
                    <a target="_blank" href="https://theunderground.museum/" rel="noopener noreferrer">
                        Visit
                    </a>
                </div>
                <div className={'projects__title'}>
                    <h1>The Underground Museum</h1>
                    <p className={'projects__number'}>01</p>
                </div>
            </div>
            <div className={`projects__description ${showAdditionalInfo ? 'projects__description--hide': ''}`}>
                <div className={'projects__description-info'}>
                    <p>INFO:</p>
                    <p>A digital entertainment studio which partners with audience driven creators and community focused brands to create, produce, and finance innovative, original, and cross platform entertainment experiences that engage youth centric-audiences.</p>
                </div>
                <div className={'projects__index'}>
                    <p>PROJECTS:</p>
                    <ol>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                        <li><div><span>Project</span><span>(Year)</span></div></li>
                    </ol>
                </div>
            </div>
        </div>
        <div className={'projects__media'}>
            <div className={'projects__media-container'}>
                <div className={'projects__media-item'}>
                    <div className={'projects___media-item-browser'}>
                        <div className="top">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <Image
                            src={fpo}
                            alt="FPO"
                            placeholder="blur" // Optional blur-up while loading
                            layout="fixed"
                        />
                    </div>
                </div>
                <div className={'projects__media-item projects__media-item--1'}>
                    <div className={'projects___media-item-browser'}>
                        <div className="top">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <Image
                            src={fpo2}
                            alt="FPO"
                            placeholder="blur" // Optional blur-up while loading
                            layout="fixed"
                        />
                    </div>
                </div>
                <div className={'projects__media-item projects__media-item--2'}>
                    <div className={'projects___media-item-browser'}>
                        <div className="top">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <Image
                            src={fpo3}
                            alt="FPO"
                            placeholder="blur" // Optional blur-up while loading
                            layout="fixed"
                        />
                    </div>
                </div>
                <div className={'projects__media-item projects__media-item--3'}>
                    <div className={'projects___media-item-browser'}>
                        <div className="top">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <Image
                            src={fpo4}
                            alt="FPO"
                            placeholder="blur" // Optional blur-up while loading
                            layout="fixed"
                        />
                    </div>
                </div>
                <div className={'projects__media-item projects__media-item--4'}>
                    <div className={'projects___media-item-browser'}>
                        <div className="top">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <Image
                            src={fpo3}
                            alt="FPO"
                            placeholder="blur" // Optional blur-up while loading
                            layout="fixed"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={`projects__indicator  ${showAdditionalInfo ? 'projects__indicator--show': ''}`}>
            <div>&#9632;</div>
        </div>
    </section>
    )
}