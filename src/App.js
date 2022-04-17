import React from "react";
import Joke from "./components/Joke";

export default function App(){
  const jokes = [
    {
      setup: 'I got my daughter a fridge for her birthday.',
      punch:"I can't wait to see her face light up when she opens it."
    },
    {
      setup: "How did the hacker escape the police?",
      punchline: "He just ransomware!"
    },
    {
      setup: "Why don't pirates travel on mountain roads?",
      punchline: "Scurvy."

    },
    {
      setup: "Why do bees stay in the hive in the winter?",
      punchline: "Swarm."
    },
    {
      setup: "What's the best thing about Switzerland?",
      punchline: "I don't know, but the flag is a big plus!"
    }
  ]
  return(
    <div>
      {jokes.map((ele)=> <Joke setup={ele.setup} punchline={ele.punchline} isPun = {[0,1,2]}/>)}
    </div>
  )
};