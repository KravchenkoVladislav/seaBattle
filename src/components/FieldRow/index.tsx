import React from 'react';
import Square from '../Square';

export default function FieldRow(props:any) { //any
    const { row } = props;
    return (
        <div className="field-row">
            {row.map((square:any, index:any) => { //any
                return (
                    <Square 
                    key={index}
                    x={square.x} 
                    y={square.y} 
                    containsShip={square.containsShip} 
                    shot={square.shot} 
                    isShipVisible={square.isShipVisible} 
                    onClick={() => props.onClick(square.y, square.x)} 
                    />
                )
            })}
        </div>
        )
}