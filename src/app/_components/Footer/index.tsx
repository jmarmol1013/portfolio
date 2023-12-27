import React from 'react'
import { SocialNetworks } from '../SocialNetworks'

export const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center ustify-center mt-16'>
        <SocialNetworks/>
        <span className='text-sm mt-3'><i>Juan Marmolejo &copy; 2023</i></span>
    </div>
  )
}
