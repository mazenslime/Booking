import React, { memo } from 'react'

function Button({title, cls='', handleClick=()=>{}}) {
  return (
    <div className={`bg-blue-500 px-4 py-1 rounded-md cursor-pointer ${cls}`} onClick={handleClick}>
      {title}
    </div>
  )
}

export default Button