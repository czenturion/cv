import idleGame1 from '@/assets/projects/idle-game-1.jpg'
import idleGame2 from '@/assets/projects/idle-game-2.jpg'
import idleGame3 from '@/assets/projects/idle-game-3.jpg'
import inctagram1 from '@/assets/projects/inctagram-1.jpg'
import inctagram2 from '@/assets/projects/inctagram-2.jpg'
import orderBurger1 from '@/assets/projects/order-a-burger-1.jpg'
import orderBurger2 from '@/assets/projects/order-a-burger-2.jpg'
import orderBurger3 from '@/assets/projects/order-a-burger-3.jpg'
import productForm1 from '@/assets/projects/product-form-1.jpg'
import productForm2 from '@/assets/projects/product-form-2.jpg'
import whatsapp1 from '@/assets/projects/whatsapp-1.jpg'
import whatsapp2 from '@/assets/projects/whatsapp-2.jpg'
import whatsapp3 from '@/assets/projects/whatsapp-3.jpg'

export type Screenshot = {
  src: string
  alt: string
}

export type Project = {
  title: string
  task: string
  done: string[]
  stack: string[]
  images: Screenshot[]
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
    images: [
      { src: whatsapp3, alt: 'WhatsApp Client: chat with sent and received messages' },
      { src: whatsapp1, alt: 'WhatsApp Client: sign-in form with GREEN-API credentials' },
      { src: whatsapp2, alt: 'WhatsApp Client: new chat dialog with a phone number field' },
    ],
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
    images: [
      { src: inctagram1, alt: 'Inctagram: profile settings form' },
      { src: inctagram2, alt: 'Inctagram: post description with a 500-character limit' },
    ],
    code: 'https://github.com/InctaRepo/Inctagram',
  },
  {
    title: 'Product Form',
    task: 'Product card form for the TableCRM API',
    done: [
      'Creates products in TableCRM through its REST API',
      'Categories loaded from the API, with search in the dropdown',
      'Validation with a Zod schema and React Hook Form',
    ],
    stack: ['Next.js', 'TypeScript', 'React Hook Form', 'Zod', 'shadcn/ui'],
    images: [
      { src: productForm1, alt: 'Product Form: main product information fields' },
      { src: productForm2, alt: 'Product Form: SEO and location fields with the submit button' },
    ],
    demo: 'https://product-form-sepia.vercel.app/dashboard/products/new',
    code: 'https://github.com/czenturion/product-form',
  },
  {
    title: 'Idle Game',
    task: 'Browser idle RPG',
    done: [
      'Game loop, bosses, quests and rebirth',
      'Game state stored in Zustand',
      'Custom visual style',
    ],
    stack: ['React', 'JavaScript', 'Zustand'],
    images: [
      { src: idleGame1, alt: 'Idle Game: research screen with character upgrades' },
      { src: idleGame2, alt: 'Idle Game: boss fight with the rebirth option' },
      { src: idleGame3, alt: 'Idle Game: quests with progress bars and rewards' },
    ],
    code: 'https://github.com/czenturion/idle-game',
  },
  {
    title: 'Order a Burger',
    task: 'Burger ordering app',
    done: ['Real-time menu on Firebase', 'Deployed on Vercel'],
    stack: ['React', 'JavaScript', 'Firebase', 'Stylus'],
    images: [
      { src: orderBurger1, alt: 'Order a Burger: menu with burgers and the order summary' },
      { src: orderBurger2, alt: 'Order a Burger: menu, order and menu management panel' },
      { src: orderBurger3, alt: 'Order a Burger: restaurant selection screen' },
    ],
    demo: 'https://hot-burgers-nine.vercel.app/',
    code: 'https://github.com/czenturion/order-a-burger',
  },
]
