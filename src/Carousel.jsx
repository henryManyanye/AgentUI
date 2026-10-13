import Carousel from "react-bootstrap/Carousel";

function DarkVariantCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/pexels-julio-lopez-75309646-29502356 (1).jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/pexels-leeloothefirst-7247399.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/pexels-pixabay-164501 (1).jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantCarousel;
