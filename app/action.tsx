"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import CharachterCard, { CharachterProp } from "@/components/CharachterCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const fetchCharacter = async (start: number) => {
  let listedData = [];

  for (let i = start; i <= start + 7; i++) {
    const response = await fetch(`https://shikimori.one/api/characters/${i}`);

    if (response != null) {
      if (!response.ok) {
        continue;
      }
      const data = await response.json();
      listedData.push(data);
    } else continue;
  }

  return listedData.map((item: CharachterProp, index: number) => (
    <CharachterCard key={item.id} charachter={item} index={index} />
  ));
};

// export const fetchManga = async (page: number) => {
//   const response = await fetch(
//     `https://shikimori.one/api/mangas?page${page}&order=popularity`
//   );

//   const data = await response.json();

//   console.log(data);
// };
