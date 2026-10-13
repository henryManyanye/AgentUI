import NavBar from "./NavBar";
import DarkVariantCarousel from "./Carousel";

function AboutUs() {
  const mystyle = {
    width: "50%",
    margin: "0 auto",
    marginTop: "50px",
  };

  return (
    <>
      <NavBar />
      <div style={mystyle}>
        <p>
          <i>
            For more information, kindly search for CBZ Holdings on your
            favourite search engine.
          </i>
        </p>
      </div>
      <DarkVariantCarousel />
    </>
  );
}

export default AboutUs;
