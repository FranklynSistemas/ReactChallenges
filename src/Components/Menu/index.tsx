import React from 'react';
import { withRouter } from 'react-router-dom';

import { viewParam } from '../../Interfaces';

import './styles.css';

const Menu: React.FC<any> = props => {
    const goToView = ({ view }: viewParam) => {
        props.history.push(`/${view}`);
    };
    return (
        <div className="menu-container">
            <h1>Welcome to our React challenges project</h1>
            <p>
                The idea of this project is use all those new features and best practice that appear each day and learn
                it with practice in a checked environment.
            </p>
            <p>
                This project using <b>React</b> with <b>TypeScript</b> and <b>Jest</b> to create our tests.
            </p>
            <p>Below our challenges:</p>
            <ul className="menu">
                <li
                    onClick={() =>
                        goToView({
                            view: 'calculator',
                        })
                    }
                >
                    Calculator with memory
                </li>
            </ul>
        </div>
    );
};

export default withRouter<any, React.FC>(Menu);
