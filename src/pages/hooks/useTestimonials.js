// hooks/useTestimonials.js
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; // Adjust path as needed

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('testimonials')
        .select(`
          id,
          quote,
          quote_ar,
          author_name,
          author_name_ar,
          author_position,
          author_position_ar,
          logo_url,
          logo_storage_path,
          logo_file_name,
          display_order,
          is_active,
          created_at,
          updated_at,
          file_size,
          upload_date
        `)
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) {
        throw error;
      }

      // Add debug logging
      console.log('Fetched testimonials:', data);
      if (data && data.length > 0) {
        console.log('Sample testimonial with Arabic fields:', {
          quote: data[0].quote,
          quote_ar: data[0].quote_ar,
          author_name: data[0].author_name,
          author_name_ar: data[0].author_name_ar
        });
      }

      setTestimonials(data || []);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError(err.message);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return {
    testimonials,
    loading,
    error,
    refetch: fetchTestimonials
  };
};