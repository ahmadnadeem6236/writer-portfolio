import Post from "./components/post";

export default function page() {
  return (
    <div className="h-svh w-full">
      <div className="  flex justify-center pt-3 ">
        <h1 className="text-2xl font-semibold">Journey</h1>
      </div>
      <div className="flex flex-col gap-4 px-2 pt-5">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
