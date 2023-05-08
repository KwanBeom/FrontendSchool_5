import React from 'react'
import "./DisplayMood.css"

export default function DisplayMood(props) {
    return (
        <div className="container">{`${props.mood}`}</div>
    );
}
