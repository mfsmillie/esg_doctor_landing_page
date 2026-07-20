/*
# Create consultation_requests table (single-tenant, no auth)

1. New Tables
  - `consultation_requests`
    - `id` (uuid, primary key)
    - `full_name` (text, not null)
    - `email` (text, not null)
    - `phone` (text, nullable)
    - `message` (text, nullable)
    - `created_at` (timestamptz, auto-set)

2. Security
  - Enable RLS on `consultation_requests`.
  - Allow anon + authenticated INSERT only (patients submit form, no read/update/delete needed from client).
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests" ON consultation_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_select_consultation_requests" ON consultation_requests FOR SELECT
  TO anon, authenticated USING (false);

DROP POLICY IF EXISTS "anon_update_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_update_consultation_requests" ON consultation_requests FOR UPDATE
  TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_delete_consultation_requests" ON consultation_requests FOR DELETE
  TO anon, authenticated USING (false);
