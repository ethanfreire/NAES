// import react-testing methods
import {render, screen} from '@testing-library/react'

import '@testing-library/jest-dom'
// the component to test

import Button from '../components/button/button.component';

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button/>);
    
    expect(screen.getByRole('button')).toHaveStyle('background-color: black');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

});
