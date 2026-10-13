import NavBar from "./NavBar";
import DarkVariantCarousel from "./Carousel";

function HomePage() {
  if (!localStorage.getItem("email") || !localStorage.getItem("password")) {
    window.location.href = "/"; // Redirect to login page
  }

  return (
    <>
      <NavBar />
      <br></br>
      <DarkVariantCarousel />
    </>
  );
}

export default HomePage;
