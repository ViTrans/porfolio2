import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contract/Contact";
import Products from "../components/product/Products";
import Skills from "../components/skills/Skills";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
};

export default HomePage;
