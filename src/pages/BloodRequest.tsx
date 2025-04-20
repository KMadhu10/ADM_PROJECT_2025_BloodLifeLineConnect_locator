
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import MainLayout from "@/components/layout/MainLayout";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const urgencyLevels = [
  { value: "critical", label: "Critical (Within 24 hours)" },
  { value: "urgent", label: "Urgent (Within 48 hours)" },
  { value: "standard", label: "Standard (Within 7 days)" },
  { value: "planned", label: "Planned (Scheduled date)" }
];

const BloodRequest = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    patientName: "",
    bloodType: "",
    units: "1",
    urgencyLevel: "",
    requiredDate: undefined as Date | undefined,
    hospitalName: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    additionalInfo: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = "Patient name is required";
    }
    
    if (!formData.bloodType) {
      newErrors.bloodType = "Blood type is required";
    }
    
    if (!formData.units || isNaN(Number(formData.units)) || Number(formData.units) <= 0) {
      newErrors.units = "Please enter a valid number of units";
    }
    
    if (!formData.urgencyLevel) {
      newErrors.urgencyLevel = "Urgency level is required";
    }
    
    if (formData.urgencyLevel === "planned" && !formData.requiredDate) {
      newErrors.requiredDate = "Required date is needed for planned requests";
    }
    
    if (!formData.hospitalName.trim()) {
      newErrors.hospitalName = "Hospital name is required";
    }
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required";
    }
    
    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = "Contact phone is required";
    } else if (!/^\d{10}$/.test(formData.contactPhone.replace(/\D/g, ''))) {
      newErrors.contactPhone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "Contact email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email address";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid ZIP code";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Blood request submitted successfully!",
        description: "Your request has been sent to matching donors and blood banks.",
      });
      
      // Redirect to the status page (to be implemented)
      navigate("/request-status");
    } catch (error) {
      console.error("Request submission error:", error);
      toast({
        title: "Failed to submit request",
        description: "There was a problem submitting your blood request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Blood Request Form</h1>
              <p className="text-gray-600 mt-2">
                Please provide the details about your blood requirement for prompt assistance.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Information Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Request Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientName">Patient Name</Label>
                    <Input
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      className={errors.patientName ? "border-red-500" : ""}
                    />
                    {errors.patientName && (
                      <p className="text-red-500 text-sm">{errors.patientName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type Required</Label>
                    <Select
                      value={formData.bloodType}
                      onValueChange={(value) => handleSelectChange("bloodType", value)}
                    >
                      <SelectTrigger className={errors.bloodType ? "border-red-500" : ""}>
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
                    {errors.bloodType && (
                      <p className="text-red-500 text-sm">{errors.bloodType}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="units">Number of Units Required</Label>
                    <Input
                      id="units"
                      name="units"
                      type="number"
                      min="1"
                      value={formData.units}
                      onChange={handleChange}
                      className={errors.units ? "border-red-500" : ""}
                    />
                    {errors.units && (
                      <p className="text-red-500 text-sm">{errors.units}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="urgencyLevel">Urgency Level</Label>
                    <Select
                      value={formData.urgencyLevel}
                      onValueChange={(value) => handleSelectChange("urgencyLevel", value)}
                    >
                      <SelectTrigger className={errors.urgencyLevel ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.urgencyLevel && (
                      <p className="text-red-500 text-sm">{errors.urgencyLevel}</p>
                    )}
                  </div>
                  
                  {formData.urgencyLevel === "planned" && (
                    <div className="space-y-2">
                      <Label htmlFor="requiredDate">Required Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.requiredDate && "text-muted-foreground",
                              errors.requiredDate && "border-red-500"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.requiredDate ? (
                              format(formData.requiredDate, "PPP")
                            ) : (
                              <span>Select required date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.requiredDate}
                            onSelect={(date) => setFormData(prev => ({ ...prev, requiredDate: date }))}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.requiredDate && (
                        <p className="text-red-500 text-sm">{errors.requiredDate}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hospital Information Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Hospital Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hospitalName">Hospital Name</Label>
                    <Input
                      id="hospitalName"
                      name="hospitalName"
                      value={formData.hospitalName}
                      onChange={handleChange}
                      className={errors.hospitalName ? "border-red-500" : ""}
                    />
                    {errors.hospitalName && (
                      <p className="text-red-500 text-sm">{errors.hospitalName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person's Name</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className={errors.contactName ? "border-red-500" : ""}
                    />
                    {errors.contactName && (
                      <p className="text-red-500 text-sm">{errors.contactName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className={errors.contactPhone ? "border-red-500" : ""}
                      placeholder="(123) 456-7890"
                    />
                    {errors.contactPhone && (
                      <p className="text-red-500 text-sm">{errors.contactPhone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className={errors.contactEmail ? "border-red-500" : ""}
                    />
                    {errors.contactEmail && (
                      <p className="text-red-500 text-sm">{errors.contactEmail}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm">{errors.address}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">{errors.city}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={errors.state ? "border-red-500" : ""}
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.state}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={errors.zipCode ? "border-red-500" : ""}
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information (optional)</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional information that might be relevant for the request"
                />
              </div>
              
              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blood-600 hover:bg-blood-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BloodRequest;
