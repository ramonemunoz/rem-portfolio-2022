import Image from 'next/image'

import { useAppContext } from '../context/app-state';

import profilePic from '../public/assets/me_now.png'

export default function About() {

    const {
        isAboutOpen,
      } = useAppContext()

    return (
        <section className={`about ${isAboutOpen ? 'about--open' : 'about--close'}`}>
            <div className={'about__bio'}>
                <div className={'about__bio-header'}>
                    <p>Currently in Los Angeles</p>
                    <p>2022</p>
                </div>
                <div className={'about__bio-bio'}>
                    <p>A seasoned, versatile & enthusiastic Front-End Engineer, with 8+ years of experience. Brings an unwavering commitment to coding, launching and maintaining well-tested, secure websites, with expertise across multiple languages, frameworks & platforms.</p>
                    <p>Takes great pride in building performant, accessible websites that render high Core Web Vitals; skilled in implementing designs as closely as possible during the development process. Enjoys staying abreast of latest Front End practice & identifying optimal solutions according to current web standards.</p>
                    <Image
                        src={profilePic}
                        alt="Picture of me"
                        placeholder="blur" // Optional blur-up while loading
                    />
                </div>
                <div className={'about__links'}>
                    <div className={'about__links-container'}>
                        <div className={'about__links-development'}>
                            <a target="_blank" href="https://github.com/ramonemunoz" rel="noopener noreferrer">
                                Github
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/ramonemunoz/" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a download href="/assets/Ramon_E_Munoz_Resume_(2022).pdf">
                                Resume
                            </a>
                            <a target="_blank" href="https://codepen.io/RamonE/" rel="noopener noreferrer">
                                CodePen
                            </a>
                        </div>
                        <div className={'about__links-social'}>
                            <a target="_blank" href="https://www.instagram.com/ramonemunoz/" rel="noopener noreferrer">
                                IG
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'about__intrests'}>
                <div className={'about__intrests-top'}>
                    <div className={'about__intrests-header'}>
                        <p>FAVORITE PLACES TO EAT:</p>
                        <p>WHERE:</p>
                        <p>WHAT I ORDER</p>
                    </div>
                    <div className={'about__intrests-body'}>
                        <div>
                            <p>Gish Bac</p>
                            <p>Golden Deli</p>
                            <p>Kazu Mori</p>
                        </div>
                        <div>
                            <a target="_blank" href="https://www.yelp.com/biz/gish-bac-restaurant-los-angeles-2" rel="noopener noreferrer">
                                4163 W Washington Blvd
                            </a>
                            <a target="_blank" href="https://www.yelp.com/biz/golden-deli-san-gabriel-san-gabriel-2" rel="noopener noreferrer">
                                815 W Las Tunas D
                            </a>
                            <a target="_blank" href="https://www.yelp.com/biz/kazu-mori-arcadia-2" rel="noopener noreferrer">
                                1101 W Huntington Dr
                            </a>
                        </div>
                        <div>
                            <p>Mole Negro</p>
                            <p>PHO #1</p>
                            <p>Curry Pork</p>
                        </div>
                    </div>
                </div>
                <div className={'about__intrests-bottom'}>
                    <div className={'about__intrests-body'}>
                            <div>
                                <p className={'about__intrests-subheader'}>Learning:</p>
                                <a target="_blank" href="https://epicreact.dev/" rel="noopener noreferrer">
                                    Epic React
                                </a>
                                <a target="_blank" href="https://neetcode.io/practice" rel="noopener noreferrer">
                                    NeetCode
                                </a>
                                <a target="_blank" href="https://threejs-journey.com/" rel="noopener noreferrer">
                                    Three JS
                                </a>
                            </div>
                            <div>
                            <p className={'about__intrests-subheader'}>Listening:</p>
                                <a target="_blank" href="https://open.spotify.com/track/1W0OCrMsRP1SLTEdw3JwEz?si=42daac9c510b4e75" rel="noopener noreferrer">
                                    TLSP/ Sweet Dreams, TN
                                </a>
                                <a target="_blank" href="https://open.spotify.com/track/3lGMtkONrZdJ8kTCg6KIFf?si=26f8fd3dc95a4e3c" rel="noopener noreferrer">
                                    Natalia Lafourcade/ Hasta la Raiz
                                </a>
                                <a target="_blank" href="https://open.spotify.com/track/2vKa6i0SBDa6NzYgnOpqRu?si=de608f5ada5945cf" rel="noopener noreferrer">
                                    Concorde/ Floating There
                                </a>
                            </div>
                            <div>
                                <p className={'about__intrests-subheader'}>Watching:</p>
                                <a target="_blank" href="https://play.hbomax.com/page/urn:hbo:page:GVU2b9AHpHo7DwvwIAT4i:type:series" rel="noopener noreferrer">
                                    The Sopranos
                                </a>
                                <a target="_blank" href="https://www.nope.movie/" rel="noopener noreferrer">
                                    NOPE
                                </a>
                                <a target="_blank" href="https://www.hulu.com/series/the-bear-05eb6a8e-90ed-4947-8c0b-e6536cbddd5f" rel="noopener noreferrer">
                                    The Bear
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  