import { useState } from "react";
import "./styles.css";

export default function App() {
  const [_quoteGenerationRandom, setquoteGenerationRandom] = useState("");
  const [_authorGenerationRandom, setauthorGenerationRandom] = useState("");
  const [_SOURCE, set_SOURCE] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setquoteGenerationRandom(data.content);
    setauthorGenerationRandom(data.author);
  };

  const fetchImage = () => {
    set_SOURCE(`https://picsum.photos/1317/673/?random=${Math.random()}`);
  };

  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="relative h-full w-full">
        <img
          style={{
            boxShadow: "inset 0px 0px 100px 40px rgb(0 0 0 / 50%)",
            backgroundImage: `url(${_SOURCE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            filter: "brightness(0.6)",
          }}
          id="bg-img"
          class="absolute h-full w-full" /* I realized that putting backgroundImage, instead of putting source. Actually make the style work lmfao. For no reason.*/
        />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <p
            id="W"
            class="text-white text-md text-center md:text-xl lg:text-2xl font-cardo w-full md:w-auto"
          >
            {_quoteGenerationRandom
              ? _quoteGenerationRandom
              : "This time, I remade this with React.js, so now I'm one of the Cool kidz group"}
          </p>
          <p id="W2" class="text-white text-sm mt-4 text-center">
            <br />-{" "}
            {_authorGenerationRandom
              ? _authorGenerationRandom
              : "Press the button to generate quote!!1!"}
          </p>
          <button
            id="reg"
            class="bg-white-800 text-sm my-6 p-2 px-1 rounded-full bg-opacity-0 backdrop-filter backdrop-blur-lg backdrop-saturate-87 border border-white border-opacity-12 text-white text-bold hover:backdrop-blur-3xl hover:backdrop-saturate-200 hover:bg-opacity-[50%] hover:shadow-white-500/12 hover:shadow-lg transition ease-in-out duration-300 active:bg-opacity-[100%] divide-x divide-white lg:px-4 md:px-2 lg:text-md md:text-xs"
            onClick={() => {
              fetchQuote();
              fetchImage();
            }}
          >
            Regenerate Quote
          </button>
        </div>
      </div>
    </div>
  );
}
