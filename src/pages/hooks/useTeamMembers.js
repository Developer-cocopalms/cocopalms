// src/hooks/useTeamMembers.js
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;
        setTeamMembers(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching team members:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Separate CEO and other team members
  const ceo = teamMembers.find(member => member.is_ceo);
  const otherMembers = teamMembers.filter(member => !member.is_ceo);

  return { teamMembers, ceo, otherMembers, loading, error };
};