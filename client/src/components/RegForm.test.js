import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import RegForm from './RegForm'


describe('<RegForm />', () => {

    it('should render text registration form', () => {
        const heading = render(<RegForm />);
        heading.findByText(/Registration Form/i);
    });

    it('calls "onClick" prop on button click', () => {
        const onClick = jest.handleSubmit();
        const { findByText } = render(<button />);
      
        fireEvent.click(findByText(/Submit/i));
        expect(onClick).toHaveBeenCalled();
    });

    it('calls "resetform" prop', () => {
        
        expect(restForm()).toHaveBeenCalled();
    })

});