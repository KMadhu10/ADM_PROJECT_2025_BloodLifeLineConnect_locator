
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader, MapPin, Phone, Mail, Calendar } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const bloodTypes = ["Any", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// Mock data for donors
const mockDonors = [
  {
    id: 1,
    name: "John Smith",
    bloodType: "O+",
    location: "New York, NY",
    distance: 2.5,
    lastDonation: "2023-08-15",
    phone: "555-123-4567",
    email: "john.smith@example.com",
  },
  {
    id: 2,
    name: "Emily Johnson",
    bloodType: "A-",
    location: "Brooklyn, NY",
    distance: 3.8,
    lastDonation: "2023-07-22",
    phone: "555-987-6543",
    email: "emily.j@example.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    bloodType: "B+",
    location: "Queens, NY",
    distance: 5.2,
    lastDonation: "2023-09-03",
    phone: "555-234-5678",
    email: "michael.b@example.com",
  },
  {
    id: 4,
    name: "Sarah Williams",
    bloodType: "AB+",
    location: "Manhattan, NY",
    distance: 1.7,
    lastDonation: "2023-06-10",
    phone: "555-876-5432",
    email: "sarah.w@example.com",
  },
  {
    id: 5,
    name: "David Martinez",
    bloodType: "O-",
    location: "Bronx, NY",
    distance: 4.3,
    lastDonation: "2023-08-30",
    phone: "555-345-6789",
    email: "david.m@example.com",
  },
];

const FindDonors = () => {
  const { toast } = useToast();
  
  const [searchParams, setSearchParams] = useState({
    bloodType: "Any",
    location: "",
    distance: "25",
  });
  
  const [searchResults, setSearchResults] = useState<typeof mockDonors | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchParams.location.trim()) {
      toast({
        title: "Location is required",
        description: "Please enter a city, state, or ZIP code",
        variant: "destructive",
      });
      return;
    }
    
    setIsSearching(true);
    setSearchResults(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Filter the mock data based on search parameters
      let filteredResults = [...mockDonors];
      
      if (searchParams.bloodType !== "Any") {
        filteredResults = filteredResults.filter(
          donor => donor.bloodType === searchParams.bloodType
        );
      }
      
      // In a real app, we would use the location to filter by geographic proximity
      // For now, we'll just filter if the location string is part of the donor's location
      if (searchParams.location) {
        const locationLower = searchParams.location.toLowerCase();
        filteredResults = filteredResults.filter(
          donor => donor.location.toLowerCase().includes(locationLower)
        );
      }
      
      // Simulating distance filtering
      const maxDistance = parseInt(searchParams.distance);
      filteredResults = filteredResults.filter(
        donor => donor.distance <= maxDistance
      );
      
      setSearchResults(filteredResults);
      
      if (filteredResults.length === 0) {
        toast({
          title: "No donors found",
          description: "Try adjusting your search criteria",
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      toast({
        title: "Search failed",
        description: "There was a problem searching for donors",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };
  
  const handleContactDonor = (donorId: number) => {
    // In a real app, this would initiate a contact flow
    toast({
      title: "Contact request sent",
      description: "The donor will be notified of your blood request",
    });
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h1 className="text-2xl font-bold mb-6">Find Blood Donors</h1>
            
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select
                    value={searchParams.bloodType}
                    onValueChange={(value) => handleSelectChange("bloodType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location (City, State, or ZIP)</Label>
                  <Input
                    id="location"
                    name="location"
                    value={searchParams.location}
                    onChange={handleChange}
                    placeholder="New York, NY"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="distance">Maximum Distance (miles)</Label>
                  <Select
                    value={searchParams.distance}
                    onValueChange={(value) => handleSelectChange("distance", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select maximum distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 miles</SelectItem>
                      <SelectItem value="10">10 miles</SelectItem>
                      <SelectItem value="25">25 miles</SelectItem>
                      <SelectItem value="50">50 miles</SelectItem>
                      <SelectItem value="100">100 miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-blood-600 hover:bg-blood-700"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    "Search Donors"
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Search Results */}
          {searchResults && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">
                {searchResults.length > 0
                  ? `Found ${searchResults.length} donor${searchResults.length > 1 ? "s" : ""}`
                  : "No donors found matching your criteria"}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map(donor => (
                  <Card key={donor.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{donor.name}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{donor.location} ({donor.distance} miles away)</span>
                          </div>
                        </div>
                        <div className="bg-blood-100 text-blood-700 font-bold rounded-full h-10 w-10 flex items-center justify-center">
                          {donor.bloodType}
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <span className="text-sm">{donor.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <span className="text-sm">{donor.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">Last donation: {new Date(donor.lastDonation).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button 
                          className="w-full bg-blood-600 hover:bg-blood-700"
                          onClick={() => handleContactDonor(donor.id)}
                        >
                          Contact Donor
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default FindDonors;
