import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './styles/font.css';

function App() {
   return (
      <>
         {' '}
         <RouterProvider router={router} />
      </>
   );
}

export default App;
