import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App, { key, namespace } from './App';
import axios from 'axios';

jest.mock('axios')

const data = {value: 100}

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockResolvedValue({data})
  });

  test('renders click me button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('click me')
  });

  test('fetches the counter on load', async () => {
    render(<App />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`https://api.countapi.xyz/get/${namespace}/${key}`)
      expect(screen.getByText(`${data.value}`)).toBeInTheDocument()
    })
  })

  test('hits counter api on button click', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    userEvent.click(button)
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      expect(screen.getByText(`${data.value}`)).toBeInTheDocument()
    })
  })
})
