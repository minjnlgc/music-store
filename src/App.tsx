import { useState, useEffect } from "react";
import "./App.css";
import Albumlisting from "./components/albumlisting/albumlisting";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import MediaControl from "./components/mediacontrol/mediacontrol";
import AlblumPlaceholderList from "./components/placeholder/alblumPlaceholderList";

const App = () => {
  
  const [albums, setAlbums] = useState(null);

  async function getData() {
    // wait for this method to get you the data
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setAlbums(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <Banner />
        {albums ? (
          <>
            <Albumlisting heading="Top albums" listing={albums} />
            <Albumlisting heading="Latest albums" listing={albums} />
          </>
        ) : (
          <AlblumPlaceholderList i={5}/>
        )}
      </main>
      <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg">
        <MediaControl />
      </div>
      <Footer />
    </>
  );
};

export default App;
