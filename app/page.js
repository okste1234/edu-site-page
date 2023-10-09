import Header from './components/Header'
import Contents from './components/Contents'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>

      <section>
        <Contents />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  )
}
