// DECISION: Using a mock implementation for now as requested.
// We simulate network delay and check for duplicates by using a simple Set.
// To use real Supabase, swap out this implementation and uncomment Supabase client code.

// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

type RegistrationPayload = {
  event_slug: string;
  name: string;
  email: string;
  phone?: string;
  year?: number;
  branch?: string;
};

type JoinRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  year?: number;
  branch?: string;
  wing_interest?: string[];
  message?: string;
};

// In-memory mock DB
const registrations = new Set<string>();
const joinRequests = new Set<string>();

export async function insertRegistration(payload: RegistrationPayload): Promise<{ ok: boolean; reason?: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const key = `${payload.event_slug}:${payload.email}`;
  if (registrations.has(key)) {
    return { ok: false, reason: 'duplicate' };
  }

  // TODO: Supabase call goes here
  /*
  const { error } = await supabase.from('registrations').insert(payload);
  if (error) {
    if (error.code === '23505') return { ok: false, reason: 'duplicate' };
    return { ok: false, reason: error.message };
  }
  */

  registrations.add(key);
  return { ok: true };
}

export async function insertJoinRequest(payload: JoinRequestPayload): Promise<{ ok: boolean; reason?: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (joinRequests.has(payload.email)) {
    return { ok: false, reason: 'duplicate' };
  }

  // TODO: Supabase call goes here
  /*
  const { error } = await supabase.from('join_requests').insert(payload);
  if (error) {
    if (error.code === '23505') return { ok: false, reason: 'duplicate' };
    return { ok: false, reason: error.message };
  }
  */

  joinRequests.add(payload.email);
  return { ok: true };
}
