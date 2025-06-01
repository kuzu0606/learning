import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data } = await supabase.from('vocab').select();
  console.log(data);
  return {
    vocabs: data ?? [],
  };
}
