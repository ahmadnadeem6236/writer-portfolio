import { Button } from "./ui/button";

export default function Header() {
  return (
    <section className="flex w-full items-center justify-between px-10 pt-10">
      <h1 className="font-poppins italic tracking-wide text-xl">J. Naaz</h1>
      <ul className="flex gap-1 leading-normal tracking-wide tex font-semibold">
        <Button variant={"link"} className=" text-white text-lg">
          Posts
        </Button>
        <Button variant={"link"} className="text-white text-lg">
          Contact
        </Button>
      </ul>
    </section>
  );
}
