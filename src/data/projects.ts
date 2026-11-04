type Project = {
  title: string
  task: string
  done: string[]
  stack: string[]
  demo?: string
  code: string
}

export const projects: Project[] = [
  {
    title: 'WhatsApp Client',
    task: 'WhatsApp web client built on top of GREEN-API',
    done: [
      'Receiving messages in real time with long polling',
      'Feature-Sliced Design architecture',
      'Detailed README with setup guide',
    ],
    stack: ['React 19', 'TypeScript', 'Zustand', 'Tailwind CSS 4', 'shadcn/ui'],
    demo: 'https://my-whatsapp-client.vercel.app',
    code: 'https://github.com/czenturion/my-whatsapp-client',
  },
  {
    title: 'Inctagram',
    task: 'Instagram analogue built by a team of developers',
    done: [
      'Sign-in with Google and GitHub (OAuth)',
      'Password recovery flow with Zod validation',
      'reCAPTCHA and TextArea UI components with Storybook stories',
    ],
    stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Storybook'],
    code: 'https://github.com/InctaRepo/Inctagram',
  },
  {
    title: 'Product Form',
    task: 'Product card form for the TableCRM API',
    done: ['Form validation with a Zod schema', 'Deployed on Vercel'],
    stack: ['Next.js', 'TypeScript', 'React Hook Form', 'Zod', 'shadcn/ui'],
    demo: 'https://product-form-sepia.vercel.app/dashboard/products/new',
    code: 'https://github.com/czenturion/product-form',
  },
  {
    title: 'Idle Game',
    task: 'Browser idle RPG',
    done: ['Game loop, bosses and quests', 'Game state stored in Zustand', 'Custom visual style'],
    stack: ['React', 'JavaScript', 'Zustand'],
    code: 'https://github.com/czenturion/idle-game',
  },
  {
    title: 'Order a Burger',
    task: 'Burger ordering app',
    done: ['Real-time menu on Firebase', 'Deployed on Vercel'],
    stack: ['React', 'JavaScript', 'Firebase', 'Stylus'],
    demo: 'https://hot-burgers-nine.vercel.app/',
    code: 'https://github.com/czenturion/order-a-burger',
  },
]
