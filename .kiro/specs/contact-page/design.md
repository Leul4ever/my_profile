# Contact Page Design Document

## Overview

The contact page feature replaces the existing "Blogs" navigation item with a comprehensive contact form that allows visitors to send emails directly to the portfolio owner. The design maintains visual consistency with the existing portfolio while providing a professional and accessible way for potential clients, collaborators, and visitors to get in touch.

The implementation follows the established React architecture using functional components, React Bootstrap for layout, and maintains the existing styling patterns including the particle background, color scheme, and responsive design principles.

## Architecture

### Component Structure
```
Contact/
├── Contact.js (Main contact page component)
├── ContactForm.js (Form component with validation)
└── ContactForm.css (Contact-specific styles)
```

### Navigation Integration
- Replace the existing "Blogs" navigation item in `Navbar.js`
- Update routing in `App.js` to include the new contact route
- Change the navigation icon from `ImBlog` to `AiOutlineMail` for better semantic meaning

### State Management
- Local component state for form data (name, email, subject, message)
- Form validation state for real-time feedback
- Submission state (idle, loading, success, error)
- No external state management required due to simple form nature

## Components and Interfaces

### Contact Component (Contact.js)
**Purpose**: Main page wrapper that provides layout structure consistent with other portfolio pages

**Props**: None

**Structure**:
- Particle background component
- Container with fluid layout
- Page heading with purple accent styling
- ContactForm component integration
- Responsive grid layout using React Bootstrap

### ContactForm Component (ContactForm.js)
**Purpose**: Handles form rendering, validation, and submission logic

**Props**: None (self-contained)

**State Interface**:
```javascript
{
  formData: {
    name: string,
    email: string,
    subject: string,
    message: string
  },
  validation: {
    name: { isValid: boolean, message: string },
    email: { isValid: boolean, message: string },
    subject: { isValid: boolean, message: string },
    message: { isValid: boolean, message: string }
  },
  submissionState: 'idle' | 'loading' | 'success' | 'error',
  errorMessage: string
}
```

**Methods**:
- `handleInputChange(field, value)`: Updates form data and triggers validation
- `validateField(field, value)`: Returns validation result for specific field
- `validateForm()`: Validates entire form and returns boolean
- `handleSubmit(event)`: Processes form submission
- `resetForm()`: Clears all form data and states

## Data Models

### FormData Model
```javascript
{
  name: {
    type: 'string',
    required: true,
    minLength: 2,
    maxLength: 50,
    validation: /^[a-zA-Z\s]+$/
  },
  email: {
    type: 'string',
    required: true,
    validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  subject: {
    type: 'string',
    required: true,
    minLength: 5,
    maxLength: 100
  },
  message: {
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 1000
  }
}
```

### Email Service Interface
```javascript
{
  to: 'portfolio-owner@email.com',
  from: formData.email,
  replyTo: formData.email,
  subject: `Portfolio Contact: ${formData.subject}`,
  body: {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString()
  }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Property 1: Real-time validation updates
*For any* form field and any input value, when the user enters data, the validation state should update immediately to reflect the validity of the input
**Validates: Requirements 2.2**

Property 2: Empty field validation prevention
*For any* required form field, when the field is empty or contains only whitespace, form submission should be prevented and validation messages should be displayed
**Validates: Requirements 2.3**

Property 3: Email format validation
*For any* string that does not match valid email format patterns, when entered in the email field, the system should display an email validation error
**Validates: Requirements 2.4**

Property 4: Submit button state management
*For any* form state, when all required fields contain valid data, the submit button should be enabled, and when any field is invalid, the submit button should be disabled
**Validates: Requirements 2.5**

Property 5: Form submission processing
*For any* valid form data, when the submit button is clicked, the system should initiate the submission process and update the submission state
**Validates: Requirements 3.1**

Property 6: Loading state display
*For any* form submission in progress, the submit button should display a loading state and be disabled to prevent duplicate submissions
**Validates: Requirements 3.2**

Property 7: Success message display
*For any* successful form submission, the system should display a success message to provide user feedback
**Validates: Requirements 3.3**

Property 8: Form reset after success
*For any* successful form submission, all form fields should be cleared and reset to their initial empty state
**Validates: Requirements 3.4**

Property 9: Error message display
*For any* failed form submission, the system should display an appropriate error message explaining the failure
**Validates: Requirements 3.5**

Property 10: Email service integration
*For any* valid form submission, the email service should be called with the correct recipient, sender information, and form data
**Validates: Requirements 4.1**

Property 11: Email content inclusion
*For any* email sent through the contact form, the email body should contain all form fields: name, email, subject, and message
**Validates: Requirements 4.2**

Property 12: Reply-to configuration
*For any* email sent through the contact form, the reply-to address should be set to the sender's email address from the form
**Validates: Requirements 4.3**

Property 13: Email formatting
*For any* email sent through the contact form, the email content should be formatted in a structured, readable manner
**Validates: Requirements 4.4**

Property 14: Service error handling
*For any* email service failure or unavailability, the system should handle the error gracefully and display an informative error message to the user
**Validates: Requirements 4.5**

Property 15: Responsive layout behavior
*For any* screen size below tablet breakpoint, the form layout should adapt to provide optimal mobile viewing experience
**Validates: Requirements 5.2**

Property 16: Keyboard navigation support
*For any* keyboard-only navigation through the form, focus should move logically between form elements and provide clear visual focus indicators
**Validates: Requirements 5.3**

## Error Handling

### Form Validation Errors
- **Empty Fields**: Display field-specific error messages below each required field
- **Invalid Email**: Show email format error with example of correct format
- **Field Length**: Indicate minimum/maximum character requirements
- **Special Characters**: Validate name field to allow only letters and spaces

### Submission Errors
- **Network Errors**: Display user-friendly message about connection issues
- **Service Unavailable**: Inform user to try again later or use alternative contact method
- **Rate Limiting**: Handle too many requests with appropriate messaging
- **Timeout**: Provide clear feedback about request timeout

### Error Recovery
- Maintain form data during error states to prevent user frustration
- Provide clear action steps for error resolution
- Include fallback contact information (email address) for critical failures

## Testing Strategy

### Unit Testing Framework
- **Jest** for JavaScript unit testing
- **React Testing Library** for component testing
- **@testing-library/user-event** for user interaction simulation

### Property-Based Testing Framework
- **fast-check** for JavaScript property-based testing
- Configure each property test to run a minimum of 100 iterations
- Each property-based test must include a comment referencing the design document property

### Unit Testing Approach
Unit tests will cover:
- Component rendering with correct elements and styling
- Navigation integration and route changes
- Form field presence and initial states
- Accessibility features (ARIA labels, keyboard navigation)
- Mobile responsive layout verification

### Property-Based Testing Approach
Property tests will verify:
- Form validation behavior across various input combinations
- Submit button state management with different form states
- Email service integration with various form data combinations
- Error handling with different failure scenarios
- Responsive behavior across different screen size ranges

### Test Organization
```
src/components/Contact/
├── Contact.test.js (Unit tests for main component)
├── ContactForm.test.js (Unit tests for form component)
├── ContactForm.properties.test.js (Property-based tests)
└── __mocks__/
    └── emailService.js (Mock email service for testing)
```

### Testing Requirements
- All property-based tests must be tagged with: **Feature: contact-page, Property {number}: {property_text}**
- Each correctness property must be implemented by a single property-based test
- Unit tests and property tests are complementary and both must be included
- Mock email service for testing without actual email sending
- Test coverage should include error scenarios and edge cases

## Implementation Notes

### Email Service Integration
- Use EmailJS or similar service for client-side email sending
- Configure service with environment variables for security
- Implement retry logic for failed submissions
- Add rate limiting to prevent spam

### Performance Considerations
- Debounce validation to avoid excessive re-renders
- Lazy load email service to reduce initial bundle size
- Optimize form re-renders with React.memo if needed
- Maintain consistent performance with other portfolio pages

### Security Considerations
- Sanitize all form inputs before processing
- Implement client-side rate limiting
- Use HTTPS for all email service communications
- Validate email format both client and server-side

### Accessibility Features
- Proper ARIA labels for all form elements
- Clear focus indicators for keyboard navigation
- Screen reader friendly error messages
- High contrast validation states
- Semantic HTML structure for form elements