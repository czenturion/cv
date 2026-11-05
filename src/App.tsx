import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/sections/About'
import { Achievements } from '@/components/sections/Achievements'
import { Contact } from '@/components/sections/Contact'
import { Projects } from '@/components/sections/Projects'
import { SoftSkills } from '@/components/sections/SoftSkills'
import { TechStack } from '@/components/sections/TechStack'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
