export const upsertUserQuery = `
mutation initializeUser ($userId: String!, $name:String, $email:String){
  insert_users(objects: [{ id: $userId, name:$name, email:$email  }], on_conflict: { constraint: users_pkey, update_columns: [] }) {
    affected_rows
}

}



`;
