import { render } from '@testing-library/react';
import App from './App';

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock particles
jest.mock('./components/Particle', () => {
  return function MockParticle() {
    return <div data-testid="particle-background">Particle Background</div>;
  };
});

test('renders app without crashing', () => {
  // Just check that App can be imported and renders
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
