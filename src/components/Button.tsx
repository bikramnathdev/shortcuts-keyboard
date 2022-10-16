import React, { Children, Ref } from 'react'
const KeyButton = React.forwardRef((props: any, ref: any)  => {
  return (
    <div ref={ref} className='w-4 h-4 p-4 flex items-center justify-center text-xs rounded-lg cursor-pointer font-medium key-button'>
        {props.children}
    </div>
  )
})

export default KeyButton;
