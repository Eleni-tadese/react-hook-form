import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import './ContactForm.css';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log('Contact form data:', data);
  };

  return (
    <div className="contact-page">
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Contact Us</h1>
        <p className="contact-description">
          We'd love to hear from you. Send us a message and
          we'll get back to you soon.
        </p>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name',{ required: 'Name is required',
               minLength: {
    value: 2,
    message: 'Name must be at least 2 characters',
  },

            })}
          />
 {errors.name && (
  <p>{errors.name.message}</p>
)}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email',
               {
    required: 'Email is required',
     pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
        }

            )}
          />

          {errors.email && (
  <p>{errors.email.message}</p>
)}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            {...register('message',
               {
  required: 'Message is required',
  minLength: {
    value: 10,
    message: 'Message must be at least 10 characters',
  },
}

            )}
          />
          {errors.message && (
  <p>{errors.message.message}</p>
)}
        </div>

        {/* Submit */}
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;