import { useState } from 'react';
import { z } from 'zod';
import { insertJoinRequest } from '../lib/submissions';
import { WINGS } from '../content/wings';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  year: z.string().optional(),
  branch: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0, 'Leave this empty'),
});

type FormData = z.infer<typeof schema>;

export function JoinForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', year: '', branch: '', message: '', honeypot: '' });
  const [wingInterest, setWingInterest] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      return;
    }

    setLoading(true);
    try {
      const res = await insertJoinRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        year: formData.year ? parseInt(formData.year) : undefined,
        branch: formData.branch,
        wing_interest: wingInterest,
        message: formData.message,
      });

      if (!res.ok) {
        if (res.reason === 'duplicate') {
          setSubmitError("You have already submitted a join request.");
        } else {
          setSubmitError(res.reason || 'Failed to submit request.');
        }
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setSubmitError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-lg mx-auto bg-bg-2/30 backdrop-blur-md p-12 text-center border border-star/10 rounded-2xl">
        <h2 className="text-3xl font-display text-star mb-4">Request Sent!</h2>
        <p className="text-muted">Thanks for your interest in Orion. We'll be in touch soon.</p>
      </div>
    );
  }

  const Input = ({ label, name, required = false, type = 'text', as = 'input' }: any) => (
    <div className="mb-6">
      <label className="block text-star mb-2 text-sm font-semibold">{label} {required && '*'}</label>
      {as === 'textarea' ? (
        <textarea
          className="w-full bg-bg-2/50 border border-star/20 rounded-lg p-4 text-star focus:ring-2 focus:ring-betelgeuse outline-none transition-all"
          rows={4}
          value={(formData as any)[name]}
          onChange={e => setFormData({ ...formData, [name]: e.target.value })}
        />
      ) : (
        <input
          type={type}
          className="w-full bg-bg-2/50 border border-star/20 rounded-lg p-4 text-star focus:ring-2 focus:ring-betelgeuse outline-none transition-all"
          value={(formData as any)[name]}
          onChange={e => setFormData({ ...formData, [name]: e.target.value })}
        />
      )}
      {errors[name as keyof FormData] && <p className="text-betelgeuse text-sm mt-2">{errors[name as keyof FormData]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-bg-2/30 backdrop-blur-md p-8 border border-star/10 rounded-2xl">
      {submitError && <div className="mb-6 p-4 bg-betelgeuse/20 border border-betelgeuse text-betelgeuse rounded-lg">{submitError}</div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full Name" name="name" required />
        <Input label="Email Address" name="email" type="email" required />
      </div>
      
      <Input label="Phone Number" name="phone" />
      
      <div className="grid grid-cols-2 gap-4">
        <Input label="Year" name="year" type="number" />
        <Input label="Branch" name="branch" />
      </div>

      <div className="mb-6">
        <label className="block text-star mb-3 text-sm font-semibold">Wings of Interest</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {WINGS.map(wing => (
            <label key={wing.slug} className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-star/10 hover:border-star/30 transition-colors">
              <input 
                type="checkbox" 
                checked={wingInterest.includes(wing.slug)}
                onChange={e => {
                  if (e.target.checked) setWingInterest([...wingInterest, wing.slug]);
                  else setWingInterest(wingInterest.filter(w => w !== wing.slug));
                }}
                className="accent-star"
              />
              <span className="text-muted text-sm">{wing.name}</span>
            </label>
          ))}
        </div>
      </div>

      <Input label="Anything else you'd like us to know?" name="message" as="textarea" />
      
      <div className="hidden" aria-hidden="true">
        <input type="text" name="honeypot" tabIndex={-1} value={formData.honeypot} onChange={e => setFormData({ ...formData, honeypot: e.target.value })} />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full mt-4 bg-star text-bg font-bold py-4 rounded-full hover:bg-betelgeuse hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Send Request'}
      </button>
    </form>
  );
}
