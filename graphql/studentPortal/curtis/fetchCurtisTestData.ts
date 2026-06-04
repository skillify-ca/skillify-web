import { supabase } from "../../../lib/supabase";

export async function fetchCurtisTestData() {
  const { data, error } = await supabase
    .from("curtis-test")
    .select(`
      data
    `)
    .eq("id", 1)
    .single();

  if (error) {
    throw error;
  }

  return data.data;
}

