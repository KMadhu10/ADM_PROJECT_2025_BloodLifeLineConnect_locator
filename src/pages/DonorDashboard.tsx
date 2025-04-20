
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplet, Clock, Bell, Calendar, Edit, MapPin } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Mock donation history
const donationHistory = [
  {
    id: 1,
    date: "2023-09-15",
    location: "Central Blood Bank, New York",
    bloodType: "O+",
    units: 1,
  },
  {
    id: 2,
    date: "2023-06-10",
    location: "Memorial Hospital, Brooklyn",
    bloodType: "O+",
    units: 1,
  },
  {
    id: 3,
    date: "2023-03-05",
    location: "Red Cross Center, Manhattan",
    bloodType: "O+",
    units: 1,
  },
];

// Mock upcoming blood requests
const nearbyRequests = [
  {
    id: 1,
    bloodType: "O+",
    hospital: "Mount Sinai Hospital",
    distance: "2.3 miles",
    urgency: "Critical",
    date: "2023-10-15",
  },
  {
    id: 2,
    bloodType: "A+",
    hospital: "NYU Langone",
    distance: "3.1 miles",
    urgency: "Urgent",
    date: "2023-10-18",
  },
];

const DonorDashboard = () => {
  const nextEligibleDate = new Date();
  nextEligibleDate.setDate(nextEligibleDate.getDate() + 30); // Assuming 3 months between donations
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Donor Dashboard</h1>
              <p className="text-gray-600">Welcome back, John Doe</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-blood-600 hover:bg-blood-700" asChild>
                <Link to="/donor-profile">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Blood Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Droplet className="h-5 w-5 text-blood-600 mr-2" />
                  <span className="text-2xl font-bold">O+</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Donations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blood-600 mr-2" />
                  <span className="text-2xl font-bold">{donationHistory.length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Next Eligible Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blood-600 mr-2" />
                  <span className="text-2xl font-bold">{nextEligibleDate.toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Donation History Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Donation History</h2>
              {donationHistory.length > 3 && (
                <Button variant="outline" size="sm">
                  View All
                </Button>
              )}
            </div>
            
            {donationHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium">Location</th>
                      <th className="pb-2 font-medium">Blood Type</th>
                      <th className="pb-2 font-medium">Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationHistory.map(donation => (
                      <tr key={donation.id} className="border-b last:border-0">
                        <td className="py-3">{new Date(donation.date).toLocaleDateString()}</td>
                        <td className="py-3">{donation.location}</td>
                        <td className="py-3">{donation.bloodType}</td>
                        <td className="py-3">{donation.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No donation history yet</p>
            )}
          </div>
          
          {/* Nearby Blood Requests */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Nearby Blood Requests</h2>
              <Button variant="outline" size="sm" asChild>
                <Link to="/find-requests">View All</Link>
              </Button>
            </div>
            
            {nearbyRequests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nearbyRequests.map(request => (
                  <Card key={request.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex space-x-2 items-center mb-2">
                            <h3 className="font-semibold">{request.hospital}</h3>
                            <Badge variant={request.urgency === "Critical" ? "destructive" : "outline"}>
                              {request.urgency}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center mb-1">
                              <Droplet className="h-4 w-4 mr-1" />
                              <span>Blood Type: {request.bloodType}</span>
                            </div>
                            <div className="flex items-center mb-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{request.distance}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Needed by: {new Date(request.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button className="w-full bg-blood-600 hover:bg-blood-700">
                          Respond to Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No nearby blood requests at this time</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DonorDashboard;
