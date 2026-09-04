import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AttractionModal } from './components/AttractionModal';
import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { AttractionsPage } from './pages/AttractionsPage';
import { ShowsPage } from './pages/ShowsPage';
import { HotelPage } from './pages/HotelPage';
import { TicketsPage } from './pages/TicketsPage';
import { RulesPage } from './pages/RulesPage';


export default function App() {
  // Page Tab state (home, map, attractions, shows, hotel, tickets, rules)
  const [activeTab, setActiveTab] = useState('home');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  // Render Page Component based on active tab
  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} setSelectedAttraction={setSelectedAttraction} />;
      case 'map':
        return <MapPage setSelectedAttraction={setSelectedAttraction} />;
      case 'attractions':
        return <AttractionsPage setSelectedAttraction={setSelectedAttraction} />;
      case 'shows':
        return <ShowsPage />;
      case 'hotel':
        return <HotelPage />;
      case 'tickets':
        return <TicketsPage />;
      case 'rules':
        return <RulesPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} setSelectedAttraction={setSelectedAttraction} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 font-sans selection:bg-violet-500/40 selection:text-white flex flex-col justify-between">
      {/* Navigation Bar Component */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Page Component View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Attraction Detail Modal */}
      <AttractionModal 
        selectedAttraction={selectedAttraction} 
        setSelectedAttraction={setSelectedAttraction} 
      />

      {/* Footer Component */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
