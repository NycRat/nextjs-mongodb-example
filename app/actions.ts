import { wordsCollection } from "@/lib/mongodb";
import { Word } from "@/lib/types";
import { WithId } from "mongodb";

// defines server function, can be used in ssr component or server route
export async function fetchWordsFromDB(): Promise<WithId<Word>[]> {
  let cursor = wordsCollection.find();

  let words: WithId<Word>[] = [];
  let word = await cursor.next();

  while (word) {
    words.push(word);
    word = await cursor.next();
  }

  return words;
}

// export async function test() {
//   const res = await wordsCollection.updateMany(
//     {},
//     { $rename: { word: "content" } },
//   );
//   console.log(`MODIFIED: ${res.modifiedCount}`);
// }
