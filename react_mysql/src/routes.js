import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';

const Routes = () => (
<BrowserRouter >
        <Switch>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/Register" exact component={Register}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;