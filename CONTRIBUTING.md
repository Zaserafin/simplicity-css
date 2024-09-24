# Contribuyendo a simplicity-css

Agradecemos tu interés en contribuir a simplicity-css. Tu ayuda es fundamental para expandir y mejorar esta librería de CSS minimalista. Este documento proporciona las directrices necesarias para una contribución efectiva al proyecto.

## Normas de Colaboración

### Cómo Empezar

1. **Fork el Repositorio**: Realiza un "fork" del repositorio principal a tu cuenta personal de GitHub.
2. **Clona tu Fork**: Clona el repositorio a tu entorno de desarrollo local para comenzar a trabajar.
3. **Crea una Rama**: Establece una rama separada del `main` para cada nueva característica o corrección. Nómbrala de manera que refleje su propósito.
4. **Implementa tus Cambios**: Realiza los cambios siguiendo las pautas de estilo descritas a continuación.
5. **Prueba tus Cambios**: Asegúrate de que tus cambios no introduzcan errores y cumplan con los estándares establecidos.
6. **Envía un Pull Request**: Cuando estés listo, envía un pull request desde tu fork hacia el repositorio principal para su revisión.

## Estándares para Commits y Ramas

### Commits

Para mantener un historial de commits claro y consistente, utiliza el siguiente formato:

**[tipo]: [descripción]**

Tipos de commits comunes:

- **feat**: Nueva funcionalidad.
- **fix**: Corrección de errores.
- **refactor**: Refactorización de código sin cambiar la funcionalidad.
- **style**: Cambios en estilos (formato, ortografía, etc.).
- **docs**: Actualización de documentación.
- **test**: Añadir o modificar pruebas.
- **chore**: Tareas de mantenimiento (actualización de dependencias, configuraciones).

**Ejemplos de commits:**

- `feat: added new grid system for responsive layout`
- `fix: corrected button alignment issue on mobile`
- `refactor: optimized SCSS mixins for better performance`
- `docs: updated README with installation instructions`

---

### Ramas

Las ramas deben seguir el formato:

**[tipo]/[descripción-corta]**

Tipos de ramas comunes:

- **feature/**: Para nuevas funcionalidades.
- **bugfix/**: Para corrección de errores.
- **hotfix/**: Para arreglos urgentes en producción.
- **refactor/**: Para mejoras de código sin cambiar la funcionalidad.
- **docs/**: Para actualizaciones de documentación.

**Ejemplos de ramas:**

- `feature/grid-system`
- `bugfix/button-alignment`
- `hotfix/navigation-bug`
- `refactor/mixins-optimization`
- `docs/update-contributing-guide`

### Estándares de Código para CSS y SCSS

#### Generalidades

- **Indentación**: Usa "soft tabs" de 2 espacios para la indentación.
- **Selectores**: Prefiere clases sobre IDs para evitar especificidad alta y rigidez.
- **Nombres Descriptivos**: Los nombres de clases y selectores deben ser claros y descriptivos.
- **Anidamiento**: Limita el anidamiento a 3 niveles para mantener el código claro y mantenible.

#### Formateo

- **Declaraciones**: Coloca cada declaración en su propia línea y utiliza un espacio antes del bloque de llaves.
- **Alineación**: Alinea verticalmente los valores de las propiedades para mejorar la legibilidad.
- **Caso de Caracteres**: Usa minúsculas para los nombres de clases, selectores y propiedades.

#### Comentarios

- **Propósito sobre Función**: Comenta para explicar el "por qué" más que el "qué", ayudando a futuros colaboradores a entender la razón detrás del código.
- **Claridad**: Asegura que los comentarios sean claros y aporten valor al código.

#### Organización

- **Modularidad**: Organiza el código por funcionalidad y mantén separados los estilos específicos de los generales.

### Normas de Comportamiento

- **Respeto**: Mantén un trato respetuoso hacia todos los colaboradores.
- **Colaboración**: Fomenta la colaboración invitando a otros a reportar problemas, hacer preguntas y contribuir activamente.
- **Comunicación Efectiva**: Discute los cambios propuestos con argumentos claros y constructivos, centrados en mejorar el proyecto.

## Cómo Reportar Problemas

- **Uso de Issues**: Utiliza el sistema de issues de GitHub para reportar problemas.
- **Descripción Detallada**: Proporciona una descripción detallada del problema, incluyendo pasos para reproducirlo y, si es posible, capturas de pantalla.

## Licencia

Al contribuir a simplicity-css, aceptas que tus aportaciones se licencien bajo la Licencia MIT, la misma que el proyecto original.

**Gracias por tu contribución a hacer de simplicity-css un proyecto mejor y más eficiente.**
