import { Playwrite_DE_Grund } from "next/font/google";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-100 text-slate-900 flex items-center justify-center">
      <div className="max-w-xl w-full p-8">
        <h1 className="text-5xl font-bold mb-2">
          🌤️ WeatherWise
        </h1>

        <p className="text-xl text-slate-700 mb-8">
          Your Personal Weather Assistant
        </p>

        <div className="rounded-2xl bg-white shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">
            Good afternoon, Paul
          </h2>

          <p>📍 Home</p>

          <div className="text-4xl font-bold">
            22°C
          </div>
          

          <p>🌤 Dry until 7 pm</p>

          <div className="space-y-2 pt-4">
            <p>😊 Confidence: 94%</p>
            <p>🍔 BBQ: Excellent</p>
            <p>🚶 Dog Walk: Best 3–6 pm</p>
            <p>🌱 Gardening: No watering needed</p>
            <p>🚗 Roof Down: Perfect</p>
          </div>

          <button className="mt-6 w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700">
            Should I...?
          </button>
        </div>
      </div>
    </main>  
    );
}
