"use client";
import { useState } from "react";
import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-7";
import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {
  const [lostDialogOpen, setLostDialogOpen] = useState(false);
  const [foundDialogOpen, setFoundDialogOpen] = useState(false);

  // State for form data
  const [lostFormData, setLostFormData] = useState({
    name: "",
    contact: "",
    documentType: "",
    lastSeen: "",
    description: "",
  });

  const [foundFormData, setFoundFormData] = useState({
    name: "",
    contact: "",
    documentType: "",
    whereFound: "",
    description: "",
  });
  const handleLostInputChange = (e) => {
    const { name, value } = e.target;
    setLostFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle found form input changes
  const handleFoundInputChange = (e) => {
    const { name, value } = e.target;
    setFoundFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle report lost form submission
  const handleReportLostSubmit = async (e) => {
    e.preventDefault();

    try {
      // Here you would typically send this data to your API
      console.log("Submitting lost document report:", lostFormData);

      // Mock API call
      // const response = await fetch('/api/report-lost', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(lostFormData)
      // });

      // Reset form data
      setLostFormData({
        name: "",
        contact: "",
        documentType: "",
        lastSeen: "",
        description: "",
      });

      // Close dialog
      setLostDialogOpen(false);

      // Show success message (you could use a toast notification here)
      toast.success("Lost document reported successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  // Function to handle report found form submission
  const handleReportFoundSubmit = async (e) => {
    e.preventDefault();

    try {
      // Here you would typically send this data to your API
      console.log("Submitting found document report:", foundFormData);

      // Mock API call
      // const response = await fetch('/api/report-found', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(foundFormData)
      // });

      // Reset form data
      setFoundFormData({
        name: "",
        contact: "",
        documentType: "",
        whereFound: "",
        description: "",
      });

      // Close dialog
      setFoundDialogOpen(false);

      // Show success message (you could use a toast notification here)
      toast.success("Found document reported successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      {/* Pass function to handle dialog for lost form   as prop */}
      <HeroSection
        reportLostHandler={() => setLostDialogOpen(true)}
        reportFoundHandler={() => setFoundDialogOpen(true)}
      />
      ;
      <Features />
      <ContentSection />
      <CallToAction />
      <FAQsThree />
      <FooterSection />
      {/* Report Found Document Form */}
      <Dialog open={lostDialogOpen} onOpenChange={setLostDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Report Lost Document</DialogTitle>
            <DialogDescription>
              Fill out this form to report your lost document. We will help you
              find it.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleReportLostSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lost-name" className="text-left">
                  Name
                </Label>
                <Input
                  id="lost-name"
                  name="name"
                  value={lostFormData.name}
                  onChange={handleLostInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lost-contact" className="text-left">
                  Contact
                </Label>
                <Input
                  id="lost-contact"
                  name="contact"
                  value={lostFormData.contact}
                  onChange={handleLostInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lost-document-type" className="text-left">
                  Document Type
                </Label>
                <div className="col-span-3">
                  <Select
                    name="documentType"
                    value={lostFormData.documentType}
                    onValueChange={(value) =>
                      setLostFormData((prev) => ({
                        ...prev,
                        documentType: value,
                      }))
                    }
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NationalID">National ID</SelectItem>
                      <SelectItem value="TitleDeed">Title Deed</SelectItem>
                      <SelectItem value="EducationalCertificate">
                        Educational Certificate
                      </SelectItem>
                      <SelectItem value="DriverLicense">
                        Driver License
                      </SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lost-last-seen" className="text-left">
                  Last Seen
                </Label>
                <Input
                  id="lost-last-seen"
                  name="lastSeen"
                  value={lostFormData.lastSeen}
                  onChange={handleLostInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lost-description" className="text-left">
                  Description
                </Label>
                <Textarea
                  id="lost-description"
                  name="description"
                  value={lostFormData.description}
                  onChange={handleLostInputChange}
                  className="col-span-3"
                  rows={3}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Report</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {/* Report Found Document Form Dialog */}
      <Dialog open={foundDialogOpen} onOpenChange={setFoundDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Report Found Document</DialogTitle>
            <DialogDescription>
              Help reunite someone with their lost document by filling out this
              form.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleReportFoundSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="found-name" className="text-left">
                  Your Name
                </Label>
                <Input
                  id="found-name"
                  name="name"
                  value={foundFormData.name}
                  onChange={handleFoundInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="found-contact" className="text-left">
                  Contact
                </Label>
                <Input
                  id="found-contact"
                  name="contact"
                  value={foundFormData.contact}
                  onChange={handleFoundInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="found-document-type" className="text-left">
                  Document Type
                </Label>
                <div className="col-span-3">
                  <Select
                    name="documentType"
                    value={foundFormData.documentType}
                    onValueChange={(value) =>
                      setFoundFormData((prev) => ({
                        ...prev,
                        documentType: value,
                      }))
                    }
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NationalID">National ID</SelectItem>
                      <SelectItem value="TitleDeed">Title Deed</SelectItem>
                      <SelectItem value="EducationalCertificate">
                        Educational Certificate
                      </SelectItem>
                      <SelectItem value="DriverLicense">
                        Driver License
                      </SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="found-where" className="text-left">
                  Where Found
                </Label>
                <Input
                  id="found-where"
                  name="whereFound"
                  value={foundFormData.whereFound}
                  onChange={handleFoundInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              {/* Image upload */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="found-description" className="text-left">
                  Description
                </Label>
                <Textarea
                  id="found-description"
                  name="description"
                  value={foundFormData.description}
                  onChange={handleFoundInputChange}
                  className="col-span-3"
                  rows={3}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Report</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
