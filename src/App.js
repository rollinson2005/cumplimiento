import React, { useState } from 'react';
import ComplianceHeader from './components/ComplianceHeader';
import ClientForm from './components/ClientForm';
import DueDiligenceList from './components/DueDiligenceList';
import SemesterReport from './components/SemesterReport';
import DianControlForm from './components/DianControlForm';
import UiafControlForm from './components/UiafControlForm';
import ConsultasAvanzadas from './components/ConsultasAvanzadas';

const App = () => {
  const [currentView, setCurrentView] = useState('config');

  const renderView = () => {
    switch(currentView) {
      case 'config':
        return <ClientForm />;
      case 'diligence':
        return <DueDiligenceList />;
      case 'reports':
        return <SemesterReport />;
      case 'dian':
        return <DianControlForm />;
      case 'uiaf':
        return <UiafControlForm />;
      case 'consultas':
        return <ConsultasAvanzadas />;
      default:
        return <ClientForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ComplianceHeader />
      <main className="container mx-auto py-8">
        <div className="flex space-x-2 mb-6 justify-center overflow-x-auto">
          <button
            onClick={() => setCurrentView('config')}
            className={`whitespace-nowrap px-4 py-2 rounded-md ${currentView === 'config' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Crear Cliente
          </button>
          <button
            onClick={() => setCurrentView('diligence')}
            className={`whitespace-nowrap px-4 py-2 rounded-md ${currentView === 'diligence' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Due Diligence
          </button>
          <button
            onClick={() => setCurrentView('reports')}
            className={`whitespace-nowrap px-4 py-2 rounded-md ${currentView === 'reports' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Informes
          </button>
          <button
            onClick={() => setCurrentView('dian')}
            className={`whitespace-nowrap px-4 py-2 rounded-md ${currentView === 'dian' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Control DIAN
          </button>
          <button
            onClick={() => setCurrentView('uiaf')}
            className={`whitespace-nowrap px-4 py-2 rounded-md ${currentView === 'uiaf' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Control UIAF
          </button>
          <button
            onClick={() => setCurrentView('consultas')}
            className={`whitespace-nowrap px-4 py-2 rounded-md ${currentView === 'consultas' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Consultas
          </button>
        </div>
        {renderView()}
      </main>
    </div>
  );
};

export default App;

// DONE