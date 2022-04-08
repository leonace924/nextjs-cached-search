import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text, View } from '@components/Common';

describe('renders View', () => {
  it('renders View', () => {
    render(
      <View data-testid="view">
        <Text data-testid="text">Rendered</Text>
      </View>
    );

    expect(screen.getByTestId('text')).toHaveTextContent('Rendered');
  });
});
