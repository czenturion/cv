import photo from '@/assets/photo.jpg'
import type { ResumeContent } from './types'

export const ru: ResumeContent = {
  name: 'Арефьев Максим',
  title: 'Frontend-разработчик · React, TypeScript',
  photo,
  location: 'Астана, Казахстан',
  workPermit: 'Гражданин РФ (ЕАЭС): разрешение на работу в Казахстане не требуется',
  contacts: [
    { label: '+7 700 296 84 96', href: 'tel:+77002968496' },
    { label: 'czenturijon@gmail.com', href: 'mailto:czenturijon@gmail.com' },
    { label: 'Telegram: @czenturion', href: 'https://t.me/czenturion' },
  ],
  links: [
    { label: 'github.com/czenturion', href: 'https://github.com/czenturion' },
    { label: 'czenturion.github.io/cv', href: 'https://czenturion.github.io/cv/' },
  ],
  headings: {
    about: 'О себе',
    skills: 'Навыки',
    projects: 'Проекты',
    experience: 'Опыт во фронтенде',
    otherExperience: 'Другой опыт',
    education: 'Образование',
    achievements: 'Достижения',
    languages: 'Языки',
  },
  backToSite: '← На сайт',
  savePdf: 'Сохранить в PDF',
  about:
    'Frontend-разработчик (React, TypeScript) с 2022 года. Сам нашёл и внедрил react-konva для заказчика, в команде делал OAuth на Next.js. Инженерный бэкграунд: призёр WorldSkills по мобильной робототехнике, прошивка микроконтроллеров, электроника.',
  skills: [
    {
      title: 'Основное',
      items:
        'JavaScript, TypeScript, React, Next.js, Redux Toolkit, RTK Query, Zustand, React Hook Form, Zod',
    },
    {
      title: 'Стили и UI',
      items: 'Tailwind CSS, SCSS, CSS Modules, shadcn/ui, Radix UI, Material UI, Storybook, Figma',
    },
    {
      title: 'Инструменты',
      items:
        'Git, Vite, ESLint, Prettier, Jest, Playwright, Docker, GitHub Actions, Vercel, REST API, OAuth',
    },
  ],
  projects: [
    {
      title: 'WhatsApp Client',
      description:
        'Веб-клиент на GREEN-API: сообщения в реальном времени через long polling, архитектура Feature-Sliced Design. Задеплоен на Vercel, README с инструкцией запуска.',
      stack: 'React 19, TypeScript, Zustand, Tailwind CSS 4, shadcn/ui',
      links: [
        { label: 'демо', href: 'https://my-whatsapp-client.vercel.app' },
        { label: 'код', href: 'https://github.com/czenturion/my-whatsapp-client' },
      ],
    },
    {
      title: 'Product Form',
      description:
        'Форма карточки товара для TableCRM API: категории из API с поиском, валидация схемой.',
      stack: 'Next.js, TypeScript, React Hook Form, Zod, shadcn/ui',
      links: [
        {
          label: 'демо',
          href: 'https://product-form-sepia.vercel.app/dashboard/products/new',
        },
        { label: 'код', href: 'https://github.com/czenturion/product-form' },
      ],
    },
    {
      title: 'Idle Game',
      description: 'Браузерная idle-RPG: игровой цикл, боссы, квесты, перерождение.',
      stack: 'React, JavaScript, Zustand',
      links: [{ label: 'код', href: 'https://github.com/czenturion/idle-game' }],
    },
  ],
  experience: [
    {
      company: 'it-incubator',
      role: 'Frontend-разработчик, стажировка',
      period: 'июн 2023 — авг 2024',
      summary:
        'Командная разработка Inctagram, аналога Instagram (frontend, backend, QA, PM, тимлид).',
      points: [
        'Вход через Google и GitHub (OAuth): получение токена, сохранение в Redux, переход в профиль',
        'Восстановление пароля: форма, схема Zod, запросы к API',
        'UI-компоненты reCAPTCHA и TextArea с историями в Storybook, обёртка для React Hook Form',
        'Ревью и мерж PR коллег',
      ],
      stack: 'Next.js, TypeScript, Redux Toolkit, RTK Query, Storybook, Feature-Sliced Design',
    },
    {
      company: 'Фриланс',
      role: 'Frontend-разработчик',
      period: 'авг 2022 — мар 2023',
      points: [
        'Сервис для заведений: нашёл и внедрил react-konva для редактора схемы зала (столы, стулья, перегородки, декор). Раньше это делали вручную, после этого заказчик переписал на библиотеку часть сервиса',
        'Сайт строительной компании: переписал калькулятор стоимости покрытия полимочевиной и пенополиуретаном по площади (React, MobX)',
      ],
    },
  ],
  otherExperience: [
    {
      company: 'Нртк Капс',
      role: 'Техник по электронике',
      period: 'июн 2025 — сен 2026',
      summary:
        'Производство ленточных транспортёров: прошивка и настройка плат управления (Arduino Nano, Raspberry Pi, FlipSky, LoRa), пайка и ремонт плат, тестирование оборудования.',
    },
  ],
  education: [
    {
      place: 'Байкальский колледж технологий, Улан-Удэ',
      period: '2022 — 2026, заочно',
      details:
        '09.02.07 «Информационные системы и программирование», специалист по информационным системам',
    },
    {
      place: 'ВКИ НГУ, Новосибирск — робототехника, 2 курса',
      period: '2017 — 2019',
    },
  ],
  achievements: [
    '2-е место, Открытый вузовский чемпионат НГУ по стандартам WorldSkills, «Мобильная робототехника», 2018. Программист команды: NI myRIO, LabVIEW, управление по Wi-Fi',
    '3-е место, городской робобиатлон, 2017. Конструктор робота на LEGO EV3',
  ],
  languages: 'Русский — родной · Английский — B2 (языковая школа в Дублине, Ирландия)',
}
