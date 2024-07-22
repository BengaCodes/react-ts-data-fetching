import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [err, setErr] = useState('')

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = async () => {
    try {
      let res = await axios.get(url)
      const data: T = res.data
      setData(data)
    } catch (error) {
      setErr(`Failed to fetch requested data ${error}`)
    }
  }

  return {
    data,
    err
  }
}

export default useFetch
