import emailjs from '@emailjs/browser';

// EmailJS configuration - replace with your actual IDs
const SERVICE_ID = "service_7qnhaxf";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_kkvh5l4';
const PUBLIC_KEY = 's0isbRV8QaQDvulyV';

/**
 * Initialize EmailJS with public key
 */
export const initEmailService = () => {
  emailjs.init(PUBLIC_KEY);
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data containing name, email, subject, message
 * @returns {Promise} - Resolves on success, rejects on failure
 */
export const sendEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    reply_to: formData.email,
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    }

    throw new Error('Failed to send email');
  } catch (error) {
    console.error('Email service error:', error);
    throw new Error(
      error.text || 'Failed to send email. Please try again later.'
    );
  }
};

const emailService = {
  initEmailService,
  sendEmail,
};

export default emailService;







