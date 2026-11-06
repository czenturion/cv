import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/sections/About'
import { Achievements } from '@/components/sections/Achievements'
import { Contact } from '@/components/sections/Contact'
import { Projects } from '@/components/sections/Projects'
import { SoftSkills } from '@/components/sections/SoftSkills'
import { TechStack } from '@/components/sections/TechStack'
import { Reveal } from '@/components/ui/Reveal'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* About is the first screen, so it shows at once without animation */}
        <About />
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Achievements />
        </Reveal>
        <Reveal>
          <SoftSkills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
