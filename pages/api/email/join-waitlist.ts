// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const url = "https://skillify.api-us1.com/api/3/contacts";
  const API_KEY = process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_KEY;

  const email = req.body.email;
  const name = req.body.name;

  const firstSpace = name.indexOf(" ");
  const firstName = name.slice(0, firstSpace);
  const lastName = name.slice(firstSpace, name.length);

  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "Api-Token": API_KEY,
    },
    body: JSON.stringify({
      contact: {
        email,
        firstName,
        lastName,
      },
    }),
  });
  res.statusCode = 200;
  res.json({ result: "New Contact Created" });
};
