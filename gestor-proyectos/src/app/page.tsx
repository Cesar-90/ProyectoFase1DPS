import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DPS App</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/projects" className="hover:underline">Proyectos</a></li>
            <li><a href="/login" className="hover:underline">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 flex-grow">
        <div className="container mx-auto text-center py-20">
          <h2 className="text-4xl font-bold text-gray-800">Bienvenido a la DPS App</h2>
          <p className="mt-4 text-lg text-gray-600">Gestiona tus proyectos de manera eficiente con nuestra herramienta. Organiza tareas, colabora con tu equipo y alcanza tus objetivos.</p>
          <a href="/register" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Regístrate Ahora</a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-10">
        <h3 className="text-3xl font'bold text-green-1000 text-center mb-6">Proyectos Recientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-800">Proyecto 1</h4>
              <p className="mt-2 text-gray-600">Descripción: Aquí puedes hablar sobre los detalles clave del proyecto.</p>
              <a href="/projects/1" className="mt-4 inline-block text-blue-500 hover:underline">Ver Proyecto</a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-800">Proyecto 2</h4>
              <p className="mt-2 text-gray-600">Descripción: Aquí puedes hablar sobre los detalles clave del proyecto.</p>
              <a href="/projects/2" className="mt-4 inline-block text-blue-500 hover:underline">Ver Proyecto</a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-800">Proyecto 3</h4>
              <p className="mt-2 text-gray-600">Descripción: Aquí puedes hablar sobre los detalles clave del proyecto.</p>
              <a href="/projects/3" className="mt-4 inline-block text-blue-500 hover:underline">Ver Proyecto</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 DPS App. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
