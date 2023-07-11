import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useSound } from './hooks/hooks'
import { DisclaimerModal, Layout } from '@components'
import soundtrack from '@audios/soundtrack.mp3'
import soundtrack_hb from '@audios/soundtrack_hb.mp3'
import { MenuPage, GuestListPage, EventListPage, OptionsPage } from './pages/pages'

function App() {
  const navigate = useNavigate()

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true)

  const audioRef = useRef()
  const audioHBRef = useRef()
  const [currentAudio, setCurrentAudio] = useState(audioRef)
  const audioToggler = () => setCurrentAudio(prevAudio => prevAudio === audioRef ? audioHBRef : audioRef)

  const toggler = () => setIsDisclaimerOpen(!isDisclaimerOpen)

  const backSound = useSound('back')
  const ivalidSound = useSound('invalid')
  useEffect(() => {
    const backNavigate = (e) => {
      if (e.code === 'Escape') {
        if (window.location.pathname === '/') {
          ivalidSound()
        } else {
          backSound()
          navigate('/')
        }
      }
    }
    window.addEventListener('keydown', backNavigate)
    return () => window.removeEventListener('keydown', backNavigate)
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MenuPage />} />
          <Route path='/event_list' element={<EventListPage />} />
          <Route path='/options' element={<OptionsPage
            audioRef={audioRef}
            audioHBRef={audioHBRef}
            currentAudio={currentAudio}
            audioToggler={audioToggler}
          />} />
        </Route>
        <Route path='/guest_list' element={<GuestListPage />} />
      </Routes>
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        toggler={toggler}
        audioRef={audioRef}
      />
      <audio ref={audioRef} id='soundtrack' src={soundtrack} loop />
      <audio ref={audioHBRef} id='soundtrack_hb' src={soundtrack_hb} loop />
    </>
  )
}

export default App
