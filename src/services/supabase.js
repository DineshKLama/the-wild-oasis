import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdvkieitvraewkzlzxko.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdmtpZWl0dnJhZXdremx6eGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NTU2MjEsImV4cCI6MjAxMjUzMTYyMX0.AVGhuKZfwHFRcuQAQqYsT5o_vxGNncA0wWaw-x3UWuU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
