"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <section className="flex w-full items-center justify-between px-10">
      <Link
        href={"/"}
        className="font-poppins tracking-wide text-orange-400 md:text-4xl text-xl hover:text-white hover:underline hover:cursor-pointer ease-in-out"
      >
        Journey of Jasmin
      </Link>
      <ul className="flex gap-5 leading-normal tracking-wide font-semibold">
        <Link
          href={"/posts"}
          className={` text-white md:text-xl text-base ${
            pathname === "/posts" ? "underline" : ""
          }`}
        >
          Posts
        </Link>
        <Link
          href={"/contact"}
          className={`text-white md:text-xl text-base ${
            pathname === "/contact" ? "underline" : ""
          }`}
        >
          Contact
        </Link>
      </ul>
    </section>
  );
}
