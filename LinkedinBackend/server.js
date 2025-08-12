import express from "express";
import Parser from "rss-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const parser = new Parser();

app.get("/api/linkedin-posts", async (req, res) => {
  try {
    const feed = await parser.parseURL(process.env.RSS_FEED_URL);
    const posts = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      content: item.contentSnippet,
    }));
    res.json(posts);
  } catch (error) {
    console.error("Error fetching LinkedIn posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Backend running on port ${process.env.PORT}`)
);
