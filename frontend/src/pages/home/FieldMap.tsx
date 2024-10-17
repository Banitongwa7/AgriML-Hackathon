import React from 'react';

const FieldMap: React.FC = () => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="text-xl font-semibold mb-2">Carte des Parcelles</h3>
      <p className="text-gray-700">
        Visualisez les niveaux d'humidité et les types de cultures sur cette carte.
      </p>
    </div>
  );
};

export default FieldMap;
