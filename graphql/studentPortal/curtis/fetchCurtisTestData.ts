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

export async function updateCurtisTestData(dataObj: any) {
  const { data, error } = await supabase
    .from("curtis-test")
    .update({ data: dataObj })
    .eq("id", 1)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data.data;
}