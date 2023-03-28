import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="SCUBAbooker.eu"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <a href="https://github.com/ixartz/Next-js-Boilerplate"></a>
      <h2 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h2>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next.js Boilerplate is a starter code for your Next js project by
        putting developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS.
      </p>
      <h3 className="text-lg font-semibold">Next js Boilerplate Features</h3>
      <p>Developer experience first:</p>
      <p>Built-in feature from Next.js:</p>
    </Main>
  );
};

export default Index;
