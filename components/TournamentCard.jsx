import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TournamentCard = ({
  title,
  host,
  type,
  date,
  time,
  status,
  buttonText,
  buttonColor,
  imageUrl,
  href,
}) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-start bg-[#111] rounded-xl mb-3 p-2">
      <Image src={`${imageUrl}`} alt="brawlhalla" width={100} height={100} />
      <div className="w-full flex flex-col gap-1">
        <h1>{title}</h1>
        <p>Host: {host}</p>
        <p>Type: {type}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{status}</p>
        <Link
          href={href}
          className={`${buttonColor} flex items-center justify-center w-2/3 rounded-lg h-10`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};
