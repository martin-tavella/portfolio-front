import { ProjectsSection } from "@/components/projects-section";

const Landing = () => {
    return (
        <div className="bg-black min-h-screen text-green-400 font-mono">

      <main className="pt-32">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mb-4">{"> Welcome to my terminal"}</h1>
            <p className="text-xl">{"$ whoami"}</p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl mb-4">{"> About me"}</h2>
            <p className="text-xl">{"$ cat about.txt"}</p>
          </div>
        </section>

        <ProjectsSection />

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl mb-4">{"> Contact"}</h2>
            <p className="text-xl">{"$ mail martin@portfolio.dev"}</p>
          </div>
        </section>
      </main>
    </div>
    )
}

export default Landing;