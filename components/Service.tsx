import ServiceConsulting from './ServiceConsulting';
import ServiceDevops from './ServiceDevops';
import ServiceEducation from './ServiceEducation';

const Service = () => {
  return (
    <div id="service" className="items-center justify-center mb-12">
      <h2 className="w-32 mb-8 p-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary">
        SERVICE
      </h2>
      <div className="px-4 m-1 grid grid-row lg:grid-cols-3 gap-4 mb-12">
        <ServiceEducation />
        <ServiceConsulting />
        <ServiceDevops />
      </div>
    </div>
  );
};

export default Service;
