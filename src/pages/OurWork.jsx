import React from 'react';

const OurWork = () => {
  const stats = [
    {
      number: "150+",
      label: "Resource\nStrength"
    },
    {
      number: "2,000+",
      label: "Total\nProjects"
    },
    {
      number: "800+",
      label: "Satisfied\nClients"
    },
    {
      number: "20+",
      label: "Countries\nServed"
    }
  ];

  const portfolioItems = [
    {
      category: "Mobile Application",
      title: "DietBux",
      description: "A comprehensive nutrition tracking and diet management mobile application that helps users maintain healthy eating habits with personalized meal plans.",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Firebase", "Health & Fitness"]
    },
    {
      category: "Web Application",
      title: "DietValue",
      description: "An advanced web platform for nutritionists and dietitians to create customized diet plans and track client progress with detailed analytics.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "Healthcare"]
    },
    {
      category: "E-commerce Platform",
      title: "FreshMart Online",
      description: "A complete e-commerce solution for grocery delivery with real-time inventory management and seamless payment integration.",
      image: "/api/placeholder/400/300",
      tags: ["Shopify", "Payment Gateway", "Logistics"]
    },
    {
      category: "Corporate Website",
      title: "TechVision Solutions",
      description: "A modern corporate website with dynamic content management system and lead generation capabilities for a technology consulting firm.",
      image: "/api/placeholder/400/300",
      tags: ["WordPress", "CMS", "Corporate"]
    },
    {
      category: "Mobile Application",
      title: "FitTracker Pro",
      description: "A fitness tracking mobile app with workout routines, progress monitoring, and social features for fitness enthusiasts.",
      image: "/api/placeholder/400/300",
      tags: ["Flutter", "Firebase", "Fitness"]
    },
    {
      category: "E-commerce Platform",
      title: "StyleHub Fashion",
      description: "A fashion e-commerce platform with AR try-on features, size recommendations, and personalized shopping experience.",
      image: "/api/placeholder/400/300",
      tags: ["Magento", "AR/VR", "Fashion"]
    }
  ];

  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized performance."
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer analytics."
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experience."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern digital applications."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Stats */}
      <section className="bg-custom-teal py-16 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              {/* Vertical Line */}
              <div className="w-1 bg-white h-32 mt-2 flex-shrink-0"></div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  We Challenge Ourselves Each Day to Deliver Results Which Amplify Growth
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-200 max-w-4xl">
                  Our objective is to transform businesses and deliver digital experiences crafted for the targeted audience.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                {/* Vertical Divider - Hidden on mobile, visible on large screens */}
                <div className="relative">
                  {index > 0 && (
                    <div className="hidden lg:block absolute -left-6 top-0 w-px h-24 bg-white/30"></div>
                  )}
                  
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg sm:text-xl text-gray-200 whitespace-pre-line leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Work Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <div className="w-1 bg-custom-teal h-24 mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Our Work
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
                At CocoPalms, we specialize in creating digital solutions that drive business growth. From responsive websites to complex mobile applications, our team delivers cutting-edge technology solutions tailored to meet your specific business needs. We combine creativity with technical expertise to build platforms that not only look great but perform exceptionally.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <div className="w-1 bg-custom-teal h-24 mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Explore our showcase of innovative digital solutions that have transformed businesses across various industries.
              </p>
            </div>
          </div>

          {/* DietBux Project */}
          <div className="mb-20">
            {/* Project Title */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                DietBux
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive nutrition tracking and diet management mobile application that revolutionizes how users maintain healthy eating habits with personalized meal plans, calorie tracking, and expert nutritionist guidance.
              </p>
            </div>

            {/* Feature 1 - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Smart Nutrition Tracking
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Advanced barcode scanning and food recognition technology allows users to effortlessly log their meals. Our extensive database of over 1 million food items ensures accurate nutritional information, making healthy eating simple and accessible for everyone.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Barcode scanning for instant food logging</li>
                  <li>• AI-powered food recognition</li>
                  <li>• Comprehensive nutritional database</li>
                  <li>• Real-time calorie tracking</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="DietBux Nutrition Tracking"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Personalized Meal Planning
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our AI-driven meal planning system creates customized weekly meal plans based on your dietary preferences, health goals, and lifestyle. Whether you're vegan, keto, or have specific allergies, DietBux adapts to your unique needs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• AI-generated meal plans</li>
                  <li>• Dietary restriction support</li>
                  <li>• Shopping list generation</li>
                  <li>• Recipe recommendations</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="DietBux Meal Planning"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3 - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Progress Tracking & Analytics
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive dashboard with detailed analytics helps users visualize their progress over time. Track weight changes, nutrient intake, and health metrics with beautiful charts and insights that motivate continued success.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Interactive progress dashboard</li>
                  <li>• Weight and health metrics tracking</li>
                  <li>• Weekly and monthly reports</li>
                  <li>• Goal achievement badges</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="DietBux Analytics"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DietValue Project */}
          <div className="mb-20">
            {/* Project Title */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                DietValue
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                An advanced web platform designed specifically for nutritionists and dietitians to create customized diet plans, manage client relationships, and track progress with detailed analytics and professional tools.
              </p>
            </div>

            {/* Feature 1 - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Professional Client Management
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Streamlined client management system allows nutritionists to maintain detailed client profiles, track consultation history, and manage appointments. Secure patient data handling ensures compliance with healthcare regulations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Comprehensive client profiles</li>
                  <li>• Appointment scheduling system</li>
                  <li>• Secure data encryption</li>
                  <li>• Consultation history tracking</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="DietValue Client Management"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advanced Diet Plan Creator
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional-grade tools for creating detailed, customized diet plans with precise nutritional calculations. Template library and drag-and-drop interface make plan creation efficient while maintaining scientific accuracy.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Drag-and-drop meal planning</li>
                  <li>• Nutritional calculation engine</li>
                  <li>• Professional templates library</li>
                  <li>• Custom recipe integration</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="DietValue Diet Planning"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3 - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Analytics & Reporting Dashboard
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive analytics dashboard provides nutritionists with detailed insights into client progress, plan effectiveness, and business metrics. Generate professional reports for clients and track success rates across your practice.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Client progress analytics</li>
                  <li>• Professional report generation</li>
                  <li>• Business performance metrics</li>
                  <li>• Success rate tracking</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="DietValue Analytics"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Other Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.slice(2).map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-custom-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-custom-teal py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Let's collaborate to bring your digital vision to life with innovative solutions that drive results.
          </p>
          <button className="bg-white text-custom-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>

     
    </div>
  );
};

export default OurWork;