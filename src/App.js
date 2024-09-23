import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/Header';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <section className='relative top-16 z-0'>
          <Outlet />
        </section>
      </QueryClientProvider>
    </>
  );
}

export default App;
