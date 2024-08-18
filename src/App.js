import React, { useState } from "react";
import "./App.css";
import logo from "./assets/LOGO.png";

const ClientData = [
  {
    id: 1,
    name: "EDIFICIO CAPITAL TOWER PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 2,
    name: "BANCO CAJA SOCIAL S.A",
    ubicaciones: [
      { nombre: "CENTRAL MONITOREO CALLE 77 - BCSC", estado: "implementado" },
      { nombre: "OPERADOR CENTRAL BCSC CALLE 59", estado: "implementado" },
    ],
  },
  {
    id: 3,
    name: "EDIFICIO ECOTOWER 93 PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 4,
    name: "THOMAS GREG & SONS LIMITED GUERNSEY SA",
    ubicaciones: [
      { nombre: "BODEGA T Y C", estado: "Sin_implementación" },
      {
        nombre: "CENTRO DE SERVICIOS COMPARTIDOS - CSC",
        estado: "Sin_implementación",
      },
      { nombre: "CODI", estado: "Sin_implementación" },
      { nombre: "CODI FUNZA", estado: "Sin_implementación" },
      { nombre: "CODI PROSEGUR", estado: "Sin_implementación" },
    ],
  },
  {
    id: 5,
    name: "GESTION DE ACTIVOS TECNI SAS",
    ubicaciones: [
      { nombre: "ECOLAB", estado: "implementado" },
      { nombre: "ECOTOWER CHICO", estado: "implementado" },
      { nombre: "EDIFICIO PRIME TOWER", estado: "implementado" },
      { nombre: "PARQUE EMPRESARIAL SIBERIA", estado: "implementado" },
    ],
  },
  {
    id: 6,
    name: "EDIFICIO 95 X 11 PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 7,
    name: "EDIFICIO AVENIDA CHILE PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 8,
    name: "EDIFICIO ING - EMBAJADA DE INGLATERRA",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 9,
    name: "EDIFICIO QBE CENTRAL DE SEGUROS SA PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 10,
    name: "EDIFICIO QBO PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 11,
    name: "EDIFICIO PORTA 100 PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 12,
    name: "FUNDACION HOSPITAL SAN CARLOS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 13,
    name: "THOMAS GREG & SONS DE COLOMBIA S.A.",
    ubicaciones: [
      { nombre: "BODEGA CIGA", estado: "implementado" },
      { nombre: "IMPRESORA DE VALORES", estado: "implementado" },
    ],
  },
  {
    id: 14,
    name: "CONSTRUCTORA NQS SAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 15,
    name: "CENTRO EMPRESARIAL PONTEVEDRA PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 16,
    name: "WORLD VISION INTERNATIONAL VISION MUNDIAL INTERNACIONAL",
    ubicaciones: [
      { nombre: "BUCARAMANGA", estado: "Sin_implementación" },
      { nombre: "CUCUTA", estado: "Sin_implementación" },
    ],
  },
  {
    id: 17,
    name: "PLAZA MAYOR CHIA",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 18,
    name: "DORADO PLAZA ",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 19,
    name: "EDIFICIO TORRE 123",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 20,
    name: "EDIFICIO TORRE CENTRAL PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 21,
    name: "EDIFICIO WORLD BUSINESS CENTER",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 22,
    name: "WORLD BUSINESS PORT",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 23,
    name: "EMPRESA COLOMBIANA DE CLAVOS EMCOCLAVOS SAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 24,
    name: "SAN ROQUE",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "Sin_implementación" }],
  },
  {
    id: 25,
    name: "TECH CENTER PARQUE EMPRESARIAL PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 26,
    name: "EDIFICIO TELEPORT BUSINESS PARK PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 27,
    name: "OPAV SERVICIOS SAS",
    ubicaciones: [
      { nombre: "EDIFCIO TORRE 78", estado: "implementado" },
      { nombre: "EDIFICIO TORRE MAS 92", estado: "implementado" },
    ],
  },
  {
    id: 28,
    name: "EDIFICIO TORRE SIGMA",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 29,
    name: "EDIFICIO TORRES UNIDAS II PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 30,
    name: "WATUZI SAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 31,
    name: "ALPINA PRODUCTOS ALIMENTICIOS S.A. BIC",
    ubicaciones: [
      { nombre: "CDR BUCARAMANGA", estado: "Sin_implementación" },
      { nombre: "CDR CALI", estado: "Sin_implementación" },
      { nombre: "ALPINA EDIFICIO ADMINISTRATIVO", estado: "implementado" },
      { nombre: "PRINCIPALCABAÑA RETAIL", estado: "implementado" },
      { nombre: "CDR BOGOTÁ", estado: "Sin_implementación" },
      { nombre: "CDR GALAPA", estado: "implementado" },
      { nombre: "CDR MEDELLÍN", estado: "Sin_implementación" },
      { nombre: "CDR PEREIRA", estado: "Sin_implementación" },
      { nombre: "CENTRO DE ACOPIO GUACHUCAL", estado: "Sin_implementación" },
      { nombre: "LA ESTANCIA", estado: "Sin_implementación" },
      { nombre: "PLANTA CALOTO", estado: "Sin_implementación" },
      { nombre: "PLANTA CHINCHINA", estado: "Sin_implementación" },
      { nombre: "PLANTA ENTRERRIOS", estado: "Sin_implementación" },
      { nombre: "PLANTA FACATATIVA", estado: "Sin_implementación" },
      { nombre: "PLANTA POPAYÁN", estado: "Sin_implementación" },
      { nombre: "PLANTA SOPO", estado: "implementado" },
    ],
  },
  {
    id: 32,
    name: "DON MAIZ SAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "Sin_implementación" }],
  },
  {
    id: 33,
    name: "EDIFICIO ELEMENTO PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 34,
    name: "EDIFICIO ELEMENTO",
    ubicaciones: [
      { nombre: "EDIFICIO FACILITY CAFAM", estado: "Sin_implementación" },
      { nombre: "PARQUE LOGISTICO ZONNA", estado: "implementado" },
      { nombre: "PRINCIPAL", estado: "Sin_implementación" },
    ],
  },
  {
    id: 35,
    name: "FUNDACIÓN PROTECCIÓN DE LA JOVEN AMPARO DE NIÑAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 36,
    name: "MANEJO TECNICO DE INFORMACION S.A",
    ubicaciones: [
      { nombre: "AVENIDA 68", estado: "implementado" },
      { nombre: "CALIFORNIA", estado: "implementado" },
      { nombre: "CALLE 11 A", estado: "implementado" },
      { nombre: "FAVIDI", estado: "Sin_implementación" },
      { nombre: "FUNZA", estado: "Sin_implementación" },
      { nombre: "MTI BARRANQUILLA", estado: "implementado" },
      { nombre: "MTI BUCARAMANGA", estado: "Sin_implementación" },
      { nombre: "MTI CALI", estado: "Sin_implementación" },
      { nombre: "MTI MEDELLÍN", estado: "Sin_implementación" },
      { nombre: "PRINCIPAL COPAD", estado: "Sin_implementación" },
    ],
  },
  {
    id: 37,
    name: "EMV CONSTRUCTORA S.A.S",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "Sin_implementación" }],
  },
  {
    id: 38,
    name: "FUNDACION SANTA FE DE BOGOTA ",
    ubicaciones: [
      { nombre: "CAP SEDE CHICO", estado: "En_implementación" },
      { nombre: "CASA GESTIÓN HUMANA ", estado: "En_implementación" },
      {
        nombre: "EDIFICIO ADMINISTRATIVO (DIRECTIVOS)",
        estado: "En_implementación",
      },
      { nombre: "EDIFICIO AMBULATORIO", estado: "En_implementación" },
      {
        nombre: "EDIFICIO COSME Y DAMIAN BANCO DE HUESOS",
        estado: "En_implementación",
      },
      {
        nombre: "SEDE PRINCIPAL",
        estado: "En_implementación",
      },
    ],
  },
  {
    id: 39,
    name: "EDIFICIO CENTRO EMPRESARIAL PARALELO",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 40,
    name: "QUALFON COLOMBIA SAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 41,
    name: "CENTRO LOGISTICO DE OCCIDENTE PROPIEDAD HORIZONTAL",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 42,
    name: "MEDICINA LABORAL S.A.S.",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "Sin_implementación" }],
  },
  {
    id: 43,
    name: "PLAZA LA SERREZUELA S.A.S",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 44,
    name: "CENTRO DE SERVICIOS COMPARTIDOS GUSTAVO RESTREPO S.A.S",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "Sin_implementación" }],
  },
  {
    id: 45,
    name: "RHBT TECH COLOMBIA",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 46,
    name: "ACCIÓN DEL CAUCA SAS",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "Sin_implementación" }],
  },
  {
    id: 47,
    name: "EDIFICIO MEGATOWER CONJUNTO EMPRESARIAL PH",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 48,
    name: "THOMAS PROCESSING & SYSTEMS SAS",
    ubicaciones: [{ nombre: "TPS BOGOTÁ", estado: "Sin_implementación" }],
  },
  {
    id: 49,
    name: "EDIFICIO CALLE 90 HYDRA",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
  {
    id: 50,
    name: "EDIFICIO CENTRO 93",
    ubicaciones: [{ nombre: "PRINCIPAL", estado: "implementado" }],
  },
];

const ITEMS_PER_PAGE = 5;
function App() {
  const [ClientList, setClientList] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonClick = () => {
    setClientList(!ClientList);
    setSelectedCliente(null);
  };
  const handleClienteClick = (cliente) => {
    setSelectedCliente(cliente);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedCliente(null); // Resetear cliente seleccionado al cambiar de página
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const countClientesPorEstado = (estado) => {
    return ClientData.filter((cliente) => {
      return cliente.ubicaciones.some(
        (ubicacion) => ubicacion.estado === estado
      );
    }).length;
  };

  const countImplementados = countClientesPorEstado("implementado");
  const countSinImplementar = countClientesPorEstado("Sin_implementación");
  const countConFallas = countClientesPorEstado("En_implementación");

  const filteredClientes = ClientData.filter((cliente) =>
    cliente.name.toLowerCase().includes(searchTerm)
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedClientes = filteredClientes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredClientes.length / ITEMS_PER_PAGE);

  return (
    <div className="App">
      <div className="overlay"></div>
      <header className="App-header">
        <h1>Estado de Implementación OBERÓN.</h1>
        <div className="content">
          <div className="Client-section">
            <button className="Client-button" onClick={handleButtonClick}>
              Clientes
            </button>

            {ClientList && (
              <>
                <input
                  type="text"
                  placeholder="Buscar cliente..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="Search-input"
                />
                <ul className="Client-list">
                  {paginatedClientes.map((cliente) => (
                    <li
                      key={cliente.id}
                      onClick={() => handleClienteClick(cliente)}
                      className={
                        selectedCliente?.id === cliente.id ? "selected" : ""
                      }
                    >
                      {cliente.name}
                    </li>
                  ))}
                </ul>
                <div className="Pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      className={`Pagination-button ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="Count-section">
                  <p>Conteo de clientes por estado:</p>
                  <p>Implementados: {countImplementados}</p>
                  <p>Sin implementar: {countSinImplementar}</p>
                  <p>En implementacion: {countConFallas}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="Ubicaciones-title">Ubicaciones del Cliente</h2>
        {selectedCliente && (
          <div className="Dashboard-section">
            <h2 className="Dashboard-title">Estados de Implementación</h2>
            <div className="Dashboard-container">
              {selectedCliente.ubicaciones.map((ubicacion, index) => (
                <div key={index} className="Dashboard">
                  <h3>{ubicacion.nombre}</h3>
                  <div className={`Estado-bar ${ubicacion.estado}`}></div>
                  <span className="Estado-label">
                    {ubicacion.estado.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
