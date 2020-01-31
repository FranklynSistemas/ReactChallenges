import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../../Main';

const Routes: React.FC = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/home" render={() => <Main view="home" />} />
                <Route exact path="/calculator" render={() => <Main view="calculator" />} />
                <Redirect from="/" to="/home" />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
