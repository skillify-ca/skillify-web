"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertUserQuery = void 0;
exports.upsertUserQuery = "\nmutation initializeUser ($userId: String!, $name:String, $email:String){\n  insert_users(objects: [{ id: $userId, name:$name, email:$email  }], on_conflict: { constraint: users_pkey, update_columns: [] }) {\n    affected_rows\n}\n\n}\n\n\n\n";
