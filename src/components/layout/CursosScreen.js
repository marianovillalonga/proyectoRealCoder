import React from 'react'
import { CallToActionCur } from '../Cursos/CallToActionCur'
import { CursoAdm } from '../Cursos/CursoAdm'
import { CursoCont } from '../Cursos/CursoCont'
import { CursoMark } from '../Cursos/CursoMark'

export const CursosScreen = () => {
  return (

    <div>
      <CursoAdm />
      <CursoCont />
      <CursoMark />
      <CallToActionCur />
    </div>
    
  )
}
