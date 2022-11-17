import React from 'react'

const FirstRow = React.forwardRef<HTMLSpanElement>((props, ref) => {
    console.log(ref)
    return (
        <>
            <span className="w-4 h-4 p-4 flex items-center justify-center text-xs rounded-lg cursor-pointer font-medium key-button" ref={ref}>
                esc
            </span>
            <span className="w-4 h-4 p-4 flex items-center justify-center text-xs font-extralight rounded-lg cursor-pointer key-button">
                4
            </span>
        </>
    )
})

export default FirstRow