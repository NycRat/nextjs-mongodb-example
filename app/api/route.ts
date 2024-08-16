// route.ts means a SERVER route

import { wordsCollection } from "@/lib/mongodb";
import { fetchWordsFromDB } from "../actions";

export async function POST(request: Request) {
  const word = await request.json();

  const res = await wordsCollection.insertOne(word);

  if (res.acknowledged) {
    return Response.json({});
  } else {
    return Response.error();
  }
}

export async function GET(_request: Request) {
  return Response.json(await fetchWordsFromDB());
}
