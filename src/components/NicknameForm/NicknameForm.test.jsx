import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NicknameForm from './NicknameForm';

describe('<NicknameForm />', () => {
  test('it should mount', () => {
    render(<NicknameForm />);
    
    const nicknameForm = screen.getByTestId('NicknameForm');

    expect(nicknameForm).toBeInTheDocument();
  });
});