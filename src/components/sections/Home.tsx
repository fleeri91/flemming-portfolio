import ParticlesBackground from '@components/ParticlesBackground'
import { RevealOnScroll } from '@components/RevealOnScroll'
import { useScrollToElement } from '@hooks/scrollToElement'

export const Home = () => {
  const scrollToElement = useScrollToElement()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <ParticlesBackground />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-20">
            {"Hello, I'm"}{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent text-center">
              Flemming
            </span>
            <br />
            {"I'm a frontend developer"}
          </h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToElement('projects')}
              className="cursor-pointer bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View my work
            </button>

            <button
              onClick={() => scrollToElement('contact')}
              className="cursor-pointer border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
