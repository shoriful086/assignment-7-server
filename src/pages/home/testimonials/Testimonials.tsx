/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetAllTestimonialsQuery } from "../../../redux/api/testimonialsApi/testimonials.api";
import Loading from "../../../ulits/Loading";

const Testimonials = () => {
  const { data: testimonialsData, isLoading } =
    useGetAllTestimonialsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="testimonials ">
      <h2 className="text-center text-2xl">Testimonials</h2>
      <p className="text-center text-xl  mb-10">Our Top 6 Donate Provider</p>
      <Slider className=" h-[38vh]" {...settings}>
        {testimonialsData?.data.map((testimonial: any) => (
          <div
            key={testimonial._id}
            className="testimonial shadow-xl shadow-xl border-2 rounded-md p-4"
          >
            <img
              className="size-20 rounded-full mx-auto border border-2 border-blue-500"
              src={testimonial.image}
            />
            <div className="text-center mt-2">
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className=" mb-6">{testimonial.address}</p>

              <p className="max-w-[80%] mx-auto mb-4">
                {testimonial.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
