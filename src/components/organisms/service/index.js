import { ServiceBox } from "@/components/molecules/serviceBox";
import { ServiceToHeal } from "@/constants/data";

export const ServiceDesc = () => {
  return (
    <div className="pt-20 pb-10">
      <div className="container">
        <div className="mb-5 text-center max-w-[660px] mx-auto">
          <h2 className="font-nuckle text-5xl mb-16 border-b-2 border-sunstone w-fit mx-auto">Services to Heal</h2>
          <p className="mb-20 text-[17px] font-gt">
            We are on a mission to change lives, families, and communities
            through traditional and psychedelic-assisted therapies. Our services
            are grounded in tailoring each treatment to the individual’s story
            and developing a thoughtful and grounded plan towards wellness.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-10">
          {ServiceToHeal.map((item, idx) => {
            return  <ServiceBox key={idx} src={item.image} service={item.title} desc={item.desc} id={item.id} />
          })}
        </div>
      </div>
    </div>
  );
};
