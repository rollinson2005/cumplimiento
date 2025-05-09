import React, { useState } from 'react';

const DueDiligenceList = () => {
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const [selectedFile, setSelectedFile] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [associatedClient, setAssociatedClient] = useState('');
  const [entityType, setEntityType] = useState('Cliente'); // 'Cliente' or 'Proveedor'
  const [viewingReport, setViewingReport] = useState(null); // State to hold the report being viewed
  const [hasShareholding, setHasShareholding] = useState(''); // 'Si', 'No', or ''
  const [shareholdingImage, setShareholdingImage] = useState(null);
  const [shareholdingImagePreview, setShareholdingImagePreview] = useState(null);
  const [alerts, setAlerts] = useState([]); // State to manage LAFT alerts

  const [filterDateStart, setFilterDateStart] = useState('');
  const [filterDateEnd, setFilterDateEnd] = useState('');
  const [filterClient, setFilterClient] = useState('');

  const dueDiligenceEvaluations = JSON.parse(localStorage.getItem('dueDiligenceEvaluations')) || [];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setIsLoading(true);
      setReportData(null); // Clear previous report data
      setViewingReport(null); // Clear viewing state
      setAlerts([]); // Clear previous alerts
      
      // Simulación de procesamiento del PDF y extracción de datos
      setTimeout(() => {
        const simulatedReportData = {
          empresa: "PALANTE S.A.S.",
          fecha: "8 de mayo de 2025",
          elaboradoPor: "Rollinson Perdomo / Oficial de Cumplimiento",
          recomendacion: "APROBADO",
          resumenEjecutivo: [
            "Este informe evalúa el riesgo de Lavado de Activos y Financiación del Terrorismo (LAFT) de Palante S.A.S. y su representante legal. Los hallazgos más relevantes incluyen:",
            "Listas restrictivas: No figura en ninguna de las principales listas de sanciones internacionales (OFAC, ONU, UE, BID, Banco Mundial, etc.).",
            "Estado legal: Activa, con matrícula mercantil No. 0058249212 vigente y RUT activo.",
            "Hallazgos judiciales: Registra múltiples procesos civiles como demandante.",
            "Riesgo reputacional: MEDIO, debido a presencia en el Boletín de Deudores Morosos del Estado y numerosos procesos judiciales.",
            "Riesgo global: MEDIO, requiere monitoreo.",
            "Recomendación: Aprobación con seguimiento reputacional."
          ],
          informacionGeneral: [
            { campo: "Razón Social", datos: "Palante S.A.S." },
            { campo: "NIT", datos: "901058525-3" },
            { campo: "Estado RUT", datos: "Activo" },
            { campo: "Actividades Económicas", datos: "7310: Publicidad\n8230: Organización de eventos\n5621: Catering\n4921: Transporte de pasajeros" },
            { campo: "Tipo de Sociedad", datos: "Sociedad por Acciones Simplificada (S.A.S.)" },
            { campo: "Matrícula Mercantil", datos: "0058249212" },
            { campo: "Estado Legal", datos: "Activa (última renovación: 03/02/2025)" },
            { campo: "Contratación Pública", datos: "Sin registros recientes en SECOP o grandes contrataciones públicas." }
          ],
          analisisRepresentanteLegal: {
            nombre: "Samuel Campos Duarte",
            documento: "C.C. 80.034.094",
            pep: "No",
            nivelRiesgo: "Bajo",
            facultades: "El representante legal puede ejercer la representación judicial y extrajudicial sin restricciones por cuantía o naturaleza de los actos, excepto las reservadas a los accionistas. Tiene amplios poderes para ejecutar cualquier acto relacionado con el objeto social."
          },
          evaluacionRiesgo: [
            { factor: "Estado legal", nivel: "Bajo", justificacion: "Empresa activa, con RUT y matrícula vigentes." },
            { factor: "Procesos judiciales", nivel: "Medio", justificacion: "Más de 30 procesos donde figura como parte demandante." },
            { factor: "Listas de control", nivel: "Bajo", justificacion: "No registra en listas restrictivas nacionales o internacionales." },
            { factor: "Riesgo reputacional", nivel: "Medio", justificacion: "Aparición en Boletín de Deudores Morosos del Estado." },
            { factor: "Riesgo Global", nivel: "Medio", justificacion: "Actividad judicial intensiva y hallazgos reputacionales justifican seguimiento." }
          ],
          hallazgosClave: {
            registroMercantil: { numero: "0058249212", estado: "Activa", renovacion: "03/02/2025", tipoSociedad: "S.A.S." },
            rut: { estado: "Activo", nit: "901058525-3", observaciones: "Ninguna adversa." },
            procesosJudiciales: [
              "Figura como demandante en más de 30 procesos civiles en Pereira – Risaralda.",
              "Todos son de naturaleza ejecutiva singular por sumas de dinero.",
              "Ejemplos:",
              "Proceso 66001400300620210034900 (contra Rubeneri Becerra).",
              "Proceso 66001400300720220063200 (contra Jorge Eduardo Gómez).",
              "Proceso 66001400300720210037500 (contra Valeria Pineda Arias).",
              "Proceso 66001400300720220104500 (contra Yesica Pérez Díaz).",
              "Y otros procesos en juzgados civiles municipales."
            ],
            listasSanciones: [
              "No registra en:",
              "OFAC (SDN, FSE, NS-ISA, SSI, etc.)",
              "ONU (Consejo de Seguridad)",
              "Unión Europea",
              "Banco Mundial / BID",
              "Panama Papers / Offshore leaks",
              "DEA, FBI, Europol, Interpol"
            ],
            otrasFuentes: [
              "Procuraduría: Sin antecedentes disciplinarios.",
              "Contraloría: No figura como deudor moroso.",
              "DIAN: No aparece como proveedor ficticio.",
              "PEP nacional o internacional: No identificado."
            ]
          },
          beneficiariosFinales: [
            "Sin registros en listas PEP (nacionales/internacionales).",
            "Sin sanciones o alertas LAFT en listas vinculantes.",
            "Alma Alvarez , presenta una denuncia penal por estafa." // This will trigger an alert
          ],
          conclusiones: [
            "Empresa con trayectoria activa y sin hallazgos adversos relevantes.",
            "No registra antecedentes disciplinarios, judiciales ni contractuales negativos.",
            "Representantes legales sin señales de alerta."
          ],
          recomendaciones: [
            "Aprobar la relación comercial",
            "Realizar seguimiento anual",
            "Actualizar información en dos años"
          ],
          firmaValidacion: {
            responsable: "Rollinson Perdomo",
            cargo: "Oficial de Cumplimiento"
          },
          anexos: [
            "Capturas de pantalla de verificaciones"
          ]
        };

        setReportData(simulatedReportData);
        setIsLoading(false);

        // Check for LAFT related keywords in the report data
        const laftKeywords = ['lavado de activos', 'financiación del terrorismo', 'laft', 'sospechosa', 'sanciones', 'listas restrictivas', 'pep', 'denuncia penal', 'fraude', 'estafa', 'corrupción', 'soborno'];
        const reportText = JSON.stringify(simulatedReportData).toLowerCase();
        const foundAlerts = [];

        laftKeywords.forEach(keyword => {
            if (reportText.includes(keyword)) {
                foundAlerts.push(`Posible alerta LAFT detectada: "${keyword}"`);
            }
        });

        if (foundAlerts.length > 0) {
            setAlerts(foundAlerts);
        }

      }, 2000); // Simula un tiempo de procesamiento
    } else {
      alert('Por favor sube un archivo PDF válido');
      setSelectedFile(null);
      setReportData(null);
      setIsLoading(false);
      setAssociatedClient('');
      setEntityType('Cliente');
      setHasShareholding('');
      setShareholdingImage(null);
      setShareholdingImagePreview(null);
      setAlerts([]);
    }
  };

  const handleShareholdingChange = (e) => {
    setHasShareholding(e.target.value);
    if (e.target.value === 'No') {
      setShareholdingImage(null);
      setShareholdingImagePreview(null);
    }
  };

  const handleShareholdingImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      setShareholdingImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setShareholdingImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor sube un archivo de imagen válido.');
      setShareholdingImage(null);
      setShareholdingImagePreview(null);
    }
  };


  const handleSaveEvaluation = () => {
    if (!reportData || !associatedClient || !entityType || hasShareholding === '') {
      alert('Por favor completa todos los campos y carga un informe.');
      return;
    }

    if (hasShareholding === 'Si' && !shareholdingImage) {
        alert('Por favor sube la imagen de la composición accionaria.');
        return;
    }

    const clienteAsociado = clientes.find(c => c.id === associatedClient || c.nombre === associatedClient);

    if (!clienteAsociado) {
        alert('El cliente seleccionado no existe.');
        return;
    }

    const evaluation = {
      id: Date.now(),
      clienteId: associatedClient, // Use the selected client ID/name
      clienteNombre: clienteAsociado.nombre,
      entityType: entityType,
      reportFileName: selectedFile ? selectedFile.name : 'N/A',
      reportData: reportData, // Store the extracted data
      fechaEvaluacion: new Date().toISOString().split('T')[0],
      hasShareholding: hasShareholding,
      shareholdingImage: shareholdingImagePreview, // Store base64 image data
      clienteLogo: clienteAsociado.logo, // Store client logo data
      alerts: alerts // Store detected alerts
    };

    const savedEvaluations = JSON.parse(localStorage.getItem('dueDiligenceEvaluations')) || [];
    localStorage.setItem('dueDiligenceEvaluations', JSON.stringify([...savedEvaluations, evaluation]));

    alert('Evaluación de Due Diligence guardada con éxito!');
    // Reset form
    setSelectedFile(null);
    setReportData(null);
    setAssociatedClient('');
    setEntityType('Cliente');
    setHasShareholding('');
    setShareholdingImage(null);
    setShareholdingImagePreview(null);
    setAlerts([]);
  };

  const handleViewReport = (report) => {
    setViewingReport(report);
  };

  const handleCloseReport = () => {
    setViewingReport(null);
  };

  const filteredEvaluations = dueDiligenceEvaluations.filter(evaluacion => {
      const evaluationDate = new Date(evaluacion.fechaEvaluacion);
      const startDate = filterDateStart ? new Date(filterDateStart) : null;
      const endDate = filterDateEnd ? new Date(filterDateEnd) : null;

      const dateMatch = (!startDate || evaluationDate >= startDate) && (!endDate || evaluationDate <= endDate);

      const clientMatch = filterClient ? 
          (evaluacion.clienteNombre.toLowerCase().includes(filterClient.toLowerCase()) || 
           (clientes.find(c => c.id === evaluacion.clienteId || c.nombre === evaluacion.clienteId)?.identificacion || '').includes(filterClient))
          : true;

      return dateMatch && clientMatch;
  });


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Due Diligence - Clientes/Proveedores</h2>
      
      <div className="mb-8 p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Asociar Evaluación y Cargar Documentos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Asociar a Cliente/Proveedor</label>
              <select
                value={associatedClient}
                onChange={(e) => setAssociatedClient(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Seleccionar...</option>
                {clientes.map((cliente, index) => (
                  <option key={index} value={cliente.id || cliente.nombre}>
                    {cliente.nombre} - {cliente.identificacion}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo de Entidad</label>
              <select
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="Cliente">Cliente</option>
                <option value="Proveedor">Proveedor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">¿Tiene composición accionaria?</label>
              <select
                value={hasShareholding}
                onChange={handleShareholdingChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Seleccionar...</option>
                <option value="Si">Sí</option>
                <option value="No">No</option>
              </select>
            </div>
        </div>

        {hasShareholding === 'Si' && (
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Subir imagen composición accionaria</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleShareholdingImageChange}
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-gray-50 file:text-gray-700
                      hover:file:bg-gray-100"
                    required
                />
                {shareholdingImagePreview && (
                    <img src={shareholdingImagePreview} alt="Composición Accionaria Preview" className="mt-4 max-h-40 rounded-md shadow" />
                )}
            </div>
        )}

        <div className="flex items-end">
          <label className="block w-full">
            <span className="sr-only">Seleccionar informe tus datos</span>
            <input 
              type="file" 
              accept=".pdf" 
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </label>
        </div>
        {selectedFile && (
          <span className="text-sm text-gray-600 block mt-2">Archivo seleccionado: {selectedFile.name}</span>
        )}
        {isLoading && (
          <span className="text-sm text-gray-500 block mt-2">Procesando...</span>
        )}
      </div>

      {alerts.length > 0 && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <h3 className="font-bold mb-2">Alertas LAFT Detectadas:</h3>
              <ul className="list-disc pl-5 text-sm">
                  {alerts.map((alert, index) => (
                      <li key={index}>{alert}</li>
                  ))}
              </ul>
          </div>
      )}

      {reportData && (
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <div className="border-b pb-4 mb-4">
            <h3 className="text-xl font-bold text-center">INFORME DE DEBIDA DILIGENCIA SAGRILAFT</h3>
            <p className="text-center font-medium">{reportData.empresa}</p>
            <p className="text-center text-sm">Fecha de elaboración: {reportData.fecha}</p>
            <p className="text-center text-sm">Elaborado por: {reportData.elaboradoPor}</p>
            <p className="text-center font-bold mt-2">Recomendación: {reportData.recomendacion}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setViewingReport({ reportData: reportData, hasShareholding: hasShareholding, shareholdingImagePreview: shareholdingImagePreview, alerts: alerts })} // Pass all relevant data
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Consultar Informe
              </button>
            </div>
          </div>

          {/* ... (rest of the report data display remains the same) */}

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSaveEvaluation}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Guardar Evaluación
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Evaluaciones Guardadas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Filtrar por Fecha Inicio</label>
                <input
                    type="date"
                    value={filterDateStart}
                    onChange={(e) => setFilterDateStart(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Filtrar por Fecha Fin</label>
                <input
                    type="date"
                    value={filterDateEnd}
                    onChange={(e) => setFilterDateEnd(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Filtrar por Cliente/Proveedor</label>
                 <input
                    type="text"
                    value={filterClient}
                    onChange={(e) => setFilterClient(e.target.value)}
                    placeholder="Nombre o ID"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
        </div>

        <div className="space-y-3">
          {filteredEvaluations.length > 0 ? (
              filteredEvaluations.map((evaluacion, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{evaluacion.reportData?.empresa || 'Empresa no especificada'}</p>
                      <p className="text-sm text-gray-600">
                        Asociado a: {evaluacion.clienteNombre} ({evaluacion.entityType})
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Evaluado el: {new Date(evaluacion.fechaEvaluacion).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${evaluacion.reportData?.recomendacion === 'APROBADO' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {evaluacion.reportData?.recomendacion || 'Sin recomendación'}
                    </span>
                  </div>
                  {evaluacion.alerts && evaluacion.alerts.length > 0 && (
                      <div className="mt-2 text-red-700 text-xs font-semibold">
                          ¡Alerta LAFT detectada!
                      </div>
                  )}
                  <div className="mt-3">
                     <button
                        onClick={() => handleViewReport(evaluacion)}
                        className="text-blue-600 hover:text-blue-900 text-sm"
                      >
                        Ver Detalles
                      </button>
                  </div>
                </div>
              ))
          ) : (
              <p className="text-sm text-gray-500">No hay evaluaciones guardadas que coincidan con los filtros.</p>
          )}
        </div>
      </div>

      {/* Modal or separate section to display the full report */}
      {viewingReport && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-bold">Detalles del Informe de Due Diligence</h3>
              <button onClick={handleCloseReport} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Display the full report data here */}
            {viewingReport.reportData && (
              <div className="space-y-6 text-gray-800">
                 <div className="border-b pb-4 mb-4">
                    <div className="flex items-center justify-center mb-4">
                        {viewingReport.clienteLogo && (
                            <img src={viewingReport.clienteLogo} alt="Logo Cliente" className="h-16 w-16 object-contain mr-4" />
                        )}
                        <h3 className="text-xl font-bold text-center">INFORME DE DEBIDA DILIGENCIA SAGRILAFT</h3>
                    </div>
                    <p className="text-center font-medium">{viewingReport.reportData.empresa}</p>
                    <p className="text-center text-sm">Fecha de elaboración: {viewingReport.reportData.fecha}</p>
                    <p className="text-center text-sm">Elaborado por: {viewingReport.reportData.elaboradoPor}</p>
                    <p className="text-center font-bold mt-2">Recomendación: {viewingReport.reportData.recomendacion}</p>
                  </div>

                  {viewingReport.alerts && viewingReport.alerts.length > 0 && (
                      <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                          <h3 className="font-bold mb-2">Alertas LAFT Detectadas:</h3>
                          <ul className="list-disc pl-5 text-sm">
                              {viewingReport.alerts.map((alert, index) => (
                                  <li key={index}>{alert}</li>
                              ))}
                          </ul>
                      </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">1. RESUMEN EJECUTIVO</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {viewingReport.reportData.resumenEjecutivo?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">2. INFORMACIÓN GENERAL DE LA EMPRESA</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left">Campo</th>
                              <th className="px-4 py-2 text-left">Datos</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {viewingReport.reportData.informacionGeneral?.map((item, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2 font-medium">{item.campo}</td>
                                <td className="px-4 py-2 whitespace-pre-wrap">{item.datos}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">3. ANÁLISIS DE REPRESENTANTE LEGAL</h4>
                      <div className="text-sm space-y-1">
                        <p><span className="font-medium">Nombre:</span> {viewingReport.reportData.analisisRepresentanteLegal?.nombre}</p>
                        <p><span className="font-medium">Documento:</span> {viewingReport.reportData.analisisRepresentanteLegal?.documento}</p>
                        <p><span className="font-medium">¿PEP?:</span> {viewingReport.reportData.analisisRepresentanteLegal?.pep}</p>
                        <p><span className="font-medium">Nivel de riesgo:</span> {viewingReport.reportData.analisisRepresentanteLegal?.nivelRiesgo}</p>
                        <p><span className="font-medium">Facultades:</span> {viewingReport.reportData.analisisRepresentanteLegal?.facultades}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">4. EVALUACIÓN DE RIESGO LAFT</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left">Factor</th>
                              <th className="px-4 py-2 text-left">Nivel de Riesgo</th>
                              <th className="px-4 py-2 text-left">Justificación</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {viewingReport.reportData.evaluacionRiesgo?.map((item, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2">{item.factor}</td>
                                <td className="px-4 py-2">{item.nivel}</td>
                                <td className="px-4 py-2">{item.justificacion}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">5. HALLAZGOS CLAVE</h4>
                      <div className="text-sm space-y-4">
                        <div>
                          <h5 className="font-medium mb-1">5.1 Registro Mercantil</h5>
                          <p><span className="font-medium">Número:</span> {viewingReport.reportData.hallazgosClave?.registroMercantil?.numero}</p>
                          <p><span className="font-medium">Estado:</span> {viewingReport.reportData.hallazgosClave?.registroMercantil?.estado}</p>
                          <p><span className="font-medium">Última renovación:</span> {viewingReport.reportData.hallazgosClave?.registroMercantil?.renovacion}</p>
                          <p><span className="font-medium">Tipo de sociedad:</span> {viewingReport.reportData.hallazgosClave?.registroMercantil?.tipoSociedad}</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">5.2 Registro Único Tributario (RUT)</h5>
                          <p><span className="font-medium">Estado:</span> {viewingReport.reportData.hallazgosClave?.rut?.estado}</p>
                          <p><span className="font-medium">NIT:</span> {viewingReport.reportData.hallazgosClave?.rut?.nit}</p>
                          <p><span className="font-medium">Observaciones:</span> {viewingReport.reportData.hallazgosClave?.rut?.observaciones}</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">5.3 Procesos Judiciales</h5>
                          <ul className="list-disc pl-5">
                            {viewingReport.reportData.hallazgosClave?.procesosJudiciales?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">5.4 Listas de Sanciones</h5>
                          <ul className="list-disc pl-5">
                            {viewingReport.reportData.hallazgosClave?.listasSanciones?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">5.5 Otras fuentes</h5>
                          <ul className="list-disc pl-5">
                            {viewingReport.reportData.hallazgosClave?.otrasFuentes?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">6. BENEFICIARIOS FINALES</h4>
                       {viewingReport.hasShareholding === 'Si' && viewingReport.shareholdingImagePreview && (
                          <div className="mb-4">
                              <img src={viewingReport.shareholdingImagePreview} alt="Composición Accionaria" className="max-w-full h-auto rounded-md shadow" />
                          </div>
                      )}
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {viewingReport.reportData.beneficiariosFinales?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">7. CONCLUSIONES Y RECOMENDACIONES</h4>
                      <h5 className="font-medium mb-1">Conclusiones:</h5>
                      <ul className="list-disc pl-5 text-sm space-y-1 mb-2">
                        {viewingReport.reportData.conclusiones?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-gray-600 mb-4">*Este informe se basa en información pública disponible a la fecha de elaboración. *</p>
                      <h5 className="font-medium mb-1">Recomendaciones:</h5>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {viewingReport.reportData.recomendaciones?.map((item, index) => (
                          <li key={index}>✔ {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">8. FIRMA Y VALIDACIÓN</h4>
                      <div className="text-sm space-y-1">
                        <p><span className="font-medium">Responsable del análisis:</span> {viewingReport.reportData.firmaValidacion?.responsable}</p>
                        <p><span className="font-medium">Cargo:</span> {viewingReport.reportData.firmaValidacion?.cargo}</p>
                      </div>
                      <h5 className="font-medium mt-4 mb-1">Anexos</h5>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                        {viewingReport.reportData.anexos?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
              </div>
            )}

            <div className="flex justify-end mt-4">
              <button onClick={handleCloseReport} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DueDiligenceList;

// DONE