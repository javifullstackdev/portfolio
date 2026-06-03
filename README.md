# javifullstack.dev

Hola — soy **Javier Sánchez**, desarrollador junior recién salido del grado superior de **DAM**. Este repo es mi portfolio personal y, de paso, la web donde me presento: quién soy, qué sé, qué he hecho en mis prácticas y cómo contactarme.

No quería quedarme solo con un CV en PDF aburrido. Quería algo que se viera bien en el móvil, que tuviera mi cara y mis proyectos, y que el PDF saliera de los mismos datos para no estar copiando textos en dos sitios. De ahí salió esto.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/projects/heroPortfolioLightMode.webp" />
    <source media="(prefers-color-scheme: light)" srcset="public/projects/heroPortfolioDarkMode.webp" />
    <img src="public/projects/heroPortfolioDarkMode.webp" alt="Captura del hero de javifullstack.dev" width="800" />
  </picture>
</p>

**Sitio en vivo:** cuando lo tenga desplegado, aparecerá aquí → `profile.portfolioUrl` en [`src/data/profile.ts`](src/data/profile.ts).

---

## Un poco de contexto

Vivo en **Benalmádena** y busco mi primera oportunidad en desarrollo: cualquier opción de trabajo remoto en España me encaja; en **Málaga** también valoro híbrido o presencial. Acabo de terminar el grado y he hecho las **prácticas en Naviria Labs**, donde he tocado backlog, revisiones y trabajo en equipo como en un proyecto real.

Antes de cursar DAM llevaba más de 8 años en el mundo del fitness, y los 3 últimos, siendo Club Manager en Synergym. No tiene mucho que ver con el código, pero gracias a esto, creo tener unas buenas habilidades sociales, me organizo bien y cuando algo se complica, no me rindo fácilmente — cosas que supongo en un junior también se valoran.

Mi objetivo es ser un buen **full-stack**, pero como siempre pasa en la vida, hasta que no te especializas en algo, no lo dominas. Si es cierto que en mis prácticas en Naviria Labs he tocado mucho más Front que Back y por eso me siento mucho más cómodo en ese terreno, pero aún así, tengo muchas ganas de meterme en el sector de la **IA** y la **ciberseguridad**.

---

## Qué hay dentro

- Una sola página con secciones: inicio, sobre mí, skills, certificaciones, proyectos, formación y contacto.
- **Tema claro y oscuro** (con memoria en el navegador).
- **CV en PDF** generado en `/api/cv` con la misma info que ves en pantalla, pero adaptado procesos de selección con IAs.
- Proyectos reales (este repo, landings de Upgrade Hub en las prácticas, etc.).
- Timeline con el grado superior de DAM, las prácticas y lo que quise contar de mi etapa anterior.

Stack principal: **Next.js 16**, **TypeScript**, **Tailwind v4**, **Framer Motion** y **React PDF** para el currículum.

---

## Si clonas el repo para curiosear (o para ti)

Necesitas **Node 20+**.

```bash
git clone https://github.com/javifullstackdev/portfolio.git
cd portfolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Los textos, proyectos, skills y el timeline están en **`src/data/`** — un solo sitio para editar y que se actualice la web y el PDF. La foto va en `public/profile.jpg` y se referencia desde `profile.ts`.

Para producción lo subí pensando en **Vercel**: conectas el repo y listo. Cuando tengas la URL, la pegas en `portfolioUrl` dentro de `profile.ts` y el botón de demo del proyecto portfolio dejará de estar vacío.

---

## Contacto

| | |
|---|---|
| GitHub | [@javifullstackdev](https://github.com/javifullstackdev) |
| LinkedIn | [javifullstackdev](https://linkedin.com/in/javifullstackdev) |
| Email | javifullstackdev@gmail.com |
| WhatsApp | +34 676 888 901 |

Si llegas desde una oferta de trabajo: gracias por mirar el código, no solo la captura de pantalla.

---

## Licencia

[MIT](LICENSE) — si te sirve de referencia para tu propio portfolio, adelante; cambia los datos y la foto, que la mía no viene incluida en el pack 😄
