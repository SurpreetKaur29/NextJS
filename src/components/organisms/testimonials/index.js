import { TestimonialCarousel } from "@/components/molecules/testimonialCarousel";

export const Testimonials = () => {
    return(
        <div className="py-20 bg-sandlight">
            <div className="container">
                <div className="py-3">
                    <h2 className="font-nuckle text-5xl mb-16 border-b-2 border-sunstone w-fit mx-auto">What People Are Saying</h2>
                    <TestimonialCarousel />
                </div>
            </div>
        </div>
    );
};