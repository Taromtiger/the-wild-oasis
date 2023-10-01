import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://baqzwmbelignxridbsip.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcXp3bWJlbGlnbnhyaWRic2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODAyMDMsImV4cCI6MjAwOTg1NjIwM30.j4VrMqK-hZ6TiF8s885sm2OlxdntLyCyr36K75zDI4w';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
