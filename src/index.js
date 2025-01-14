import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main';
import Search from './pages/Search';
import Tips from './pages/Tips';
import Error from './pages/Error';
import EfficiencyCalculator from './pages/EfficiencyCalculator';
import MyPage from './pages/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '', element: <Main /> },
      { path: 'search', element: <Search /> },
      { path: 'search/:keyword', element: <Search /> },
      { path: 'calculator', element: <EfficiencyCalculator /> },
      { path: 'tips', element: <Tips /> },
      { path: 'mypage', element: <MyPage /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
