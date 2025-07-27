import { Nav } from './Nav';
import { Providers } from './Providers';

export function Layout({ children }) {
  return (
    <>
      <Providers />
      <Nav />
      <main>
        {children}
      </main>
    </>
  );
} 