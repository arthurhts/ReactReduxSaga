/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('<Header/>', () => {
    test('renders without crashing', () => {
        render(<Header />);
    });
});
