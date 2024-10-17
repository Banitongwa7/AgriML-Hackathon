import React from 'react';
import WaterConsumptionChart from './WaterconsumptionChart';
import WeatherForecast from './WeatherForcecast';
import OptimizationRecommendations from './OptimizationRecommendations';
import FieldMap from './FieldMap';
import NavBar from '../../components/navbar/NavBar';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full px-4 py-6">
        <div>
            <NavBar/>
        </div>
      <h2 className="text-2xl font-bold mb-6">Tableau de bord</h2>
     <div className='grid grid-cols-3 '>
     <div>
      <div className="mb-6">
        <WeatherForecast />
      </div>
      <div className='mb-6'>
        <OptimizationRecommendations/>
      </div>
      <div className="mb-6">
        <FieldMap />
      </div>
      </div>
      <div className='col-span-2'>
        <WaterConsumptionChart />
      </div>
     </div>
    </div>
  );
};

export default Dashboard;
