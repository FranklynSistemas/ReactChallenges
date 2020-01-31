import React from 'react';
import { withRouter } from 'react-router-dom';

import Menu from '../Components/Menu';
import Calculator from '../Components/Calculator';

import { viewParam } from '../Interfaces';

import './styles.css';

const Main: React.FC<any> = ({ history, view }) => {
    console.log('view ->', view, 'history ->', history);
    const getView = ({ view }: viewParam) => {
        switch (view) {
            case 'home':
                return <Menu history={history} />;
            case 'calculator':
                return <Calculator />;
            default:
                return <Menu history={history} />;
        }
    };
    return (
        <div id="main" className="main-view">
            {getView({ view })}
        </div>
    );
};

export default withRouter<any, React.FC>(Main);
