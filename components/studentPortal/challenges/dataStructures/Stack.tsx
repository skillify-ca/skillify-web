import React, { useEffect, useState } from 'react';

export interface StackProps {
  items: string[];
}

interface StackItem {
  value: string;
  id: string;
  isNew?: boolean;
  isRemoving?: boolean;
  isActive?: boolean;
}

const Stack = ({ items }: StackProps) => {
  const [stackItems, setStackItems] = useState<StackItem[]>([]);

  useEffect(() => {
    // Convert items to stack items with IDs
    const newItems: StackItem[] = items.map((value, index) => ({
      value,
      id: `${value}-${index}-${Date.now()}`,
      isNew: false,
      isRemoving: false,
      isActive: false,
    }));

    setStackItems((prevItems) => {
      // Detect changes for animations
      const updatedItems = [...newItems];
      
      // Mark new items (items that weren't in previous state)
      prevItems.forEach((prevItem) => {
        const exists = newItems.some((newItem) => newItem.value === prevItem.value);
        if (!exists) {
          // This item was removed
          const removingItem = { ...prevItem, isRemoving: true };
          setStackItems((current) => [...current.filter(item => item.id !== prevItem.id), removingItem]);
          
          // Remove completely after animation
          setTimeout(() => {
            setStackItems((current) => current.filter(item => item.id !== removingItem.id));
          }, 300);
        }
      });

      // Mark newly added items
      updatedItems.forEach((newItem) => {
        const existed = prevItems.some((prevItem) => prevItem.value === newItem.value);
        if (!existed) {
          newItem.isNew = true;
          newItem.isActive = true;
          
          // Remove new/active status after animation
          setTimeout(() => {
            setStackItems((current) =>
              current.map((item) =>
                item.id === newItem.id
                  ? { ...item, isNew: false, isActive: false }
                  : item
              )
            );
          }, 300);
        }
      });

      return updatedItems;
    });
  }, [items]);

  return (
    <div className="flex flex-col items-center w-32 gap-0 pt-8 border-b-2 border-l-2 border-r-2 border-gray-800 bg-white rounded-b-lg transition-all duration-300 ease-in-out"
         style={{ minHeight: `${Math.max(32, stackItems.length * 84 + 32)}px` }}>
      {stackItems.map((item) => (
        <div
          key={item.id}
          className={`
            flex items-center justify-center w-20 h-20 bg-blue-100 border-2 border-blue-300 rounded-md
            transition-all duration-300 ease-in-out
            ${item.isNew ? 'animate-slideDown opacity-0' : 'opacity-100'}
            ${item.isRemoving ? 'animate-slideUp opacity-0' : 'opacity-100'}
            ${item.isActive ? 'animate-pulse border-yellow-400 bg-yellow-100' : ''}
            ${!item.isNew && !item.isRemoving ? 'translate-y-0' : ''}
          `}
          style={{
            animation: item.isNew 
              ? 'slideDown 0.3s ease-out forwards'
              : item.isRemoving 
              ? 'slideUp 0.3s ease-out forwards'
              : item.isActive
              ? 'pulse 0.5s ease-in-out'
              : 'none',
          }}
        >
          <p className="text-lg font-bold text-gray-800">{item.value}</p>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 15px 4px rgba(250, 204, 21, 0.7);
          }
        }
      `}</style>
    </div>
  );
};

export default Stack;
