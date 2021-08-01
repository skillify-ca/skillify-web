
import { Magic } from '@magic-sdk/admin';

// Initiating Magic instance for server-side methods
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req, res) {
  try {
    const userPublicAddress = magicAdmin.token.getPublicAddress(req.headers.authorization);
    magicAdmin.users.logoutByPublicAddress(userPublicAddress);
    res.status(200).json({ authenticated: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
