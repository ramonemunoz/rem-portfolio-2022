import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Footer from '../components/footer'


import { getAllProjects } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

import Head from 'next/head'

export default function Index({ allProjects, allContent }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Ramon Munoz | Front End Engineer</title>
        </Head>
        <Header />
        <About />
        <Projects allProjects={allProjects} allContent={allContent}/>
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

  for (const project of allProjects) {
    const bodyText = await markdownToHtml(project.content || '')
    allContent.push(bodyText)
  }

  return {
    props: { 
      allProjects,
      allContent,
    },
  }
}
