import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Title } from '@components/Common';

describe('renders Title', () => {
  it('renders Title', () => {
    render(
      <>
        <Title data-testid="title-with-text">Rendered</Title>
        <Title data-testid="title-without-text" />
      </>
    );

    expect(screen.getByTestId('title-with-text')).toHaveTextContent('Rendered');
    expect(screen.getByTestId('title-without-text')).toHaveTextContent('');
  });
});
