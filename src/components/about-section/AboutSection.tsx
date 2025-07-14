import SkillsList from "../skills/SkillsList";

const AboutSection = ({ language }: { language: string }) => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-10 bg-black"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">
            {language === "en" ? "> About me" : "> Sobre mi"}
          </h2>
          <p className="text-xl text-gray-300">{"$ cat about.txt"}</p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="border-2 border-green-400/30 bg-gray-900 p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                {"> "}
                {language === "en" ? "whoami" : "quien_soy"}
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  {language === "en"
                    ? "Full Stack Developer specialized in Backend passionate about creating efficient and scalable web solutions. I enjoy turning complex problems into simple, beautiful and intuitive designs in the front, and robust and easy-to-consume APIs in the back."
                    : "Desarrollador Full Stack especializado en Backend apasionado por crear soluciones web eficientes y escalables. Disfruto convertir problemas complejos en diseños simples, hermosos e intuitivos en el front, y API's robustas y fáciles de consumir en el back."}
                </p>
                <p className="leading-relaxed">
                  {language === "en"
                    ? "I am passionate about solving problems with code, working collaboratively in a team, and building solutions that are useful, scalable, and maintainable. I have a strong ability to adapt quickly, learn new tools, and actively contribute to the development of digital products."
                    : "Me apasiona resolver problemas con código, trabajar en equipo, construir soluciones que sean útiles, escalables y mantenibles. Tengo habilidades para adaptarme rápidamente, aprender nuevas herramientas y contribuir de forma activa al desarrollo de productos digitales."}
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="border-2 border-green-400/30 bg-gray-900 p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                {"> "}
                {language === "en" ? "education" : "educación"}
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 font-mono">💻</span>
                  <span>
                    {language === "en"
                      ? "I had intesive formation at the Henry bootcamp, working in real proyects with a team and applying agile methodologies."
                      : "Tuve formación intensiva en el bootcamp de Henry, trabajando en proyectos reales en equipo y aplicando metodologías ágiles."}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 font-mono">📖</span>
                  <span>
                    {language === "en"
                      ? "Starting an university career in Computer Engineering."
                      : "Iniciando una carrera universitaria en Ingeniería Informática."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-green-400/30 bg-gray-900 p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                {"> "}
                {language === "en" ? "what_i_do" : "que_hago"}
              </h3>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-mono mt-1">•</span>
                <div>
                  <h4 className="text-green-300 font-semibold">
                    {language === "en"
                      ? "Backend Development"
                      : "Desarrollo Backend"}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {language === "en"
                      ? "Building robust APIs and server-side applications"
                      : "Construyendo APIs robustas y aplicaciones del lado del servidor"}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-mono mt-1">•</span>
                  <div>
                    <h4 className="text-green-300 font-semibold">
                      {language === "en"
                        ? "Frontend Development"
                        : "Desarrollo Frontend"}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {language === "en"
                        ? "Creating responsive and interactive user interfaces"
                        : "Creando interfaces de usuario responsivas e interactivas"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="border-2 border-green-400/30 bg-gray-900 p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                {"> "}
                {language === "en" ? "current_focus" : "enfoque_actual"}
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-mono">⟳</span>
                  <span>
                    {language === "en"
                      ? "Learning and masterizing Next.js and it's characteristics."
                      : "Aprendiendo y masterizando Next.js y sus características."}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-mono">⟳</span>
                  <span>
                    {language === "en"
                      ? "Exploring OAuth and WebSockets."
                      : "Explorando OAuth y WebSockets."}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-mono">⟳</span>
                  <span>
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
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 border-2 border-green-400/30 bg-gray-900">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">☕</div>
              <div className="text-sm text-gray-400 font-mono">
                {language === "en" ? "Coffee Driven" : "Impulsado por Café"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">🌙</div>
              <div className="text-sm text-gray-400 font-mono">
                {language === "en" ? "Night Coder" : "Programador Nocturno"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">🚀</div>
              <div className="text-sm text-gray-400 font-mono">
                {language === "en" ? "Always Learning" : "Siempre Aprendiendo"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
