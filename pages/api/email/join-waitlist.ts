// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const url = "https://skillify.api-us1.com/api/3/contacts";
  const API_KEY = process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_KEY;

  const email = req.body.email;
  const name = req.body.name;

  const firstSpace = name.indexOf(" ");
  const firstName = firstSpace === -1 ? name : name.slice(0, firstSpace);
  const lastName = firstSpace === -1 ? "" : name.slice(firstSpace, name.length);

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
  })
    .then((r) => r.json())
    .then((r) => {
      const url = "https://skillify.api-us1.com/api/3/contactTags";
      const contact = r.contact.id;
      const tag = 6; // [Event] joined waitlist

      return fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          "Api-Token": API_KEY,
        },
        body: JSON.stringify({
          contactTag: {
            contact,
            tag,
          },
        }),
      });
    })
    .then((r) => r.json())
    .then((r) => console.log(r));
  res.statusCode = 200;
  res.json({ result: "New Contact Created with [Event] joined waitlist tag" });
};
