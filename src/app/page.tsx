import Link from "next/link";
import WebsiteNavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <WebsiteNavBar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="">
          <div className="flex flex-col items-center justify-center pt-40">
            <div className="text-center lg:col-span-7">
              <div className="text-center lg:col-span-7 text-8xl mb-4 tracking-tight font-customFont leading-none md:text-5xl xl:text-8xl sm:text-3xl">
                Welcome to
              </div>
              <h1 className="max-w-2xl mb-4 text-3xl font-customFont tracking-tight leading-none md:text-5xl xl:text-6xl">
                TestAutomata
              </h1>
              <p className="max-w-2xl mb-7 text-1xl font-SecondaryFont lg:mb-8 md:text-lg lg:text-xl">
                Automate Test Case Generation!
              </p>
              <Link
                href="/uploadFile"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-SecondaryFont text-center rounded-lg text-colorOne bg-colorNine hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-20">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="pwc2.jpg"
              alt="photo1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="pwc3.jpg"
              alt="photo2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="pwc4.jpg"
              alt="photo3"
            />
          </div>
        </div>
      </main>
    </>
  );
}
