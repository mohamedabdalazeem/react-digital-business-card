import React from 'react'
import profileImg from '../src/groot.jpg'

export default function Info() {
    return (
        <div className="info">
            <img src={profileImg} className="info-img" />
            <h2>Groot Jr</h2>
            <p className="info-position">Front-end Devekoper</p>
            <p>Groot Website</p>
            <button className="info-email-btn"><i className="fa fa-envelope"></i> Email</button>
            <button className="info-linkedin-btn"><i className="fa fa-linkedin-square"></i> LinkedIn</button>
        </div>
    )
}