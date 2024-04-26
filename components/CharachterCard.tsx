import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface CharachterProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  japanese: string;
  animes: {
    name: string;
  }[];
}

interface Prop {
  charachter: CharachterProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function CharachterCard({ charachter, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${charachter.image?.original}`}
          alt={charachter.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {charachter.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {charachter.japanese}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-white text-sm font-bold">
              {charachter?.animes?.length != null &&
                charachter.animes
                  .slice(0, 3)
                  .map((anime) => anime.name)
                  .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default CharachterCard;
