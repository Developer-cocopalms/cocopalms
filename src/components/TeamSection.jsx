import React from 'react';
import { useTeamMembers } from '../pages/hooks/useTeamMembers';

// Import static assets (fallback images)
import teamMember0 from '../assets/team/fazil.png';
import teamMember1 from '../assets/team/john-removebg-preview.png';
import teamMember2 from '../assets/team/Salma-removebg-preview.png';
import teamMember3 from '../assets/team/cropped-Hasna-removebg-preview.png';
import teamMember4 from '../assets/team/latheef.png';

const TeamSection = () => {
  // Dynamic data hooks
  const { teamMembers, ceo, otherMembers, loading: teamLoading } = useTeamMembers();

  // Fallback data for team members if dynamic data isn't available
  const fallbackTeamMembers = [
    {
      image: teamMember0,
      name: "Fazil Parvez",
      position: "General Manager"
    },
    {
      image: teamMember1,
      name: "James Almeda",
      position: "IT Operations & Manager"
    },
    {
      image: teamMember2,
      name: "Salma Abdul Rahman",
      position: "Project Manager"
    },
    {
      image: teamMember3,
      name: "Hasna Kalady",
      position: "Program Developer"
    }
  ];

  // Function to handle image error and set fallback
  const handleImageError = (e, index = 0, isCeo = false) => {
    // Set fallback image based on index or default to first fallback
    const fallbackImage = fallbackTeamMembers[index]?.image || teamMember0;
    e.target.src = fallbackImage;
  };

  // Show loading state
  if (teamLoading) {
    return (
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 bg-white">
        <div className="text-center py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <p className="text-gray-500">Loading team members...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Meet our Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Run your entire business with Cocopalms unified cloud software
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* CEO Profile - Center with Larger Size */}
        {ceo && (
          <div className="flex justify-center mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                {/* Increased from w-32 h-32 to w-56 h-56 */}
                <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-[#14b8a6] ring-opacity-30 group-hover:ring-[#0d9488] group-hover:ring-opacity-60 transition duration-500">
                  <img 
                    src={ceo.image_url || ceo.image || teamMember0}
                    alt={ceo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => handleImageError(e, 0, true)}
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{ceo.name}</h3>
              <p className="text-[#14b8a6] font-semibold">{ceo.position}</p>
            </div>
          </div>
        )}

        {/* Team Members in Circular Layout - Same Larger Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {otherMembers && otherMembers.length > 0 ? (
            // Use dynamic data if available
            otherMembers.map((member, index) => (
              <div key={member.id || index} className="text-center group">
                {/* Increased from w-32 h-32 to w-48 h-48 to match CEO */}
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl mb-4 ring-2 ring-gray-200 group-hover:ring-teal-400 group-hover:shadow-2xl transition duration-500 transform group-hover:scale-105">
                  <img 
                    src={member.image_url || member.image || fallbackTeamMembers[index]?.image || teamMember0}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => handleImageError(e, index)}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            ))
          ) : (
            // Fallback to static data
            fallbackTeamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl mb-4 ring-2 ring-gray-200 group-hover:ring-teal-400 group-hover:shadow-2xl transition duration-500 transform group-hover:scale-105">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => handleImageError(e, index)}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;