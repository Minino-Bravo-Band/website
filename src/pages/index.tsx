import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div>hola amigos</div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
