import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gfwjcallemugxqdweuuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmd2pjYWxsZW11Z3hxZHdldXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MDIxMzEsImV4cCI6MjA2NTQ3ODEzMX0.kvaYhV4DTNcyix7PzjF9N9XYxzA3bK0nx3mT8bsHqTo'

export const supabase = createClient(supabaseUrl, supabaseKey)