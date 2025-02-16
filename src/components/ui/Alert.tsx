interface AlertProps {
    children: React.ReactNode;
    variant?: 'default' | 'destructive';
    className?: string;
  }
  
  interface AlertDescriptionProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Alert: React.FC<AlertProps> = ({ 
    children, 
    variant = 'default',
    className = '' 
  }) => {
    const baseStyles = "rounded-lg p-4 mb-4";
    const variantStyles = {
      default: "bg-blue-50 text-blue-700 border border-blue-200",
      destructive: "bg-red-50 text-red-700 border border-red-200"
    };
  
    return (
      <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {children}
      </div>
    );
  };
  
  export const AlertDescription: React.FC<AlertDescriptionProps> = ({ 
    children,
    className = ''
  }) => {
    return (
      <div className={`text-sm ${className}`}>
        {children}
      </div>
    );
  };