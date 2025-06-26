import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Users, 
  ShoppingCart, 
  Building2, 
  Utensils,
  UtensilsCrossed,
  Code,
  Laptop,
  Globe,
  Database,
  Server,
  Zap,
  Home,
  BarChart3,
  ShoppingBag
} from 'lucide-react';

// Icon mapping object - combines icons from both versions
const iconMap = {
  // From your original version
  Monitor,
  Smartphone,
  Users,
  ShoppingCart,
  Building2,
  Utensils,
  Code,
  Laptop,
  Globe,
  Database,
  Server,
  Zap,
  
  // From the second version
  UtensilsCrossed,
  Home,
  BarChart3,
  ShoppingBag
};

/**
 * DynamicIcon Component
 * 
 * @param {string} iconName - Name of the icon from lucide-react
 * @param {number|string} size - Size of the icon (number for pixels or string like "w-8 h-8")
 * @param {string} className - Additional CSS classes (defaults to "w-8 h-8" if size is not provided)
 * @param {string} fallbackIcon - Icon to use if iconName is not found (default: "Monitor")
 */
const DynamicIcon = ({ 
  iconName, 
  size, 
  className = "w-8 h-8",
  fallbackIcon = "Monitor",
  ...otherProps
}) => {
  const IconComponent = iconMap[iconName];
  const FallbackIcon = iconMap[fallbackIcon] || iconMap.Monitor;
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found. Using ${fallbackIcon} as fallback.`);
  }
  
  const SelectedIcon = IconComponent || FallbackIcon;
  
  // Handle size prop - if provided as number, use size prop; if string, merge with className
  const iconProps = {
    ...(typeof size === 'number' && { size }),
    className: typeof size === 'string' ? `${size} ${className}`.trim() : className,
    ...otherProps
  };
  
  return <SelectedIcon {...iconProps} />;
};

export default DynamicIcon;