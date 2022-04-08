import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from '@components/Common';

describe('renders Text', () => {
  it('renders Text', () => {
    render(
      <>
        <Text data-testid="text-with-text">Rendered</Text>
        <Text data-testid="text-without-text" />
      </>
    );

    expect(screen.getByTestId('text-with-text')).toHaveTextContent('Rendered');
    expect(screen.getByTestId('text-without-text')).toHaveTextContent('');
  });
});
