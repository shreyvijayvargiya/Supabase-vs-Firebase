import { supabaseApp } from "../supabase";

export const usersFromSupabase = async() => {
  const { data: users } = await supabaseApp.from('users').select('*');
  return users;
};
