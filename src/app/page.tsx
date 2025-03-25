// import LandingPage from '@/components/LandingPage';
import Container from "./components/general/container/Container";
import Header from "./components/header/Header";
import Advantages from "./components/main/Advantages";
import Calculator from "./components/main/Calculator";
import Gurantees from "./components/main/Gurantees";
import Main from "./components/main/Main";
import Review from "./components/main/Reviews";
import "./globals.css";
import "./reset.css";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Calculator />
        <Advantages />
        <Gurantees />
        <Review />
      </Main>
    </Container>
  );
}
