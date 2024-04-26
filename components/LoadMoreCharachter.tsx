"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchCharacter } from "@/app/action";

let start = 8;

export type CharachterCard = JSX.Element;

function LoadMoreCharachter() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<CharachterCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchCharacter(start).then((res) => {
        setData([...data, ...res]);
        start = start + 8;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMoreCharachter;
