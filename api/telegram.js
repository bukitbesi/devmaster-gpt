export default async function handler(req, res) {
  const data = req.body;

  const chatId = data?.message?.chat?.id;
  const text = data?.message?.text;

  if (text === "/start") {
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "👋 Welcome to AivioGenBot – Tap below to get your AI prompt.",
        reply_markup: {
          keyboard: [[{ text: "🧠 Generate Prompt" }]],
          resize_keyboard: true,
          one_time_keyboard: false
        }
      }),
    });
    return res.status(200).send("OK");
  }

  if (text === "🧠 Generate Prompt") {
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "🧠 What platform? (e.g. Midjourney, FX, SEO, ChatGPT)",
      }),
    });
    return res.status(200).send("OK");
  }

  return res.status(200).send("No action");
}