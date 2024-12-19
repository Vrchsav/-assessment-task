import React from 'react';
import PassengerCard from '../PassengerCard/PassengerCard';

const PassengersPage = ({ Passengersinfo }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg"> {/* Container with padding and styling */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Passengers List</h1> {/* Title with centered text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* Responsive grid */}
        {Passengersinfo.map((item, id) => (
          <PassengerCard key={id} props={item} />
        ))}
      </div>
    </div>
  );
};

export default PassengersPage;
