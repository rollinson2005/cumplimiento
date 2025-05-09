import React from 'react';

const ComplianceHeader = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">OficinaPro</h1>
        <nav className="flex space-x-4 overflow-x-auto">
          <button className="hover:text-blue-300 transition-colors whitespace-nowrap">Crear Cliente</button>
          <button className="hover:text-blue-300 transition-colors whitespace-nowrap">Due Diligence</button>
          <button className="hover:text-blue-300 transition-colors whitespace-nowrap">Informes</button>
          <button className="hover:text-blue-300 transition-colors whitespace-nowrap">Control DIAN</button>
          <button className="hover:text-blue-300 transition-colors whitespace-nowrap">Control UIAF</button>
          <button className="hover:text-blue-300 transition-colors whitespace-nowrap">Consultas</button>
        </nav>
      </div>
    </header>
  );
};

export default ComplianceHeader;