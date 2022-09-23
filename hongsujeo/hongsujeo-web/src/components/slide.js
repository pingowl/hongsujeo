import React from 'react';

export function Slide(props){
    const { title, children } = props;
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
}