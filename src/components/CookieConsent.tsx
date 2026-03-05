"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 text-white p-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-300">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <a href="/cookies" className="text-sm text-zinc-400 hover:text-white underline">Learn More</a>
          <button
            onClick={() => { localStorage.setItem("cookie-consent", "accepted"); setVisible(false); }}
            className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
