
import Navigation from "@/components/ui/navigation";
import LeadershipList from "@/components/leadership/LeadershipList";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">The National Secretariat</h1>
          <LeadershipList />
        </div>
      </div>
    </div>
  );
};

export default Leadership;
