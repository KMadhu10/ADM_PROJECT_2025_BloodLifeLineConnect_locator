
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Check, Droplet, MapPin, Calendar, Phone, Mail } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const RequestStatus = () => {
  const navigate = useNavigate();
  
  // Mock request data
  const request = {
    id: "REQ-12345",
    status: "active",
    createdAt: "2023-10-14T10:30:00.000Z",
    patientName: "Jane Smith",
    bloodType: "A+",
    units: 2,
    urgencyLevel: "urgent",
    requiredDate: "2023-10-16T00:00:00.000Z",
    hospitalName: "Memorial Hospital",
    contactName: "Dr. Robert Johnson",
    contactPhone: "555-123-4567",
    contactEmail: "robert.johnson@memorialhospital.com",
    address: "123 Health Ave",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    matchedDonors: 1,
    pendingDonors: 2,
  };
  
  const statusColor = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    fulfilled: "bg-blue-100 text-blue-800",
    canceled: "bg-red-100 text-red-800",
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Request Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold">Request Status</h1>
                <p className="text-gray-600">Request ID: {request.id}</p>
              </div>
              <Badge className={`uppercase text-xs font-semibold px-3 py-1 mt-2 md:mt-0 ${statusColor[request.status as keyof typeof statusColor]}`}>
                {request.status}
              </Badge>
            </div>
            <div className="text-sm text-gray-600 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Created on {new Date(request.createdAt).toLocaleString()}</span>
            </div>
          </div>
          
          {/* Request Details */}
          <Card className="mb-8 p-6">
            <h2 className="text-lg font-semibold mb-4">Request Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Patient Name</h3>
                <p className="font-medium">{request.patientName}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Blood Type</h3>
                <div className="flex items-center">
                  <Droplet className="h-4 w-4 text-blood-600 mr-1" />
                  <p className="font-medium">{request.bloodType}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Units Requested</h3>
                <p className="font-medium">{request.units}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Urgency Level</h3>
                <p className="font-medium capitalize">{request.urgencyLevel}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Required By</h3>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <p className="font-medium">{new Date(request.requiredDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Hospital Information */}
          <Card className="mb-8 p-6">
            <h2 className="text-lg font-semibold mb-4">Hospital Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Hospital</h3>
                <p className="font-medium">{request.hospitalName}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Address</h3>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-1 mt-1" />
                  <p className="font-medium">
                    {request.address}, {request.city}, {request.state} {request.zipCode}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Contact Person</h3>
                <p className="font-medium">{request.contactName}</p>
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 mr-1" />
                  <p className="text-sm">{request.contactPhone}</p>
                </div>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 mr-1" />
                  <p className="text-sm">{request.contactEmail}</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Progress Status */}
          <Card className="mb-8 p-6">
            <h2 className="text-lg font-semibold mb-4">Request Progress</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Request Created</p>
                  <p className="text-sm text-gray-600">{new Date(request.createdAt).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Potential Donors Notified</p>
                  <p className="text-sm text-gray-600">15 minutes after request creation</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Awaiting Donor Responses</p>
                  <p className="text-sm text-gray-600">
                    {request.matchedDonors} confirmed, {request.pendingDonors} pending
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button className="bg-blood-600 hover:bg-blood-700" onClick={() => navigate("/donor-dashboard")}>
              Return to Dashboard
            </Button>
            <Button variant="outline">
              Cancel Request
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestStatus;
