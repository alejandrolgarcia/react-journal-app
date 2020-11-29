import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://d500.epimg.net/cincodias/imagenes/2019/10/17/lifestyle/1571308099_533301_1571308258_sumario_normal.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam nobis deserunt.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>29</h4>
            </div>
        </div>
    )
}
