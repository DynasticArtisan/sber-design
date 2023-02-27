import Hero from "../../components/Hero/Hero";
import LargeDecor from "../../layout/LargeDecor/LargeDecor";
import Layout from "../../layout/Layout/Layout";
import Logo from "../../layout/Logo/Logo";

const HomePage = () => {
  return (
    <Layout>
      <Logo />
      <Hero />
      <LargeDecor />
    </Layout>
  );
};

export default HomePage;
