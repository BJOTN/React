import React from 'react'
import Color from "./Color"

export default function Colors({ arr }) {
    return (
        <ul>
            {arr.map(obj => <Color key ={obj.id} obj ={obj} />)}
        </ul>)
}
