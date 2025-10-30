import { z } from 'zod'

export type Announcement = {
  id: string
  startDate: string
  endDate: string
  message: string
  href?: string
  visibleDuring?: { from?: string; to?: string }
}

export const announcementSchema = z.object({
  id: z.string().min(1),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/u, 'startDate must be ISO YYYY-MM-DD'),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/u, 'endDate must be ISO YYYY-MM-DD'),
  message: z.string().min(1).max(140),
  href: z.string().url().or(z.string().startsWith('/')).optional(),
  visibleDuring: z
    .object({
      from: z.string().regex(/^\d{2}:\d{2}$/u, 'HH:MM').optional(),
      to: z.string().regex(/^\d{2}:\d{2}$/u, 'HH:MM').optional(),
    })
    .optional(),
})

export const ANNOUNCEMENTS: Announcement[] = [
  // Example (keep commented for reference)
  // {
  //   id: 'maintenance-2025-11-01',
  //   startDate: '2025-11-01',
  //   endDate: '2025-11-03',
  //   message: 'Scheduled site maintenance Nov 1–3. Read more.',
  //   href: '/posts/maintenance-details',
  // },
  {
    id: 'maintenance-2025-11-01',
    startDate: '2025-11-01',
    endDate: '2025-12-16',
    message: 'Have you seen my new project ? Check it out, you might like it!',
    href: 'https://bayanflow.netlify.app',
  },
]

export default ANNOUNCEMENTS


