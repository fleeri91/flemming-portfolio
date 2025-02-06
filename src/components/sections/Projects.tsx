import { RevealOnScroll } from '@components/RevealOnScroll'
import { ProjectCard } from '@components/ProjectCard'
import projectData from '@data/projects.json'
import { Project } from 'types/project'

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent text-center">
            Projects I've been involved in
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project: Project) => (
              <ProjectCard
                name={project.name}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
