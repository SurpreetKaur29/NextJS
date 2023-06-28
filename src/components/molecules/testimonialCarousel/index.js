import Slider from "react-slick";

export const TestimonialCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <Slider {...settings} className="w-[64%] mx-auto">
        <div className="mb-12 text-center">
            <p className="text-xl font-nuckle mb-5 px-5">“What the [medicine treatment] kind of showed me was how I was actually connected...I loved the entire structure of the experience.”</p>
            <p className="text-xl font-roboto px-5 font-bold italic">Salt Lake City client (2022)</p>
        </div>
        <div className="mb-12 text-center">
            <p className="text-xl font-nuckle mb-5 px-5">“[The practitioners] were really great at setting us up for success. I can't imagine doing this with any other people.”</p>
            <p className="text-xl font-roboto px-5 font-bold italic">Salt Lake City client (2022)</p>
        </div>
        <div className="mb-12 text-center">
            <p className="text-xl font-nuckle mb-5 px-5">“This [medicine treatment] has been lifechanging. I feel alive again and am so grateful to […] my neurologist for explaining the options […] in his clinic.”</p>
            <p className="text-xl font-roboto px-5 font-bold italic">Toronto client (October 2022)</p>
        </div>
        </Slider>
    );
};