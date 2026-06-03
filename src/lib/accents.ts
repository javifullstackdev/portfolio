/** Paleta del portfolio: azul, verde, lima neón, rosa y morado */
export type Accent = "cyan" | "sky" | "teal" | "fuchsia" | "purple" | "violet";

/** Stack técnico: borde de caja, icono y título por categoría. */
export const accentTab: Record<
  Accent,
  {
    iconWrap: string;
    icon: string;
    title: string;
    tabActive: string;
    panel: string;
    panelHover: string;
  }
> = {
  cyan: {
    iconWrap: "bg-cyan-400/25 ring-1 ring-cyan-400/40",
    icon: "text-cyan-400",
    title: "text-cyan-400",
    tabActive:
      "border-cyan-400/55 bg-cyan-400/10 text-cyan-400 shadow-sm shadow-cyan-400/15",
    panel: "border-cyan-400/25",
    panelHover:
      "transition-[box-shadow,border-color] duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/35",
  },
  sky: {
    iconWrap: "bg-sky-400/25 ring-1 ring-sky-400/40",
    icon: "text-sky-400",
    title: "text-sky-400",
    tabActive:
      "border-sky-400/55 bg-sky-400/10 text-sky-400 shadow-sm shadow-sky-400/15",
    panel: "border-sky-400/25",
    panelHover:
      "transition-[box-shadow,border-color] duration-300 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/35",
  },
  teal: {
    iconWrap: "bg-teal-400/25 ring-1 ring-teal-400/40",
    icon: "text-teal-400",
    title: "text-teal-400",
    tabActive:
      "border-teal-400/55 bg-teal-400/10 text-teal-400 shadow-sm shadow-teal-400/15",
    panel: "border-teal-400/25",
    panelHover:
      "transition-[box-shadow,border-color] duration-300 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/35",
  },
  fuchsia: {
    iconWrap: "bg-fuchsia-400/25 ring-1 ring-fuchsia-400/40",
    icon: "text-fuchsia-400",
    title: "text-fuchsia-400",
    tabActive:
      "border-fuchsia-400/55 bg-fuchsia-400/10 text-fuchsia-400 shadow-sm shadow-fuchsia-400/15",
    panel: "border-fuchsia-400/25",
    panelHover:
      "transition-[box-shadow,border-color] duration-300 hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-400/35",
  },
  purple  : {
    iconWrap: "bg-purple-400/25 ring-1 ring-purple-400/40",
    icon: "text-purple-400",
    title: "text-purple-400",
    tabActive:
      "border-purple-400/55 bg-purple-400/10 text-purple-400 shadow-sm shadow-purple-400/15",
    panel: "border-purple-400/25",
    panelHover:
      "transition-[box-shadow,border-color] duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/35",
  },
  violet: {
    iconWrap: "bg-violet-400/25 ring-1 ring-violet-400/40",
    icon: "text-violet-400",
    title: "text-violet-400",
    tabActive:
      "border-violet-400/55 bg-violet-400/10 text-violet-400 shadow-sm shadow-violet-400/15",
    panel: "border-violet-400/25",
    panelHover:
      "transition-[box-shadow,border-color] duration-300 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-400/35",
  },
};

/** Pills de tecnologías (proyectos, etc.) alineadas con cada categoría de skills */
export const accentPill: Record<Accent, string> = {
  cyan: "border-cyan-400/45 bg-cyan-400/10 text-cyan-300",
  sky: "border-sky-400/45 bg-sky-400/10 text-sky-300",
  teal: "border-teal-400/45 bg-teal-400/10 text-teal-300",
  fuchsia: "border-fuchsia-400/45 bg-fuchsia-400/10 text-fuchsia-300",
  purple: "border-purple-400/45 bg-purple-400/10 text-purple-300",
  violet: "border-violet-400/45 bg-violet-400/10 text-violet-300",
};

export const accentLink: Record<Accent, string> = {
  cyan: "hover:text-cyan-400 focus-visible:outline-cyan-400",
  sky: "hover:text-sky-400 focus-visible:outline-sky-400",
  teal: "hover:text-teal-400 focus-visible:outline-teal-400",
  fuchsia: "hover:text-fuchsia-400 focus-visible:outline-fuchsia-400",
  purple: "hover:text-purple-400 focus-visible:outline-purple-400",
  violet: "hover:text-violet-400 focus-visible:outline-violet-400",
};

export const accentAbout: Record<
  Accent,
  {
    border: string;
    bar: string;
    iconWrap: string;
    icon: string;
    title: string;
    hover: string;
  }
> = {
  cyan: {
    border: "border-cyan-400/25",
    bar: "from-cyan-400 via-cyan-400/50 to-transparent",
    iconWrap: "bg-cyan-400/25 ring-1 ring-cyan-400/40",
    icon: "text-cyan-400",
    title: "text-cyan-400",
    hover:
      "transition-[box-shadow,border-color] duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/35",
  },
  sky: {
    border: "border-sky-400/25",
    bar: "from-sky-400 via-sky-400/50 to-transparent",
    iconWrap: "bg-sky-400/25 ring-1 ring-sky-400/40",
    icon: "text-sky-400",
    title: "text-sky-400",
    hover:
      "transition-[box-shadow,border-color] duration-300 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/35",
  },
  fuchsia: {
    border: "border-fuchsia-400/25",
    bar: "from-fuchsia-400 via-fuchsia-400/50 to-transparent",
    iconWrap: "bg-fuchsia-400/25 ring-1 ring-fuchsia-400/40",
    icon: "text-fuchsia-400",
    title: "text-fuchsia-400",
    hover:
      "transition-[box-shadow,border-color] duration-300 hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-400/35",
  },
  purple: {
    border: "border-purple-400/25",
    bar: "from-purple-400 via-purple-400/50 to-transparent",
    iconWrap: "bg-purple-400/25 ring-1 ring-purple-400/40",
    icon: "text-purple-400",
    title: "text-purple-400",
    hover:
      "transition-[box-shadow,border-color] duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/35",
  },
  violet: {
    border: "border-violet-400/25",
    bar: "from-violet-400 via-violet-400/50 to-transparent",
    iconWrap: "bg-violet-400/25 ring-1 ring-violet-400/40",
    icon: "text-violet-400",
    title: "text-violet-400",
    hover:
      "transition-[box-shadow,border-color] duration-300 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-400/35",
  },
  teal: {
    border: "border-teal-400/25",
    bar: "from-teal-400 via-teal-400/50 to-transparent",
    iconWrap: "bg-teal-400/25 ring-1 ring-teal-400/40",
    icon: "text-teal-400",
    title: "text-teal-400",
    hover:
      "transition-[box-shadow,border-color] duration-300 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/35",
  },
};
