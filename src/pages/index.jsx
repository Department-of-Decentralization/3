import React from "react";
import SEO from "../components/seo";

const Home = () => {
  return (
    <>
      <SEO />
      <div className="flex-1 flex flex-col  min-h-full text-center font-staat">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex text-[64pt]">
            <div>
              ETHBerlin<sup>3</sup>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <span className="text-xl">ETHBerlin, to the power of 3.</span>
            </div>
            <div>September 16-18, 2022</div>
            <div>Factory G&ouml;rlitzer Park, Berlin</div>
            <div>&nbsp;</div>
            <div>
              {" "}
              read our{" "}
              <a href="/manifesto" className="underline">
                hacker manifesto
              </a>{" "}
            </div>
            <div>
              {" "}
              apply to{" "}
              <a
                href="https://office.ethberl.in/form/#/2/form/view/Eb09ZMX-zPLH4GFYn8vM3yoNbZoGPxrVW1dPxUy37sg/embed/"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                hack
              </a>
              ,{" "}
              <a
                href="https://office.ethberl.in/form/#/2/form/view/mX4c4Fi7V4wNHZX32D20RUiXTRfWV+ogehxpQkcxxH8/embed/"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                volunteer
              </a>
              ,{" "}
              <a
                href="https://office.ethberl.in/form/#/2/form/view/YcBSf40HIEMYb04C4-LpA2kh2+NzeXj0EBppBYwYVmo/embed/"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                mentor
              </a>{" "}
            </div>
            <div>
              {" "}
              join our{" "}
              <a
                href="https://matrix.to/#/%23ethberlin:matrix.org"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                matrix space
              </a>{" "}
              or{" "}
              <a
                href="mailto:henlo@ethberlin.ooo"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                email us
              </a>{" "}
            </div>
            <div>&nbsp;</div>
            <div>
              {" "}
              <a
                href="/sponsor.pdf"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                sponsor us
              </a>{" "}
            </div>
          </div>
        </div>
        <footer className="mb-2">
          <div className="mb-2">Department of Decentralization</div>
          <a href="/impressum" className="text-sm text-gray-600">
            Impressum
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
