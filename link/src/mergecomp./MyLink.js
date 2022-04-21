import React from 'react'
import { ListL } from '../components/ListL'
import { NavUser } from '../components/NavUser'

export const MyLink = () => {
  return (
    <div className='d-flex'>
      <NavUser/>
      <div className='w-100'>
        <ListL />
      </div>
    </div>
  )
}