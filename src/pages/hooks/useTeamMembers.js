// src/hooks/useTeamMembers.js
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select(`
            *,
            name_ar,
            position_ar
          `)
          .order('created_at', { ascending: true });

        if (error) throw error;

        // Generate public URLs for images
        const membersWithImageUrls = await Promise.all(
          data.map(async (member) => {
            if (member.image_storage_path) {
              const { data: urlData } = supabase.storage
                .from('team-images')
                .getPublicUrl(member.image_storage_path);
              
              return {
                ...member,
                image_url: urlData.publicUrl
              };
            }
            return member;
          })
        );

        setTeamMembers(membersWithImageUrls);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Separate CEO and other team members
  const ceo = teamMembers.find(member => member.is_ceo);
  const otherMembers = teamMembers.filter(member => !member.is_ceo);

  return { teamMembers, ceo, otherMembers, loading };
};