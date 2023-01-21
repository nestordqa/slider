import { render, screen } from '@testing-library/react';
import App from './App';

describe('Interview', ()=>{
  test('HOLA MUNDO', () => {
    render(<App />);
    const linkElement = screen.getByText(/HOLA MUNDO/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('MUNDO', () => {
    render(<App />);
    const linkElement = screen.getByText(/MUNDO/i);
    expect(linkElement).toBeInTheDocument();
    })
  }  
);

