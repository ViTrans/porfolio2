import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="relative w-full h-full">
        <img
          src="banner2.png"
          alt="banner"
          className="md:object-cover h-full w-full banner-img"
          style={{
            objectPosition: "80%",
            objectFit: "cover",
          }}
        />
        <h1 className="text-6xl font-bold text-primary absolute top-1/4 max-w-[600px] w-full h-screen container flex flex-col">
          <span className="text-8xl">Hello</span>
          <Typewriter
            words={[
              "Welcome to my website",
              "Tôi là Vĩ Trần là một Fullstack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          />
        </h1>
      </div>
    </div>
  );
};

export default Banner;
