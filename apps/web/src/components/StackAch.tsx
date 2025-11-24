import { CardStack } from "./ui/card-stack";
import { TextAnimate } from "./ui/text-animate";

function StackAch() {
  return (
    <div className="md:flex md:justify-between md:ml-[3vw]">
      <Achievements />
      <TechStack />
    </div>
  );
}

function Achievements() {
  return (
    <div className="md:flex md:flex-col md:items-center gap-[2vw] w-[50%] md:mt-[1vw] md:mr-[3vw]">
      <p className="md:text-black md:text-[3vw] md:font-medium md:mb-[1vw]">Achievements</p>

      <div className="ml-[-30vw]">
        <CardStack
          items={[
            { id: 1, title: "Stanford 6 Core Specialization Course", image: "/certificates/stfl.jpg" },
            { id: 2, title: "Project Two", image: "/certificates/stfl.jpg" },
            { id: 3, title: "Project Three", image: "/certificates/stfl.jpg" },
          ]}
        />
      </div>
    </div>
  );
}

function TechBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col bg-[#2b2b2b] text-white rounded-md p-[4vw] md:p-[1vw] mb-[4vw] md:mb-[1vw] w-full">
      <TextAnimate
        animation="blurIn"
        className="text-[5vw] md:text-[1.75vw] font-semibold md:font-medium mb-[2vw] md:mb-[0.5vw]"
      >
        {title}
      </TextAnimate>
      <div className="flex flex-wrap gap-[2vw] md:gap-[0.75vw]">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-md px-[2.5vw] py-[1vw] 
                       md:px-[0.8vw] md:py-[0.3vw] 
                       text-[3vw] md:text-[1vw] font-medium shadow-md"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <div className="flex flex-col bg-black text-white rounded-md pb-[2vw] px-[4vw] 
                    md:px-[2vw] md:pt-[1vw] md:pb-[1.5vw] md:mt-[0vw] md:mb-[0.5vw] md:w-full">
      <TextAnimate
        animation="blurIn"
        duration={0.5}
        className="text-[8vw] md:text-[3vw] mb-[4vw] md:mb-[1vw] font-semibold md:font-medium"
      >
        Tech Stack
      </TextAnimate>

      <TechBlock
        title="Frontend"
        items={["React", "Next.js", "TypeScript", "TailwindCSS", "ShadCN UI"]}
      />

      <TechBlock
        title="Backend"
        items={[
          "Node.js",
          "Express.js",
          "FastAPI",
          "Socket.io",
          "MongoDB",
          "Mongoose",
        ]} />

      <TechBlock
        title="System Architecture"
        items={[
          "Microservices",
          "Caching",
          "Load Balancing",
          "API Gateways",
          "Event-Driven Systems",
        ]}
      />

      <TechBlock
        title="DevOps & Cloud"
        items={[
          "Docker",
          "Kubernetes",
          "AWS",
          "GitHub Actions",
          "Cloudflare Workers",
        ]}
      />
    </div>
  );
}

export default StackAch;
