import dotenv from "dotenv";
import express, { Request, Response } from "express";
import ollama from "ollama";

import { ChatInterface } from "./index.types";
import { instructions } from "./prompt";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server is on");
});

app.post(
  "/api/v1/chat",
  async (req: Request<{}, {}, ChatInterface>, res: Response) => {
    const { userPrompt } = req.body;
    console.log(userPrompt);
    const getPrompt = async (str: string): Promise<string> => {
      let inputStr = "";
      try {
        const res = await ollama.chat({
          model: "deepseek-r1",
          messages: [
            {
              role: "system",
              content:
                "Enrich the user prompt so that an ai model can effectively generate the manim code. Output must be an explanatory string only",
            },
            {
              role: "user",
              content: str,
            },
          ],
        });

        inputStr = res?.message.content;
        console.log("inputStr: ", inputStr);

        const match = inputStr.match(/<think>([\s\S]*?)<\/think>/);
        const processedStr = match ? match[1].trim() : "";
        console.log("processedStr: ", processedStr);
        return processedStr;
      } catch (err) {
        console.log(err);
        process.exit(1);
      }
    };
    try {
      const response = await ollama.chat({
        model: "deepseek-r1",
        // stream: true,
        messages: [
          {
            role: "system",
            content: instructions,
          },
          {
            role: "user",
            content: await getPrompt(userPrompt),
          },
        ],
      });

      const msg = response?.message;
      console.log("Response from ollama chat in backend: ", msg);
      res.status(200).json({ message: msg });
    } catch (err) {
      console.log("Error in backend", err);
      res.status(500).json({ error: "Something went wrong" });
      process.exit(1);
    }
  }
);

app.listen(`${PORT}`, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
