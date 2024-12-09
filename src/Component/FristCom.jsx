import React, { useState } from 'react'
import SecomeCom from './SecomeCom'

const FristCom = () => {

const [count , setcout] = useState(0)

const hendelfun = ()=>{
    setcout( count + 1)
}

const hendelnon = ()=>{
    setcout(count - 1)
}

  return (
    <>
   <h1 className='text-[34px]' >{count}</h1>
   
   
   <div className='  mt-[20px] flex gap-[15px]  ' > 
    <SecomeCom   numberCOunt={hendelfun}   hobereffect={' text-white hover:text-green-800 hover:bg-sky-600 '}                                                         coutersd={'add'} />
   <SecomeCom    numberCOunt={hendelnon}   hobereffect={' text-green-800 hover:text-white hover:bg-sky-600 '}                                                         coutersd={'Remove'} />
   <SecomeCom    numberCOunt={hendelfun}   hobereffect={' text-yellow-400 hover:text-red-500 hover:bg-sky-600'}                                                         coutersd={'Finish'} /></div>
   
   
   </>
  )
}

export default FristCom