// src/hooks/useFeatures.js
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

export const useFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('features')
          .select('*')
          .eq('status', true)
          .order('display_order', { ascending: true });

        if (error) throw error;
        setFeatures(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching features:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  return { features, loading, error };
};