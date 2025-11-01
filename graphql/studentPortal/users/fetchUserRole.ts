import { supabase } from "../../../lib/supabase";
import { UserRole } from "../../../redux/profileSlice";

export async function fetchUserRole(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select(`
      created_at,
      email,
      userRole
    `)
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export type FetchRoleData = {
  users: UserData[];
};
export type UserData = {
  userRole: UserRole;
  created_at: Date;
  email: string;
};
