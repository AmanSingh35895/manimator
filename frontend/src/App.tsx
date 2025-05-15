import axios from "axios";
import { useState } from "react";
import "./App.css";

interface ChatResponse {
  message: {
    content: string;
  };
}

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [reply, setReply] = useState("");

  const getResponse = async (): Promise<void> => {
    try {
      const res = await axios.post<ChatResponse>("/api/v1/chat", {
        userPrompt: userPrompt,
      });
      console.log("reply got from llm", res);
      setReply(res.data.message.content);
      console.log("This is the response from llm in frontend", reply);
    } catch (err) {
      console.log("Error in frontend:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="prompt"
        placeholder="Write your prompt"
        value={userPrompt}
        onChange={(e) => {
          setUserPrompt(e.target.value);
          console.log(e.target.value);
        }}
      />
      <p>{userPrompt}</p>
      <button
        onClick={() => {
          console.log("send button clicked");

          getResponse();
        }}
      >
        Send
      </button>
      <p>{reply}</p>
    </div>
  );
}

export default App;
