import Navbar from "../../components/layouts/Navbar/Navbar";
import Header from "../../components/layouts/Header/Header";
import TextBox from "@/features/TextBox/TextBox";
import ImageContainer from "@/features/ImageContainer/ImageContainer";
import Courses from "@/features/Courses/Courses";
import FAQ from "@/features/FAQ/FAQ";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <TextBox />
      <ImageContainer />
      <Courses />
      <FAQ />
    </div>
  );
}
export default HomePage;
