# 🧪 Ejercicios de Hooks en React

## 🌟 Objetivo

Practicar el uso de hooks sencillos y reutilizables en contextos reales.  
Trabajarás con: `useToggle`, `useCounter`, `useWindowWidth`, `useFetch`, `useLocalStorage` y **(nuevo)** `useDevice`.

---

## 🚀 Pasos iniciales

### 1) Crea un nuevo repositorio en tu GitHub

Nombre sugerido: `react-hooks`. Haz commits pequeños y claros.

### 2) Crea un proyecto base con Vite (React + JS)

```bash
npm create vite@latest react-hooks -- --template react
cd react-hooks
npm i
npm run dev
```

### 3) Limpia el proyecto

Deja un `App.jsx` simple y crea carpetas:

```
src/
  hooks/
  components/
  styles.css
```

### 4) Realiza los ejercicios en tu repo

Monta cada componente de ejercicio desde `App.jsx` (puedes comentar/descomentar).

---

## ✅ Requisitos

-   **Código y nombres en inglés.**
-   React con **JavaScript** (sin TypeScript).
-   **Sin librerías externas** (usa `fetch`).
-   Componentes **funcionales** y **hooks**.
-   Monta los componentes en `App.jsx` (comenta/descomenta para probar).

---

## 🧹 Ejercicios

> ⚠️ **Todo en inglés** (nombres de variables, funciones y componentes).

### 1) Password visibility toggle

**Archivo:** `src/hooks/usePasswordVisibility.jsx`

**Objetivo:** Alternar visibilidad del input de contraseña.

**Instrucciones**: Crea un useToggle como el que hemos visto en clase. Después crea un hook llamado `usePasswordVisibility` que use useToggle y devuelva el estado y la función para alternar la visibilidad de la contraseña. Este hook debes usarlo en un campo password. Puedes copiar el componente Login usado en ejercicios anteriores. El objetivo del hook es que el input muestre la contraseña con asteriscos por defecto `*****` y al pulsar el botón, muestre la contraseña en texto.

**Pistas:**

-   Hook: `const [visible, toggleVisible] = useToggle(false)`
-   `type` del `<input>`: `visible ? "text" : "password"`
-   Botón: `Show` / `Hide`. También puede ser un icono de un ojo
    👁️

---

### 2) useCounter

**Archivo:** `src/hooks/useCounter.jsx`

**Objetivo:** Crear un hook contador.

**Instrucciones** Crea un hook llamado `useCounter` que gestione un contador. Es como el que hemos hecho en clase, pero creado por ti.

---

### 3) useResponsive

**Archivo:** `src/hooks/useResponsive.jsx`

**Objetivo:** Cambiar el color de fondo de `<App>` según el ancho de la ventana.

**Instrucciones**: Crea un hook llamado `useWindowWidth` como el de clase, que devuelva el ancho de la ventana. Luego, en `<App>`, usa este hook y cambia el color de fondo según el ancho de la ventana. Si el ancho es menor a 768px, usa un color para "Mobile" y si no, otro color diferente para "Desktop".

---

### 4) PokemonViewer

**Archivo:** `src/components/PokemonViewer.jsx`

**Objetivo:** Cargar Pokémon por ID con input controlado.

**Instrucciones**: Crea un hook `useFetch`como el de clase. Luego un componente `PokemonViewer` que use este hook. El componente debe tener un input de texto controlado para el ID del Pokémon. Cuando cambies la ID desde el input, debe volver a cargar el Pokémon correspondiente.

**Pista**: La url para obtener un Pokémon por ID es `https://pokeapi.co/api/v2/pokemon/${id}`.

---

### 5) Hook nuevo: `useDevice` (isMobile / isTablet / isDesktop)

**Archivo:** `src/hooks/useDevice.jsx`

**Objetivo:** Crea un hook que detecte el tamaño de la ventana y devuelva si es móvil, tablet o desktop.

**Instrucciones**: Crea un hook `useDevice` que consuma el hook `useWindowWidth` para detectar el tamaño de la ventana y actualizar el estado en consecuencia. El estado será un objeto con las propiedades `isMobile`, `isTablet` e `isDesktop`. Que debe setear a `true` la propiedad correspondiente según el tamaño de pantalla. Luego crea un componente que consuma este hook `useDevice` y muestre en el navegador el tamaño de pantalla. "Tamaño Mobile", "Tamaño Tablet", "Tamaño Desktop".

**Extra**: Cambia el ejercicio 3 y añade un nuevo color para el tamaño de Tablet.

> **Breakpoints sugeridos** (puedes ajustarlos si lo prefieres):
>
> -   `isMobile`: `< 768`
> -   `isTablet`: `>= 768 && < 1024`
> -   `isDesktop`: `>= 1024`

---

### 6) Layout switcher (consume `useDevice`)

**Archivo:** `src/components/LayoutSwitcher.jsx`

**Objetivo:** Cambiar layout (lista vs grid) según dispositivo. Crea un componente que use el hook `useDevice` y muestre el layout correspondiente. Cada elemeto del grid puede ser un div de 120px de altura con algún color de fondo. (simularemos que es una Card).

**Pistas:**

-   `isMobile`: grid de 2 columnas. (puedes usar `grid-template-columns: repeat(2, 1fr)`)
-   `isTablet`: grid de 3 columnas. (puedes usar `grid-template-columns: repeat(3, 1fr)`)
-   `isDesktop`: grid de 4 columnas. (puedes usar `grid-template-columns: repeat(4, 1fr)`)

---
