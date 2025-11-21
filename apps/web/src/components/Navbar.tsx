import CardNav from './CardNav'

export const Nav = () => {
  const items = [
  {
    label: "About Me",
    bgColor: "#556B2F",   // Olive Green (anchor color)
    textColor: "#F2F2F2",
    links: [
      { label: "Introduction", ariaLabel: "About Me Introduction", href: "/about" },
      { label: "Articles", ariaLabel: "My Articles", href: "/articles" }
    ]
  },
  {
    label: "Experience",
    bgColor: "#5E7233",   // Olive → Moss (smooth shift)
    textColor: "#F2F2F2",
    links: [
      { label: "Work History", ariaLabel: "My Work Experience", href: "/experience" },
      { label: "Resume", ariaLabel: "View Resume", href: "/resume" }
    ]
  },
  {
    label: "Projects",
    bgColor: "#786348",   // Moss → Clay transition
    textColor: "#FFF",
    links: [
      { label: "Featured", ariaLabel: "Featured Projects", href: "/projects/featured" },
      { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/projects/case-studies" }
    ]
  },
  {
    label: "Publications",
    bgColor: "#A89170",   // Clay → Sand
    textColor: "#FFF",
    links: [
      { label: "Blog", ariaLabel: "My Blog Posts", href: "/blog" },
      { label: "Research", ariaLabel: "My Research Work", href: "/publications" }
    ]
  },
  {
    label: "Education",
    bgColor: "#BDB4A4",   // Sand → Stone
    textColor: "#FFF",
    links: [
      { label: "Academics", ariaLabel: "My Academics", href: "/education" },
      { label: "Certifications", ariaLabel: "My Certifications", href: "/certifications" }
    ]
  },
  {
    label: "Tech Stack",
    bgColor: "#7A5E4A",   // Stone → Umber
    textColor: "#F5F5F5",
    links: [
      { label: "Frontend", ariaLabel: "Frontend Skills", href: "/tech/frontend" },
      { label: "Backend", ariaLabel: "Backend Skills", href: "/tech/backend" },
      { label: "DevOps", ariaLabel: "DevOps Skills", href: "/tech/devops" }
    ]
  },
  {
    label: "Contact Me",
    bgColor: "#2A1A17",   // Dark Espresso (final deep tone)
    textColor: "#EEE",
    links: [
      { label: "Email", ariaLabel: "Email Me", href: "mailto:hello@aryan.dev" },
      { label: "Twitter", ariaLabel: "My Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", ariaLabel: "My LinkedIn", href: "https://linkedin.com" }
    ]
  }
];



  return (
    <CardNav
      logo={'Aryan Chauhan™'}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};