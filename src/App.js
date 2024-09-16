import { Outlet } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <section className='relative top-16 z-0'>
        <Outlet />
      </section>
    </>
  );
}

export default App;
