export async function logToSlack(message: string) {
  await fetch("/api/slack/logToSlack", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: message,
    }),
  });
}
