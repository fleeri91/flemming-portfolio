import { useEffect, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from '@components/sections/Contact'

import useScrollBlock from '@hooks/scrollBlock'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    if (!isLoaded) {
      blockScroll()
    } else {
      allowScroll()
    }
  }, [isLoaded, blockScroll, allowScroll])

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
