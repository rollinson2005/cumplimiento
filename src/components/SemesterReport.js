import React, { useState } from 'react';

const SemesterReport = () => {
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const [formData, setFormData] = useState({
    clienteId: '',
    semestre: '1',
    year: new Date().getFullYear(),
    tipoInforme: 'LAFT', // Added tipoInforme state
    // Habeas Data specific fields
    habeasData: {
      introduccion: {
        periodo: new Date().getFullYear().toString(),
        empresa: 'MAQUILA INETRNACIONAL DE CONFECCION S.A.S.'
      },
      registroBasesDatos: {
        registradasSIC: true,
        fechaRegistro: '2025-03-31',
        novedadesReportadas: true,
        fechasNovedades: 'Agosto 2024 y Febrero 2025'
      },
      politicasTratamiento: {
        revisionActualizacion: true,
        capacitaciones: 'Se envían boletines informativos con el apoyo de Gestion Humana, mensualmente, recordando conceptos claves de Habeas data.'
      },
      autorizacionesConsentimientos: {
        vigentesFuncionan: true,
        mecanismos: {
          clientes: ['Página web', 'WhatsApp', 'Formulario de vinculación virtual (franquiciados)'],
          proveedores: ['Link página web'],
          personal: ['Documento físico']
        }
      },
      derechosTitulares: {
        solicitudesRecibidas: [
          { empresa: 'Credifin', numeroReclamos: 12 },
          { empresa: 'Estrategia comercial de Colombia', numeroReclamos: 17 },
          { empresa: 'Maquila Internacional de Colombia', numeroReclamos: 0 },
          { empresa: 'W Studio', numeroReclamos: 3 },
          { empresa: 'Inversiones Doble J', numeroReclamos: 0 },
          { empresa: 'Destino Comercial', numeroReclamos: 10 }
        ],
        tiemposRespuesta: 'Atendiendo los tiempos de respuesta de La Superintendencia de Industria y Comercio (SIC), se da respuesta dentro de los 15 días hábiles siguientes de recibir la peticiones, quejas o reclamos. Este plazo se cuenta a partir del día siguiente a la fecha de presentación'
      },
      seguridadInformacion: {
        medidasTecnicas: ['Controles de acceso: se tienen sistemas de autenticación (usuario/contraseña) para restringir el acceso a bases de datos.', 'Firewalls y antivirus: se tienen Protección contra intrusiones y malware.', 'Copias de seguridad (backups): se realiza un almacenamiento seguro y periódico de los datos para evitar pérdidas.'],
        medidasOrganizativas: ['Políticas de privacidad: se tienen establecidos los procedimientos para recoger, usar y proteger los datos.', 'Contratos con terceros: se tienen acuerdos con los proveedores (encargados de tratamiento) que garanticen el cumplimiento de la normativa.', 'Registro de actividades de tratamiento:se tiene el  Inventario de las bases de datos y procesos que involucran datos personales.'],
        medidasLegales: ['Consentimiento explícito: se solicita la autorización clara e informada para el tratamiento de datos, cuando se solicitan datos a los clientes, proveedores y personal.', 'Procedimientos para ejercer derechos: la empresa tiene establecidos los  Mecanismos para que los usuarios accedan, rectifiquen o cancelen sus datos, por medio de la página, email, WhatsApp y llamada telefónica.', 'Notificación de brechas: se tienen los Protocolos establecidos para informar a la SIC y afectados en caso de fugas de datos.'],
        capacitacionConcienciacion: ['Formación a empleados: se Capacita frecuentemente por medio de los boletines al personal en protección de datos.'],
        incidentesSeguridad: 'No se presentaron incidentes de seguridad durante el año 2024.'
      },
      transferenciasTransmisiones: {
        tercerosAccesoDatos: ['LAX', 'VIELI', 'ICOMM']
      },
      auditoriaInterna: {
        fechaAuditoria: 'La auditoría se realizó en el mes de Agosto de 2024 los días 11,12,18,19,25 y 26 de agosto Se realizo la auditoría interna de Habeas Data, donde se evaluó el cumplimiento de la implementación de la ley 1582 de 2012 y sus normas complementarias, con el propósito de identificar las fortalezas, oportunidades y establecer las recomendaciones necesarias para la mejora de estos procesos de la empresa, así mismo se evaluaron las recomendaciones de la auditoria interna realizada en el año 2023.',
        estadoAccionesCorrectivas2023: 'La siguiente es la relación del estado de las acciones correctivas de la auditoría interna realizada en el año 2023: ' // Placeholder for actual status
      }
    },
    // PTEE specific fields
    ptee: {
        introduccion: {
            empresa: 'MAQUILA INTERNACIONAL DE CONFECCION SAS',
            normativa: '[mencionar normativa aplicable, como el Decreto 1357 de 2018, Circular Externa 100-000005 de la Superintendencia de Sociedades, o políticas internas]'
        },
        divulgacion: {
            estrategias: 'Como parte de las estrategias de difusión del Programa de Transparencia y Ética Empresarial (PTEE), se llevó a cabo la divulgación de sus lineamientos, políticas y mecanismos de implementación a través de los boletines institucionales, en coordinación con el área de Recursos Humanos. Esta acción permitió garantizar que todo el personal de la organización tuviera acceso a la información relevante sobre el PTEE, reforzando así su compromiso con los principios de integridad y cumplimiento corporativo.'
        },
        capacitacion: {
            enlaceCapacitacion: 'https://forms.gle/PnUYyJc2nxwX8X3r',
            fechaCapacitacion: '13 de diciembre de 2024',
            evaluacionConocimientos: 'diciembre de 2024',
            capacitacionesNuevos: 'Adicionalmente se han realizado capacitaciones a las nuevas personas contratadas, de lo cual se deja evidencia física el departamento de recursos humanos.'
        },
        encuestaInternaExterna: {
            interna: {
                fecha: '12 de abril de 2024',
                objetivo: 'evaluar el nivel de percepción de los funcionarios sobre el comportamiento ético de la empresa. Para vigilar la incorporación en los contratos de terceros, funcionarios, proveedores y clientes sobre el conocimiento y aceptación de la política PTEE.'
            },
            externa: {
                dirigidaA: 'proveedores',
                mecanismo: 'formato de vinculación establecido por la organización',
                objetivos: [
                    'Principios éticos: Verificar si las empresas proveedoras cuentan con políticas de ética y cumplimiento alineadas con los estándares de nuestra organización.',
                    'Transparencia en las relaciones: Identificar si ha existido algún ofrecimiento indebido (como dádivas, regalos o beneficios) por parte de los proveedores hacia nuestros funcionarios, o viceversa, con el fin de garantizar relaciones comerciales íntegras.'
                ]
            }
        },
        evaluacionCumplimientoCircular: {
            items: [
                { verificar: 'Programa de transparencia y ética empresarial', estado: 'El PTTE, esta ajustado a la realidad de la empresa e incorpora el Código de Conducta.' },
                { verificar: 'Procedimientos para crear un PTEE', estado: 'Los procedimientos están incluidos en el manual PTEE.' },
                { verificar: 'El diseño del PTEE deberá hacerse con fundamento en una evaluación exhaustiva de los Riesgos C/ST (Matriz de Riesgo de Corrupción y/o Matriz de Riesgo de Soborno Transnacional) que cada Entidad Obligada haya identificado y deba mitigar.', estado: 'La matriz de riesgo de corrupción y soborna transaccional se encuentra incluida.' },
                { verificar: 'La identificación y evaluación del Riesgo C/ST.', estado: 'Esta incluido en el PTEE en la matriz de riesgo' },
                { verificar: 'Las políticas y procedimientos generales para la gestión del Riesgo C/ST, conforme se detallan más adelante.', estado: 'Está incluido en el PTEE pág. 12 y 13' },
                { verificar: 'La entrega y ofrecimiento de regalos o beneficios a terceros.', estado: 'Está incluido en el PTEE pág. 29' },
                { verificar: 'La política de la Entidad Obligada en materia de remuneraciones y pago de comisiones a Empleados, Asociados y Contratistas.', estado: 'Está incluido en el PTEE pág. 29 y 30' },
                { verificar: 'Los gastos de la Entidad Obligada relacionados con actividades de entretenimiento, alimentación, hospedaje y viaje.', estado: 'Está incluido en el PTEE pág. 30' },
                { verificar: 'Las contribuciones políticas de cualquier naturaleza.', estado: 'Está incluido en el PTEE pág. 30 donde se prohíben' },
                { verificar: 'Las donaciones.', estado: 'Está incluido en el PTEE pág. 30' },
                { verificar: 'Las actualizaciones a la Política de Cumplimiento y al PTEE, cada vez que se presenten cambios en la actividad de la Entidad Obligada que alteren o puedan alterar el grado de Riesgo C/ST, o por los menos cada dos (2) años.', estado: 'Está incluido en el PTEE' },
                { verificar: 'Los sistemas de control y auditoria, conforme lo determina el artículo 207 del Código de Comercio y las normas contables aplicables, que le permitan al revisor fiscal de la Entidad Obligada, si lo hubiere, verificar la fidelidad de la contabilidad y asegurarse de que en las transferencias de dinero u otros bienes que ocurran entre la Entidad Obligada y sus Sociedades Subordinadas, no se oculten pagos directos o indirectos relacionados con sobornos, dadivas, coimas u otras conductas corruptas.', estado: 'Esta labor la realiza la Revisoria Fiscal.' },
                { verificar: 'Los deberes específicos de los Empleados que estén expuestos al Riesgo C/ST, relacionados con la prevención de la Corrupción.', estado: 'Está incluido en el PTEE en forma de los principios y valores éticos pág. 27' },
                { verificar: 'La puesta en marcha de procedimientos sancionatorios adecuados y efectivos, de conformidad con las normas laborales y disciplinarias, respecto de infracciones al PTEE cometidas por cualquier Empleado o administrador.', estado: 'Está incluido en el PTEE y en el otro si que se firmaron en los contratos de trabajo.' },
                { verificar: 'La creación de canales apropiados para permitir que cualquier persona informe de manera confidencial y segura acerca de actividades sospechosas relacionadas con el Riesgo C/ST', estado: '' }, // Empty state as in provided text
                { verificar: 'La creación de herramientas que faciliten que los Contratistas, Empleados y Asociados tengan acceso, conozcan y estén capacitados sobre las Políticas de Cumplimiento y el PTEE de la Entidad Obligada. La obligación de denuncia de actos de Corrupción por parte de la Entidad Obligada, sus administradores, Asociados o Empleados, de manera interna y externa, y el procedimiento aplicable.', estado: 'En los contratos firmados está contemplada esta política.' },
                { verificar: 'Auditoría de Cumplimiento del PTEE Le corresponde a la Entidad Obligada certificar que el Oficial de Cumplimiento designado cuenta con la idoneidad, experiencia y liderazgo requeridos para gestionar el Riesgo C/ST.', estado: 'Se realizo por medio del Acta 107 del 7 de octubre de 2021. y al oficial de cumplimiento suplente por medio del acta 124 de 2022.' },
                { verificar: 'Así mismo, la Entidad Obligada deberá informar por escrito a la Superintendencia de Sociedades, dirigido a la Delegatura de Asuntos Económicos y Societarios, dentro de los quince (15) días hábiles siguientes a la designación, el nombre, número de identificación, correo electrónico y número de teléfono del Oficial de Cumplimiento o conforme a las instrucciones específicas que determine la Superintendencia de Sociedades.', estado: 'Se realizo por medio del Acta 107 del 7 de octubre de 2021 y al oficial de cumplimiento suplente por medio del acta 124 de 2022.' },
                { verificar: 'El PTEE debe incluir, de manera clara y simple, las consecuencias de infringirlo.', estado: 'Esta incluido en el PTEE' },
                { verificar: 'Divulgación y capacitación La divulgación y las capacitaciones deberán quedar debidamente, en la forma y frecuencia para asegurar su adecuado cumplimiento, como mínimo una (1) vez al año documentadas.', estado: 'El día 21 de diciembre se envió a todo el personal el siguiente link https://acortar.link/PTEE , donde se encuentra la capacitación del PTEE, que servirá de base para la evaluación que se llevara a cabo en el mes de Enero de 2024.' },
                { verificar: '…se revelarán los procedimientos para divulgar, entre otros, la política de la Entidad Obligada acerca de controles financieros, entrega de regalos y donaciones, la creación de canales efectivos para recibir reportes confidenciales sobre actividades de Corrupción, y la información referente a las sanciones para los Empleados y administradores que infrinjan el PTEE.', estado: 'Este tema se trató en la capacitación' },
                { verificar: '., la estrategia de comunicación deberá estar disponible en diferentes idiomas cuando la Entidad Obligada opere, directa o indirectamente, por medio de Sociedades Subordinadas o Contratistas, en países donde el idioma oficial no sea el castellano.', estado: 'Actualmente solo se maneja en español, se sugiere publicarla en Ingles.' },
                { verificar: 'Canales de comunicación La Entidad Obligada deberá habilitar mecanismos de fácil acceso para que los Empleados, administradores, Asociados, Contratistas, funcionarios de los anteriores y cualquier persona manifieste sus inquietudes respecto de posibles incumplimientos del PTEE y cualquier práctica corrupta.', estado: 'Se habilito el correo transparencia@mic.com.co y el canal de denuncia en la pagina web www.mic.com.co' },
                { verificar: 'Adoptar medidas que considere adecuadas para que ninguno de sus Empleados, administradores y Asociados denunciantes sea objeto de represalias por haber reportado posibles infracciones a la Ley o al PTEE, y particularmente para que los empleados no sean objeto de acoso laboral conforme a la Ley.', estado: 'La información reportada en el canal de denuncia es confidencial y la recibe el oficial de cumplimiento.' },
                { verificar: 'Implementar medidas para proteger a los Empleados, administradores o Asociados en relación con posibles represalias de que puedan ser objeto como consecuencia de la decisión que éstos adopten en el sentido de no involucrarse en actos de Corrupción', estado: 'La información reportada en el canal de denuncia es confidencial y se llevara el respectivo proceso.' },
                { verificar: 'Funciones de la junta directiva o del máximo órgano social Expedir y definir la Política de Cumplimiento.', estado: 'Se encuentra en el PTEE' },
                { verificar: 'Definir el perfil del Oficial de Cumplimiento conforme a la Política de Cumplimiento, sin perjuicio de lo establecido en este Capítulo.', estado: 'Se encuentra en el PTEE y en el procedimiento : comité de cumplimiento' },
                { verificar: 'Designar al Oficial de Cumplimiento.', estado: 'Fue aprobado por medio del acta 107 de 7 de Julio de 2021, de la asamblea de accionistas. y al oficial de cumplimiento suplente por medio del acta 124 de 2022.' },
                { verificar: 'Aprobar el documento que contemple el PTEE.', estado: 'Fue aprobado por medio del acta 109 del 26/oct de 2021.' },
                { verificar: 'Asegurar el suministro de los recursos económicos, humanos y tecnológicos que requiera el Oficial de Cumplimiento para el cumplimiento de su labor.', estado: 'El oficial de cumplimiento cuenta con un espacio de trabajo en la oficina de credifin, con todas las herramientas tecnológicas y locativas adecuadas' },
                { verificar: 'Ordenar las acciones pertinentes contra los Asociados, que tengan funciones de dirección y administración en la Entidad Obligada, los Empleados, y administradores, cuando cualquiera de los anteriores infrinja lo previsto en el PTEE.', estado: 'Se encuentran incluidas en el PTEE aprobado.' },
                { verificar: 'Liderar una estrategia de comunicación y pedagogía adecuada para garantizar la divulgación y conocimiento eficaz de las Políticas de Cumplimiento y del PTEE a los Empleados, Asociados, Contratistas (conforme a los Factores de Riesgo y Matriz de Riesgo) y demás partes interesadas identificadas.', estado: 'Periódicamente en los boletines de la entidad, se envía información al respecto.' },
                { verificar: 'Funciones del representante legal Presentar con el Oficial de Cumplimiento, para aprobación de la junta directiva o el máximo órgano social, la propuesta del PTEE.', estado: 'El PTEE se presentó en compañía del oficial de cumplimiento el día 26 de octubre de 2021 a la asamblea de accionistas' },
                { verificar: 'Velar porque el PTEE se articule con las Políticas de Cumplimiento adoptadas por la junta directiva o el máximo órgano social.', estado: 'Las políticas se encuentran coordinadas' },
                { verificar: 'Prestar efectivo, eficiente y oportuno apoyo al Oficial de Cumplimiento en el diseño, dirección, supervisión y monitoreo del PTEE.', estado: 'El oficial de cumplimiento cuenta con el apoyo de la alta dirección.' },
                { verificar: 'En los casos en que no exista una junta directiva, el representante legal propondrá la persona que ocupará la función de Oficial de Cumplimiento, para la designación por parte del máximo órgano social.', estado: 'Se designo al sr Rollinson Perdomo como oficial de cumplimiento' },
                { verificar: 'Certificar ante la Superintendencia de Sociedades el cumplimiento de lo previsto en el presente Capítulo, cuando lo requiera esta Superintendencia.', estado: 'No se han presentado requerimientos' },
                { verificar: 'Asegurar que las actividades que resulten del desarrollo del PTEE se encuentran debidamente documentadas, de modo que se permita que la información responda a unos criterios de integridad, confiabilidad, disponibilidad, cumplimiento, efectividad, eficiencia y confidencialidad. Los soportes documentales deberán conservarse de acuerdo con lo previsto en el artículo 28 de la Ley 962 de 2005, o la norma que la modifique o sustituya.', estado: 'La información se conserva cumpliendo lo previsto en el artículo 28 de la Ley 962 de 2005, o la norma que la modifique o sustituya' },
                { verificar: 'Funciones del Oficial de Cumplimiento Presentar con el representante legal, para aprobación de la junta directiva o el máximo órgano social, la propuesta del PTEE.', estado: 'Se presento en compañía del representante legal el manual PTEE' },
                { verificar: 'Presentar, por lo menos una vez al año, informes a la junta directiva o, en su defecto, al máximo órgano social. Como mínimo, los reportes deberán contener una evaluación y análisis sobre la eficiencia y efectividad del PTEE y, de ser el caso, proponer las mejoras respectivas. Así mismo, demostrar los resultados de la gestión del Oficial de Cumplimiento y de la administración de la Entidad Obligada, en general, en el cumplimiento del PTEE.', estado: 'En el presente reporte se da seguimiento a las recomendaciones realizadas anteriormente' },
                { verificar: 'Velar porque el PTEE se articule con las Políticas de Cumplimiento adoptada por la junta directiva o el máximo órgano social.', estado: 'Estas se encuentran en el PTEE.' },
                { verificar: 'Velar por el cumplimiento efectivo, eficiente y oportuno del PTEE.', estado: '' }, // Empty state as in provided text
                { verificar: 'Implementar una Matriz de Riesgos y actualizarla conforme a las necesidades propias de la Entidad Obligada, sus Factores de Riesgo, la materialidad del Riesgo C/ST y conforme a la Política de Cumplimiento;', estado: 'Se encuentra incluida en el PTEE' },
                { verificar: 'Definir, adoptar y monitorear acciones y herramientas para la detección del Riesgo C/ST, conforme a la Política de Cumplimiento para prevenir el Riesgo C/ST y la Matriz de Riesgos', estado: 'Se encuentran establecidas en la matriz de riesgos.' },
                { verificar: 'Coordinar el desarrollo de programas internos de capacitación;', estado: 'En el mes de Diciembre de 2022 se realizado el proceso de capacitación.' },
                { verificar: 'Verificar el cumplimiento de los procedimientos de Debida Diligencia aplicable a la Entidad Obligada;', estado: 'En el primer semestre de 2024 se realizará seguimiento al PTEE.' },
                { verificar: 'Velar por el adecuado archivo de los soportes documentales y demás información relativa a la gestión y prevención del Riesgo C/ST', estado: 'En el primer trimestre se realizará la implementación y auditoria.' },
                { verificar: 'Diseñar las metodologías de clasificación, identificación, medición y control del Riesgo C/ST que formarán parte del PTEE; y', estado: 'La matriz de riesgos C/ST se encuentra incluida en el PTEE.' },
                { verificar: 'Realizar la evaluación del cumplimiento del PTEE y del Riesgo C/ST al que se encuentra expuesta la Entidad Obligada', estado: 'Se adjunta seguimiento a las recomendaciones y se adjuntan unas nuevas' }
            ]
        },
        recomendaciones2023: [
            'Incluir en la página web, la política de ética y transparencia anticorrupción y soborno en idioma español e inglés. Se encuentra actualmente en idioma español',
            'Realizar mayor divulgación a la línea de transparencia y ética empresarial, en las diferentes áreas. Durante el año 2024, se incluyo en las divulgaciones realizadas, la información respecto a la línea de transparencia y ética empresarial.'
        ],
        recomendacionesPTEE: [
            'Se debe realizar una divulgación más eficaz de la línea de ética.',
            'Se recomienda cambiar en las páginas web el título de transparencia y ética empresarial por la línea de transparencia y ética empresarial.',
            'Se recomienda otro correo de divulgación para realizar las encuestas y evaluaciones SAGRILAFT, dado que por el correo de Gestion Humana llega a la carpeta Otros y mucha gente no lo lee.',
            'Se recomienda el servidor que reciba las quejas de la línea de transparencia y ética empresarial, sea externo a la empresa, esto buscando se tenga la confiabilidad de que la información recibida será confidencial y no se tenga la posibilidad por ejemplo que, desde el área de sistemas, se tenga acceso a direcciones ip etc. de los denunciantes, lo que puede',
            'Se sugiere dejar claro, el alcance del departamento de cumplimiento respecto a las denuncias y su tramite, dado que algunas denuncias recibidas, tienen que ver con temas laborales ( mala liquidación salarios, supuesto acoso, malos tratos al personal etc).'
        ]
    }
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedClientForView, setSelectedClientForView] = useState('');
  const [filteredReports, setFilteredReports] = useState([]);
  const [viewingReport, setViewingReport] = useState(null); // State to hold the report being viewed

  const informesGuardados = JSON.parse(localStorage.getItem('informes')) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHabeasDataChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      habeasData: {
        ...prev.habeasData,
        [section]: {
          ...prev.habeasData[section],
          [field]: value
        }
      }
    }));
  };

  const handleHabeasDataArrayChange = (section, field, index, value) => {
     setFormData(prev => {
        const newArray = [...prev.habeasData[section][field]];
        newArray[index] = value;
        return {
            ...prev,
            habeasData: {
                ...prev.habeasData,
                [section]: {
                    ...prev.habeasData[section],
                    [field]: newArray
                }
            }
        };
     });
  };

   const handleHabeasDataTableChange = (section, field, index, subField, value) => {
     setFormData(prev => {
        const newArray = [...prev.habeasData[section][field]];
        newArray[index] = {
            ...newArray[index],
            [subField]: value
        };
        return {
            ...prev,
            habeasData: {
                ...prev.habeasData,
                [section]: {
                    ...prev.habeasData[section],
                    [field]: newArray
                }
            }
        };
     });
  };

  const addHabeasDataSolicitud = () => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              derechosTitulares: {
                  ...prev.habeasData.derechosTitulares,
                  solicitudesRecibidas: [...prev.habeasData.derechosTitulares.solicitudesRecibidas, { empresa: '', numeroReclamos: 0 }]
              }
          }
      }));
  };

  const removeHabeasDataSolicitud = (index) => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              derechosTitulares: {
                  ...prev.habeasData.derechosTitulares,
                  solicitudesRecibidas: prev.habeasData.derechosTitulares.solicitudesRecibidas.filter((_, i) => i !== index)
              }
          }
      }));
  };

   const addHabeasDataMedidaTecnica = () => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  medidasTecnicas: [...prev.habeasData.seguridadInformacion.medidasTecnicas, '']
              }
          }
      }));
  };

   const removeHabeasDataMedidaTecnica = (index) => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  medidasTecnicas: prev.habeasData.seguridadInformacion.medidasTecnicas.filter((_, i) => i !== index)
              }
          }
      }));
  };

   const addHabeasDataMedidaOrganizativa = () => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  medidasOrganizativas: [...prev.habeasData.seguridadInformacion.medidasOrganizativas, '']
              }
          }
      }));
  };

   const removeHabeasDataMedidaOrganizativa = (index) => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  medidasOrganizativas: prev.habeasData.seguridadInformacion.medidasOrganizativas.filter((_, i) => i !== index)
              }
          }
      }));
  };

   const addHabeasDataMedidaLegal = () => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  medidasLegales: [...prev.habeasData.seguridadInformacion.medidasLegales, '']
              }
          }
      }));
  };

   const removeHabeasDataMedidaLegal = (index) => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  medidasLegales: prev.habeasData.seguridadInformacion.medidasLegales.filter((_, i) => i !== index)
              }
          }
      }));
  };

   const addHabeasDataCapacitacion = () => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  capacitacionConcienciacion: [...prev.habeasData.seguridadInformacion.capacitacionConcienciacion, '']
              }
          }
      }));
  };

   const removeHabeasDataCapacitacion = (index) => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              seguridadInformacion: {
                  ...prev.habeasData.seguridadInformacion,
                  capacitacionConcienciacion: prev.habeasData.seguridadInformacion.capacitacionConcienciacion.filter((_, i) => i !== index)
              }
          }
      }));
  };

   const addHabeasDataTerceroAccesoDatos = () => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              transferenciasTransmisiones: {
                  ...prev.habeasData.transferenciasTransmisiones,
                  tercerosAccesoDatos: [...prev.habeasData.transferenciasTransmisiones.tercerosAccesoDatos, '']
              }
          }
      }));
  };

   const removeHabeasDataTerceroAccesoDatos = (index) => {
      setFormData(prev => ({
          ...prev,
          habeasData: {
              ...prev.habeasData,
              transferenciasTransmisiones: {
                  ...prev.habeasData.transferenciasTransmisiones,
                  tercerosAccesoDatos: prev.habeasData.transferenciasTransmisiones.tercerosAccesoDatos.filter((_, i) => i !== index)
              }
          }
      }));
  };


  const handlePTEEChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      ptee: {
        ...prev.ptee,
        [section]: {
          ...prev.ptee[section],
          [field]: value
        }
      }
    }));
  };

   const handlePTEEArrayChange = (section, index, value) => {
     setFormData(prev => {
        const newArray = [...prev.ptee[section]];
        newArray[index] = value;
        return {
            ...prev,
            ptee: {
                ...prev.ptee,
                [section]: newArray
            }
        };
     });
  };

   const handlePTEETableChange = (section, field, index, subField, value) => {
     setFormData(prev => {
        const newArray = [...prev.ptee[section][field]];
        newArray[index] = {
            ...newArray[index],
            [subField]: value
        };
        return {
            ...prev,
            ptee: {
                ...prev.ptee,
                [section]: {
                    ...prev.ptee[section],
                    [field]: newArray
                }
            }
        };
     });
  };

  const addPTEERecomendacion2023 = () => {
      setFormData(prev => ({
          ...prev,
          ptee: {
              ...prev.ptee,
              recomendaciones2023: [...prev.ptee.recomendaciones2023, '']
          }
      }));
  };

   const removePTEERecomendacion2023 = (index) => {
      setFormData(prev => ({
          ...prev,
          ptee: {
              ...prev.ptee,
              recomendaciones2023: prev.ptee.recomendaciones2023.filter((_, i) => i !== index)
          }
      }));
  };

  const addPTEERecomendacionPTEE = () => {
      setFormData(prev => ({
          ...prev,
          ptee: {
              ...prev.ptee,
              recomendacionesPTEE: [...prev.ptee.recomendacionesPTEE, '']
          }
      }));
  };

   const removePTEERecomendacionPTEE = (index) => {
      setFormData(prev => ({
          ...prev,
          ptee: {
              ...prev.ptee,
              recomendacionesPTEE: prev.ptee.recomendacionesPTEE.filter((_, i) => i !== index)
          }
      }));
  };


  const handleGenerate = () => {
    const clienteSeleccionado = clientes.find(c => c.id === formData.clienteId || c.nombre === formData.clienteId);
    
    if (!clienteSeleccionado) {
      alert('Por favor selecciona un cliente');
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      
      const informe = {
        id: Date.now(),
        clienteId: formData.clienteId,
        cliente: clienteSeleccionado.nombre,
        identificacion: clienteSeleccionado.identificacion,
        semestre: formData.semestre,
        year: formData.year,
        tipoInforme: formData.tipoInforme,
        fechaGeneracion: new Date().toLocaleDateString(),
        estado: 'Generado',
        habeasData: formData.tipoInforme === 'Habeas Data' ? formData.habeasData : null,
        ptee: formData.tipoInforme === 'PTEE' ? formData.ptee : null // Save PTEE specific data only if type is PTEE
      };

      const informes = JSON.parse(localStorage.getItem('informes')) || [];
      localStorage.setItem('informes', JSON.stringify([...informes, informe]));
      
      alert(`Informe ${formData.tipoInforme} semestral ${formData.semestre}-${formData.year} generado con éxito para ${clienteSeleccionado.nombre}`);
      setViewingReport(informe); // Show preview after generation

    }, 2000);
  };

  const handleClientSelectForView = (e) => {
    const clientId = e.target.value;
    setSelectedClientForView(clientId);
    if (clientId) {
      const reports = informesGuardados.filter(informe => informe.clienteId === clientId);
      setFilteredReports(reports);
    } else {
      setFilteredReports([]);
    }
  };

  const handleViewReport = (report) => {
    setViewingReport(report);
  };

  const handleCloseReport = () => {
    setViewingReport(null);
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generar Informe Semestral</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cliente para Generar Informe</label>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Semestre</label>
            <select
              name="semestre"
              value={formData.semestre}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="1">Primer Semestre (Ene-Jun)</option>
              <option value="2">Segundo Semestre (Jul-Dic)</option>
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
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Informe</label>
          <select
            name="tipoInforme"
            value={formData.tipoInforme}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="LAFT">LAFT</option>
            <option value="PTEE">PTEE</option>
            <option value="Habeas Data">Habeas Data</option>
          </select>
        </div>

        {formData.tipoInforme === 'Habeas Data' && (
            <div className="border-t pt-4 space-y-6">
                <h3 className="text-lg font-semibold mb-4">Detalles del Informe Habeas Data</h3>

                {/* 1. Introducción */}
                <div>
                    <h4 className="font-medium mb-2">1. Introducción</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Periodo del Informe</label>
                            <input
                                type="text"
                                value={formData.habeasData.introduccion.periodo}
                                onChange={(e) => handleHabeasDataChange('introduccion', 'periodo', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                         <div>
                            <label className="block text-gray-700">Empresa</label>
                            <input
                                type="text"
                                value={formData.habeasData.introduccion.empresa}
                                onChange={(e) => handleHabeasDataChange('introduccion', 'empresa', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                    </div>
                </div>


                {/* 2.1. Registro de Bases de Datos */}
                <div>
                    <h4 className="font-medium mb-2">2.1. Registro de Bases de Datos</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">¿Todas las bases de datos registradas ante la SIC?</label>
                            <select
                                value={formData.habeasData.registroBasesDatos.registradasSIC}
                                onChange={(e) => handleHabeasDataChange('registroBasesDatos', 'registradasSIC', e.target.value === 'true')}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            >
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                         <div>
                            <label className="block text-gray-700">Fecha de registro (si aplica)</label>
                            <input
                                type="date"
                                value={formData.habeasData.registroBasesDatos.fechaRegistro}
                                onChange={(e) => handleHabeasDataChange('registroBasesDatos', 'fechaRegistro', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">¿Reporte de novedades realizado?</label>
                            <select
                                value={formData.habeasData.registroBasesDatos.novedadesReportadas}
                                onChange={(e) => handleHabeasDataChange('registroBasesDatos', 'novedadesReportadas', e.target.value === 'true')}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            >
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                         <div>
                            <label className="block text-gray-700">Fechas de reporte de novedades</label>
                            <input
                                type="text"
                                value={formData.habeasData.registroBasesDatos.fechasNovedades}
                                onChange={(e) => handleHabeasDataChange('registroBasesDatos', 'fechasNovedades', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                    </div>
                </div>

                {/* 2.2. Políticas de Tratamiento de Datos */}
                <div>
                    <h4 className="font-medium mb-2">2.2. Políticas de Tratamiento de Datos</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">¿Política de Tratamiento revisada y actualizada?</label>
                            <select
                                value={formData.habeasData.politicasTratamiento.revisionActualizacion}
                                onChange={(e) => handleHabeasDataChange('politicasTratamiento', 'revisionActualizacion', e.target.value === 'true')}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            >
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Capacitaciones realizadas</label>
                            <textarea
                                value={formData.habeasData.politicasTratamiento.capacitaciones}
                                onChange={(e) => handleHabeasDataChange('politicasTratamiento', 'capacitaciones', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                </div>

                 {/* 2.3. Autorizaciones y Consentimientos */}
                <div>
                    <h4 className="font-medium mb-2">2.3. Autorizaciones y Consentimientos</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">¿Autorizaciones vigentes y funcionando?</label>
                            <select
                                value={formData.habeasData.autorizacionesConsentimientos.vigentesFuncionan}
                                onChange={(e) => handleHabeasDataChange('autorizacionesConsentimientos', 'vigentesFuncionan', e.target.value === 'true')}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            >
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Mecanismos de recolección de consentimiento (Clientes)</label>
                            {formData.habeasData.autorizacionesConsentimientos.mecanismos.clientes.map((mecanismo, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={mecanismo}
                                    onChange={(e) => handleHabeasDataArrayChange('autorizacionesConsentimientos', 'mecanismos', index, e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            ))}
                        </div>
                         <div>
                            <label className="block text-gray-700">Mecanismos de recolección de consentimiento (Proveedores)</label>
                            {formData.habeasData.autorizacionesConsentimientos.mecanismos.proveedores.map((mecanismo, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={mecanismo}
                                    onChange={(e) => handleHabeasDataArrayChange('autorizacionesConsentimientos', 'mecanismos', index, e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            ))}
                        </div>
                         <div>
                            <label className="block text-gray-700">Mecanismos de recolección de consentimiento (Personal)</label>
                            {formData.habeasData.autorizacionesConsentimientos.mecanismos.personal.map((mecanismo, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={mecanismo}
                                    onChange={(e) => handleHabeasDataArrayChange('autorizacionesConsentimientos', 'mecanismos', index, e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2.4. Derechos de los Titulares */}
                <div>
                    <h4 className="font-medium mb-2">2.4. Derechos de los Titulares (Habeas Data)</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Solicitudes recibidas (Tabla)</label>
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Empresa</th>
                                        <th className="px-4 py-2 text-left">Número de Reclamos</th>
                                        <th></th> {/* Add header for remove button */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {formData.habeasData.derechosTitulares.solicitudesRecibidas.map((solicitud, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    value={solicitud.empresa}
                                                    onChange={(e) => handleHabeasDataTableChange('derechosTitulares', 'solicitudesRecibidas', index, 'empresa', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-md shadow-sm p-1"
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                 <input
                                                    type="number"
                                                    value={solicitud.numeroReclamos}
                                                    onChange={(e) => handleHabeasDataTableChange('derechosTitulares', 'solicitudesRecibidas', index, 'numeroReclamos', parseInt(e.target.value) || 0)}
                                                    className="w-full border border-gray-300 rounded-md shadow-sm p-1"
                                                />
                                            </td>
                                             <td className="px-4 py-2 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => removeHabeasDataSolicitud(index)}
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
                                onClick={addHabeasDataSolicitud}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                            >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Agregar Solicitud
                            </button>
                        </div>
                        <div>
                            <label className="block text-gray-700">Tiempos de respuesta y casos pendientes</label>
                            <textarea
                                value={formData.habeasData.derechosTitulares.tiemposRespuesta}
                                onChange={(e) => handleHabeasDataChange('derechosTitulares', 'tiemposRespuesta', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* 2.5. Seguridad de la Información */}
                <div>
                    <h4 className="font-medium mb-2">2.5. Seguridad de la Información</h4>
                     <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Medidas Técnicas Implementadas</label>
                            {formData.habeasData.seguridadInformacion.medidasTecnicas.map((medida, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={medida}
                                        onChange={(e) => handleHabeasDataArrayChange('seguridadInformacion', 'medidasTecnicas', index, e.target.value)}
                                        className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                     <button
                                        type="button"
                                        onClick={() => removeHabeasDataMedidaTecnica(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                             <button
                                type="button"
                                onClick={addHabeasDataMedidaTecnica}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                            >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Agregar Medida Técnica
                            </button>
                        </div>
                         <div>
                            <label className="block text-gray-700">Medidas Organizativas Implementadas</label>
                            {formData.habeasData.seguridadInformacion.medidasOrganizativas.map((medida, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={medida}
                                        onChange={(e) => handleHabeasDataArrayChange('seguridadInformacion', 'medidasOrganizativas', index, e.target.value)}
                                        className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                     <button
                                        type="button"
                                        onClick={() => removeHabeasDataMedidaOrganizativa(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                             <button
                                type="button"
                                onClick={addHabeasDataMedidaOrganizativa}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                            >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Agregar Medida Organizativa
                            </button>
                        </div>
                         <div>
                            <label className="block text-gray-700">Medidas Legales Implementadas</label>
                            {formData.habeasData.seguridadInformacion.medidasLegales.map((medida, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={medida}
                                        onChange={(e) => handleHabeasDataArrayChange('seguridadInformacion', 'medidasLegales', index, e.target.value)}
                                        className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                     <button
                                        type="button"
                                        onClick={() => removeHabeasDataMedidaLegal(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                             <button
                                type="button"
                                onClick={addHabeasDataMedidaLegal}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                            >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Agregar Medida Legal
                            </button>
                        </div>
                         <div>
                            <label className="block text-gray-700">Capacitación y Concienciación</label>
                            {formData.habeasData.seguridadInformacion.capacitacionConcienciacion.map((medida, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={medida}
                                        onChange={(e) => handleHabeasDataArrayChange('seguridadInformacion', 'capacitacionConcienciacion', index, e.target.value)}
                                        className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                     <button
                                        type="button"
                                        onClick={() => removeHabeasDataCapacitacion(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                             <button
                                type="button"
                                onClick={addHabeasDataCapacitacion}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                            >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Agregar Capacitación
                            </button>
                        </div>
                        <div>
                            <label className="block text-gray-700">Incidentes de seguridad</label>
                            <textarea
                                value={formData.habeasData.seguridadInformacion.incidentesSeguridad}
                                onChange={(e) => handleHabeasDataChange('seguridadInformacion', 'incidentesSeguridad', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* 2.6. Transferencias y Transmisiones de Datos */}
                <div>
                    <h4 className="font-medium mb-2">2.6. Transferencias y Transmisiones de Datos</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Terceros con acceso a datos</label>
                            {formData.habeasData.transferenciasTransmisiones.tercerosAccesoDatos.map((tercero, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={tercero}
                                        onChange={(e) => handleHabeasDataArrayChange('transferenciasTransmisiones', 'tercerosAccesoDatos', index, e.target.value)}
                                        className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                     <button
                                        type="button"
                                        onClick={() => removeHabeasDataTerceroAccesoDatos(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                             <button
                                type="button"
                                onClick={addHabeasDataTerceroAccesoDatos}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                            >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Agregar Tercero
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. Auditoria Interna */}
                 <div>
                    <h4 className="font-medium mb-2">3. AUDITORIA INTERNA AÑO {formData.year}</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Fecha de Auditoría</label>
                            <textarea
                                type="text"
                                value={formData.habeasData.auditoriaInterna.fechaAuditoria}
                                onChange={(e) => handleHabeasDataChange('auditoriaInterna', 'fechaAuditoria', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            />
                        </div>
                         <div>
                            <label className="block text-gray-700">Estado acciones correctivas auditoria año anterior</label>
                            <textarea
                                value={formData.habeasData.auditoriaInterna.estadoAccionesCorrectivas2023}
                                onChange={(e) => handleHabeasDataChange('auditoriaInterna', 'estadoAccionesCorrectivas2023', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                </div>


            </div>
        )}

        {formData.tipoInforme === 'PTEE' && (
            <div className="border-t pt-4 space-y-6">
                <h3 className="text-lg font-semibold mb-4">Detalles del Informe PTEE</h3>

                {/* Introducción */}
                <div>
                    <h4 className="font-medium mb-2">Introducción</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Empresa</label>
                            <input
                                type="text"
                                value={formData.ptee.introduccion.empresa}
                                onChange={(e) => handlePTEEChange('introduccion', 'empresa', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                         <div>
                            <label className="block text-gray-700">Normativa Aplicable</label>
                            <textarea
                                value={formData.ptee.introduccion.normativa}
                                onChange={(e) => handlePTEEChange('introduccion', 'normativa', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* 1.1 Divulgación */}
                <div>
                    <h4 className="font-medium mb-2">1.1 Divulgación</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Estrategias de Divulgación</label>
                            <textarea
                                value={formData.ptee.divulgacion.estrategias}
                                onChange={(e) => handlePTEEChange('divulgacion', 'estrategias', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* 1.2 Capacitación */}
                <div>
                    <h4 className="font-medium mb-2">1.2 Capacitación</h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <label className="block text-gray-700">Enlace Capacitación Virtual</label>
                            <input
                                type="text"
                                value={formData.ptee.capacitacion.enlaceCapacitacion}
                                onChange={(e) => handlePTEEChange('capacitacion', 'enlaceCapacitacion', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                         <div>
                            <label className="block text-gray-700">Fecha Capacitación Virtual</label>
                            <input
                                type="text"
                                value={formData.ptee.capacitacion.fechaCapacitacion}
                                onChange={(e) => handlePTEEChange('capacitacion', 'fechaCapacitacion', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                         <div>
                            <label className="block text-gray-700">Fecha Evaluación Conocimientos</label>
                            <input
                                type="text"
                                value={formData.ptee.capacitacion.evaluacionConocimientos}
                                onChange={(e) => handlePTEEChange('capacitacion', 'evaluacionConocimientos', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                         <div>
                            <label className="block text-gray-700">Capacitaciones a Nuevos Contratados</label>
                            <textarea
                                value={formData.ptee.capacitacion.capacitacionesNuevos}
                                onChange={(e) => handlePTEEChange('capacitacion', 'capacitacionesNuevos', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* 1.3 Encuesta Interna-Externa PTEE */}
                <div>
                    <h4 className="font-medium mb-2">1.3 Encuesta Interna-Externa PTEE</h4>
                    <div className="space-y-4 text-sm">
                        <div>
                            <h5 className="font-medium mb-1">Encuesta Interna</h5>
                            <div className="space-y-2">
                                <div>
                                    <label className="block text-gray-700">Fecha Encuesta Interna</label>
                                    <input
                                        type="text"
                                        value={formData.ptee.encuestaInternaExterna.interna.fecha}
                                        onChange={(e) => handlePTEEChange('encuestaInternaExterna', 'interna', { ...formData.ptee.encuestaInternaExterna.interna, fecha: e.target.value })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Objetivo Encuesta Interna</label>
                                    <textarea
                                        value={formData.ptee.encuestaInternaExterna.interna.objetivo}
                                        onChange={(e) => handlePTEEChange('encuestaInternaExterna', 'interna', { ...formData.ptee.encuestaInternaExterna.interna, objetivo: e.target.value })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                        rows="2"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                         <div>
                            <h5 className="font-medium mb-1">Encuesta Externa</h5>
                            <div className="space-y-2">
                                <div>
                                    <label className="block text-gray-700">Dirigida a</label>
                                    <input
                                        type="text"
                                        value={formData.ptee.encuestaInternaExterna.externa.dirigidaA}
                                        onChange={(e) => handlePTEEChange('encuestaInternaExterna', 'externa', { ...formData.ptee.encuestaInternaExterna.externa, dirigidaA: e.target.value })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Mecanismo</label>
                                    <input
                                        type="text"
                                        value={formData.ptee.encuestaInternaExterna.externa.mecanismo}
                                        onChange={(e) => handlePTEEChange('encuestaInternaExterna', 'externa', { ...formData.ptee.encuestaInternaExterna.externa, mecanismo: e.target.value })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                 <div>
                                    <label className="block text-gray-700">Objetivos (uno por línea)</label>
                                    <textarea
                                        value={formData.ptee.encuestaInternaExterna.externa.objetivos.join('\n')}
                                        onChange={(e) => handlePTEEChange('encuestaInternaExterna', 'externa', { ...formData.ptee.encuestaInternaExterna.externa, objetivos: e.target.value.split('\n') })}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.1 INFORME GESTION EVALUACION DEL CUMPLIMIENTO DE MIC DE Circular Externa 100-00011 del 9 de agosto de 2021 */}
                <div>
                    <h4 className="font-medium mb-2">2.1 INFORME GESTION EVALUACION DEL CUMPLIMIENTO DE MIC DE Circular Externa 100-00011 del 9 de agosto de 2021</h4>
                     <div className="overflow-x-auto mt-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left">Ítem</th>
                                    <th className="px-4 py-2 text-left">Verificar</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {formData.ptee.evaluacionCumplimientoCircular.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 font-medium">{item.verificar}</td>
                                        <td className="px-4 py-2">
                                            <textarea
                                                value={item.estado}
                                                onChange={(e) => handlePTEETableChange('evaluacionCumplimientoCircular', 'items', index, 'estado', e.target.value)}
                                                className="w-full border border-gray-300 rounded-md shadow-sm p-1 resize-none"
                                                rows="2"
                                            ></textarea>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5.1 ESTADO DE LAS RECOMENDACIONES DEL AÑO ANTERIOR */}
                <div>
                    <h4 className="font-medium mb-2">5.1 ESTADO DE LAS RECOMENDACIONES DEL AÑO ANTERIOR</h4>
                    <div className="space-y-2 text-sm">
                        {formData.ptee.recomendaciones2023.map((recomendacion, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <textarea
                                    value={recomendacion}
                                    onChange={(e) => handlePTEEArrayChange('recomendaciones2023', index, e.target.value)}
                                    className="flex-grow border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                    rows="2"
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={() => removePTEERecomendacion2023(index)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                         <button
                            type="button"
                            onClick={addPTEERecomendacion2023}
                            className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                        >
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Agregar Recomendación
                        </button>
                    </div>
                </div>

                {/* 2. RECOMENDACIONES PROGRAMA DE TRANSPARENCIA Y ETICA EMPRESARIAL-PTEE */}
                 <div>
                    <h4 className="font-medium mb-2">2. RECOMENDACIONES PROGRAMA DE TRANSPARENCIA Y ETICA EMPRESARIAL-PTEE</h4>
                    <div className="space-y-2 text-sm">
                        {formData.ptee.recomendacionesPTEE.map((recomendacion, index) => (
                             <div key={index} className="flex items-center space-x-2">
                                <textarea
                                    value={recomendacion}
                                    onChange={(e) => handlePTEEArrayChange('recomendacionesPTEE', index, e.target.value)}
                                    className="flex-grow border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                                    rows="2"
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={() => removePTEERecomendacionPTEE(index)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                         <button
                            type="button"
                            onClick={addPTEERecomendacionPTEE}
                            className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-2"
                        >
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Agregar Recomendación
                        </button>
                    </div>
                </div>


            </div>
        )}
        
        <div className="pt-4">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`px-4 py-2 rounded-md text-white ${isGenerating ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'} transition-colors`}
          >
            {isGenerating ? 'Generando...' : 'Generar Reporte'}
          </button>
        </div>

        <div className="pt-6 border-t">
          <h3 className="text-lg font-medium mb-3">Informes Generados por Cliente</h3>
           <div>
            <label className="block text-sm font-medium text-gray-700">Seleccionar Cliente para Ver Informes</label>
            <select
              value={selectedClientForView}
              onChange={handleClientSelectForView}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Seleccionar cliente...</option>
              {clientes.map((cliente, index) => (
                <option key={index} value={cliente.id || cliente.nombre}>
                  {cliente.nombre} - {cliente.identificacion}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2 mt-4">
            {filteredReports.length > 0 ? (
              filteredReports.map((informe, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{informe.cliente}</p>
                      <p className="text-sm text-gray-600">
                        {informe.tipoInforme} - Semestre {informe.semestre} {informe.year} - {informe.identificacion}
                      </p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {informe.estado}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Generado el: {informe.fechaGeneracion}</p>
                   <div className="mt-3">
                     <button
                        onClick={() => handleViewReport(informe)}
                        className="text-blue-600 hover:text-blue-900 text-sm"
                      >
                        Ver Detalles
                      </button>
                  </div>
                </div>
              ))
            ) : (
              selectedClientForView && <p className="text-sm text-gray-500">No hay informes generados para este cliente.</p>
            )}
          </div>
        </div>
      </div>

       {/* Modal or separate section to display the full report */}
      {viewingReport && viewingReport.tipoInforme === 'Habeas Data' && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-bold">Informe de Gestión – Oficial de Cumplimiento Habeas Data</h3>
              <button onClick={handleCloseReport} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Display the full Habeas Data report data here */}
            {viewingReport.habeasData && (
              <div className="space-y-6 text-gray-800 text-sm">
                 {/* 1. Introducción */}
                <div>
                    <h4 className="font-semibold mb-2">1. Introducción</h4>
                    <p>El presente Informe de Gestión del Oficial de Cumplimiento Habeas Data corresponde al periodo AÑO {viewingReport.habeasData.introduccion.periodo} y tiene como objetivo evaluar el cumplimiento de las obligaciones establecidas en la Ley 1581 de 2012, el Decreto 1377 de 2013, y demás normativas vigentes en materia de protección de datos personales en Colombia.</p>
                    <p className="mt-2">Como parte de las funciones del Responsable del Tratamiento de Datos, este documento analiza los avances, riesgos y acciones correctivas implementadas por {viewingReport.habeasData.introduccion.empresa} para garantizar el manejo legítimo, seguro y transparente de la información personal bajo su custodia. Además, se verifica el respeto a los derechos de los titulares (consulta, rectificación, actualización y supresión), la correcta gestión de autorizaciones, y las medidas técnicas y administrativas adoptadas para prevenir incidentes de seguridad.</p>
                    <p className="mt-2">Este informe se elabora en cumplimiento de los principios de legalidad, finalidad y transparencia exigidos por la Superintendencia de Industria y Comercio (SIC), y servirá como insumo para la toma de decisiones, auditorías internas y mejora continua del Sistema de Protección de Datos Personales de la organización.</p>
                </div>
                <hr className="border-gray-300"/>

                {/* 2. Evaluación del Cumplimiento */}
                <div>
                    <h4 className="font-semibold mb-2">2. Evaluación del Cumplimiento</h4>

                    {/* 2.1. Registro de Bases de Datos */}
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">2.1. Registro de Bases de Datos</h5>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Todas las bases de datos con información personal están registradas ante la SIC: {viewingReport.habeasData.registroBasesDatos.registradasSIC ? 'Sí' : 'No'}</li>
                            {viewingReport.habeasData.registroBasesDatos.fechaRegistro && <li>Fecha de registro: {viewingReport.habeasData.registroBasesDatos.fechaRegistro}</li>}
                            <li>Reporte de novedades realizado: {viewingReport.habeasData.registroBasesDatos.novedadesReportadas ? 'Sí' : 'No'}</li>
                            {viewingReport.habeasData.registroBasesDatos.fechasNovedades && <li>Fechas de reporte de novedades: {viewingReport.habeasData.registroBasesDatos.fechasNovedades}</li>}
                        </ul>
                    </div>

                    {/* 2.2. Políticas de Tratamiento de Datos */}
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">2.2. Políticas de Tratamiento de Datos</h5>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Revisión y actualización de la Política de Tratamiento de Datos Personales: {viewingReport.habeasData.politicasTratamiento.revisionActualizacion ? 'Sí' : 'No'}</li>
                            <li>Capacitaciones: {viewingReport.habeasData.politicasTratamiento.capacitaciones}</li>
                        </ul>
                    </div>

                    {/* 2.3. Autorizaciones y Consentimientos */}
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">2.3. Autorizaciones y Consentimientos</h5>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Las autorizaciones están vigentes y funcionando bien: {viewingReport.habeasData.autorizacionesConsentimientos.vigentesFuncionan ? 'Sí' : 'No'}</li>
                            <li>Mecanismos utilizados para recabar consentimiento:</li>
                            <ul className="list-circle pl-5 space-y-1">
                                <li>Clientes: {viewingReport.habeasData.autorizacionesConsentimientos.mecanismos.clientes.join(', ')}</li>
                                <li>Proveedores: {viewingReport.habeasData.autorizacionesConsentimientos.mecanismos.proveedores.join(', ')}</li>
                                <li>Personal: {viewingReport.habeasData.autorizacionesConsentimientos.mecanismos.personal.join(', ')}</li>
                            </ul>
                        </ul>
                    </div>

                    {/* 2.4. Derechos de los Titulares */}
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">2.4. Derechos de los Titulares (Habeas Data)</h5>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Reporte de solicitudes recibidas:</li>
                            <table className="min-w-full divide-y divide-gray-200 text-sm mt-2">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Empresa</th>
                                        <th className="px-4 py-2 text-left">Número de Reclamos</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {viewingReport.habeasData.derechosTitulares.solicitudesRecibidas.map((solicitud, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2">{solicitud.empresa}</td>
                                            <td className="px-4 py-2">{solicitud.numeroReclamos}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <li>Tiempos de respuesta y casos pendientes: {viewingReport.habeasData.derechosTitulares.tiemposRespuesta}</li>
                        </ul>
                    </div>

                    {/* 2.5. Seguridad de la Información */}
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">2.5. Seguridad de la Información</h5>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Medidas técnicas y administrativas implementadas:</li>
                            <ul className="list-circle pl-5 space-y-1">
                                {viewingReport.habeasData.seguridadInformacion.medidasTecnicas.map((medida, index) => (
                                    <li key={index}>{medida}</li>
                                ))}
                            </ul>
                            <li>Medidas Organizativas:</li>
                             <ul className="list-circle pl-5 space-y-1">
                                {viewingReport.habeasData.seguridadInformacion.medidasOrganizativas.map((medida, index) => (
                                    <li key={index}>{medida}</li>
                                ))}
                            </ul>
                             <li>Medidas Legales:</li>
                             <ul className="list-circle pl-5 space-y-1">
                                {viewingReport.habeasData.seguridadInformacion.medidasLegales.map((medida, index) => (
                                    <li key={index}>{medida}</li>
                                ))}
                            </ul>
                             <li>Capacitación y Concienciación:</li>
                             <ul className="list-circle pl-5 space-y-1">
                                {viewingReport.habeasData.seguridadInformacion.capacitacionConcienciacion.map((medida, index) => (
                                    <li key={index}>{medida}</li>
                                ))}
                            </ul>
                            <li>Incidentes de seguridad: {viewingReport.habeasData.seguridadInformacion.incidentesSeguridad}</li>
                        </ul>
                    </div>

                    {/* 2.6. Transferencias y Transmisiones de Datos */}
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">2.6. Transferencias y Transmisiones de Datos</h5>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Terceros con acceso a datos:</li>
                             <ul className="list-circle pl-5 space-y-1">
                                {viewingReport.habeasData.transferenciasTransmisiones.tercerosAccesoDatos.map((tercero, index) => (
                                    <li key={index}>{tercero}</li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>

                {/* 3. Auditoria Interna */}
                <div>
                    <h4 className="font-semibold mb-2">3. AUDITORIA INTERNA AÑO {viewingReport.year}</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Fecha de Auditoría: {viewingReport.habeasData.auditoriaInterna.fechaAuditoria}</li>
                        <li>Estado acciones correctivas auditoria año anterior: {viewingReport.habeasData.auditoriaInterna.estadoAccionesCorrectivas2023}</li>
                    </ul>
                </div>

                {/* 8. FIRMA Y VALIDACIÓN */}
                 <div>
                    <h4 className="font-semibold mb-2">8. FIRMA Y VALIDACIÓN</h4>
                    <div className="text-sm space-y-1">
                        <p><span className="font-medium">Responsable del análisis:</span> {viewingReport.habeasData.firmaValidacion?.responsable}</p>
                        <p><span className="font-medium">Cargo:</span> {viewingReport.habeasData.firmaValidacion?.cargo}</p>
                    </div>
                    <h5 className="font-medium mt-4 mb-1">Anexos</h5>
                     <ul className="list-disc pl-5 text-sm space-y-1">
                      {viewingReport.habeasData.anexos?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
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

       {viewingReport && viewingReport.tipoInforme === 'PTEE' && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-bold">Informe Anual de Gestión del Programa de Transparencia y Ética Empresarial (PTEE)</h3>
              <button onClick={handleCloseReport} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Display the full PTEE report data here */}
            {viewingReport.ptee && (
              <div className="space-y-6 text-gray-800 text-sm">
                 {/* Introducción */}
                <div>
                    <p>De conformidad con las disposiciones de la Superintendencia de Sociedades y en cumplimiento de las funciones asignadas al Oficial de Cumplimiento, se presenta el Informe Anual de Gestión del Programa de Transparencia y Ética Empresarial (PTEE) correspondiente al año {viewingReport.year}, el cual consolida los avances, resultados y acciones implementadas en materia de gestión del riesgo de corrupción, promoción de la integridad y fortalecimiento de la cultura ética en {viewingReport.ptee.introduccion.empresa}.</p>
                    <p className="mt-2">Este documento se estructura bajo los lineamientos establecidos en {viewingReport.ptee.introduccion.normativa}, y tiene como objetivo principal dar cuenta del diseño, implementación y eficacia del PTEE, así como de los mecanismos de control y seguimiento adoptados para garantizar su adecuado funcionamiento.</p>
                </div>
                <hr className="border-gray-300"/>

                {/* 1.1 Divulgación */}
                <div>
                    <h4 className="font-semibold mb-2">1.1 Divulgación</h4>
                    <p>{viewingReport.ptee.divulgacion.estrategias}</p>
                </div>

                {/* 1.2 Capacitación */}
                <div>
                    <h4 className="font-semibold mb-2">1.2 Capacitación</h4>
                    <p>En el marco del proceso de formación continua, el {viewingReport.ptee.capacitacion.fechaCapacitacion}, se compartió con todo el personal el siguiente enlace: {viewingReport.ptee.capacitacion.enlaceCapacitacion}, el cual contiene la capacitación virtual sobre el PTEE. Este material sirvió como base para la evaluación de conocimientos realizada en el mes de {viewingReport.ptee.capacitacion.evaluacionConocimientos} asegurando que los colaboradores cuenten con las herramientas necesarias para comprender y aplicar los estándares éticos y normativos establecidos en el programa.</p>
                    <p className="mt-2">{viewingReport.ptee.capacitacion.capacitacionesNuevos}</p>
                </div>

                {/* 1.3 Encuesta Interna-Externa PTEE */}
                <div>
                    <h4 className="font-semibold mb-2">1.3 Encuesta Interna-Externa PTEE</h4>
                    <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">Encuesta Interna</h5>
                        <p>El {viewingReport.ptee.encuestaInternaExterna.interna.fecha}, se llevó a cabo la encuesta interna del PTEE con el objetivo de {viewingReport.ptee.encuestaInternaExterna.interna.objetivo}</p>
                    </div>
                     <div className="ml-4 mt-4">
                        <h5 className="font-medium mb-2">Encuesta Externa</h5>
                        <p>La encuesta externa está dirigida a los {viewingReport.ptee.encuestaInternaExterna.externa.dirigidaA} y se implementa mediante el {viewingReport.ptee.encuestaInternaExterna.externa.mecanismo}. Este proceso busca evaluar:</p>
                        <ul className="list-decimal pl-5 space-y-1">
                            {viewingReport.ptee.encuestaInternaExterna.externa.objetivos.map((objetivo, index) => (
                                <li key={index}>{objetivo}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 2.1 INFORME GESTION EVALUACION DEL CUMPLIMIENTO DE MIC DE Circular Externa 100-00011 del 9 de agosto de 2021 */}
                <div>
                    <h4 className="font-semibold mb-2">2.1 INFORME GESTION EVALUACION DEL CUMPLIMIENTO DE MIC DE Circular Externa 100-00011 del 9 de agosto de 2021</h4>
                     <div className="overflow-x-auto mt-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left">Ítem</th>
                                    <th className="px-4 py-2 text-left">Verificar</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {viewingReport.ptee.evaluacionCumplimientoCircular.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 font-medium">{item.verificar}</td>
                                        <td className="px-4 py-2 whitespace-pre-wrap">{item.estado}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5.1 ESTADO DE LAS RECOMENDACIONES DEL AÑO ANTERIOR */}
                <div>
                    <h4 className="font-semibold mb-2">5.1 ESTADO DE LAS RECOMENDACIONES DEL AÑO ANTERIOR</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        {viewingReport.ptee.recomendaciones2023.map((recomendacion, index) => (
                            <li key={index}>{recomendacion}</li>
                        ))}
                    </ul>
                </div>

                {/* 2. RECOMENDACIONES PROGRAMA DE TRANSPARENCIA Y ETICA EMPRESARIAL-PTEE */}
                 <div>
                    <h4 className="font-semibold mb-2">2. RECOMENDACIONES PROGRAMA DE TRANSPARENCIA Y ETICA EMPRESARIAL-PTEE</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        {viewingReport.ptee.recomendacionesPTEE.map((recomendacion, index) => (
                            <li key={index}>{recomendacion}</li>
                        ))}
                    </ul>
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

export default SemesterReport;

// DONE