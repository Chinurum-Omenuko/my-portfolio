import Image from 'next/image'
import Header from './components/Header/Header'
import HomeLanding from './components/HomeLanding/HomeLanding'
import Contacts from './components/Contacts/Contacts'
import Resume from './components/Resume/Resume'
import About from './components/About/About'

export default function Home() {
  return (
    <div className="pagecontainer">
      <Header />
      <HomeLanding />
      <About />
      <Resume />
      <Contacts />
    </div>

  )
}
