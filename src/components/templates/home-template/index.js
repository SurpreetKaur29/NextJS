import { AboutSection } from "@/components/organisms/about";
import { Banner } from "@/components/organisms/banner";
import { Featured } from "@/components/organisms/featured";
import { ServiceDesc } from "@/components/organisms/service";
import { Testimonials } from "@/components/organisms/testimonials";
import Layout from "@/layouts";

export const HomeTemplate = () => {
    return(
        <Layout>
            <Banner />
            <ServiceDesc />
            <Testimonials />
            <Featured />
            <AboutSection />
        </Layout>
    );
   };
   