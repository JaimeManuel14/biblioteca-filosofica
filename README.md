# 📚 Biblioteca Filosófica — React App

Aplicación desarrollada por **Jaime Cutipa** como parte del curso **Desarrollo Web Integral** de la **Maestría en Ingeniería de Software y Sistemas Informáticos** en la **Universidad Internacional de La Rioja (UNIR)**.

---

## 🧠 Descripción

Este proyecto es una aplicación web desarrollada con **React**, que simula un sistema de biblioteca enfocado en libros filosóficos. Permite visualizar, buscar, alquilar y extender el préstamo de libros. El sistema está diseñado con enfoque académico, modular y orientado a componentes reutilizables, siguiendo las buenas prácticas de desarrollo frontend.

---

## 🚀 Funcionalidades principales

- 📘 Visualización de libros destacados (filtrados por atributo `mejor`)
- 🔍 Buscador dinámico por título, autor e ISBN-13
- 📚 Catálogo paginado de libros (9 por página)
- 📖 Detalle completo de cada libro
- 📦 Registro de libros alquilados
- 🔁 Extensión de plazo de préstamo
- 💬 Mensajes emergentes para confirmar acciones
- 📱 Diseño adaptable y estilizado con metodología **BEM**

---

## 🧩 Estructura técnica

- **Framework:** React (CRA)
- **Routing:** React Router DOM (`react-router-dom`)
- **Estado compartido:** Context API + Hooks personalizados
- **Estilos:** CSS modular con convención BEM
- **Componentes funcionales:** 15+
- **Hooks personalizados:** `useBooks`, `useRentals`, `useSearch`

---

## 🗂️ Estructura de carpetas

```
biblioteca-online/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   └── index.js
```

---

## 🔧 Instalación y ejecución local

```bash
git clone https://github.com/jaimecutipa/biblioteca-filosofica.git
cd biblioteca-filosofica
npm install
npm start
```

---

## 🌐 Despliegue

La aplicación está desplegada en **Vercel**:

🔗 [https://biblioteca-filosofica.vercel.app](https://biblioteca-filosofica.vercel.app)

---

## 👨‍💻 Autor

**Jaime Cutipa**  
Estudiante de la Maestría en Ingeniería de Software y Sistemas Informáticos  
Universidad Internacional de La Rioja (UNIR)  
Curso: Desarrollo Web Integral  
Año: 2025

---

## 📝 Licencia

Este proyecto tiene fines educativos y académicos.