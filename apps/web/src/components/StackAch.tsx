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
    <div className="border border-gray-500 border-[0.1vw] md:border md:border-[0.05vw] md:border-gray-600 flex flex-col bg-[#2b2b2b] text-white rounded-md p-[4vw] md:p-[1vw] mb-[4vw] md:mb-[1vw] w-full">
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
        items={["React.js", "Next.js", "TailwindCSS", "Custom Components", "ShadCN UI", "Chakra UI", "Framer Motion", "GSAP", "Recoil", "Redux", "Zustand", "WebSockets", "OpenAPI", "Axios", "Vite", "Leaflet.js", "Progressive Web Apps", "Mapbox GL", "UI/UX"]}
      />

      <TechBlock
        title="Backend"
        items={[
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "Supabase",
          "Mongoose",
          "Prisma",
          "Redis",
          "REST-APIs",
          "FastAPI",
          "Flask",
          "WebSockets",
          "Socket.io",
          "JWT-Auth",
          "OAuth 2.0",
          "NextAuth",
          "FingerprintJS",
          "Cookies",
          "Prometheus",
          "Grafana",
          "DSA"
          
        ]} />

      <TechBlock
        title="DevOps & Cloud"
        items={[
          "Docker",
          "Kubernetes",
          "AWS-S3",
          "AWS-EC2",
          "AWS-ECS",
          "AWS-ECR",
          "AWS-CodePipeline",
          "AWS-CloudFront",
          "AWS-Lambda",
          "GitHub Actions",
          "Github CI/CD",
          "Cloudflare Workers",
          "Terraform",
          "Firebase",
          "NGINX",
          "Load Balancing",
          "Certbot-SSL",
          "Reverse Proxy",
          "System Architecture"
        ]}
      />

      <TechBlock
        title="Programming Languages"
        items={[
          "TypeScript",
          "JavaScript",
          "Java",
          "C / C++",
          "Python"
        ]}
      />

      <TechBlock
        title="AgenticAI, AIML Neural Networks & LLMs"
        items={[
          "PyTorch",
          "Tensorflow",
          "Keras",
          "Langchain",
          "Gemini-API",
          "OpenAI-API",
          "OpenCV",
          "YOLO",
          "Whisper",
          "Tacotron2",
          "Huggingface",
          "MediaPipe",
          "Meta-Llama",
          "ML-Models",
          "Neural Networks"
        ]}
      />

      
    </div>
  );
}

export default StackAch;
