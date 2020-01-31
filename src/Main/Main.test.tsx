import React from 'react';
import { render } from '@testing-library/react';
import Main from './';

test('Should render the main view', () => {
    const { getByTestId } = render(<Main />);
    const linkElement = getByTestId('main');
    expect(linkElement).toBeInTheDocument();
});
