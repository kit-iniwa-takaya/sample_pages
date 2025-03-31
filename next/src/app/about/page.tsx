import React from 'react';
import Image from "next/image";
import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

const AboutPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="font-sans leading-relaxed p-6 bg-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">About Us</h1>
          <p className="text-gray-600 mb-3">このサイトは Next.js の App Router を使って構築されています！</p>
          <p className="text-gray-600">最新の技術で最高の体験をお届けします✨</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`${BASE_PATH}`}
        >
          <Image
            aria-hidden
            src={`${BASE_PATH}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
};

export default AboutPage;
