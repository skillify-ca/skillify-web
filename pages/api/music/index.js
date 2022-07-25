// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  const token = process.env.NEXT_PUBLIC_APPLE_MUSIC_DEV_TOKEN;
  res.json({ token });
};
