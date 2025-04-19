import Image from "next/image";

const data = [
  {
    image: "/motion.png",
    title: "Motion",
    description:
      "Browser wallet and decentralized exchange built on the XRP Ledger.",
    website: "https://motion.zip",
    github: "https://github.com/codethevoid/motion",
  },
  {
    image: "/qryptic.png",
    title: "Qryptic",
    description:
      "A platform for managing your links, QR codes, and marketing campaigns.",
    website: "https://qryptic.io",
    github: "https://github.com/codethevoid/qryptic",
  },
  {
    image: "/pryzma.webp",
    title: "Pryzma",
    description:
      "An ecommerce website for keyboards and other keyboard accessories.",
    website: "https://pryzma.io",
    github: "https://github.com/codethevoid/pryzma-storefront",
  },
];

export const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-extrabold tracking-tight max-md:text-xl">
          Some projects I&apos;m proud of
        </h2>
        <p className="text-zinc-600 font-medium text-[15px] max-md:text-sm">
          I&apos;ve worked on a lot of projects over the years, but these are
          the ones I&apos;m most proud of.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {data.map((project, i) => (
          <div
            key={project.title}
            className="p-4 border border-zinc-200 rounded-md shadow-sm bg-zinc-50/75 space-y-3 hover:shadow-md transition-all"
          >
            <div className="flex justify-between">
              <div className="border border-zinc-200 bg-white rounded-md p-[3px] w-fit shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={38}
                  height={38}
                  className="rounded"
                  quality={100}
                />
              </div>
              <p className="text-zinc-400 tabular-nums text-xs font-mono">
                0{i + 1}
              </p>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-semibold text-[15px]">{project.title}</h3>
              <p className="text-zinc-600 font-medium text-[13px]">
                {project.description}
              </p>
            </div>
            <div className="flex gap-3 items-center">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 hover:fill-zinc-600 transition-colors relative top-[1px]"
                  >
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                  </svg>
                </a>
              )}
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 relative top-[1px]"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                </svg>

                <a href={project.website} target="_blank" rel="noreferrer">
                  <span className="text-zinc-500 font-medium text-xs hover:underline hover:text-foreground">
                    {project.website.replace("https://", "")}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
