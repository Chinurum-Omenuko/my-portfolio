import Image from 'next/image'
import Header from './components/Header/Header'
import HomeLanding from './components/HomeLanding/HomeLanding'

export default function Home() {
  return (
    <div className="pagecontainer">
      <Header />
      <HomeLanding />
    </div>

  )
}
