/* eslint-disable no-console */
import { z } from 'zod'
import ANNOUNCEMENTS, { announcementSchema, type Announcement } from '../src/constants/announcements'

function parseISODateToMidnightLocal(dateStr: string): Date {
  // YYYY-MM-DD -> local midnight
  const [y, m, d] = dateStr.split('-').map((v) => Number(v))
  return new Date(y, m - 1, d, 0, 0, 0, 0)
}

function endOfDay(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map((v) => Number(v))
  return new Date(y, m - 1, d, 23, 59, 59, 999)
}

function validateShapes(items: unknown[]): Announcement[] {
  const arraySchema = z.array(announcementSchema)
  return arraySchema.parse(items)
}

function checkNoOverlaps(items: Announcement[]): void {
  const ranges = items.map((a) => ({
    id: a.id,
    start: parseISODateToMidnightLocal(a.startDate),
    end: endOfDay(a.endDate),
  }))

  // sort by start ascending
  ranges.sort((a, b) => a.start.getTime() - b.start.getTime())

  const conflicts: Array<{ a: typeof ranges[number]; b: typeof ranges[number] }> = []
  for (let i = 0; i < ranges.length; i++) {
    for (let j = i + 1; j < ranges.length; j++) {
      const r1 = ranges[i]
      const r2 = ranges[j]
      // overlap if r1.start <= r2.end && r2.start <= r1.end
      if (r1.start.getTime() <= r2.end.getTime() && r2.start.getTime() <= r1.end.getTime()) {
        conflicts.push({ a: r1, b: r2 })
      }
    }
  }

  if (conflicts.length > 0) {
    const lines = conflicts.map((c) =>
      `- ${c.a.id} [${c.a.start.toISOString()} ~ ${c.a.end.toISOString()}] overlaps ${c.b.id} [${c.b.start.toISOString()} ~ ${c.b.end.toISOString()}]`,
    )
    console.error('Announcement schedule conflict detected:')
    for (const l of lines) console.error(l)
    process.exit(1)
  }
}

function main() {
  // Ensure IDs are unique
  const ids = new Set<string>()
  for (const a of ANNOUNCEMENTS) {
    if (ids.has(a.id)) {
      console.error(`Duplicate announcement id: ${a.id}`)
      process.exit(1)
    }
    ids.add(a.id)
  }

  const validated = validateShapes(ANNOUNCEMENTS)
  checkNoOverlaps(validated)
  console.log(`Validated ${validated.length} announcements. No overlaps.`)
}

main()


