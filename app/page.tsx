import { fetchWordsFromDB } from "./actions";
import WordForm from "./wordForm";

export default async function Home() {
  // ssr component, so can directly call server function
  const words = await fetchWordsFromDB();

  return (
    <div>
      <h1>Words</h1>

      {/* can use client component, hydrated after html is sent to client */}
      <WordForm />
      {words.map((word) => (
        <div key={word._id.toString()}>{word.content}</div>
      ))}
    </div>
  );
}
