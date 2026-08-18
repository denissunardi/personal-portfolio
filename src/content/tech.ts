import type { TechContent } from "./types";

// No logo assets yet: every item ships without a `logo`, and TechItem renders
// the name on its own. Drop SVGs into src/assets/images/tech/ and add a `logo`
// to any item to light up its mark.
export const TECH = {
  header: {
    id: "stack",
    eyebrow: "Stack",
    heading: "Tools I've shipped with, and open to more.",
  },
  groups: [
    {
      id: "backend",
      title: "Backend",
      descriptor: "APIs, services, and the real-time bits.",
      items: [
        { name: "PHP", href: "https://www.php.net/" },
        { name: "Golang", href: "https://go.dev/" },
        { name: "Laravel", href: "https://laravel.com/" },
        { name: "CodeIgniter", href: "https://codeigniter.com/" },
        { name: "Gin", href: "https://gin-gonic.com/" },
      ],
    },
    {
      id: "data",
      title: "Databases",
      descriptor: "Where the data lives.",
      items: [
        { name: "MySQL", href: "https://www.mysql.com/" },
        { name: "PostgreSQL", href: "https://www.postgresql.org/" },
        { name: "Redis", href: "https://redis.io/" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      descriptor: "Enough to build the screen when I need to.",
      items: [
        { name: "React", href: "https://react.dev/" },
        { name: "Vue 3", href: "https://vuejs.org/" },
        {
          name: "HTML",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "CSS",
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        { name: "jQuery", href: "https://jquery.com/" },
      ],
    },
    {
      id: "tooling",
      title: "Tooling",
      descriptor: "Version control and the day-to-day.",
      items: [{ name: "Git", href: "https://git-scm.com/" }],
    },
  ],
} satisfies TechContent;
