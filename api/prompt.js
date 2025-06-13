// api/prompt.js

import { OpenAI } from "openai";

export default async function handler(req, res) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
  const { type, platform, subject, style } = req.body;

  const promptText = `Create a high-quality prompt for ${platform}. Type: ${type}. Subject: ${subject}. Style: ${style}. Reply with only the final prompt.`;

  const chat = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: promptText }],
  });

  res.status(200).json({ prompt: chat.choices[0].message.content.trim() });
}