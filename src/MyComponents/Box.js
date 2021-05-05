import React from 'react'

export const Box = (props) => {
    let classNames = "box";
    if(props.color === "blue")
        classNames = classNames + " bg-blue";
    else if(props.color === "green")
        classNames = classNames + " bg-green";
    else if(props.color === "grey")
        classNames = classNames + " bg-grey";
    
    return (
        <div className={classNames}>
            <p>{props.text}</p>
        </div>
    )
}
