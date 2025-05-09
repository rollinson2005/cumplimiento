import React, { useState } from 'react';

const ConsultasAvanzadas = () => {
  const [filtros, setFiltros] = useState({
    fechaInicio: '',
    fechaFin: '',
    clienteId: ''
  });

  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const informes = JSON.parse(localStorage.getItem('informes')) || [];
  const transmisionesDIAN = JSON.parse(localStorage.getItem('transmisiones')) || [];
  const reportesUIAF = JSON.parse(localStorage.getItem('uiafReportes')) || [];
  const dueDiligenceEvaluations = JSON.parse(localStorage.getItem('dueDiligenceEvaluations')) || [];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const filtrarPorFecha = (items) => {
    if (!filtros.fechaInicio && !filtros.fechaFin) return items;
    
    return items.filter(item => {
      const fechaItem = new Date(item.fechaGeneracion || item.fechaTransmision || item.fechaEvaluacion);
      const fechaInicio = filtros.fechaInicio ? new Date(filtros.fechaInicio) : null;
      const fechaFin = filtros.fechaFin ? new Date(filtros.fechaFin) : null;
      
      if (fechaInicio && fechaItem < fechaInicio) return false;
      if (fechaFin && fechaItem > fechaFin) return false;
      return true;
    });
  };

  const filtrarPorCliente = (items) => {
    if (!filtros.clienteId) return items;
    return items.filter(item => {
      const cliente = clientes.find(c => c.id === item.clienteId || c.nombre === item.clienteId);
      return cliente && (cliente.nombre.toLowerCase().includes(filtros.clienteId.toLowerCase()) || cliente.identificacion.includes(filtros.clienteId));
    });
  };


  const resultadosInformes = filtrarPorFecha(filtrarPorCliente(informes));
  const resultadosDIAN = filtrarPorFecha(filtrarPorCliente(transmisionesDIAN));
  const resultadosUIAF = filtrarPorFecha(filtrarPorCliente(reportesUIAF));
  const resultadosDueDiligence = filtrarPorFecha(filtrarPorCliente(dueDiligenceEvaluations));


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Consultas Avanzadas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha Inicio</label>
          <input
            type="date"
            name="fechaInicio"
            value={filtros.fechaInicio}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha Fin</label>
          <input
            type="date"
            name="fechaFin"
            value={filtros.fechaFin}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cliente (opcional)</label>
          <input
            type="text"
            name="clienteId"
            value={filtros.clienteId}
            onChange={handleChange}
            placeholder="Nombre o ID del cliente"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Informes Semestrales</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periodo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Informe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Generación</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultadosInformes.map((informe, index) => {
                   const clienteAsociado = clientes.find(c => c.id === informe.clienteId || c.nombre === informe.clienteId);
                   return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {clienteAsociado?.nombre || 'Cliente no encontrado'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Semestre {informe.semestre} {informe.year}
                      </td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {informe.tipoInforme}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(informe.fechaGeneracion).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Reportes DIAN</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Reporte</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periodo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Transmisión</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultadosDIAN.map((transmision, index) => {
                   const clienteAsociado = clientes.find(c => c.id === transmision.clienteId || c.nombre === transmision.clienteId);
                   return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {clienteAsociado?.nombre || 'Cliente no encontrado'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Reporte {transmision.reporte}
                      </td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transmision.trimestre}T {transmision.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(transmision.fechaTransmision).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Reportes UIAF</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Reporte</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periodo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Transmisión</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultadosUIAF.map((reporte, index) => {
                   const clienteAsociado = clientes.find(c => c.id === reporte.clienteId || c.nombre === reporte.clienteId);
                   return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {clienteAsociado?.nombre || 'Cliente no encontrado'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {reporte.tipoReporte}
                      </td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {reporte.trimestre}T {reporte.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(reporte.fechaTransmision).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

         <div>
          <h3 className="text-lg font-medium mb-4">Evaluaciones Due Diligence</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente/Proveedor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Entidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Evaluación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recomendación</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultadosDueDiligence.map((evaluacion, index) => {
                   const clienteAsociado = clientes.find(c => c.id === evaluacion.clienteId || c.nombre === evaluacion.clienteId);
                   return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {clienteAsociado?.nombre || 'Cliente no encontrado'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {evaluacion.entityType}
                      </td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(evaluacion.fechaEvaluacion).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {evaluacion.reportData?.recomendacion || 'N/A'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultasAvanzadas;

// DONE