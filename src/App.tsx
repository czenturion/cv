import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { SoftSkills } from '@/components/sections/SoftSkills'
import { TechStack } from '@/components/sections/TechStack'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechStack />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
