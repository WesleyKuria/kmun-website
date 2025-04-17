
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const organs = [
  {
    title: "The General Assembly",
    description: "The General Assembly includes all 193 United Nations members, placing this unique forum at the UN's deliberative, policy-making, and representative core. General Assembly committees are the largest at KMUN, with 100 to 400 delegates each. Delegates' negotiation and diplomacy skills will undoubtedly improve both inside and outside of the committee room.",
    image: "/lovable-uploads/2e2f5b20-dc60-4bab-b3d0-0a9b61c64ebe.png"
  },
  {
    title: "International Court of Justice",
    description: "The International Court of Justice, also known as the World Court, is the main judicial organ of the UN. It was established in June 1945 by the Charter of the United Nations and began work in April 1946. The primary intent of the ICJ is to settle international legal disputes between states and to give advisory opinions to the other organs of the UN.",
    image: "/lovable-uploads/e3bc5c38-defe-43a4-b8e9-5fd0d2b78e21.png"
  },
  {
    title: "International Law Commission",
    description: "The International Law Commission (ILC) is the United Nations' codification body, and it is simulated in Kenya Model United Nations. The ILC strives to hold insightful and intellectually stimulating debates in which commissioners apply their knowledge of public international law in a fun and engaging manner, all while working towards the ILC's main goal of promoting the progressive development of international law and its codification.",
    image: "/lovable-uploads/5901d972-667d-45cf-89b8-02473e126762.png"
  },
];

const OrgansList = () => {
  return (
    <div className="space-y-12">
      {organs.map((organ) => (
        <Card key={organ.title} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src={organ.image}
                  alt={organ.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <CardTitle className="text-2xl text-[#009EDB]">{organ.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {organ.description}
                </CardDescription>
                <Button className="mt-6">Learn More</Button>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OrgansList;
