import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory)
}

export function getProjectsBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields = []) {
  const slugs = getProjectsSlugs()
  const projects = slugs
    .map((slug) => getProjectsBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => post1.position - post2.position)
  return projects
}
