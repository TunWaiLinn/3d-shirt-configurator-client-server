import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from Dall E routes" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const resp = await fetch(`https://api.limewire.com/api/image/generation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Version": "v1",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.LIMEWIRE_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        aspect_ratio: "1:1",
      }),
    });

    const data = await resp.json();
    const imageResponse = await axios.get(data.data[0].asset_url, {
      responseType: "arraybuffer",
    });

    const base64ImageData = Buffer.from(imageResponse.data).toString("base64");

    res.status(200).json({ photo: base64ImageData });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Something went wrong." });
  }
});

export default router;
