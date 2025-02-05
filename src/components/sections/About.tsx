import { RevealOnScroll } from '@components/RevealOnScroll'

export const About = () => {
  const frontendSkills = [
    'HTML',
    'CSS',
    'SCSS',
    'Javascript',
    'Typescript',
    'React',
    'NextJs',
    'Vue',
    'Tailwind',
    'Storybook',
    'WCAG',
    'Node',
    'PHP',
    'Wordpress',
    'Headless CMS',
    'Docker',
    'GIT',
    'Restful API',
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border transition-all">
            <p className="text-gray-300 mb-6">
              Passionated frontend developer specialized in HTML, CSS,
              JavaScript, and React. With a strong focus on creating
              user-friendly interfaces, I excel at delivering seamless and
              optimized user experiences. Whether it’s crafting intuitive
              designs or improving application performance, I thrive on turning
              ideas into functional, visually appealing digital solutions.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border transition-all">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-3xl scale-85">🏫</span> Education
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Webtechnology</strong> - Linnaeus University,
                  Växjö (2017-2020)
                </li>
                <li>
                  <strong>
                    Higher Vocational Education Diploma in Game Development iOS
                    & Android
                  </strong>{' '}
                  - Malmö Yrkeshögskola (2014 - 2014)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border transition-all">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-2xl">💼</span> Work Experience{' '}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Joymon AB (2023 - 2024)</h4>
                  <p>IT-consultant</p>
                </div>

                <div>
                  <h4 className="font-semibold">Consid S5 (2021 - 2023)</h4>
                  <p>IT-consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
