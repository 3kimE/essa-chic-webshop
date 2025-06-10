
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ipjhzesaxyntvzdyywmn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwamh6ZXNheHludHZ6ZHl5d21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzODM2NDMsImV4cCI6MjA2NDk1OTY0M30.oYvL06NJ5_nhJEAJ-FNBy39dl1GVu_IpaQpb7YJ9fRI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
