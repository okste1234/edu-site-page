import Header from './components/Main'
import Contents from './components/Contents'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'

export default function Home() {
  return (
    <main className='font-poppins relative'>
      <Contents>
        <header>
          <Hero />
        </header>
        <section className="relative">
          <Main />
        </section>
      </Contents>
    </main>
  )
}
