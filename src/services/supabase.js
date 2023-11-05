import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xyrwcdfdjodgmoovaekh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5cndjZGZkam9kZ21vb3ZhZWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjM2MTEsImV4cCI6MjAxNDIzOTYxMX0.H4-qDlVPZka3rLEK6lgdh7xUudVj8XpP-GepOrb-WS0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
