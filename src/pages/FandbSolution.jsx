import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Clock, 
  CreditCard, 
  Smartphone, 
  Truck, 
  Star, 
  ChefHat, 
  Package, 
  BarChart3, 
 
  ArrowRight,
  Zap,
  Store,
  Receipt,
  Bell,
  QrCode,
  Shield
  } from 'lucide-react';
import { Helmet } from 'react-helmet';
// Import images
import coco1 from '../assets/coco1.png';
import coco2 from '../assets/coco2.png';
import coco3 from '../assets/coco3.png';
import coco4 from '../assets/coco4.png';

const FandbSolution = () => {
  const platformFeatures = [
    {
      icon: UtensilsCrossed,
      title: "Digital Menu Management",
      description: "Dynamic menu creation with real-time updates, customizable categories, and seasonal offerings management.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Online Ordering System",
      description: "Seamless online ordering with real-time order tracking and automated kitchen notifications.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      title: "Integrated Payment Gateway",
      description: "Multiple payment options including cards, digital wallets, and cash with automated reconciliation.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Truck,
      title: "Delivery Management",
      description: "Efficient delivery tracking system with real-time GPS monitoring and delivery optimization.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive customer profiles with order history, preferences, and loyalty program integration.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed sales analytics, performance metrics, and business intelligence dashboards.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: QrCode,
      title: "QR Code Integration",
      description: "Contactless ordering through QR codes for dine-in customers with table service integration.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Instant notifications for new orders, delivery updates, and customer feedback management.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Receipt,
      title: "Inventory Management",
      description: "Smart inventory tracking with low-stock alerts and automated supplier notifications.",
      color: "bg-red-100 text-red-600"
    }
  ];

  const serviceTypes = [
    {
      icon: Store,
      title: "Restaurant Owners",
      description: "Streamline operations, increase revenue, and enhance customer experience with our comprehensive platform.",
      color: "bg-blue-500"
    },
    {
      icon: ChefHat,
      title: "Food & Beverage Chains",
      description: "Manage multiple locations with centralized control, standardized processes, and unified reporting.",
      color: "bg-green-500"
    },
    {
      icon: Smartphone,
      title: "Customers",
      description: "Enjoy seamless ordering experience with multiple options for delivery, pickup, and dine-in services.",
      color: "bg-purple-500"
    }
  ];

  const platformScreenshots = [
    {
      src: coco1,
      alt: "Restaurant Management Dashboard",
      title: "Comprehensive Admin Dashboard",
      description: "Complete overview of restaurant operations with real-time analytics and performance metrics"
    },
    {
      src: coco2,
      alt: "Online Ordering System",
      title: "Seamless Online Ordering",
      description: "User-friendly ordering interface with menu customization and payment integration"
    },
    {
      src: coco3,
      alt: "Menu Management System",
      title: "Dynamic Menu Management",
      description: "Easy-to-use menu creation and management system with real-time updates"
    },
    {
      src: coco4,
      alt: "Customer Experience Portal",
      title: "Enhanced Customer Experience",
      description: "Streamlined customer interface for orders, tracking, and feedback management"
    }
  ];

  const deliveryOptions = [
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fast and reliable delivery service with real-time tracking"
    },
    {
      icon: Package,
      title: "Pickup Service",
      description: "Convenient pickup option with order-ready notifications"
    },
    {
      icon: UtensilsCrossed,
      title: "Dine-in Experience",
      description: "Enhanced in-restaurant experience with QR code ordering"
    }
  ];

  return (
    <div className="min-h-screen">

<Helmet>
        
<link rel="canonical" href="https://cocopalms.io/what-we-do/fandb-solution"/>
        </Helmet>
      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            F&B Solution
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
           Empowering the F&B Industry with Bespoke Software Solutions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            Restaurant management system designed to simplify operations and enhance customer delivery, pickup and dining experience
          </p>
          
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Platform Overview
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive F&B Solution revolutionizes restaurant operations by integrating ordering, payment, delivery, and customer management into one powerful platform. From small cafes to large restaurant chains, our system adapts to your business needs while enhancing the overall dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformScreenshots.map((screenshot, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{screenshot.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Multiple Service Options
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Flexible ordering and fulfillment options designed to meet every customer preference and enhance their dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 text-center">
                  <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive suite of tools designed to streamline restaurant operations and enhance customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform is designed to meet the diverse needs of the food and beverage industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                  <div className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 text-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Increased Revenue</h3>
                  <p className="text-gray-600">Boost sales with streamlined ordering processes and expanded customer reach through multiple service channels.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h3>
                  <p className="text-gray-600">Reduce manual work with automated order processing, inventory management, and customer communications.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Customer Experience</h3>
                  <p className="text-gray-600">Provide seamless ordering experience with real-time tracking and multiple payment options.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Insights</h3>
                  <p className="text-gray-600">Make informed decisions with comprehensive analytics and reporting on sales, customer behavior, and operations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Transactions</h3>
                  <p className="text-gray-600">Ensure safe and secure payment processing with integrated fraud protection and compliance features.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solution</h3>
                  <p className="text-gray-600">Grow your business with a platform that scales from single locations to multi-chain operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Impact Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="text-5xl font-bold text-teal-600 mb-4">200+</div>
              <div className="text-gray-700 font-semibold text-lg">Restaurants Served</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-4">50K+</div>
              <div className="text-gray-700 font-semibold text-lg">Orders Processed</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-4">15K+</div>
              <div className="text-gray-700 font-semibold text-lg">Happy Customers</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl">
              <div className="text-5xl font-bold text-orange-600 mb-4">99%</div>
              <div className="text-gray-700 font-semibold text-lg">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant Operations?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join hundreds of restaurants already using our platform to streamline operations and enhance customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FandbSolution;