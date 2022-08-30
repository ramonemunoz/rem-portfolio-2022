import Head from 'next/head'
import { getPlaiceholder } from 'plaiceholder';

import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Footer from '../components/footer'

import { getAllProjects } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

export default function Index({ allProjects, allContent, allImages }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Ramon Munoz | Front End Engineer</title>
        </Head>
        <Header />
        <About />
        <Projects 
          allProjects={allProjects}
          allContent={allContent}
          allImages={allImages}
        />
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'year',
    'technology',
    'framework',
    'images',
    'url',
    'content',
    'position',
  ])

  const allContent = []
  const allImages = []
  let imageArray = []

  for (const project of allProjects) {
    const bodyText = await markdownToHtml(project.content || '');
    allContent.push(bodyText);

    for (const image of project.images) {
      const { base64, img } = await getPlaiceholder(image.url);
      imageArray.push({base64,img});
    }

    allImages.push(imageArray);
    imageArray = [];
  }

  return {
    props: { 
      allProjects,
      allContent,
      allImages,
    },
  }
}
