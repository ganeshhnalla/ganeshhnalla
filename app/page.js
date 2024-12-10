import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen duration-300 p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-8 row-start-2 duration-300 items-center md:items-start">
        <div className="bg-[#ccc] w-full border-t border-black"></div>
        <p className="text-2xl font-bold duration-300">Ganesh Nalla</p>
        <div className="bg-[#ccc] w-full border-t border-black"></div>
        <ol className="list-inside text-base">
          <li className="mb-2">
            A final year student specializing in Artificial Intelligence at
            Bennett University. Passionate about leveraging machine learning and
            deep learning techniques to solve real-world problems. Seeking
            opportunities to apply my AI skills in a challenging and
            growth-oriented environment. Feel free to explore and reach out if
            you’d like to collaborate!
          </li>
        </ol>
        <div className="bg-[#ccc] w-full border-t border-black"></div>
        <ol className="list-inside text-base">
          <li>
            <b>Programming Languages:</b> Python, C++, Java, Javascript
          </li>
          <li>
            <b>Frameworks:</b> PyTorch, Scikit-Learn, NextJS, React, Pandas,
            NumPy, Matplotlib
          </li>
          <li>
            <b>Tools:</b> Jupyter, Git, SQL, Docker, Figma, Postman, MySQL,
            MongoDB
          </li>
          <li>
            <b>Other Skills:</b> Problem-solving, Agile methodologies,
            Collaboration, Communication
          </li>
        </ol>
        <div className="bg-[#ccc] w-full border-t border-black"></div>
        <ol className="list-inside text-base">
          <li className="text-lg mb-2">
            <b>Latest Project</b>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://ganeshhnalla.github.io/caferukma"
            >
              <b>CafeRukma →</b>
            </a>
          </li>
          <li>
            Redesigned website with server side rendering and new gallery view
            of the cafe from a old chunky design.
          </li>
        </ol>
        <div className="flex mt-2 gap-4">
          <a
            className="rounded-full border border-solid border-[#ccc] transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-300 text-sm h-12 px-5 w-32"
            href="https://drive.google.com/file/d/16M2Rsj7XyySdWoGWNIj8MnKoyZp7rspN/view?usp=sharing"
          >
            Resume →
          </a>
          <a
            className="rounded-full border border-solid border-[#ccc] transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-300 text-sm h-10 sm:h-12 px-4 sm:px-5 w-32"
            href="https://medium.com/@escotera"
          >
            Blog →
          </a>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ganeshhnalla@aol.com"
        >
          Contact →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ganeshhnalla"
        >
          Github →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://medium.com/@escotera/subscribe"
        >
          Subscribe to my newsletter →
        </a>
      </footer>
    </main>
  );
}
