import { RevealOnScroll } from '@components/RevealOnScroll'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {
              "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible."
            }
          </h2>
        </div>
      </RevealOnScroll>
    </section>
  )
}
