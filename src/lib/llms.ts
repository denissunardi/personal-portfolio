import { EXPERIENCE } from "@/content/experience";
import { SITE } from "@/content/site";
import { TECH } from "@/content/tech";
import { WORK } from "@/content/work";
import { formatRange } from "@/lib/duration";
import { NOW } from "@/lib/now";

const absolute = (path: string): string => new URL(path, SITE.url).toString();

// Everything here derives from src/content/* — same single-source rule as
// json-ld.ts and sitemap.ts — so a content edit updates /llms.txt on the next
// build with no second place to keep in sync.
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${SITE.name} | ${SITE.jobTitle}`,
    "",
    `> ${SITE.description}`,
    "",
    `- Website: ${SITE.url}`,
    `- Email: ${SITE.email}`,
    `- Phone: ${SITE.phoneLabel}`,
    `- Location: ${SITE.locationLabel}`,
    `- Availability: ${SITE.availability.label}`,
    "",
  ];

  lines.push("", "## Selected work", "", `${WORK.header.heading}`, "");
  for (const project of WORK.projects) {
    lines.push(
      `- **${project.name}**: ${project.description} Role: ${project.role} Stack: ${project.stack.join(", ")}.`,
    );
  }

  lines.push("", "## Experience", "");
  for (const role of EXPERIENCE.roles) {
    lines.push(
      `### ${role.company} — ${role.position} (${formatRange(role.startISO, role.endISO, NOW)})`,
      "",
    );
    for (const bullet of role.bullets) {
      lines.push(`- ${bullet}`);
    }
    lines.push("");
  }

  lines.push("## Tech stack", "");
  for (const group of TECH.groups) {
    lines.push(
      `- **${group.title}**: ${group.items.map((item) => item.name).join(", ")}`,
    );
  }

  lines.push(
    "",
    "## Links",
    "",
    `- [CV (PDF)](${absolute(SITE.cv.href)})`,
    ...SITE.social.map((link) => `- [${link.label}](${link.href})`),
    `- [Site source code](${SITE.repoUrl})`,
    `- [Sitemap](${absolute("/sitemap.xml")})`,
    "",
  );

  return lines.join("\n");
}
