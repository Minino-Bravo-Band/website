import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "./Container";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="absolute top-0  h-screen w-screen flex flex-1 shrink-0 items-end lg:items-center justify-center sm:justify-start">
      <div className="absolute top-0 z-10 bg-gradient-to-t from-transparent via-black to-black h-12 md:h-28 w-full" />
      <div className="absolute h-full w-full flex flex-col flex-1">
        <div className="h-8 md:h-16 w-full bg-mininoBlack" />
        <StaticImage
          className="inset-0 w-full h-full object-cover object-left-top "
          src="../images/band-and-kids.jpg"
          alt="Minino Bravo performing in front of two kids. Photo by Honza Rejnek."
          placeholder="blurred"
          layout="fullWidth"
          transformOptions={{ fit: "cover" }}
          imgStyle={{ objectPosition: "85% 0" }}
          width={1200}
        />
      </div>

      <div className="absolute inset-0 h-full w-full bg-gray-400 mix-blend-multiply"></div>

      <Container>
        <div className="relative flex flex-col items-center sm:items-start sm:max-w-xl pb-8">
          <p className="mb-4 text-center text-lg text-gray-300 sm:text-xl md:mb-8">
            Bringing jazz where it's needed the least
          </p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            Minino Bravo
          </h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row justify-start">
            <Button href="#" type="primary">
              Listen now
            </Button>
            <Button href="#">Concerts</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
