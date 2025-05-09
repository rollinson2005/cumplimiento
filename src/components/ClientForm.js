import React, { useState } from 'react';

const ClientForm = () => {
  const entidadesReguladoras = [
    'DIAN',
    'Superintendencia Financiera de Colombia',
    'Superintendencia de Sociedades',
    'Superintendencia de Industria y Comercio',
    'Superintendencia de Servicios Públicos Domiciliarios',
    'Superintendencia de Subsidio Familiar',
    'Superintendencia de Salud',
    'Superintendencia de Transporte',
    'Superintendencia de Notariado y Registro',
    'Superintendencia de Puertos y Transporte',
    'Otra entidad'
  ];

  const [cliente, setCliente] = useState({
    nombre: '',
    identificacion: '',
    direccion: '',
    ciudad: '',
    email: '',
    entidadVigila: 'DIAN',
    sistemaControl: 'SARLAFT',
    dian: { acceso: '', firmaDigital: '' },
    uiaf: { usuario: '', password: '' },
    logo: null,
    // Specific credentials for Supersociedades
    supersociedadesCreds: {
        uiaf: { nombre: 'SIREL', paginaWeb: 'https://reportes.uiaf.gov.co/ReportesFSMCif64/Modules/Home/html/default.aspx', usuario: '', password: '' },
        reporte75: { nombre: 'STORM', paginaWeb: 'https://sissoc.supersociedades.gov.co/stormWeb/#/login', codigoEntidad: '', password: '' }, // Pre-filled fields for 2.1
    },
    sicCreds: {
        rnbd: { nombre: 'RNBD', paginaWeb: 'https://rnbd.sic.gov.co/sisi/login', credenciales: [
            { empresa: 'Credifin', usuario: 'servicioalcliente@credifin.com.co', password: '⁠Estrategia10*' },
            { empresa: 'Estrategia Comercial', usuario: 'estrategiaconta@mic.com.co', password: '⁠Estrategia10*' },
            { empresa: 'Maquila', usuario: 'dircompras@mic.com.co', password: 'Estrategia10*' },
            { empresa: 'Destino', usuario: 'sistema@mic.com.co', password: 'Estrategia10*' },
            { empresa: 'Wstudio', usuario: 'asisconta@estrategiacomercial.com.co', password: 'Estrategia10*' },
            { empresa: 'Inversiones Doble J de Colombia S.A.S', usuario: 'mcontabilidad@mic.com.co', password: 'Inversiones2024+' }
        ]}
    }
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const [viewingClient, setViewingClient] = useState(null); // State to hold the client being viewed

  const clientesGuardados = JSON.parse(localStorage.getItem('clientes')) || [];


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child, subChild] = name.split('.');
      if (subChild) {
         setCliente(prev => ({
            ...prev,
            [parent]: {
                ...prev[parent],
                [child]: {
                    ...prev[parent][child],
                    [subChild]: value
                }
            }
         }));
      } else {
        setCliente(prev => ({
          ...prev,
          [parent]: { ...prev[parent], [child]: value }
        }));
      }
    } else {
      setCliente(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setCliente(prev => ({ ...prev, logo: reader.result })); // Store base64 directly
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor sube un archivo de imagen válido.');
      setCliente(prev => ({ ...prev, logo: null }));
      setLogoPreview(null);
    }
  };

  const handleSICCredChange = (index, field, value) => {
      setCliente(prev => {
          const newCreds = [...prev.sicCreds.rnbd.credenciales];
          newCreds[index] = {
              ...newCreds[index],
              [field]: value
          };
          return {
              ...prev,
              sicCreds: {
                  ...prev.sicCreds,
                  rnbd: {
                      ...prev.sicCreds.rnbd,
                      credenciales: newCreds
                  }
              }
          };
      });
  };

  const addSICCred = () => {
      setCliente(prev => ({
          ...prev,
          sicCreds: {
              ...prev.sicCreds,
              rnbd: {
                  ...prev.sicCreds.rnbd,
                  credenciales: [...prev.sicCreds.rnbd.credenciales, { empresa: '', usuario: '', password: '' }]
              }
          }
      }));
  };

  const removeSICCred = (index) => {
      setCliente(prev => ({
          ...prev,
          sicCreds: {
              ...prev.sicCreds,
              rnbd: {
                  ...prev.sicCreds.rnbd,
                  credenciales: prev.sicCreds.rnbd.credenciales.filter((_, i) => i !== index)
              }
          }
      }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const clientesGuardados = JSON.parse(localStorage.getItem('clientes')) || [];
    
    const clienteToSave = {
      ...cliente,
      id: Date.now(), // Add a unique ID
      logo: logoPreview // Save base64 image data
    };
    
    localStorage.setItem('clientes', JSON.stringify([...clientesGuardados, clienteToSave]));
    alert('Cliente guardado con éxito!');
    setCliente({
      nombre: '',
      identificacion: '',
      direccion: '',
      ciudad: '',
      email: '',
      entidadVigila: 'DIAN',
      sistemaControl: 'SARLAFT',
      dian: { acceso: '', firmaDigital: '' },
      uiaf: { usuario: '', password: '' },
      logo: null,
      supersociedadesCreds: {
        uiaf: { nombre: 'SIREL', paginaWeb: 'https://reportes.uiaf.gov.co/ReportesFSMCif64/Modules/Home/html/default.aspx', usuario: '', password: '' },
        reporte75: { nombre: 'STORM', paginaWeb: 'https://sissoc.supersociedades.gov.co/stormWeb/#/login', codigoEntidad: '', password: '' },
      },
      sicCreds: {
          rnbd: { nombre: 'RNBD', paginaWeb: 'https://rnbd.sic.gov.co/sisi/login', credenciales: [
              { empresa: 'Credifin', usuario: 'servicioalcliente@credifin.com.co', password: '⁠Estrategia10*' },
              { empresa: 'Estrategia Comercial', usuario: 'estrategiaconta@mic.com.co', password: '⁠Estrategia10*' },
              { empresa: 'Maquila', usuario: 'dircompras@mic.com.co', password: 'Estrategia10*' },
              { empresa: 'Destino', usuario: 'sistema@mic.com.co', password: 'Estrategia10*' },
              { empresa: 'Wstudio', usuario: 'asisconta@estrategiacomercial.com.co', password: 'Estrategia10*' },
              { empresa: 'Inversiones Doble J de Colombia S.A.S', usuario: 'mcontabilidad@mic.com.co', password: 'Inversiones2024+' }
          ]}
      }
    });
    setLogoPreview(null);
  };

  const handleViewClient = (client) => {
      setViewingClient(client);
  };

  const handleCloseClientView = () => {
      setViewingClient(null);
  };

  const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
          alert('Copiado al portapapeles!');
      }).catch(err => {
          console.error('Error al copiar: ', err);
      });
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Registro de Clientes</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
              {logoPreview ? (
                <img 
                  src={logoPreview} 
                  alt="Preview logo" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-gray-500">Logo del cliente</span>
                </div>
              )}
            </div>
            <label className="block mt-2">
              <span className="sr-only">Seleccionar logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-1 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-50 file:text-gray-700
                  hover:file:bg-gray-100"
              />
            </label>
          </div>
          
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={cliente.nombre}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Identificación</label>
              <input
                type="text"
                name="identificacion"
                value={cliente.identificacion}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={cliente.direccion}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ciudad</label>
              <input
                type="text"
                name="ciudad"
                value={cliente.ciudad}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Entidad que vigila y controla</label>
            <select
              name="entidadVigila"
              value={cliente.entidadVigila}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              {entidadesReguladoras.map((entidad, index) => (
                <option key={index} value={entidad}>{entidad}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sistema de control</label>
            <select
              name="sistemaControl"
              value={cliente.sistemaControl}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="SARLAFT">SARLAFT</option>
              <option value="SAGRILAFT">SAGRILAFT</option>
              <option value="SIPLAFT">SIPLAFT</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        
        {cliente.entidadVigila === 'Superintendencia de Sociedades' ? (
            <div className="border-t pt-4 space-y-6">
                <h3 className="text-lg font-semibold mb-4">Credenciales Específicas (Supersociedades)</h3>

                {/* 1. UIAF */}
                <div>
                    <h4 className="font-medium mb-2">1. UIAF</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Nombre</label>
                            <input type="text" value={cliente.supersociedadesCreds.uiaf.nombre} readOnly className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Página Web</label>
                            <a href={cliente.supersociedadesCreds.uiaf.paginaWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                {cliente.supersociedadesCreds.uiaf.paginaWeb}
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Usuario</label>
                                <input type="text" name="supersociedadesCreds.uiaf.usuario" value={cliente.supersociedadesCreds.uiaf.usuario} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="supersociedadesCreds.uiaf.password" value={cliente.supersociedadesCreds.uiaf.password} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.1 Reporte 75 SAGRILAFT - PTEE */}
                 <div>
                    <h4 className="font-medium mb-2">2.1 Reporte 75 SAGRILAFT - PTEE</h4>
                     <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Nombre</label>
                            <input type="text" name="supersociedadesCreds.reporte75.nombre" value={cliente.supersociedadesCreds.reporte75.nombre} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                         <div>
                            <label className="block text-gray-700">Página Web</label>
                             <a href={cliente.supersociedadesCreds.reporte75.paginaWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                {cliente.supersociedadesCreds.reporte75.paginaWeb}
                            </a>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Código Entidad</label>
                                <input type="text" name="supersociedadesCreds.reporte75.codigoEntidad" value={cliente.supersociedadesCreds.reporte75.codigoEntidad} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="supersociedadesCreds.reporte75.password" value={cliente.supersociedadesCreds.reporte75.password} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO */}
                 <div>
                    <h4 className="font-medium mb-2">3. SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO</h4>
                    <div className="space-y-4 text-sm">
                        <div>
                            <h5 className="font-medium mb-1">3.1 Registro Nacional Bases de Datos</h5>
                            <div className="space-y-2">
                                <div>
                                    <label className="block text-gray-700">Nombre</label>
                                    <input type="text" value={cliente.sicCreds.rnbd.nombre} readOnly className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Página Web</label>
                                     <a href={cliente.sicCreds.rnbd.paginaWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        {cliente.sicCreds.rnbd.paginaWeb}
                                    </a>
                                </div>
                                <h6 className="font-medium mt-4 mb-2">Credenciales:</h6>
                                <table className="min-w-full divide-y divide-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Empresa</th>
                                            <th className="px-4 py-2 text-left">Usuario</th>
                                            <th className="px-4 py-2 text-left">Password</th>
                                            <th></th> {/* Add header for remove button */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {cliente.sicCreds.rnbd.credenciales.map((cred, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2">
                                                    <input
                                                        type="text"
                                                        value={cred.empresa}
                                                        onChange={(e) => handleSICCredChange(index, 'empresa', e.target.value)}
                                                        className="w-full border border-gray-300 rounded-md shadow-sm p-1"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        type="text"
                                                        value={cred.usuario}
                                                        onChange={(e) => handleSICCredChange(index, 'usuario', e.target.value)}
                                                        className="w-full border border-gray-300 rounded-md shadow-sm p-1"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <input
                                                        type="password"
                                                        value={cred.password}
                                                        onChange={(e) => handleSICCredChange(index, 'password', e.target.value)}
                                                        className="w-full border border-gray-300 rounded-md shadow-sm p-1"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 text-right">
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSICCred(index)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    onClick={addSICCred}
                                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                                >
                                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Agregar Credencial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        ) : (
            <>
                <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-2">Credenciales DIAN</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Usuario DIAN</label>
                    <input
                        type="text"
                        name="dian.acceso"
                        value={cliente.dian.acceso}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Firma Digital</label>
                    <input
                        type="text"
                        name="dian.firmaDigital"
                        value={cliente.dian.firmaDigital}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                    </div>
                </div>
                </div>
                
                <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-2">Credenciales UIAF</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Usuario UIAF</label>
                    <input
                        type="text"
                        name="uiaf.usuario"
                        value={cliente.uiaf.usuario}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Contraseña UIAF</label>
                    <input
                        type="password"
                        name="uiaf.password"
                        value={cliente.uiaf.password}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                    </div>
                </div>
                </div>
            </>
        )}
        
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Guardar Cliente
          </button>
        </div>
      </form>

      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Clientes Creados</h3>
        <div className="space-y-3">
            {clientesGuardados.length > 0 ? (
                clientesGuardados.map((cliente, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-medium">{cliente.nombre}</p>
                                <p className="text-sm text-gray-600">{cliente.identificacion}</p>
                                <p className="text-xs text-gray-500">{cliente.ciudad}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                {cliente.logo && (
                                    <img src={cliente.logo} alt="Logo Cliente" className="h-10 w-10 object-contain rounded-full" />
                                )}
                                <button
                                    onClick={() => handleViewClient(cliente)}
                                    className="text-blue-600 hover:text-blue-900 text-sm"
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-sm text-gray-500">No hay clientes creados aún.</p>
            )}
        </div>
      </div>

      {/* Modal to view client details */}
      {viewingClient && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                  <div className="flex justify-between items-center border-b pb-3 mb-4">
                      <h3 className="text-xl font-bold">Detalles del Cliente</h3>
                      <button onClick={handleCloseClientView} className="text-gray-500 hover:text-gray-700">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                      </button>
                  </div>
                  <div className="space-y-4 text-gray-800 text-sm">
                      <div className="flex items-center space-x-4">
                          {viewingClient.logo && (
                              <img src={viewingClient.logo} alt="Logo Cliente" className="h-20 w-20 object-contain rounded-full" />
                          )}
                          <div>
                              <p><span className="font-medium">Nombre:</span> {viewingClient.nombre}</p>
                              <p><span className="font-medium">Identificación:</span> {viewingClient.identificacion}</p>
                              <p><span className="font-medium">Email:</span> {viewingClient.email}</p>
                          </div>
                      </div>
                      <p><span className="font-medium">Dirección:</span> {viewingClient.direccion}</p>
                      <p><span className="font-medium">Ciudad:</span> {viewingClient.ciudad}</p>
                      <p><span className="font-medium">Entidad que vigila:</span> {viewingClient.entidadVigila}</p>
                      <p><span className="font-medium">Sistema de control:</span> {viewingClient.sistemaControl}</p>

                      {viewingClient.entidadVigila === 'Superintendencia de Sociedades' ? (
                          <div className="border-t pt-4 space-y-4">
                              <h4 className="font-semibold mb-2">Credenciales Específicas (Supersociedades)</h4>
                              <div>
                                  <h5 className="font-medium mb-1">1. UIAF</h5>
                                  <p><span className="font-medium">Nombre:</span> {viewingClient.supersociedadesCreds?.uiaf?.nombre}</p>
                                  <p><span className="font-medium">Página Web:</span> <a href={viewingClient.supersociedadesCreds?.uiaf?.paginaWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{viewingClient.supersociedadesCreds?.uiaf?.paginaWeb}</a></p>
                                  <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Usuario:</span> {viewingClient.supersociedadesCreds?.uiaf?.usuario}</p>
                                      <button onClick={() => copyToClipboard(viewingClient.supersociedadesCreds?.uiaf?.usuario)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Password:</span> {viewingClient.supersociedadesCreds?.uiaf?.password}</p>
                                      <button onClick={() => copyToClipboard(viewingClient.supersociedadesCreds?.uiaf?.password)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                              </div>
                              <div>
                                  <h5 className="font-medium mb-1">2.1 Reporte 75 SAGRILAFT - PTEE</h5>
                                  <p><span className="font-medium">Nombre:</span> {viewingClient.supersociedadesCreds?.reporte75?.nombre}</p>
                                  <p><span className="font-medium">Página Web:</span> <a href={viewingClient.supersociedadesCreds?.reporte75?.paginaWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{viewingClient.supersociedadesCreds?.reporte75?.paginaWeb}</a></p>
                                  <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Código Entidad:</span> {viewingClient.supersociedadesCreds?.reporte75?.codigoEntidad}</p>
                                       <button onClick={() => copyToClipboard(viewingClient.supersociedadesCreds?.reporte75?.codigoEntidad)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Password:</span> {viewingClient.supersociedadesCreds?.reporte75?.password}</p>
                                       <button onClick={() => copyToClipboard(viewingClient.supersociedadesCreds?.reporte75?.password)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                              </div>
                              <div>
                                  <h5 className="font-medium mb-1">3. SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO</h5>
                                  <p><span className="font-medium">3.1 Registro Nacional Bases de Datos</span></p>
                                  <p><span className="font-medium">Nombre:</span> {viewingClient.sicCreds?.rnbd?.nombre}</p>
                                  <p><span className="font-medium">Página Web:</span> <a href={viewingClient.sicCreds?.rnbd?.paginaWeb} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{viewingClient.sicCreds?.rnbd?.paginaWeb}</a></p>
                                  <h6 className="font-medium mt-2 mb-1">Credenciales:</h6>
                                  <ul className="list-disc pl-5">
                                      {viewingClient.sicCreds?.rnbd?.credenciales?.map((cred, index) => (
                                          <li key={index}>
                                              <span className="font-medium">Empresa:</span> {cred.empresa},
                                              <div className="flex items-center space-x-2">
                                                  <p><span className="font-medium">Usuario:</span> {cred.usuario}</p>
                                                  <button onClick={() => copyToClipboard(cred.usuario)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                              </div>
                                              <div className="flex items-center space-x-2">
                                                  <p><span className="font-medium">Password:</span> {cred.password}</p>
                                                  <button onClick={() => copyToClipboard(cred.password)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                              </div>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      ) : (
                          <>
                              <div className="border-t pt-4">
                                  <h4 className="text-lg font-medium mb-2">Credenciales DIAN</h4>
                                   <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Usuario DIAN:</span> {viewingClient.dian?.acceso}</p>
                                      <button onClick={() => copyToClipboard(viewingClient.dian?.acceso)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                                   <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Firma Digital:</span> {viewingClient.dian?.firmaDigital}</p>
                                      <button onClick={() => copyToClipboard(viewingClient.dian?.firmaDigital)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                              </div>
                              <div className="border-t pt-4">
                                  <h4 className="text-lg font-medium mb-2">Credenciales UIAF</h4>
                                   <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Usuario UIAF:</span> {viewingClient.uiaf?.usuario}</p>
                                      <button onClick={() => copyToClipboard(viewingClient.uiaf?.usuario)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                                   <div className="flex items-center space-x-2">
                                      <p><span className="font-medium">Contraseña UIAF:</span> {viewingClient.uiaf?.password}</p>
                                      <button onClick={() => copyToClipboard(viewingClient.uiaf?.password)} className="text-gray-500 hover:text-gray-700 text-xs">Copiar</button>
                                  </div>
                              </div>
                          </>
                      )}
                  </div>
                  <div className="flex justify-end mt-4">
                      <button onClick={handleCloseClientView} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors">
                          Cerrar
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default ClientForm;

// DONE