import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Exmpl from './Exmpl';
import Navigation from './Navigation'
import CardHeading from './CardHeading';
import DashboardCard from './DashboardCard'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navigation />
    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <CardHeading />  
            <DashboardCard />

          </div>
        </main>
       
        
    </>
  );
}

export default App;
