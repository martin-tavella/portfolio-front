import SkillsList from "../skills/SkillsList";

const AboutSection = ({ language }: { language: string }) => {
  return (
    <section id="about" className="min-h-screen py-10 sm:py-20 px-2 sm:px-4 lg:px-10 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green-400 mb-2 sm:mb-4">
            {language === "en" ? "> About me" : "> Sobre mi"}
          </h2>
          <p className="text-sm sm:text-xl text-gray-300">{"$ cat about.txt"}</p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16">
          {/* Personal Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="border-2 border-green-400/30 bg-gray-900 p-3 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-bold text-green-400 mb-2 sm:mb-4 font-mono break-words">
                {"> "}
                {language === "en" ? "whoami" : "quien_soy"}
              </h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="leading-relaxed text-sm sm:text-base">
                  {language === "en"
                    ? "Full Stack Developer specialized in Backend passionate about creating efficient and scalable web solutions. I enjoy turning complex problems into simple and intuitive designs in the front, and robust and easy-to-consume APIs in the back."
                    : "Desarrollador Full Stack especializado en Backend apasionado por crear soluciones web eficientes y escalables. Disfruto convertir problemas complejos en diseños simples e intuitivos en el front, y API's robustas y fáciles de consumir en el back."}
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  {language === "en"
                    ? "I am passionate about solving problems with code, working collaboratively in a team, and building solutions that are useful, scalable, and maintainable. I have a strong ability to adapt quickly, learn new tools, and actively contribute to the development of digital products."
                    : "Me apasiona resolver problemas con código, trabajar en equipo, construir soluciones que sean útiles, escalables y mantenibles. Tengo habilidades para adaptarme rápidamente, aprender nuevas herramientas y contribuir de forma activa al desarrollo de productos digitales."}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="border-2 border-green-400/30 bg-gray-900 p-3 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-bold text-green-400 mb-2 sm:mb-4 font-mono break-words">
                {"> "}
                {language === "en" ? "education" : "educación"}
              </h3>
              <div className="space-y-2 sm:space-y-3 text-gray-300">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 font-mono text-sm sm:text-base flex-shrink-0">💻</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {language === "en"
                      ? "I had intensive formation at the Henry bootcamp, working in real projects with a team and applying agile methodologies."
                      : "Tuve formación intensiva en el bootcamp de Henry, trabajando en proyectos reales en equipo y aplicando metodologías ágiles."}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 font-mono text-sm sm:text-base flex-shrink-0">📖</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {language === "en"
                      ? "Starting an university career in Computer Engineering."
                      : "Iniciando una carrera universitaria en Ingeniería Informática."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do & Current Focus */}
          <div className="space-y-4 sm:space-y-6">
            <div className="border-2 border-green-400/30 bg-gray-900 p-3 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-bold text-green-400 mb-2 sm:mb-4 font-mono break-words">
                {"> "}
                {language === "en" ? "what_i_do" : "que_hago"}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 font-mono mt-1 flex-shrink-0">•</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-green-300 font-semibold text-sm sm:text-base">
                      {language === "en" ? "Backend Development" : "Desarrollo Backend"}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {language === "en"
                        ? "Building robust APIs and server-side applications"
                        : "Construyendo APIs robustas y aplicaciones del lado del servidor"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 font-mono mt-1 flex-shrink-0">•</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-green-300 font-semibold text-sm sm:text-base">
                      {language === "en" ? "Frontend Development" : "Desarrollo Frontend"}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {language === "en"
                        ? "Creating responsive and interactive user interfaces"
                        : "Creando interfaces de usuario responsivas e interactivas"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="border-2 border-green-400/30 bg-gray-900 p-3 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-bold text-green-400 mb-2 sm:mb-4 font-mono break-words">
                {"> "}
                {language === "en" ? "current_focus" : "enfoque_actual"}
              </h3>
              <div className="space-y-2 sm:space-y-3 text-gray-300">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-yellow-400 font-mono flex-shrink-0">⟳</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {language === "en"
                      ? "Learning and masterizing Next.js and its characteristics."
                      : "Aprendiendo y masterizando Next.js y sus características."}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-yellow-400 font-mono flex-shrink-0">⟳</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {language === "en" ? "Exploring OAuth and WebSockets." : "Explorando OAuth y WebSockets."}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-yellow-400 font-mono flex-shrink-0">⟳</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {language === "en"
                      ? "Searching and contributing in projects to grow."
                      : "Buscando y participando en proyectos para crecer."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SkillsList language={language} />

        {/* Fun Facts */}
        <div className="mt-8 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4 sm:px-8 py-4 border-2 border-green-400/30 bg-gray-900 max-w-full">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">☕</div>
              <div className="text-xs sm:text-sm text-gray-400 font-mono whitespace-nowrap">
                {language === "en" ? "Coffee Driven" : "Impulsado por Café"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">🌙</div>
              <div className="text-xs sm:text-sm text-gray-400 font-mono whitespace-nowrap">
                {language === "en" ? "Night Coder" : "Programador Nocturno"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">🚀</div>
              <div className="text-xs sm:text-sm text-gray-400 font-mono whitespace-nowrap">
                {language === "en" ? "Always Learning" : "Siempre Aprendiendo"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
