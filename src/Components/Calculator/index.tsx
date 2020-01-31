import React from 'react';
import './styles.css';

import { withRouter } from 'react-router-dom';

const Calculator: React.FC = () => {
    return (
        <div id="calculator" className="calculator-view">
            <h2>Calculator with memory</h2>
            <p>
                The idea of this challenge is create a calculator using the less code as possible and apply the best
                practices working with <b>TypeScript</b> and <b>React</b> event using <b>CSS</b>.
            </p>
            <p>This calculator should have the basic features like:</p>
            <ul>
                <li>Sum</li>
                <li>Subtraction</li>
                <li>Division</li>
                <li>Multiplication</li>
            </ul>
            <p>
                Some others features that this calculator should have are the possibility to see in their screen all the
                previous operations and a button to clean the screen if the user need, another important thing is the
                style of the calculator, this should be something similar to <b>Matrix</b> with black and green.
            </p>
            <i>Good luck!</i>
            {/* Please insert here tour calculator component **/}
        </div>
    );
};

export default withRouter<any, React.FC>(Calculator);
