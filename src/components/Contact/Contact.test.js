import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

// Mock the Particle component since it's not essential for layout testing
jest.mock('../Particle', () => {
  return function MockParticle() {
    return <div data-testid="particle-background">Particle Background</div>;
  };
});

// Mock the ContactForm component
jest.mock('./ContactForm', () => {
  return function MockContactForm() {
    return <div data-testid="contact-form" className="contact-form">Contact Form</div>;
  };
});

describe('Contact Component', () => {
  test('renders with correct layout structure', () => {
    render(<Contact />);
    
    // Check if main section is rendered
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
    
    // Check if Container with contact-section class is rendered
    const contactSection = document.querySelector('.contact-section');
    expect(contactSection).toBeInTheDocument();
    expect(contactSection).toHaveAttribute('id', 'contact');
    
    // Check if main heading is rendered with purple accent
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Get In Touch');
    
    // Check if purple accent is applied
    const purpleText = heading.querySelector('.purple');
    expect(purpleText).toBeInTheDocument();
    expect(purpleText).toHaveTextContent('Touch');
    
    // Check if description paragraph is rendered
    const description = screen.getByText(/Whether you want to get in touch/i);
    expect(description).toBeInTheDocument();
    
    // Check if contact form is rendered
    const contactForm = screen.getByTestId('contact-form');
    expect(contactForm).toBeInTheDocument();
  });

  test('verifies particle background component is included', () => {
    render(<Contact />);
    
    // Check if Particle component is rendered
    const particleBackground = screen.getByTestId('particle-background');
    expect(particleBackground).toBeInTheDocument();
  });

  test('checks responsive layout at different screen sizes', () => {
    render(<Contact />);
    
    // Check if responsive Bootstrap columns are present
    const mainContentCol = document.querySelector('.col-md-7');
    expect(mainContentCol).toBeInTheDocument();
    
    const formCol = document.querySelector('.contact-form-col');
    expect(formCol).toBeInTheDocument();
    expect(formCol).toHaveClass('col-md-8', 'col-lg-6');
    
    // Check if Container has fluid class for full width
    const fluidContainer = document.querySelector('.container-fluid');
    expect(fluidContainer).toBeInTheDocument();
    expect(fluidContainer).toHaveClass('contact-section');
  });

  test('verifies proper styling and CSS classes are applied', () => {
    render(<Contact />);
    
    // Check if contact-section class is applied
    const contactSection = document.querySelector('.contact-section');
    expect(contactSection).toHaveClass('contact-section');
    
    // Check if contact-content class is applied
    const contactContent = document.querySelector('.contact-content');
    expect(contactContent).toBeInTheDocument();
    
    // Check if contact-form-col class is applied
    const formCol = document.querySelector('.contact-form-col');
    expect(formCol).toHaveClass('contact-form-col');
    
    // Check if contact-form class is applied
    const contactForm = document.querySelector('.contact-form');
    expect(contactForm).toBeInTheDocument();
  });

  test('verifies heading has correct font size styling', () => {
    render(<Contact />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveStyle({ fontSize: '2.1em', paddingBottom: '20px' });
  });

  test('verifies description has center alignment', () => {
    render(<Contact />);
    
    const description = screen.getByText(/Whether you want to get in touch/i);
    expect(description).toHaveStyle({ textAlign: 'center' });
  });
});