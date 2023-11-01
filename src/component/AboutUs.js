import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              At <b>LA-COLLECTION</b> , we are passionate about providing an
              exceptional online shopping experience. Our journey began with a
              vision to create a platform that offers not only a wide array of
              high-quality products but also a seamless, user-friendly interface
              that makes your shopping experience enjoyable and convenient.
            </p>
          </div>
          <div className="col-md-6 my-5 ">
            <img
              src="/assets/ban1.jpg"
              alt="About Us"
              height="350px"
              width="600px"
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="col-12 mb-5">
            <h3 className="display-6 fw-bolder text-center">Our Commitment:</h3>
            <hr />
            <p className="lead mb-4 mt-5">
              We are committed to delivering a diverse selection of products to
              cater to your varying needs and preferences. Whether you're
              searching for the latest fashion trends, innovative tech gadgets,
              home essentials, or unique gifts, we strive to offer a
              comprehensive range to fulfill your desires.
            </p>
          </div>
          <div className="col-12 mb-5">
            <h3 className="display-6 fw-bolder text-center">
              Quality and Customer Satisfaction:
            </h3>
            <hr />
            <p className="lead mb-4 mt-5">
              Quality is at the heart of everything we do. We meticulously
              curate our product offerings from trusted suppliers and brands to
              ensure that each item meets our standards of excellence. Your
              satisfaction is our priority, and we're dedicated to providing
              top-notch customer service, support, and a secure shopping
              environment.
            </p>
          </div>
          <div className="col-12 mb-5">
            <h3 className="display-6 fw-bolder text-center">
              Community and Connection:
            </h3>
            <hr />
            <p className="lead mb-4 mt-5">
              We value the relationship we have with you, our customers. Beyond
              just being an e-commerce platform, we aim to foster a community.
              We listen to your feedback, suggestions, and continuously work to
              improve our services to meet your evolving needs.
            </p>
          </div>
          <div className="col-12 mb-5">
            <h3 className="display-6 fw-bolder text-center">Our Team:</h3>
            <hr />
            <p className="lead mb-4 mt-5">
              Behind <b>LA-COLLECTION</b> is a dedicated team of professionals
              passionate about delivering an outstanding shopping experience. We
              work tirelessly to keep our platform updated with the latest
              trends and technologies, ensuring that your shopping journey
              remains smooth and enjoyable
            </p>
          </div>
          <div className="col-12 mb-5">
            <h3 className="display-6 fw-bolder text-center">
              Social Responsibility:
            </h3>
            <hr />
            <p className="lead mb-4 mt-5">
              We understand the importance of giving back and being responsible
              members of the global community. We're committed to sustainable
              practices and support ethical and environmentally friendly
              initiatives whenever possible.
            </p>
            <p className="lead mb-4 mt-5">
              Thank you for choosing <b>LA-COLLECTION</b>. We are excited to
              have you on board and look forward to being a part of your
              shopping adventures. Your trust and support mean the world to us.
              Happy shopping!
              <br />
              <div className="mt-5">
                <b>LA-COLLECTION TEAM</b>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
