
import React from "react";

const BloodTypes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Blood Type Compatibility</h2>
          <p className="text-gray-600">
            Understanding blood type compatibility is crucial for successful transfusions. 
            See which blood types are compatible with yours.
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-blood-600 text-white">
                <th className="py-3 px-4 text-left font-semibold">Blood Type</th>
                <th className="py-3 px-4 text-left font-semibold">Can Donate To</th>
                <th className="py-3 px-4 text-left font-semibold">Can Receive From</th>
              </tr>
            </thead>
            <tbody>
              <TableRow type="A+" donateTo="A+, AB+" receiveFrom="A+, A-, O+, O-" />
              <TableRow type="A-" donateTo="A+, A-, AB+, AB-" receiveFrom="A-, O-" isAlternate />
              <TableRow type="B+" donateTo="B+, AB+" receiveFrom="B+, B-, O+, O-" />
              <TableRow type="B-" donateTo="B+, B-, AB+, AB-" receiveFrom="B-, O-" isAlternate />
              <TableRow type="AB+" donateTo="AB+ only" receiveFrom="All Types" />
              <TableRow type="AB-" donateTo="AB+, AB-" receiveFrom="A-, B-, AB-, O-" isAlternate />
              <TableRow type="O+" donateTo="A+, B+, AB+, O+" receiveFrom="O+, O-" />
              <TableRow type="O-" donateTo="All Types" receiveFrom="O- only" />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const TableRow = ({ 
  type, 
  donateTo, 
  receiveFrom, 
  isAlternate 
}: { 
  type: string; 
  donateTo: string; 
  receiveFrom: string; 
  isAlternate?: boolean;
}) => (
  <tr className={`border-b border-gray-200 ${isAlternate ? 'bg-gray-50' : ''}`}>
    <td className="py-3 px-4 font-medium">{type}</td>
    <td className="py-3 px-4">{donateTo}</td>
    <td className="py-3 px-4">{receiveFrom}</td>
  </tr>
);

export default BloodTypes;
