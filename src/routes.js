import React from 'react';
import  { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Form from './components/Form'


export default (
    <div>
        <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/add-product' component={Form}></Route>
            <Route path='/edit-product/:id' component={Form}></Route>
        </Switch>
    </div>

);