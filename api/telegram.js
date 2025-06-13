export default async function handler(req, res) {
  const data = req.body;

  if (data?.message?.text === "/start") {
    const chatId = data.message.chat.id;

    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "Welcome to AivioGenBot – Tap below to get your AI prompt.",
        reply_markup: {
          keyboard: [[{ text: "Generate Prompt" }]],
          resize_keyboard: true,
          one_time_keyboard: true
        }
      }),
    });

    return res.status(200).send("OK");
  }

  return res.status(200).send("No action");
}