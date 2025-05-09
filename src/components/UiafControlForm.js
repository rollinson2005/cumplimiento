import React, { useState } from 'react';

const UiafControlForm = () => {
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const [formData, setFormData] = useState({
    clienteId: '',
    tipoReporte: 'ROS',
    trimestre: '1',
    year: new Date().getFullYear(),
    fechaTransmision: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.clienteId || !formData.fechaTransmision) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const reportes = JSON.parse(localStorage.getItem('uiafReportes')) || [];
    const nuevoReporte = {
      id: Date.now(),
      ...formData,
      // Store the selected client ID/name directly
      clienteId: formData.clienteId, 
      estado: 'Registrado'
    };
    
    localStorage.setItem('uiafReportes', JSON.stringify([...reportes, nuevoReporte]));
    alert('Reporte UIAF registrado con éxito!');
    setFormData({
      clienteId: '',
      tipoReporte: 'ROS',
      trimestre: '1',
      year: new Date().getFullYear(),
      fechaTransmision: ''
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Control de Reportes UIAF</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cliente</label>
          <select
            name="clienteId"
            value={formData.clienteId}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Seleccionar cliente...</option>
            {clientes.map((cliente, index) => (
              <option key={index} value={cliente.id || cliente.nombre}>
                {cliente.nombre} - {cliente.identificacion}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Reporte</label>
          <select
            name="tipoReporte"
            value={formData.tipoReporte}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="ROS">Reporte de Operaciones Sospechosas (ROS)</option>
            <option value="Transacciones">Transacciones Cambiarias</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Trimestre</label>
            <select
              name="trimestre"
              value={formData.trimestre}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="1">Trimestre 1 (Ene-Mar)</option>
              <option value="2">Trimestre 2 (Abr-Jun)</option>
              <option value="3">Trimestre 3 (Jul-Sep)</option>
              <option value="4">Trimestre 4 (Oct-Dic)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Año</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              min="2020"
              max="2030"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha de Transmisión</label>
          <input
            type="date"
            name="fechaTransmision"
            value={formData.fechaTransmision}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Registrar Reporte
          </button>
        </div>
      </form>

      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Reportes UIAF Registrados</h3>
        <div className="space-y-3">
          {(JSON.parse(localStorage.getItem('uiafReportes')) || []).map((reporte, index) => {
            const clienteAsociado = clientes.find(c => c.id === reporte.clienteId || c.nombre === reporte.clienteId);
            return (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">
                      {clienteAsociado?.nombre || 'Cliente no encontrado'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {reporte.tipoReporte} - Trimestre {reporte.trimestre} {reporte.year}
                    </p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {reporte.estado}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Transmitido el: {new Date(reporte.fechaTransmision).toLocaleDateString()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UiafControlForm;

// DONE