import React from 'react';
import FieldRow from '../FieldRow';

export default function Field(props:any) { // any
    const { fieldMap } = props;
    return (
        <div className={`field ${props.whose ? props.whose : ""}`}>
            {fieldMap.map((row:any, index:any) => { //any
                return (
                    <FieldRow 
                    key={index}
                    row={row} 
                    onClick={(y:any, x:any) => props.onClick(y, x)} //any
                    />
                )
            })}
        </div>
    )
}