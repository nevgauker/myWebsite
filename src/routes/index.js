import React from  'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from '../screens/Main/MainScreen';
import ContactFormScreen from '../screens/Contact/ContactFormScreen';
import ErrorScreen from '../screens/404/ErrorScreen';
import useGaTracker from '../useGaTracker';


export default function Routes(){
    useGaTracker();
    return(
        <Switch>
            <Route path='/' exact component={MainScreen}/>
            <Route path='/contact' component={ContactFormScreen}/>
            <Route component={ErrorScreen}/>
       </Switch>
    );
}