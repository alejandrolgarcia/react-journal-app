import React from 'react';
import { NoteAppbar } from './NoteAppbar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NoteAppbar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://d500.epimg.net/cincodias/imagenes/2019/10/17/lifestyle/1571308099_533301_1571308258_sumario_normal.jpg"
                        alt="imagen"
                    />
                </div>

            </div>
            
        </div>
    )
}
