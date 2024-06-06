import { ThemeProvider } from './theme-provider';
import SmoothScroll from './SmoothScroll';

// Components

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={`relative flex flex-col px-4  md:px-8 lg:px-16 py-12 dark:bg-black  `}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
