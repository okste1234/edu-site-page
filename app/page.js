import Contents from './components/Contents'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='font-poppins overflow-x-clip relative'>
      <nav className="top-0 fixed w-full bg-base-100 z-50">
        <Navbar />
      </nav>
      <header>
        <Hero />
      </header>
      <Contents>
        <section className="relative">
          <Main />
        </section>
      </Contents>
    </main>
  )
}
