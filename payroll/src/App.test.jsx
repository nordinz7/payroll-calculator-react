import React from 'react'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('Title: Payroll is shown at the screen',()=>{
    render(<App/>)
    const title = screen.getByText(/payroll/i);
    expect(title).toBeInTheDocument();
})