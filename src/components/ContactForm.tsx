const ContactForm = () => (
  <form
    action="https://formspree.io/f/mqaagayd"
    className="my-8 grid w-full gap-6"
    target="_top"
    method="POST"
  >
    <input
      id="name"
      name="name"
      type="text"
      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
      required
      placeholder="Name"
    />
    <input
      id="email"
      name="email"
      type="email"
      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
      required
      placeholder="Email"
    />
    <textarea
      id="message"
      name="message"
      rows={5}
      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
      required
      placeholder="Message"
    />
    <button
      type="submit"
      className="w-full cursor-pointer bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    >
      Send
    </button>
  </form>
)

export default ContactForm
