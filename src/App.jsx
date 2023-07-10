import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useSound } from './hooks/hooks'
import soundtrack from '@audios/soundtrack.mp3'
import { DisclaimerModal, Layout } from '@components'
import { MenuPage, GuestListPage, EventListPage, OptionsPage } from './pages/pages'

function App() {
  const navigate = useNavigate()

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true)
  const audioRef = useRef()
  const toggler = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen)
  }

  const backSound = useSound('back')
  const ivalidSound = useSound('invalid')
  useEffect(() => {
    const backNavigate = (e) => {
      if (e.code === 'Escape') {
        if (window.location.pathname === '/') {
          ivalidSound()
        } else {
          backSound()
          navigate(-1)
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
          <Route path='/guest_list' element={<GuestListPage />} />
          <Route path='/event_list' element={<EventListPage />} />
          <Route path='/options' element={<OptionsPage audioRef={audioRef} />} />
        </Route>
      </Routes>
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        toggler={toggler}
        audioRef={audioRef}
      />
      <audio ref={audioRef} id='soundtrack' src={soundtrack} loop />
    </>
  )
}

export default App
