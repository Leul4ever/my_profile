import { sendEmail } from './emailService';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  send: jest.fn(),
}));

import emailjs from '@emailjs/browser';

describe('Email Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /**
   * Property 10: Email service integration
   * Validates: Requirements 4.1
   */
  test('Property 10: Email service integration - sends email with correct parameters', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200 });
    
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message content',
    };

    const result = await sendEmail(formData);
    
    expect(emailjs.send).toHaveBeenCalledTimes(1);
    expect(result.success).toBe(true);
  });

  /**
   * Property 11: Email content inclusion
   * Validates: Requirements 4.2
   */
  test('Property 11: Email content inclusion - includes all form fields', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200 });
    
    const formData = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Important Subject',
      message: 'This is the message body',
    };

    await sendEmail(formData);
    
    const callArgs = emailjs.send.mock.calls[0];
    const templateParams = callArgs[2];
    
    expect(templateParams.from_name).toBe(formData.name);
    expect(templateParams.from_email).toBe(formData.email);
    expect(templateParams.subject).toBe(formData.subject);
    expect(templateParams.message).toBe(formData.message);
  });

  /**
   * Property 12: Reply-to configuration
   * Validates: Requirements 4.3
   */
  test('Property 12: Reply-to configuration - sets reply_to from sender email', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200 });
    
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test',
      message: 'Test message',
    };

    await sendEmail(formData);
    
    const callArgs = emailjs.send.mock.calls[0];
    const templateParams = callArgs[2];
    
    expect(templateParams.reply_to).toBe(formData.email);
  });

  /**
   * Property 14: Service error handling
   * Validates: Requirements 4.5
   */
  test('Property 14: Service error handling - handles email service errors', async () => {
    emailjs.send.mockRejectedValueOnce(new Error('Service unavailable'));
    
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test',
      message: 'Test message',
    };

    await expect(sendEmail(formData)).rejects.toThrow();
  });
});







