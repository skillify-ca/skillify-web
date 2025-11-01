import { supabase } from "../../../lib/supabase";

export async function fetchUserProfile(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select(`
      id,
      created_at,
      email,
      last_seen,
      name,
      profile_image,
      current_focus
    `)
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export type FetchUserProfileDataResponse = {
  users: Array<UserProfileResponse>;
};

export type UserProfileResponse = {
  __typename: string;
  created_at: Date;
  email: string;
  id: string;
  last_seen: Date;
  name: string;
  profile_image: string;
  current_focus: string;
};

export type UserProfileData = {
  createdAt: Date;
  email: string;
  id: string;
  lastSeen: Date;
  name: string;
  profileImage?: string;
  currentFocus?: string;
};

export type User = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};
