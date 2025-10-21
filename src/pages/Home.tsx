export default function Home() {
    const base = import.meta.env.BASE_URL;

    return (
        <main className="pt-0 -mt-12 text-center">
        <section className="h-screen flex flex-col justify-center items-center relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0CA095]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#CAB781]/20 rounded-full blur-3xl animate-pulse" />
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Pedro Henrique
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl">
            Game Developer
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/portfolio/playables"
              className="mt-10 px-6 py-3 bg-gradient-to-r from-[#0C6B67] to-[#7E7D5E] rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Playables
            </a>
            <a
              href="/portfolio/games"
              className="mt-10 px-6 py-3 bg-gradient-to-r from-[#0C6B67] to-[#7E7D5E] rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Games
            </a>
            <a
              href="/study"
              className="mt-10 px-6 py-3 bg-gradient-to-r from-[#0C6B67] to-[#7E7D5E] rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Study
            </a>
          </div>
        </section>

    {/* About */}
    <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="relative w-50 h-50 max-w-sm mx-auto md:mx-0 aspect-square rounded-2xl overflow-hidden bg-gray-800/60 border-2 border-gray-700">
            <img
               src={`${base}photo/myPhoto.jpg`}
              alt="Pedro Henrique"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-200 leading-relaxed">
             Hi! I'm Pedro Henrique, a game programmer based in Brazil. I love solving technical problems and being creative, building experiences that players will actually engage with. I am passionate about exploring diverse genres and expanding my creative and technical skills. I'm always eager to learn, from building mechanics and systems for new genres to engine and graphics programming. My ultimate goal is to build games that really impact people's lives as the ones i played did to me.
            </p>
          </div>
        </div>
      </section>

    {/* Contact */}
    <section id="contact" className="max-w-6xl mx-auto px-6 pb-24">
  <div className="flex justify-center space-x-6">
    <a href="mailto:pedrohfcarneiro1@gmail.com" className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0C6B67] to-[#7E7D5E] text-white rounded-full shadow-lg hover:scale-105 transition-transform">
      <img src={`${base}social%20icons/email.svg`} alt="Email" className="w-5 h-5" />
      <span>Email</span>
    </a>
    <a href="https://www.linkedin.com/in/pedrohfcarneiro/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0C6B67] to-[#7E7D5E] text-white rounded-full shadow-lg hover:scale-105 transition-transform">
      <img src={`${base}social%20icons/linkedin.svg`} alt="LinkedIn" className="w-5 h-5" />
      <span>LinkedIn</span>
    </a>
    <a href="https://github.com/pedrohfcarneiro" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0C6B67] to-[#7E7D5E] text-white rounded-full shadow-lg hover:scale-105 transition-transform">
      <img src={`${base}social%20icons/github.svg`} alt="GitHub" className="w-5 h-5" />
      <span>GitHub</span>
    </a>
  </div>
</section>

      </main>
    );
  }
  