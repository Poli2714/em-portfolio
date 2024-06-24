import CssLogo from '/public/css.svg';
import HtmlLogo from '/public/html.svg';
import JavaScriptLogo from '/public/javascript.svg';
import NextDark from '/public/next-dark.svg';
import NextLight from '/public/next-light.svg';
import ReactLogo from '/public/react.svg';
import TailwindLogo from '/public/tailwind.svg';
import TypeScriptLogo from '/public/typescript.svg';

export const coreSkills = [
  {
    id: 'nextjs',
    name: 'Next.js',
    logoDark: NextDark,
    logoLight: NextLight,
  },
  {
    id: 'react',
    name: 'React',
    logoDark: ReactLogo,
    logoLight: undefined,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logoDark: TypeScriptLogo,
    logoLight: undefined,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logoDark: JavaScriptLogo,
    logoLight: undefined,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logoDark: TailwindLogo,
    logoLight: undefined,
  },
  {
    id: 'css',
    name: 'CSS',
    logoDark: CssLogo,
    logoLight: undefined,
  },
  {
    id: 'html',
    name: 'HTML',
    logoDark: HtmlLogo,
    logoLight: undefined,
  },
];
