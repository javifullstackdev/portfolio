import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import {
  certifications,
  isCertificationsSectionVisible,
} from "@/data/certifications";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { skillLevelLabels, type SkillLevel } from "@/lib/skillLevel";
import {
  buildCvSummary,
  getCvContactLines,
  getEducationEntries,
  getExperienceEntries,
} from "@/cv/cvContent";
import { cvStyles as s } from "@/cv/styles";

export const CV_FILENAME = "Javier-Sanchez-CV.pdf";

function formatSkill(name: string, level?: SkillLevel) {
  if (!level) return name;
  return `${name} — ${skillLevelLabels[level]}`;
}

function ContactBlock() {
  return (
    <View style={s.contactBlock}>
      {getCvContactLines().map(({ label, value }) => (
        <Text key={label} style={s.contactLine}>
          <Text style={s.contactLabel}>{label}: </Text>
          {value}
        </Text>
      ))}
    </View>
  );
}

function TimelineBlock({
  entries,
  emptyLabel,
}: {
  entries: ReturnType<typeof getExperienceEntries>;
  emptyLabel?: string;
}) {
  if (entries.length === 0) {
    return emptyLabel ? <Text style={s.paragraph}>{emptyLabel}</Text> : null;
  }

  return (
    <>
      {entries.map((entry) => (
        <View key={entry.id} style={s.entry}>
          <View style={s.entryHeader}>
            <Text style={s.entryTitle}>{entry.title}</Text>
            <Text style={s.entryPeriod}>{entry.period}</Text>
          </View>
          <Text style={s.entryOrg}>{entry.organization}</Text>
          <Text style={s.bullet}>• {entry.description}</Text>
        </View>
      ))}
    </>
  );
}

export function CvDocument() {
  const experience = getExperienceEntries();
  const education = getEducationEntries();

  return (
    <Document
      title={`CV — ${profile.name}`}
      author={profile.name}
      subject={profile.role}
      language="es"
    >
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <View style={s.nameBlock}>
            <Text style={s.name}>{profile.name}</Text>
            <Text style={s.role}>{profile.role}</Text>
          </View>
          <ContactBlock />
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Resumen profesional</Text>
          <Text style={s.paragraph}>{buildCvSummary()}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Competencias técnicas</Text>
          {skillCategories.map((category) => (
            <View key={category.title} style={s.skillCategory}>
              <Text style={s.skillCategoryTitle}>{category.title}</Text>
              <Text style={s.skillList}>
                {category.items
                  .map((item) => formatSkill(item.name, item.level))
                  .join(" | ")}
              </Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Experiencia profesional</Text>
          <TimelineBlock entries={experience} />
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Formación académica</Text>
          <TimelineBlock entries={education} />
        </View>

        <View break>
          <View style={s.section}>
            <Text style={s.sectionTitle}>Proyectos destacados</Text>
            {projects.map((project) => (
              <View key={project.id} style={s.entry}>
                <Text style={s.projectTitle}>{project.title}</Text>
                <Text style={s.bullet}>• {project.description}</Text>
                <Text style={s.stackLine}>
                  Tecnologías: {project.stack.join(", ")}
                </Text>
                {project.demoUrl ? (
                  <Link src={project.demoUrl} style={s.link}>
                    Demo: {project.demoUrl}
                  </Link>
                ) : null}
                {project.githubUrl ? (
                  <Link src={project.githubUrl} style={s.link}>
                    Código: {project.githubUrl}
                  </Link>
                ) : null}
              </View>
            ))}
          </View>

          {isCertificationsSectionVisible() ? (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Certificaciones</Text>
              {certifications.map((cert) => (
                <View key={cert.id} style={s.entry}>
                  <View style={s.entryHeader}>
                    <Text style={s.entryTitle}>
                      {cert.title}
                      {cert.inProgress ? " (en curso)" : ""}
                    </Text>
                    <Text style={s.entryPeriod}>{cert.date}</Text>
                  </View>
                  <Text style={s.entryOrg}>
                    {cert.kind} · {cert.issuer}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </Page>
    </Document>
  );
}
