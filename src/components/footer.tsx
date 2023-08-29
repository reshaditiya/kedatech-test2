import {
  DribbbleLogo,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center gap-4 bg-slate-800 px-7 py-6 text-sm text-white md:flex-row md:justify-between">
      © 2023 UpTech by KeDa Tech
      <div className="flex gap-5">
        <InstagramLogo className="h-6 w-6" />
        <DribbbleLogo className="h-6 w-6" />
        <GithubLogo className="h-6 w-6" />
        <TwitterLogo className="h-6 w-6" />
      </div>
    </footer>
  );
}
