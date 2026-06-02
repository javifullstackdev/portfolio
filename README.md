# javifullstack.dev — portfolio

Mi portfolio personal y CV en una sola web. Lo monté al terminar el **Grado Superior DAM** para presentarme como desarrollador junior: proyectos, formación, skills y un PDF que se genera solo con los mismos datos que ves en pantalla.

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion y `@react-pdf/renderer` para el CV.

Cuando lo tenga desplegado, la URL irá aquí. Mientras tanto, en local:

```bash
npm install
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

---

## Cómo está organizado

Casi todo el contenido editable está en `src/data/`. Si cambio un texto ahí, se actualiza la web y el PDF del CV sin tocar los componentes.

| Archivo | Para qué sirve |
|---------|----------------|
| [`profile.ts`](src/data/profile.ts) | Nombre, foto, frase del hero, contacto, enlaces sociales, URL del CV |
| [`about.ts`](src/data/about.ts) | Tarjetas de «Sobre mí» |
| [`skills.ts`](src/data/skills.ts) | Categorías de tecnologías y niveles |
| [`projects.ts`](src/data/projects.ts) | Proyectos con imágenes, stack y enlaces |
| [`timeline.ts`](src/data/timeline.ts) | Formación y experiencia (orden: más reciente arriba) |
| [`certifications.ts`](src/data/certifications.ts) | Certificaciones y badges |

**Foto:** `public/profile.jpg` y en `profile.ts` → `avatar: "/profile.jpg"`.

**WhatsApp:** número en `whatsapp` con prefijo de país, sin espacios ni `+` (ej. `34676888901`). Si lo dejo vacío, el botón no sale.

**Proyectos:** capturas en `public/projects/`. Puedo usar una imagen (`image`) o varias con carrusel al hover (`images`).

**Certificaciones:** badges opcionales en `public/certifications/`.

Los colores de acentos (tarjetas, tabs de skills, etc.) los ajusto en [`src/lib/accents.ts`](src/lib/accents.ts).

---

## CV en PDF

El botón **Descargar CV** llama a `GET /api/cv` y monta el PDF con los datos de `src/data/`.

- Plantilla: `src/cv/CvDocument.tsx`
- Resumen y listados: `src/cv/cvContent.ts`

Está pensado para lectura clara en ATS (una columna, secciones estándar). Cuando despliegue en Vercel, pondré la URL del sitio en `profile.portfolioUrl` para que salga en el PDF.

Si algún día prefiero un PDF fijo de Canva, lo guardo como `public/cv.pdf` y cambio `cvUrl` a `"/cv.pdf"`.

---

## Estructura del código

```
src/
├── app/              # Rutas, layout, estilos globales, API del CV
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   └── ui/           # Botones, cards, badges…
├── data/             # Contenido que edito a menudo
├── cv/               # PDF (react-pdf)
└── lib/              # Acentos, utilidades, WhatsApp
```

---

## Despliegue

1. Repo en GitHub (`javifullstackdev/portfolio`).
2. [Vercel](https://vercel.com) → importar el repo → Deploy (detecta Next.js solo).
3. Dominio opcional en *Project Settings → Domains*.

---

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Probar el build en local |
| `npm run lint` | ESLint |

---

## Contacto

- GitHub: [@javifullstackdev](https://github.com/javifullstackdev)
- LinkedIn: [javifullstackdev](https://linkedin.com/in/javifullstackdev)
- Email: javifullstackdev@gmail.com
