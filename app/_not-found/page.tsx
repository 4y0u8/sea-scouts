import { useEffect } from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export const dynamic = 'error'