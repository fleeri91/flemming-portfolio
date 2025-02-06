import { Project } from 'types/project'

export const ProjectCard = ({ name, description, tech, link }: Project) => (
  <a
    href={link}
    target="_blank"
    className="glass group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
  >
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
        "
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <span className="text-blue-400 group-hover:text-blue-300 transition-colors my-4">
        View Project →
      </span>
    </div>
  </a>
)
