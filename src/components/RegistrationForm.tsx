import { useState } from 'react';
import { z } from 'zod';
import { insertRegistration } from '../lib/submissions';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  year: z.string().optional(),
  branch: z.string().optional(),
  honeypot: z.string().max(0, 'Leave this empty'),
});

type FormData = z.infer<typeof schema>;

export function RegistrationForm({ eventSlug, fallbackUrl }: { eventSlug: string, fallbackUrl?: string }) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', year: '', branch: '', honeypot: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError('');

    const result = schema.safeParse(formData);
    if (!result.success) {
      const formatted = result.error.format();
      setErrors({
        name: formatted.name?._errors[0],
        email: formatted.email?._errors[0],
      });
      return;
    }

    if (formData.honeypot) {
      // Silently reject
      navigate(`/events/${eventSlug}/registered`);
      return;
    }

    setLoading(true);
    try {
      const res = await insertRegistration({
        event_slug: eventSlug,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        year: formData.year ? parseInt(formData.year) : undefined,
        branch: formData.branch,
      });

      if (!res.ok) {
        if (res.reason === 'duplicate') {
          setSubmitError("You're already registered for this event.");
        } else {
          setSubmitError(res.reason || 'Failed to register.');
        }
      } else {
        navigate(`/events/${eventSlug}/registered`);
      }
    } catch (err: any) {
      setSubmitError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const Input = ({ label, name, required = false, type = 'text' }: any) => (
    <div className="mb-6">
      <label className="block text-star mb-2 text-sm font-semibold">{label} {required && '*'}</label>
      <input
        type={type}
        className="w-full bg-bg-2/50 border border-star/20 rounded-lg p-4 text-star focus:ring-2 focus:ring-betelgeuse outline-none transition-all"
        value={(formData as any)[name]}
        onChange={e => setFormData({ ...formData, [name]: e.target.value })}
      />
      {errors[name as keyof FormData] && <p className="text-betelgeuse text-sm mt-2">{errors[name as keyof FormData]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-bg-2/30 backdrop-blur-md p-8 border border-star/10 rounded-2xl">
      {submitError && <div className="mb-6 p-4 bg-betelgeuse/20 border border-betelgeuse text-betelgeuse rounded-lg">{submitError}</div>}
      
      <Input label="Full Name" name="name" required />
      <Input label="Email Address" name="email" type="email" required />
      <Input label="Phone Number" name="phone" />
      <div className="grid grid-cols-2 gap-4">
        <Input label="Year" name="year" type="number" />
        <Input label="Branch" name="branch" />
      </div>
      
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="honeypot" tabIndex={-1} value={formData.honeypot} onChange={e => setFormData({ ...formData, honeypot: e.target.value })} />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full mt-4 bg-star text-bg font-bold py-4 rounded-full hover:bg-betelgeuse hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Register'}
      </button>

      {fallbackUrl && (
        <div className="mt-6 text-center border-t border-muted/20 pt-6">
          <p className="text-muted text-sm mb-4">Having trouble with this form?</p>
          <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="text-star underline hover:text-betelgeuse">
            Use the external form instead
          </a>
        </div>
      )}
    </form>
  );
}
