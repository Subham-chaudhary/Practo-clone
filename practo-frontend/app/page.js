import Header from "./components/Header";
import Footer from "./components/Footer";
import Specialties from "./components/Specialties";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      {/* Main Content */}
      <main className="container">
        <Banner />
        <Specialties />
      </main>

      <Footer />
    </div>
  );
}
