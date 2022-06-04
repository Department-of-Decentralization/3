import { useState } from "react";
import wolpy from "./assets/wolpy.png";
import Impressum from "./Impressum";

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  return (
    <div className="bg-black text-white font-sans">
      <div className="min-h-screen  flex flex-col text-center">
        {showImpressum ? (
          <Impressum />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <header className="flex text-[64pt]">
              <div>ETHBerlin³</div>
            </header>
            <div>
              <div className="mb-4">
                <span className="font-mono font-bold">eth_berlin.pow(3)</span>
                <span className="text-xl">- ETHBerlin, the power of 3.</span>
              </div>
              <div>September 16-18, 2022</div>
              <div>Factory Görlitzer Park</div>
            </div>
          </div>
        )}
        <footer className="">
          <a
            href="https://decentralala.com/"
            className="flex justify-center items-center hover:cursor-pointer mb-2"
          >
            <img
              src={wolpy}
              width={96}
              className="grayscale hover:grayscale-0"
              alt="Logo Department of Decentralization"
            />
          </a>
          {/* <div className="mb-2">Department of Decentralization</div> */}
          <div>
            Read our hacker{" "}
            <a href="/manifesto" className="underline">
              manifesto
            </a>{" "}
            and{" "}
            <a href="mailto: hello@ethberlin.ooo" className="underline">
              contact us
            </a>{" "}
            to get involved.
          </div>
          <button
            onClick={() => setShowImpressum(!showImpressum)}
            className="text-sm text-gray-600"
          >
            Impressum
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;