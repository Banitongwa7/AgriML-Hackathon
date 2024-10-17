import React from 'react';

const WeatherForecast: React.FC = () => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="text-xl font-semibold mb-2">Prévisions Météorologiques</h3>
      <p className="text-gray-700">Mardi : Ensoleillé, 25°C</p>
      <p className="text-gray-700">Mercredi : Pluie légère, 22°C</p>
      <p className="text-gray-700">Jeudi : Nuageux, 24°C</p>
    </div>
  );
};

export default WeatherForecast;
