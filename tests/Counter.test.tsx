import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Counter from '../src/components/Counter';

describe('Counter', () => {
    vi.unstubAllGlobals();
});

it('should display initial count', () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

it('should increment count when increment button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/i));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

it('should hide new feature button when VITE_FEATURE_NEW_BUTTON is false', () => {
    vi.stubGlobal('import.meta.env', { VITE_FEATURE_NEW_Button: 'false'});
    render(<Counter />);
    expect(screen.getByText(/Reset Count \(New Feature\)/i)).toBeInTheDocument();
});

it('should reset count when new feature button is clicked and enabled', () => {
    vi.stubGlobal('import.meta.env', { VITE_FEATURE_NEW_BUTTON: 'true' });
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/i));
    fireEvent.click(screen.getByText(/Increment/i));
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Reset Count \(New Feature\)/i));
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});