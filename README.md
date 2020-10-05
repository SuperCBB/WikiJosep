# WikiJosep
La wiki del calvo xd

# Programas necesarios
- <a href='https://nodejs.org/es/download/'> Node JS</a>: Versión LTS
- <a href='https://hub.docker.com/editions/community/docker-ce-desktop-windows/'> Docker Windows</a>: Versión estable
- <a href='https://desktop.github.com/'> GitHub Desktop </a>
- <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10"> WSL 2 </a> Requerido para el docker hacer hasta el paso 5 incluido
- <a href="https://www.mongodb.com/try/download/community?tck=docs_server"> MongoDB 4.4.1 </a>

# Programas sugeridos
- <a href='https://code.visualstudio.com/download'> VS Code </a>
- <a href="https://robomongo.org/download"> Robo 3T </a>

# Instalación
<ol>
  <li>Hacer clone de la rama main</li>
  <li>Abrir consola</li>
  <li>Situarse en el directorio Backend del proyecto => cd ${PATH}/Backend</li>
  <li>Ejectura npm install</li>
  <li>Situarse en el directorio Frontend del proyecto => cd ${PATH}/Frontend</li>
  <li>Ejectura npm install</li>
</ol>

# Levantar proyecto no dockerizado
<ol>
  <li>Abrir consola</li>
  <li>Ejecutar npm -i @angular/cli</li>
  <li>Situarse en el directorio Frontend del proyecto => cd ${PATH}/Frontend</li>
  <li>Ejectura ng serve</li>
  <li>Situarse en el directorio Frontend del proyecto => cd ${PATH}/Frontend</li>
  <li>Ejectura npm start</li>
</ol>

# Levantar proyecto dockerizado (recomendado)
<ol>
  <li>Abrir consola</li>
  <li>Situarse en el directorio docker del proyecto => cd ${PATH}/docker</li>
  <li>Ejecutar docker-compose build</li>
  <li>Ejecutar docker-compose up</li>
</ol>
