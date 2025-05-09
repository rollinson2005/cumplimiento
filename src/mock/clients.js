const clientes = [
  {
    id: 1,
    nombre: "Empresa Ejemplo SA",
    identificacion: "900123456-7",
    direccion: "Calle 123 #45-67",
    ciudad: "Bogotá",
    email: "contacto@empresa.com",
    entidadVigila: "DIAN",
    sistemaControl: "SARLAFT",
    dian: {
      acceso: "user_dian123",
      firmaDigital: "firma_segura456"
    },
    uiaf: {
      usuario: "uiaf_user",
      password: "uiaf_pass123"
    },
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
  },
   {
    id: 2,
    nombre: "Otra Empresa SAS",
    identificacion: "800987654-3",
    direccion: "Avenida Principal #1-23",
    ciudad: "Medellín",
    email: "info@otraempresa.com",
    entidadVigila: "Superintendencia de Sociedades",
    sistemaControl: "SAGRILAFT",
    dian: {
      acceso: "",
      firmaDigital: ""
    },
    uiaf: {
      usuario: "",
      password: ""
    },
    logo: null,
     supersociedadesCreds: {
        uiaf: { nombre: 'SIREL', paginaWeb: 'https://reportes.uiaf.gov.co/ReportesFSMCif64/Modules/Home/html/default.aspx', usuario: 'otra_uiaf', password: 'pass_otra' },
        reporte75: { nombre: 'STORM', paginaWeb: 'https://sissoc.supersociedades.gov.co/stormWeb/#/login', codigoEntidad: '830507952', password: 'pass_storm' },
    },
    sicCreds: {
        rnbd: { nombre: 'RNBD', paginaWeb: 'https://rnbd.sic.gov.co/sisi/login', credenciales: [
            { empresa: 'Otra Empresa', usuario: 'contacto@otraempresa.com', password: 'pass_rnbd' },
        ]}
    }
  }
];

export default clientes;