import { ServiceBanner } from "@/components/organisms/serviceBanner";
import { ServiceDescription } from "@/components/organisms/serviceDescription";
import { ServiceToHeal } from "@/constants/data";
import Layout from "@/layouts";
import { useRouter } from "next/router";

export const SingleServiceTemplate = () => {
    const router = useRouter();
    const id = router.query.id;
    console.log(router);
    const service = ServiceToHeal.find(s => s.id == id);
    console.log("service", service);
    return(
        <Layout>
            <ServiceBanner title={service?.title} image={service?.image} />
            <ServiceDescription desc={service?.desc} />
        </Layout>
    );
   };
   