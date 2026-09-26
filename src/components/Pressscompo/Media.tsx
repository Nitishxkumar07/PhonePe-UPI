"use client"
import React, { useState } from "react";
import { Download, Check, Loader2 } from "lucide-react";

export interface MediaKitItem {
  id: string;
  title: string;
  imageUrl: string;
  downloadUrl: string;
  fileName: string;
}

// Media Kit Assets Data
const MEDIA_KIT_ITEMS: MediaKitItem[] = [
  {
    id: "1",
    title: "PhonePe Logo",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    downloadUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    fileName: "PhonePe_Logo.png",
  },
  {
    id: "2",
    title: "About PhonePe",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    downloadUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    fileName: "About_PhonePe.png",
  },
  {
    id: "3",
    title: "Company Photos",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    downloadUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    fileName: "Company_Photos.zip",
  },
  {
    id: "4",
    title: "Corporate Brochure",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
    downloadUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    fileName: "Corporate_Brochure.pdf",
  },
  {
    id: "5",
    title: "Leadership Photos",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    downloadUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    fileName: "Leadership_Photos.zip",
  },
];

export const Media: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  // Function to handle image/file download
  const handleDownload = async (item: MediaKitItem) => {
    try {
      setDownloadingId(item.id);

      // Fetch file data as blob to bypass cross-origin browser navigation
      const response = await fetch(item.downloadUrl, { mode: "cors" });
      const blob = await response.blob();
      
      // Create a temporary link element to trigger the download
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = item.fileName;
      document.body.appendChild(link);
      link.click();

      // Clean up DOM and object URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      // Show success state briefly
      setDownloadedId(item.id);
      setTimeout(() => setDownloadedId(null), 2000);
    } catch (error) {
      console.error("Failed to download image directly, opening in new tab:", error);
      // Fallback: Open URL in a new tab if CORS blocks fetch
      window.open(item.downloadUrl, "_blank");
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Media Kit
      </h2>

      {/* Media Kit Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {MEDIA_KIT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col justify-between bg-white border border-gray-200 rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image Preview Container */}
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Footer: Title & Download Button */}
            <div className="flex items-center justify-between pt-1 px-1">
              <span className="text-base font-semibold text-gray-900">
                {item.title}
              </span>

              <button
                onClick={() => handleDownload(item)}
                disabled={downloadingId === item.id}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                aria-label={`Download ${item.title}`}
                title={`Download ${item.title}`}
              >
                {downloadingId === item.id ? (
                  <Loader2 className="w-5 h-5 animate-spin text-purple-600" />
                ) : downloadedId === item.id ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Download className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;