import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';

const AppRoutes = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default AppRoutes;