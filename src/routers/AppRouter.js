import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Callback que esta pendiente de un cambio en la autenticación.
    // El observable esta siempre pendiente del cambio en la autentiación.
    useEffect(() => {

        firebase.auth().onAuthStateChanged(async(user) => {
            
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                // Cuando la App se carga por primera vez obtener todos los notes.
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);
        });

    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking) {
        return(
            <div className="loading show">
                <div className="spin"></div>
            </div>
        );
    }

    return (
        <Router>
            <div>
                {
                    
                }
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={ AuthRouter }
                            isAuthenticated={ isLoggedIn }
                        />
                        <PrivateRoute
                            exact
                            path="/"
                            component={ JournalScreen }
                            isAuthenticated={ isLoggedIn }
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}