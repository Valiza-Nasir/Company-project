import React from 'react'

function Title({title}: {title: string}) {
  return (
    <div>
        <h1 className="text-font_46 font-semiBold text-textColor my-6">{title}</h1>
    </div>
  )
}

export default Title