import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bbviewmsqgtepwkbpakl.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabaseApp = createClient(supabaseUrl, supabaseKey);
