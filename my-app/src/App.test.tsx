import { render, screen } from '@testing-library/react';
import App from './App';

test("avvudda", () => {
    // const {debug}=render(<App />);
    // debug();
    render(<App />)
    const linkElement = screen.getByText(/Vite React/i);
    expect(linkElement).toBeInTheDocument();
});

describe("calculator",()=>{
    it("should add two numbers", () => {
        const sum = 1 + 2;
        expect(sum).toBe(3);
    });
        
    it("should subtract two numbers", () => {
        const difference = 5 - 2;
        expect(difference).toBe(3);
    });
})