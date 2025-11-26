import { useState, useEffect } from "react";
import { FiCheckCircle, FiXCircle, FiInfo, FiAlertTriangle } from "react-icons/fi";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info" | "warning";  
  duration?: number;  
  onDismiss: () => void; 
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 5000, onDismiss }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDismiss(); 
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  if (!visible) return null;

  const getToastStyle = () => {
    switch (type) {
      case "success":
        return "bg-[#41BC3F] text-white border-green-700";
      case "error":
        return "bg-red-600 text-white border-red-700";
      case "info":
        return "bg-blue-600 text-white border-blue-700";
      case "warning":
        return "bg-yellow-600 text-white border-yellow-700";
      default:
        return "bg-gray-600 text-white border-gray-700";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FiCheckCircle className="text-white text-xl" />;
      case "error":
        return <FiXCircle className="text-white text-xl" />;
      case "info":
        return <FiInfo className="text-white text-xl" />;
      case "warning":
        return <FiAlertTriangle className="text-white text-xl" />;
      default:
        return <FiInfo className="text-white text-xl" />;
    }
  };

  return (
    <div className={`fixed top-24 right-5 z-50 w-80 p-4 rounded-lg  shadow-md transition-all duration-300 ease-in-out ${getToastStyle()}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {getIcon()}
          <span>{message}</span>
        </div>
        <button
          onClick={() => { setVisible(false); onDismiss(); }}
          className="ml-4 text-white hover:text-opacity-75"
        >
          <FiXCircle className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
