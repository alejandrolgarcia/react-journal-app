import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NoteAppbar } from './NoteAppbar';

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const [formValues, handleInputChange] = useForm(note);

    const { title, body } = formValues;

    return (
        <div className="notes__main-content">

            <NoteAppbar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (note.url) && 
                    (
                        <div className="notes__image">
                            <img
                                src="https://d500.epimg.net/cincodias/imagenes/2019/10/17/lifestyle/1571308099_533301_1571308258_sumario_normal.jpg"
                                alt="imagen"
                            />
                        </div>
                    )
                }

            </div>
            
        </div>
    )
}
