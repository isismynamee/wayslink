import React from 'react'
import { NavUser } from '../components/NavUser'
import { Templating } from '../components/Templating'

export const TemplatePhone = () => {
  return (
    <div className='d-flex'>
        <NavUser />
        <div className='w-100'>
          <Templating />          
        </div>
    </div>
  )
}
