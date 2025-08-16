export default function EventSlammerApp() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">🎉 Event Slammer</h1>
        <p className="text-lg mt-2 text-gray-600">Your AI-powered event ideation assistant</p>
      </header>

      <main className="grid gap-4">
        <section className="bg-blue-50 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Client Brief Input</h2>
          <form className="grid gap-2">
            <input type="text" placeholder="Audience" className="border p-2 rounded" />
            <input type="text" placeholder="Goals" className="border p-2 rounded" />
            <input type="text" placeholder="Theme or Constraints" className="border p-2 rounded" />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Generate Ideas</button>
          </form>
        </section>

        <section className="bg-green-50 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Generated Ideas</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Immersive tech expo for Gen Z product launch</li>
            <li>Interactive sustainability showcase with gamified booths</li>
          </ul>
        </section>
      </main>
    </div>
  );
}