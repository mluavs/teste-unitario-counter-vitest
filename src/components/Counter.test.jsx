import { fireEvent, render, screen } from '@testing-library/react'
import { test } from 'vitest'
import Counter from './Counter'


/**
* @vitest-environment jsdom
*/

describe('Counter', () => {
    beforeEach(() => {
        render(<Counter />)
    })
    
    test('deverá renderizar o valor inicial 0', () => {
        
    
        expect(screen.getByText('0')).toBeInTheDocument()
        expect(screen.getByTestId('count')).toBeInTheDocument()
        expect(screen.getByTestId('count')).toHaveTextContent('0')
    })
    
    test('deverá acrescentar 1 quando o botão Add for clicado', () => {
        expect(screen.getByTestId('add')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('add'));
        expect(screen.getByTestId('count')).toHaveTextContent('1')
    })
    
    test('deverá diminuir 1 quando o botão Subtract for clicado', () => {
        expect(screen.getByTestId('subtract')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('subtract'));
        expect(screen.getByTestId('count')).toHaveTextContent('-1')
    })
})


