"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, QrCode, Smartphone, Check, Copy, Star, ShieldCheck, Download } from "lucide-react";

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const downloadLink = "https://www.phonepe.com/app-download";

  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(downloadLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-950/60 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden z-10 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#5F259F] via-[#9B51E0] to-[#00C853]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5F259F]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 shadow-xs">
                  <Smartphone className="w-5 h-5 text-[#5F259F]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100/70 text-[#5F259F] text-[11px] font-bold tracking-wide uppercase">
                    <ShieldCheck className="w-3 h-3 text-[#5F259F]" />
                    Official PhonePe App
                  </div>
                  <h3
                    id="download-modal-title"
                    className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5"
                  >
                    Scan to Download PhonePe
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Scan this QR code with your smartphone camera to download PhonePe directly on your Android or iOS device.
              </p>

              {/* QR Code Container with Scanner Frame */}
              <div className="relative mx-auto w-56 sm:w-60 bg-gradient-to-b from-purple-50/80 to-white p-4 rounded-3xl border-2 border-purple-200 shadow-inner flex flex-col items-center">
                {/* Viewfinder Corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-3 border-l-3 border-[#5F259F] rounded-tl-lg" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-3 border-r-3 border-[#5F259F] rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-3 border-l-3 border-[#5F259F] rounded-bl-lg" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-3 border-r-3 border-[#5F259F] rounded-br-lg" />

                {/* QR Code Graphic */}
                <div className="relative w-48 h-48 bg-white rounded-2xl p-2.5 shadow-md border border-gray-100 flex items-center justify-center">
                  <img
                    src="/assets/qr.png"
                    alt="PhonePe Download QR Code"
                    className="w-full h-full object-contain"
                  />
                  {/* Center PhonePe Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-white shadow-md border-2 border-[#5F259F] flex items-center justify-center">
                      <span className="font-extrabold text-[#5F259F] text-sm">पे</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-purple-800 bg-purple-100/60 px-3 py-1 rounded-full">
                  <QrCode className="w-3.5 h-3.5 text-[#5F259F]" />
                  Scan with any phone camera
                </div>
              </div>

              {/* Store Ratings & Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.phonepe.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-purple-50/50 hover:border-purple-200 transition-all duration-200 group"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-7 w-auto object-contain group-hover:scale-102 transition-transform"
                  />
                  <div>
                    <div className="text-[10px] text-gray-500 font-medium">Google Play</div>
                    <div className="flex items-center text-xs font-bold text-gray-900">
                      4.7 <Star className="w-3 h-3 text-amber-500 fill-amber-500 ml-0.5" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://apps.apple.com/in/app/phonepe-payments-made-easy/id1170055821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-purple-50/50 hover:border-purple-200 transition-all duration-200 group"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-7 w-auto object-contain group-hover:scale-102 transition-transform"
                  />
                  <div>
                    <div className="text-[10px] text-gray-500 font-medium">App Store</div>
                    <div className="flex items-center text-xs font-bold text-gray-900">
                      4.8 <Star className="w-3 h-3 text-amber-500 fill-amber-500 ml-0.5" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Copy link option */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="truncate pr-2">Link: https://phonepe.com/app</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-purple-100 hover:text-[#5F259F] text-gray-700 font-medium transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DownloadAppModal;

