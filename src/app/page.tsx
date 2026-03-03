export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Hero */}
      <section className="text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-text-primary">
          Thomas Ziebarth
        </h1>
        <p className="mt-4 text-xl text-text-secondary">Software Developer</p>
      </section>

      {/* Social Links */}
      <nav className="flex items-center gap-6 mt-10 animate-fade-in delay-1">
        <SocialLink
          href="https://github.com/thomasziebarth"
          label="GitHub"
          icon={<GitHubIcon />}
        />
        <SocialLink
          href="https://linkedin.com/in/thomas-ziebarth"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <SocialLink
          href="https://tasktogether.app"
          label="Task Together"
          icon={<TaskTogetherIcon />}
        />
      </nav>

      {/* Projects */}
      <section className="mt-20 w-full max-w-lg animate-fade-in delay-3">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-secondary text-center mb-8">
          <span className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-border" />
            Projects
            <span className="w-8 h-px bg-border" />
          </span>
        </h2>

        <div className="space-y-4">
          <ProjectCard
            title="Task Together"
            description="A collaborative task management app for teams, built with Next.js and React Native."
            href="https://tasktogether.app"
          />
          <div className="rounded-xl border border-border border-dashed p-6 text-center text-text-secondary text-sm">
            More coming soon...
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-text-secondary text-sm animate-fade-in delay-5">
        &copy; 2026 Thomas Ziebarth
      </footer>
    </main>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-surface text-text-secondary transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(94,234,212,0.15)]"
    >
      {icon}
    </a>
  );
}

function ProjectCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/40 hover:bg-surface-hover hover:shadow-[0_0_30px_rgba(94,234,212,0.08)]"
    >
      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        Visit
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TaskTogetherIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}
