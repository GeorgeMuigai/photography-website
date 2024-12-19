
import './App.css'
import Category from './components/Category'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <>
      <Header />

      <div className='font-recoleta flex items-center justify-center h-screen w-full text-center'>
        <div>
        <h6 className='font-semibold tracking-wide mb-3 text-base sm:text-2xl'>This Website is Under Construction</h6>
        <h1 className='font-bold text-lg tracking-widest sm:text-4xl '>We'll be back very soon</h1>
        </div>
      </div>
      {/* <Hero />
      <Gallery />
      <Category />
      <About /> */}
    </>
  )
}

export default App
