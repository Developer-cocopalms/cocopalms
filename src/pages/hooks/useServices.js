import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient';



export const useServices = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true })

      if (error) throw error

      setServices(data || [])
    } catch (error) {
      setError(error.message)
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  return { services, loading, error, refetch: fetchServices }
}