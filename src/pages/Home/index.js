import Demo from "../../components/Demo";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderLink from "../../components/HeaderLink";
import Purchase from "../../components/Purchase";

function Home(props) {
  return (
    <>
      <HeaderLink setPage={props.setPage} />
      <Header />
      <Demo />
      <Features />
      <Purchase />
      <Footer />
    </>
  )
}

export default Home;