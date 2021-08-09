import React from  'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../components/Main';
import ContactForm from '../components/ContactForm';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/contact' component={ContactForm}/>
       </Switch>
    );
}