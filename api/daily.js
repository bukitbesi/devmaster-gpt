export default async function handler(req, res) {
  const prompt = "🌇 Cinematic sunset prompt of futuristic Kuala Lumpur skyline, ultra vibrant, soft neon, ambient lighting.";
  const token = process.env.DROP_BOT_TOKEN;
  const chatId = process.env.DROP_CHANNEL_ID;

  const telegramURL = `https://api.telegram.org/bot${token}/sendMessage`;

  const payload = {
    chat_id: chatId,
    text: `🖼️ *Daily Prompt Drop*\n\n${prompt}`,
    parse_mode: "Markdown"
  };

  await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  res.status(200).send("✅ Drop sent");
}