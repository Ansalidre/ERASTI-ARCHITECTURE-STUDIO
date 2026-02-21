import { useLanguage } from "@/hooks/useLanguage";
import houseRC from "@/assets/house-rc.png";
import houseH from "@/assets/house-h.png";
import ring from "@/assets/ring.png";
import dubaiHills from "@/assets/dubai-hills.png";

const projects = [
  { name: "House RC", location: "Sweden", image: houseRC },
  { name: "House H", location: "Germany", image: houseH },
  { name: "Ring", location: "Austria", image: ring },
  { name: "Dubai Hills", location: "UAE", image: dubaiHills },
];

const ProjectsSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-28 lg:py-40 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-16 leading-tight">
          {lang === "en" ? "Selected Projects" : "Ausgewählte Projekte"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.name} className="group">
              <div className="aspect-[16/10] overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={`${project.name} – ${project.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-serif text-lg text-foreground">
                {project.name}
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {project.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
