import { cn } from "@/lib/utils";
import { techStackIcons } from "./techstack-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


type TechStackIconType = {
  [key: string]: {
    name: string;
    icon: any;
  };
};
export const TechStackDisplay = ({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-7 flex-wrap mt-3 items-center max-w-4xl", className)}>
      {skills.map((icon) => {
        return (
          <TooltipProvider key={icon} >
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="transform duration-300 hover:rotate-12 transition-transform">
                  {techStackIcons[icon].icon}
                </span>
              </TooltipTrigger>
              <TooltipContent className="text-white/80 bg-gradient-to-tr from-black/80 via-black  to-black/90 z-1">
                {techStackIcons[icon].name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};