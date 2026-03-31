export const es = {
  meta: {
    lang: "es",
    title: "Diego Mueses | Desarrollador Full-Stack e Ingeniero de Software",
    description:
      "Portafolio de Diego Fernando Mueses Zuñiga - Desarrollador Full-Stack especializado en React, Next.js, NestJS y desarrollo móvil. Explora mis proyectos y contáctame.",
    keywords:
      "Diego Mueses, Desarrollador Full-Stack, Ingeniero de Software, React, Next.js, NestJS, TypeScript, PostgreSQL, React Native, Desarrollo Web, Desarrollo Móvil, Cali Colombia",
    siteName: "Portafolio Diego Mueses",
  },
  nav: {
    resume: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    about: "Sobre Mí",
    contact: "Contáctame",
    close: "Cerrar",
    socials: "Redes Sociales",
    switchLang: "EN",
    switchLangLabel: "Switch to English",
    switchLangHref: "/",
  },
  hero: {
    tagline: "Ingeniero de Sistemas/Software & Desarrollador Full-Stack",
    headline: "Diseño y construyo aplicaciones web y móviles de extremo a extremo.",
    description:
      "Con una mentalidad orientada a la resolución de problemas y un enfoque en arquitectura limpia, diseño e implemento soluciones que mejoran el rendimiento, la experiencia del usuario y generan impacto medible. Disfruto colaborar en equipos ágiles y transformar ideas complejas en productos funcionales.",
    downloadCV: "Descargar CV",
    viewProjects: "Ver Proyectos",
  },
  work: {
    title: "Mi Experiencia Laboral",
    resume: [
      {
        position: "Practicante / Aprendiz",
        achievements: [
          "Identificar oportunidades para usar IA en procesos de investigación, análisis y diseño.",
          "Diseñar soluciones y flujos de trabajo asistidos por IA.",
          "Usar herramientas de IA generativa para automatizar tareas.",
        ],
      },
      {
        position: "Desarrollador Full-Stack",
        achievements: [
          "Implementé funcionalidades de frontend con Next.js, mejorando la retención de usuarios en un 15% mediante una experiencia más fluida e intuitiva.",
          "Desarrollé y optimicé servicios de backend en NestJS integrados con bases de datos relacionales como PostgreSQL, reduciendo los tiempos de respuesta en un 20% y aumentando la consistencia del sistema.",
          "Contribuí al desarrollo de una aplicación móvil con React Native para Android e iOS, mejorando la accesibilidad y ampliando el alcance a usuarios móviles.",
        ],
      },
      {
        position: "Líder de Desarrollo Frontend",
        achievements: [
          "Lideré el desarrollo completo del frontend del proyecto, construyendo interfaces modernas y responsivas que mejoraron la experiencia del usuario en un 25%.",
          "Implementé componentes reutilizables y buenas prácticas en React, reduciendo el tiempo de desarrollo del equipo en un 30%.",
          "Integré el frontend con APIs externas, asegurando una navegación fluida y logrando tiempos de carga hasta un 20% más rápidos.",
        ],
      },
      {
        position: "Monitor de Clase (Introducción a Ingeniería de Sistemas)",
        achievements: [
          "Evalué las tareas de los estudiantes para garantizar estándares académicos y técnicos, recibiendo un 95% de retroalimentación positiva de los profesores.",
          "Asesoré a los estudiantes en proyectos y tareas, contribuyendo a una mejora del 12% en sus calificaciones promedio.",
          "Organicé y facilité sesiones de repaso, aumentando la participación estudiantil en un 20%.",
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    subtitle: "Algunos de mis trabajos más destacados",
    viewProject: "Ver Proyecto",
    technologies: "Tecnologías:",
    close: "Cerrar",
    items: [
      {
        description: "Plataforma para encontrar oportunidades de trabajo y conectar con empleadores.",
      },
      {
        description: "Plataforma de comercio electrónico para moda urbana y streetwear.",
      },
    ],
  },
  skills: {
    title: "Herramientas & Tecnologías",
  },
  about: {
    title: "Sobre Mí",
    intro:
      "Soy <span class=\"text-accent\">Diego M. Zuñiga</span>, un Ingeniero de Sistemas de 21 años de Cali, Colombia, apasionado por construir productos digitales que hagan la vida de las personas más fácil.",
    photosCaption: "Algunas fotos de mi último viaje a Ecuador 🇪🇨.",
    body: "Actualmente, estoy expandiendo mis habilidades en <span class=\"font-semibold\">DevOps</span> — explorando entornos Linux, pipelines de CI/CD e infraestructura en la nube.<br /><br />Fuera del código, me encontrarás apoyando al Deportivo Cali, escuchando todo tipo de música (salsa, electrónica, rap y más), o jugando competitivamente Fortnite. Mi objetivo a largo plazo es <span class=\"font-bold\">liderar proyectos tecnológicos de impacto</span> y guiar equipos para construir productos que realmente mejoren la vida de las personas.",
  },
  contact: {
    badge: "Construyamos algo juntos",
    title:
      "Abierto a colaboraciones, trabajo freelance u oportunidades de tiempo completo. ¡No dudes en contactarme!",
  },
  form: {
    fullName: "Nombre Completo",
    namePlaceholder: "Juan Pérez",
    email: "Correo Electrónico",
    emailPlaceholder: "juanperez@gmail.com",
    projectType: "Tipo de Proyecto",
    projectTypes: {
      webDev: "Desarrollo Web",
      mobileApp: "Aplicación Móvil",
      uiux: "Diseño UI/UX",
      other: "Otro",
    },
    message: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    errors: {
      nameMin: "El nombre debe tener al menos 2 caracteres",
      emailInvalid: "Correo electrónico inválido",
      messageMin: "El mensaje debe tener al menos 10 caracteres",
    },
    success: "✅ ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
    error: "❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    submit: "Enviar Mensaje",
    submitting: "Enviando...",
  },
  footer: {
    madeWith: "Hecho con",
  },
} as const;
