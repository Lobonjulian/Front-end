# Orbitist

Sitio web experimental enfocado en exploración visual y arquitectura frontend escalable. Proyecto construido con React y Vite, orientado a buenas prácticas de producción.

## 🧠 Concepto

Orbitist es una experiencia editorial web que presenta la identidad, filosofía y servicios de un estudio digital ficticio.  
El proyecto prioriza estructura, claridad y escalabilidad por encima de la complejidad innecesaria.

## 🚀 Stack

- React
- Vite
- React Router
- CSS Modules
- Netlify

## 🧱 Arquitectura

```txt
src/
├─ assets/        # Imágenes, SVG
├─ components/
│  ├─ ui/         # Componentes atómicos (Logo, Iconos)
│  ├─ sections/   # Secciones reutilizables
│  └─ layout/     # Header, Footer
├─ data/          # Contenido desacoplado del JSX
├─ pages/         # Rutas principales
├─ styles/        # Variables globales y reset
└─ App.jsx
```

## 🧩 Principios aplicados

- Componentes con responsabilidad única
- Separación entre datos y presentación
- Uso de semántica HTML
- Arquitectura escalable
- Estilos encapsulados con CSS Modules

## 📦 Instalación

```bash
pnpm install
pnpm dev
```
