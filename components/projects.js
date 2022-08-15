import Image from 'next/image'

import fpo from '../public/assets/FPO.png'

export default function Projects() {
  return (
    <section className={'projects'}>
        <div className={'projects__info'}>
            <div className={'projects__title'}>
                <h1>The Underground Museum</h1>
                <p className={'projects__number'}>01</p>
            </div>
            <div className={'projects__description'}>
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
                    <Image
                        src={fpo}
                        alt="FPO"
                        placeholder="blur" // Optional blur-up while loading
                        layout="responsive"
                    />
            </div>
        </div>
    </section>
  )
}