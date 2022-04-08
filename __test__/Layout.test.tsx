import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout, Text } from '@components/Common';

describe('renders Layout', () => {
  it('renders Layout', async () => {
    render(
      <Layout>
        <Text data-testid="text-with-text">Rendered</Text>
      </Layout>
    );

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(screen.getByTestId('text-with-text')).toHaveTextContent('Rendered');
  });
});
