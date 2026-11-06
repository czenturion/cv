import { LinkedinIcon, MailIcon, TelegramIcon } from '@/components/ui/LineIcons'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { profile } from '@/data/profile'

export const contacts = [
  {
    title: 'Telegram',
    value: '@czenturion',
    href: 'https://t.me/czenturion',
    icon: TelegramIcon,
  },
  {
    title: 'Email',
    value: 'czenturijon@gmail.com',
    href: 'mailto:czenturijon@gmail.com',
    icon: MailIcon,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/czenturion',
    href: 'https://www.linkedin.com/in/czenturion/',
    icon: LinkedinIcon,
  },
  { title: 'GitHub', value: 'github.com/czenturion', href: profile.github, icon: GithubIcon },
]
