// components/QRScanner.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScanner() {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5Qrcode("qr-reader"); // div ki id
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" }, // "environment" = back camera, "user" = front
        { fps: 10, qrbox: 250 },        // scan box size + frame rate
        (decodedText) => {
          setResult(decodedText);       // ✅ QR code decode ho gaya
          scanner.stop();               // scan band karo pehla result milte hi
        },
        (errorMessage) => {
          // ye har frame pe fire hota hai jab QR nahi milta — ignore kar sakte ho
        }
      )
      .catch((err) => setError("Camera access nahi mil paya: " + err));

    // Cleanup: component unmount hone pe camera band karo
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  return (
    <div>
      <div id="qr-reader" style={{ width: 300 }} />
      {result && <p>Scanned value: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}