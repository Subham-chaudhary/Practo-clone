import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Banner from "../components/Banner";

export default function FindDoctors() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center w-full" >
        <Search />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
