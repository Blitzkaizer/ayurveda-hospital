import React, { useState } from 'react';

export default function AyurvedaApp() {
  const [view, setView] = useState('customer');

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Ayurveda Hospital</h1>
        <nav>
          <button className="mx-2" onClick={() => setView('customer')}>Customer</button>
          <button className="mx-2" onClick={() => setView('admin')}>Admin</button>
          <button className="mx-2" onClick={() => setView('pharmacy')}>Pharmacy</button>
        </nav>
      </header>

      <main className="p-4">
        {view === 'customer' && <p>Welcome to our Ayurveda treatments booking portal.</p>}
        {view === 'admin' && <p>Admin dashboard: Manage appointments and staff.</p>}
        {view === 'pharmacy' && <p>Pharmacy: Browse and sell Ayurvedic medicines.</p>}
      </main>
    </div>
  );
}
