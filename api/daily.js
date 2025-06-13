export default async function handler(req, res) {
  const promptText =
    "\ud83c\udf07 Cinematic sunset prompt of futuristic Kuala Lumpur skyline, ultra vibrant, soft neon, ambient lighting.";
  const token = process.env.DROP_BOT_TOKEN;
  const chatId = process.env.DROP_CHANNEL_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: "Missing bot configuration" });
  }

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const payload = {
    chat_id: chatId,
    text: `\ud83d\uddfe\ufe0f *Daily Prompt Drop*\n\n${promptText}`,
    parse_mode: "Markdown",
  };

  try {
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  return res.status(200).json({ message: "\u2705 Drop sent" });
}
