import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { ErrorView } from '@components/Pages/Home';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          error: 'Oops! Display this error to win your freedom!',
        }),
    })
  ) as jest.Mock;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('renders ErrorView', () => {
  it('renders ErrorView', async () => {
    const { getByText } = render(<ErrorView />);

    const counter = await waitFor(() =>
      getByText('Oops! Display this error to win your freedom!')
    );

    expect(counter).toHaveTextContent(
      'Oops! Display this error to win your freedom!'
    );

    const titleElement = screen.getByText(/Error Endpoint message/i);
    expect(titleElement).toBeInTheDocument();
  });
});
