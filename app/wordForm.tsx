"use client";

import { Word } from "@/lib/types";
import { ChangeEvent, FormEvent, useState } from "react";

export default function WordForm() {
  const [word, setWord] = useState<Word>({ content: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // client component, so need to send request to server route
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(word),
    });

    console.log("RESPONSE: " + JSON.stringify(await res.json()));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // ... places all current properties in new object, can set other to override
    // e.g. {...{name: "jessie", message: "yes"}, message: "no"} -> {name: "jessie", message: "no"}
    // [e.target.name] gets value instead of just the raw name itself
    setWord({ ...word, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="word">Word: </label>
      <input
        type="text"
        name="content"
        placeholder="word"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}
