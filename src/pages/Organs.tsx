
import Navigation from "@/components/ui/navigation";
import OrgansList from "@/components/organs/OrgansList";

const Organs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Organs</h1>
          <OrgansList />
        </div>
      </div>
    </div>
  );
};

export default Organs;
