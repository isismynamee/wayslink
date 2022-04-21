import React from 'react'
import { NavUser } from '../components/NavUser'
import { UserD } from '../components/UserD'

export const User = () => {
  return (
    <div className='d-flex'>
      <NavUser/>
      <div className='w-100'>
        <UserD/>
      </div>
    </div>
  )
}