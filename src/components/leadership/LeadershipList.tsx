
import { UserRound, Users, UserCog, Briefcase, Calendar, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const leadership = [
  { 
    title: "Secretary General",
    position: "Executive Office",
    icon: UserRound,
    initials: "SG"
  },
  { 
    title: "Deputy Secretary General",
    position: "Executive Office",
    icon: Users,
    initials: "DSG"
  },
  { 
    title: "Chief of Staff",
    position: "Executive Office",
    icon: UserCog,
    initials: "CoS"
  },
  { 
    title: "Finance Director",
    position: "Finance Directorate",
    icon: Briefcase,
    initials: "FD"
  },
  { 
    title: "Conference Director",
    position: "Conference Directorate",
    icon: Calendar,
    initials: "CD"
  },
  { 
    title: "Communications Director",
    position: "Communications Directorate",
    icon: MessageSquare,
    initials: "CMD"
  },
];

const LeadershipList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {leadership.map((leader) => {
        const Icon = leader.icon;
        return (
          <Card key={leader.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12 bg-[#009EDB]">
                <AvatarFallback className="text-white">{leader.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <CardTitle className="text-lg">{leader.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{leader.position}</p>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              To be appointed
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default LeadershipList;
