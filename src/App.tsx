import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from './components/Navigation';
import HomePage from './components/sections/HomePage';
import ElectronicJournal from './components/sections/ElectronicJournal';
import MethodologyPage from './components/sections/MethodologyPage';
import MaterialsPage from './components/sections/MaterialsPage';
import ParentsPage from './components/sections/ParentsPage';
import SchedulePage from './components/sections/SchedulePage';
import ContactsPage from './components/sections/ContactsPage';

const queryClient = new QueryClient();

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'journal':
        return <ElectronicJournal />;
      case 'methodology':
        return <MethodologyPage />;
      case 'materials':
        return <MaterialsPage />;
      case 'parents':
        return <ParentsPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-gray-50">
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderSection()}
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;