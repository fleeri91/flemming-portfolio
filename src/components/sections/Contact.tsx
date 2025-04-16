import ContactForm from '@components/ContactForm'
import { RevealOnScroll } from '@components/RevealOnScroll'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent text-center">
            {
              "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible."
            }
          </h2>
          <ContactForm />
        </div>
      </RevealOnScroll>
    </section>
  )
}
