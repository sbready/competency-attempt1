import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './App';
import Comp1 from './components/Comp1/Comp1';
import CoolPeeps from './components/CoolPeeps/CoolPeeps';

export default (
    <Switch>                                                {/* 42G */}
        <Route exact path='/' component={ Home } />         {/* 42H 42F */}
        <Route path='/Comp1' component={ Comp1 } />         {/* 42K */}
        <Route path='/CoolPeeps:id' component={ CoolPeeps } />    {/* 42J */}
    </Switch>
)