import { supabase } from '../../supabaseClient'; // Adjust path as needed

export const getPageKeywords = async (pageSlug) => {
  try {
    const { data, error } = await supabase
      .from('page_keywords')
      .select('keywords')
      .eq('page_slug', pageSlug)
      .single();
    
    if (error) throw error;
    return data?.keywords || '';
  } catch (error) {
    console.error('Error fetching keywords:', error);
    return '';
  }
};