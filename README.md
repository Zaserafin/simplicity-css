# simplicity-css

**simplicity-css** es una librería de CSS diseñada para ser minimalista, completa y altamente personalizable. Provee un conjunto robusto de estilos de inicio, ideales para acelerar el desarrollo web y garantizar adaptabilidad y facilidad de uso.

## Objetivos del Proyecto

Este proyecto alcanzará su finalización cuando cumpla con los siguientes objetivos:

1. **Cobertura Completa**: Ofrecer estilos base completos para la mayoría de los componentes web comunes, evitando la necesidad de añadir estilos adicionales.
2. **Facilidad de Personalización**: Permitir a los usuarios personalizar los estilos fácilmente, idealmente mediante la modificación de un conjunto de variables predefinidas.
3. **Documentación Exhaustiva**: Proporcionar documentación detallada para que los usuarios comprendan cómo utilizar y personalizar la librería.
4. **Compatibilidad con Navegadores**: Garantizar compatibilidad con todos los navegadores modernos.
5. **Automatización de Builds**: Implementar un sistema de compilación que utilice dart-sass, PostCSS y autoprefixer para asegurar compatibilidad y eficiencia.
6. **Desplegar paquete del proyecto**: Desplegar el proyecto en npm para que pueda ser utilizado cómo paquete.

## Tecnologías Empleadas

- SCSS
- dart-sass
- PostCSS
- Autoprefixer

## Módulos de Simplicity-CSS

`simplicity-css` incluye los siguientes módulos, diseñados para cubrir casos de uso comunes en el desarrollo web:

### 1. **Reset/Normalize CSS**

- **Propósito**: Establecer una base consistente en todos los navegadores eliminando los estilos predeterminados y reduciendo las inconsistencias del navegador.
- **Contenido**:
  - **simplicity.css**: Incluye nuestro propio "reboot" CSS, diseñado específicamente para la librería simplicity-css, que reconfigura los estilos base para un inicio más limpio y uniforme.
  - **snormalize.css**: Una versión que combina nuestro estilo base con [`normalize.css`](https://github.com/necolas/normalize.css), proporcionando una solución más amplia que integra las normalizaciones de estilos conocidas y ampliamente aceptadas para mejorar la compatibilidad entre navegadores.

Ambas versiones están diseñadas para permitir a los desarrolladores elegir la base que mejor se adapte a sus necesidades específicas, ya sea optando por una solución completamente personalizada con nuestro reboot o por una aproximación híbrida que incluye normalizaciones probadas en el tiempo.

### 2. **Containers**

- **Propósito**: Facilitar la creación interfaces con contenedores responsivos.
- **Contenido**: Contenedores de anchos máximos basados en reglas responsivas.

### 3. **Grid System**

- **Propósito**: Facilitar la disposición flexible y responsive de elementos en la página.
- **Contenido**: Sistema de grillas basado en flexbox o CSS grid.

### 4. **Typography**

- **Propósito**: Ofrecer un conjunto coherente y estético de estilos tipográficos.
- **Contenido**: Estilos para encabezados, párrafos, enlaces, listas, y más.

### 5. **Buttons and Forms**

- **Propósito**: Proveer estilos uniformes y atractivos para elementos interactivos.
- **Contenido**: Estilos para botones, formularios, selectores, checkboxes, radios y switches.

### 6. **Utilities**

- **Propósito**: Ofrecer clases de utilidad para ajustes rápidos.
- **Contenido**: Clases para espaciado, tamaño, alineación y visibilidad.

### 7. **Navigation**

- **Propósito**: Estilizar componentes de navegación.
- **Contenido**: Barras de navegación, menús desplegables, breadcrumbs y paginación.

### 8. **Responsive Helpers**

- **Propósito**: Facilitar la creación de diseños adaptables a diferentes dispositivos.
- **Contenido**: Media queries y clases para ajustes responsivos.

### 9. **Icons and Images**

- **Propósito**: Optimizar la manipulación y presentación de imágenes e íconos.
- **Contenido**: Estilos para ajustar imágenes y estilizar íconos eficientemente.

### 10. **Feedback Components**

- **Propósito**: Proporcionar componentes visuales para retroalimentación.
- **Contenido**: Tooltips, mensajes de alerta, barras de progreso y modales.

### 11. **Animations**

- **Propósito**: Añadir animaciones básicas para mejorar la interactividad.
- **Contenido**: Animaciones predefinidas como fades, slides y bounces.

### 11. **JavaScript Integration**

- **Propósito**: Integrar funcionalidades específicas usando JavaScript.
- **Contenido**: Acompañar el sistema de componentes con acciones genéricas cómo abrir y cerrar un modal o funcionalidad de navegación.

## Cómo Contribuir

Estamos abiertos a contribuciones que ayuden a mejorar y expandir `simplicity-css`. Consulta el archivo `CONTRIBUTING.md` para más detalles sobre cómo puedes aportar al proyecto.

## Licencia

`simplicity-css` está distribuido bajo la Licencia MIT, disponible en detalle en el archivo `LICENSE`.

## Contacto

Para preguntas o más información, puedes abrir un issue en el repositorio o contactarme directamente a través de [contacto@zaserafin.com](mailto:contacto@zaserafin.com).
