import searchImages from "./api";
import {useState} from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const images = await searchImages(term);
    setImages(images);
  }

  //
  // const imageList = images.map((image) => {
  //   return {
  //     id: image.id,
  //     alt_description: image.alt_description,
  //     description: image.description,
  //     urls: image.urls
  //   }
  // })

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
