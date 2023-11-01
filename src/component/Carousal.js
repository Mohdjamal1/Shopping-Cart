import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/ban2.jpg"
          alt="First slide"
          style={{ height: "90vh" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/ban.jpg"
          alt="Second slide"
          style={{ height: "90vh" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/ban1.jpg"
          alt="Third slide"
          style={{ height: "90vh" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
