import React from 'react';

const OptimizationRecommendations: React.FC = () => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="text-xl font-semibold mb-4">Recommandations d'Optimisation</h3>
      <p className="text-gray-700">
        • Réduire l'irrigation de 10% cette semaine en raison des prévisions de pluie.
      </p>
      <p className="text-gray-700">
        • Adopter une rotation de culture pour optimiser la fertilité du sol.
      </p>
    </div>
  );
};

export default OptimizationRecommendations;
