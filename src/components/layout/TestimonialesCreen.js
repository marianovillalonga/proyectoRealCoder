import React from 'react'
import { CallToAction } from '../Home/CallToAction'
import { Nosotros } from '../Home/Nosotros'
import { Staff } from '../Home/Staff'
import { Testimonios } from '../Home/Testimonios'
import { CallToActionTest } from '../Testimoniales/CallToActionTest'

export const TestimonialesScreen = () => {
  return (
    <div>
      <Testimonios />
      <CallToAction />
      <Nosotros />
      <Staff />
      <CallToActionTest />
    </div>
  )
}
