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
                            <p>Restaraunt 1</p>
                            <p>Restaraunt 2</p>
                            <p>Restaraunt 3</p>
                        </div>
                        <div>
                            <p>Location 1</p>
                            <p>Location 2</p>
                            <p>Location 3</p>
                        </div>
                        <div>
                            <p>Order 1</p>
                            <p>Order 2</p>
                            <p>Order 3</p>
                        </div>
                    </div>
                </div>
                <div className={'about__intrests-bottom'}>
                    <div className={'about__intrests-body'}>
                            <div>
                                <p className={'about__intrests-subheader'}>Learning:</p>
                                <p>Course 1</p>
                                <p>Course 2</p>
                                <p>Course 3</p>
                            </div>
                            <div>
                            <p className={'about__intrests-subheader'}>Listening:</p>
                                <p>Artist/Song 1</p>
                                <p>Artist/Song 2</p>
                                <p>Artist/Song 3</p>
                            </div>
                            <div>
                                <p className={'about__intrests-subheader'}>Watching:</p>
                                <p>Movie/Show 1</p>
                                <p>Movie/Show 2</p>
                                <p>Movie/Show 3</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  