import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { useHover } from '../src/useHover'


describe('useHover', () => {
    it('should detect mouse enter and leave', () => {
        let testIsHovered = false

        function TestComponent() {
            const [ref, isHovered] = useHover<HTMLDivElement>()
            testIsHovered = isHovered
            return <div ref={ref} data-testid="hover-element">Hover me</div>
        }

        const { getByTestId } = render(<TestComponent />)
        const element = getByTestId('hover-element')

        // Initial state
        expect(testIsHovered).toBe(false)

        // Mouse enter
        fireEvent.mouseEnter(element)
        expect(testIsHovered).toBe(true)

        // Mouse leave
        fireEvent.mouseLeave(element)
        expect(testIsHovered).toBe(false)
    })

    it('should cleanup event listeners on unmount', () => {
        const addEventListenerSpy = vi.spyOn(HTMLDivElement.prototype, 'addEventListener')
        const removeEventListenerSpy = vi.spyOn(HTMLDivElement.prototype, 'removeEventListener')

        function TestComponent() {
            const [ref, isHovered] = useHover<HTMLDivElement>()
            return <div ref={ref}>Hover me</div>
        }

        const { unmount } = render(<TestComponent />)

        expect(addEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function))
        expect(addEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function))

        unmount()

        expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function))
        expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function))

        addEventListenerSpy.mockRestore()
        removeEventListenerSpy.mockRestore()
    })
})