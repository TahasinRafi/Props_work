import React from 'react'

const SecomeCom = ({coutersd, numberCOunt, hobereffect }) => {
  return (
    <button onClick={numberCOunt} className=   {`flex ${hobereffect}   hover:bg-sky-600 justify-center bg-orange-400 text-black rounded-[20px] w-[160px] h-[40px] text-center items-center `}  >{coutersd}</button>
  )
}

export default SecomeCom