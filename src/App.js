import './reset.css';
import {Home} from './pages/home';
import {Routes, Route} from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
