# Configuración de Variables de Entorno

## Instrucciones

Para que el formulario de contacto funcione correctamente, necesitas crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

### Pasos:

1. Crea un archivo llamado `.env` en la raíz del proyecto (al mismo nivel que `package.json`)

2. Copia el siguiente contenido y reemplaza con tus credenciales reales de EmailJS:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_rz4xyk4
REACT_APP_EMAILJS_TEMPLATE_ID=template_8yhee6i
REACT_APP_APP_EMAILJS_PUBLIC_KEY=Dtjg3jQm3D1WA8VS_
```

3. **IMPORTANTE**: El archivo `.env` ya está en `.gitignore`, por lo que no se subirá al repositorio.

4. Reinicia el servidor de desarrollo después de crear el archivo:
   ```bash
   npm start
   ```

## Nota de Seguridad

⚠️ **Nunca subas el archivo `.env` al repositorio**. Las credenciales deben mantenerse privadas.

Si necesitas compartir el proyecto, usa `.env.example` como plantilla (ya está incluido en el repositorio).

