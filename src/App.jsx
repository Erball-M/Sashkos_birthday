import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSound } from './hooks/hooks'
import { DisclaimerModal, Layout } from '@components'
import { MenuPage, GuestListPage, EventListPage, OptionsPage } from './pages/pages'
import soundtrack from '@audios/soundtrack.mp3'
import soundtrack_hb from '@audios/soundtrack_hb.mp3'

function App() {
  const navigate = useNavigate()

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true)

  const audioRef = useRef()
  const audioHBRef = useRef()
  const [currentAudio, setCurrentAudio] = useState(audioRef)
  const audioToggler = () => setCurrentAudio(prevAudio => prevAudio === audioRef ? audioHBRef : audioRef)

  const isBirtday = useMemo(() => {
    if (currentAudio === audioHBRef) {
      return true
    } else {
      return false
    }
  }, [currentAudio])

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
        <Route path='/' element={<Layout birthday={isBirtday} />}>
          <Route index element={<MenuPage />} />
          <Route path='/options' element={<OptionsPage
            audioRef={audioRef}
            audioHBRef={audioHBRef}
            currentAudio={currentAudio}
            audioToggler={audioToggler}
          />} />
        </Route>
        <Route path='/event_list' element={<EventListPage birthday={isBirtday} />} />
        <Route path='/guest_list' element={<GuestListPage birthday={isBirtday} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        toggler={toggler}
        audioRef={audioRef}
      />
      <audio preload='auto' ref={audioRef} id='soundtrack' src={soundtrack} loop />
      <audio preload='auto' ref={audioHBRef} id='soundtrack_hb' src={soundtrack_hb} loop />
    </>
  )
}

export default App
