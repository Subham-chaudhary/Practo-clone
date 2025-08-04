import Banner from "../components/Banner";
import Search from "../components/Search";

export default function FindDoctors() {
  return (
    <div className="bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full">
        <Search />
        <Banner />
      </main>
    </div>
  );
}
