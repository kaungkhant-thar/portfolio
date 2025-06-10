import { siGithub, SimpleIcon } from "simple-icons";

export const GithubIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={`#${siGithub.hex}`}
  >
    <title>{siGithub.title}</title>
    <path d={siGithub.path} />
  </svg>
);
