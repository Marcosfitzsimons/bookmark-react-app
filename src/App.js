import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Extension from './components/Extension'
import Questions from './components/Questions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUpBtn from './components/ScrollUpBtn'

function App() {
  return (
    <div className="overflow-hidden">
      <>
        <NavBar />
        <Hero />
        <Features />
        <Extension />
        <Questions />
        <Contact />
        <Footer />
        <ScrollUpBtn />
      </>
    </div>
  );
}

export default App;
