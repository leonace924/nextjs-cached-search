import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout, Text } from '@components/Common';

describe('renders Layout', () => {
  it('renders Layout without children', async () => {
    render(<Layout />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('renders Layout with children', async () => {
    render(
      <Layout>
        <Text data-testid="text-with-text">Rendered</Text>
      </Layout>
    );

    expect(screen.getByTestId('text-with-text')).toHaveTextContent('Rendered');
  });
});
