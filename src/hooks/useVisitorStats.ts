import { useState, useEffect } from 'react'

interface VisitorStats {
  total: number
  active: number
}



export function useVisitorStats() {
  const [stats, setStats] = useState<VisitorStats>({ total: 0, active: 0 })

  useEffect(() => {
    // Proper logic using local browser storage since there is no backend server
    const STORAGE_KEY = 'bwf_total_visits'
    const SESSION_KEY = 'bwf_session_active'

    // Get total visits from local storage
    let visits = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)
    
    // Only increment total visits if it's a new session
    const isNewSession = !sessionStorage.getItem(SESSION_KEY)
    if (isNewSession) {
      visits += 1
      localStorage.setItem(STORAGE_KEY, visits.toString())
      sessionStorage.setItem(SESSION_KEY, '1')
    }

    setStats({ total: visits, active: 1 })
  }, [])

  return stats
}
