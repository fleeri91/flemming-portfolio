import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from '@components/sections/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{' '}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-gray-950 text-gray-100`}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
