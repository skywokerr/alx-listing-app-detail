import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import Header from "@/components/layout/Header";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find property by name (you might want to use ID instead in a real app)
  const property = PROPERTYLISTINGSAMPLE.find((item) => 
    item.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Property not found</h1>
          <p className="text-gray-600 mt-2">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PropertyDetail property={property} />
    </div>
  );
}