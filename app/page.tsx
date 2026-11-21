import Image from "next/image";
import {
  CircleStackIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { basePath } from "../site.config";

const affiliations = [
  "University of California, Irvine",
  "American Foundation for the Blind",
  "Maryland State Department of Education",
];

const profiles = [
  {
    name: "Kapil Garg",
    image: "kapil.webp",
    url: "https://www.kgarg.com/",
    affiliation: 1,
  },
  {
    name: "Anne Marie Piper",
    image: "anne-marie.webp",
    url: "https://ics.uci.edu/~ampiper/",
    affiliation: 1,
  },
  {
    name: "Erik Sudderth",
    image: "erik.webp",
    url: "https://ics.uci.edu/~sudderth/",
    affiliation: 1,
  },
  {
    name: "Arielle Silverman",
    image: "arielle.webp",
    url: "https://afb.org/about-afb/leadership/experts/arielle-silverman",
    affiliation: 2,
  },
  {
    name: "Ali Abdolrahmani",
    image: "ali.webp",
    url: "https://scholar.google.com/citations?user=Ue_rKCcAAAAJ&hl=en",
    affiliation: 3,
  },
];

const projects = [
  {
    title: "REPACK: Local Models for Visual Access",
    id: "repack",
    links: [
      {
        label: "Paper",
        url: `${basePath}/repack-paper.pdf`,
        icon: DocumentTextIcon,
      },
      {
        label: "Code",
        url: "https://github.com/Accessibility-Research-Collective-UCI/repack-ios",
        icon: CodeBracketIcon,
      },
      {
        label: "Demo",
        url: "https://youtu.be/qnUgBcxHHPQ",
        icon: PlayCircleIcon,
      },
    ],
  },
  {
    title: "Disability-Centric Model Evaluation",
    id: "model-evaluation",
    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/abs/2511.08917",
        icon: DocumentTextIcon,
      },
      {
        label: "Dataset",
        url: "https://github.com/Accessibility-Research-Collective-UCI/image-quality-vlm-chi26",
        icon: CircleStackIcon,
      },
      {
        label: "Viewer",
        url: "https://huggingface.co/spaces/kgarg0/BLV-People-Product-Images",
        icon: TableCellsIcon,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
      <header className="text-center">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Democratizing VLM-Based Visual Access Technologies for Blind and Low
          Vision People
        </h1>
        <ul
          aria-label="Project team"
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-8"
        >
          {profiles.map((profile) => (
            <li
              key={profile.name}
              className="w-[calc(50%-0.75rem)] max-w-40 sm:w-40"
            >
              <Image
                src={`${basePath}/profiles/${profile.image}`}
                alt={`Portrait of ${profile.name}`}
                width={144}
                height={144}
                unoptimized
                className="mx-auto size-32 rounded-full object-cover sm:size-36"
              />
              <a
                href={profile.url}
                aria-label={`${profile.name}, ${affiliations[profile.affiliation - 1]}`}
                className="mt-3 inline-flex min-h-11 items-center justify-center text-lg"
              >
                <span>
                  {profile.name}
                  <sup aria-hidden="true" className="ml-0.5">
                    {profile.affiliation}
                  </sup>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ol
          aria-label="Affiliations"
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg"
        >
          {affiliations.map((affiliation, index) => (
            <li key={affiliation}>
              <sup className="mr-1">{index + 1}</sup>
              {affiliation}
            </li>
          ))}
        </ol>
      </header>

      <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-16">
        <section aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="border-border text-primary border-b pb-3 text-2xl font-medium tracking-tight"
          >
            Project Summary
          </h2>
          <p className="mt-4">
            Millions of blind and low-vision (BLV) people rely on VLM-based
            technologies to access visual information. However, these systems
            employ large frontier models that can compromise data privacy, fail
            without internet connectivity, and may not reflect users&apos; needs
            or cultural contexts. In close partnership with the BLV community,
            we are building technologies to democratize access to tools that use
            smaller, on-device models; developing disability-centric practices
            for dataset construction and model evaluation; and scaling our
            technologies to global contexts that reflect local cultures,
            information needs, and resource limitations. We work in close
            collaboration with the BLV community and BLV-serving organizations.
            All of the technologies, datasets, and models we are developing are
            directly informed by their needs. They will be freely available to
            use, fully open-source for extension, and governed by the BLV
            community.{" "}
          </p>
        </section>
        <div className="space-y-10">
          {projects.map((project) => (
            <section key={project.id} aria-labelledby={project.id}>
              <h2
                id={project.id}
                className="border-border text-primary border-b pb-3 text-2xl font-medium tracking-tight"
              >
                {project.title}
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.links.map(({ label, url, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={url}
                      aria-label={`${label} for ${project.title}${url.endsWith(".pdf") ? " (PDF)" : ""}`}
                      className="text-primary hover:bg-accent hover:text-accent-foreground inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 py-2 text-lg font-medium no-underline"
                    >
                      <Icon className="size-6 shrink-0" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
