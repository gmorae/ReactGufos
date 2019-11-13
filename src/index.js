import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './pages/NotFound';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();