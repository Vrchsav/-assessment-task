
import React from 'react';

const PassengerCard = ({ props }) => {
  const { name, trips, airline } = props;

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 m-4 max-w-3xl mx-auto shadow-md transition-transform transform hover:translate-y-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{name}</h2>
      <p className="text-lg text-gray-600 mb-6">Trips: {trips}</p>

      {airline && airline.length > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-6">
          <img
            src={airline[0].logo}
            alt={airline[0].name}
            className="w-24 h-24 object-contain rounded-full mb-4 mx-auto" // Airline logo with fixed size
          />
          <h3 className="text-lg font-semibold text-gray-800">{airline[0].name}</h3>
          <p className="text-gray-600">Country: {airline[0].country}</p>
          <p className="text-gray-600">Slogan: "{airline[0].slogan}"</p>
          <p className="text-gray-600">HQ: {airline[0].head_quaters}</p>
          <a
            href={`https://${airline[0].website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Visit Website
          </a>
          <p className="text-gray-600 mt-2">Established: {airline[0].established}</p>
        </div>
      )}
    </div>
  );
};

export default PassengerCard;
