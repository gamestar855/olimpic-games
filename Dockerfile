# Usa una imagen base de Node.js
FROM node:18

# Crea un directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias y Vite globalmente
RUN npm install && npm install -g vite

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto 3200 para el contenedor
EXPOSE 3200

# Comando para iniciar la aplicación en modo desarrollo
CMD ["vite", "--host", "0.0.0.0", "--port", "3200"]
