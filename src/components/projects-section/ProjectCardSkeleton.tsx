import React from 'react';
import './styles/skeleton.css'; // Importamos el CSS para la animación

const ProjectCardSkeleton = () => {
  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden max-w-xl w-full backdrop-blur-sm">
      <div className="skeleton-image h-60 w-full"></div>
      
      <div className="p-5">
        <div className="skeleton-title h-7 w-1/2 mb-4 rounded-md"></div>
        
        <div className="skeleton-text h-4 w-full mb-2 rounded-md"></div>
        <div className="skeleton-text h-4 w-4/5 mb-4 rounded-md"></div>

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="skeleton-tag h-6 w-20 rounded-md"></div>
          <div className="skeleton-tag h-6 w-16 rounded-md"></div>
          <div className="skeleton-tag h-6 w-24 rounded-md"></div>
          <div className="skeleton-tag h-6 w-14 rounded-md"></div>
        </div>
        
        <div className="flex gap-3 mt-5">
          <div className="skeleton-button h-9 w-24 rounded-md"></div>
          <div className="skeleton-button h-9 w-24 rounded-md"></div>
        </div>
        
        <div className="flex flex-col gap-3 mt-4">
            <div className="skeleton-deploy-button h-9 w-40 rounded-md"></div>
            <div className="skeleton-deploy-button h-9 w-40 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;