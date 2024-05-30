import { Card, CardContent } from "/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/src/components/ui/carousel";

const ProjectDescription = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
    stack: "Built with: CSS, Squarespace dev",
    status: "Complete",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
    stack: "Swift",
    status: "In Progress",
  },
];

const ProjectsCarousel = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-slate-50 rounded-3xl ">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarousel;
