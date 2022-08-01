import React from 'react'

import NavBar from './user/components/NavBar'
import Userhighlight from '../components/Userhighlight'
import Orderhighlight from '../components/Orderhighlight'

export default function user() {
  return (
    <div>
        <NavBar />
        <Userhighlight />
        <div className='flex flex-col mt-12'>
            <Orderhighlight />
            <Orderhighlight />
            <Orderhighlight />
        </div>
        
    </div>
  )
}
