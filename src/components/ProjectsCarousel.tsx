import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../src/components/ui/carousel";

const projectDescription = [
  {
    title: "We Met IRL Website",
    imgPath: "",
    description:
      "Marketing website for a relationship building organization that hosts speed dating events, mixers, and social gatherigs, with divversity in mind",
    stack: "CSS, Squarespace dev",
    status: "Complete",
  },
  {
    title: "Mantra",
    imgPath: "",
    description:
      "Swift mobile app that provides users with daily, encouraging quotes",
    stack: "Swift",
    status: "In Progress",
  },
];

const ProjectsCarousel = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {projectDescription.map((description, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-slate-50 rounded-3xl ">
                <CardContent className="flex flex-col justify-center p-6">
                  <CardTitle className="py-2">{description.title}</CardTitle>
                  <CardDescription className="py-1">
                    <span className="font-bold">{"Description: "}</span>
                    {description.description}
                  </CardDescription>
                  <CardDescription className="py-1">
                    <span className="font-bold">{"Stack: "}</span>
                    {description.stack}
                  </CardDescription>
                  <CardDescription className="py-1">
                    <span className="font-bold">{"Status: "}</span>
                    {description.status}
                  </CardDescription>
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
