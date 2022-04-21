import React from 'react'
import { Create } from '../components/Create'
import { NavUser } from '../components/NavUser'

export const Template = () => {
  return (
    <div className='d-flex'>
        <NavUser />
        <Create />
    </div>
  )
}
