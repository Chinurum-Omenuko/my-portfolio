import Image from 'next/image'
import Header from './components/Header/Header'
import HomeLanding from './components/HomeLanding/HomeLanding'
import Contacts from './components/Contacts/Contacts'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Title from './components/Projects/Title'

export default function Home() {
  return (
    <div className="pagecontainer">
      <Header />
      <HomeLanding />
      <About />
      <Title />
      <Projects />
      <Resume />
      <Contacts />
    </div>

  )
}
