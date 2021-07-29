import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// Create client-side Magic instance
const createMagic = (key) => {
    console.log("KEY", process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);