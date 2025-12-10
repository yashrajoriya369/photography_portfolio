const Pricing = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">Pricing Plans</h2>
        <p className="text-center text-zinc-600 mb-12">
          Choose a package that suits your needs. Transparent and affordable
          pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl shadow-2xl hover:shadow-lg transition bg-zinc-50">
            <h3 className="text-2xl font-semibold mb-2">Basic</h3>
            <p className="text-zinc-600 mb-4">
              Perfect for small events & portraits.
            </p>
            <h4 className="text-4xl font-bold mb-6">₹4,999</h4>

            <ul className="space-y-3 text-zinc-700 mb-8">
              <li>✔ 20 Edited Photos</li>
              <li>✔ 1-Hour Shoot</li>
              <li>✔ Online Delivery</li>
              <li>✘ No Video</li>
              <li>✘ No Prints</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:scale-95 transition">
              Choose Plan
            </button>
          </div>

          {/* Popular Plan */}
          <div className="p-8 rounded-2xl shadow-2xl scale-105 bg-black text-white relative">
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </span>

            <h3 className="text-2xl font-semibold mb-2">Premium</h3>
            <p className="text-zinc-300 mb-4">
              Best for weddings & professional shoots.
            </p>
            <h4 className="text-4xl font-bold mb-6">₹14,999</h4>

            <ul className="space-y-3 text-zinc-200 mb-8">
              <li>✔ 75 Edited Photos</li>
              <li>✔ 4-Hour Shoot</li>
              <li>✔ High-Res Images</li>
              <li>✔ Short Highlight Video</li>
              <li>✘ Printed Album</li>
            </ul>

            <button className="w-full bg-white text-black py-3 rounded-lg hover:scale-95 transition">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl shadow-2xl hover:shadow-lg transition bg-zinc-50">
            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <p className="text-zinc-600 mb-4">
              Complete package for premium clients.
            </p>
            <h4 className="text-4xl font-bold mb-6">₹24,999</h4>

            <ul className="space-y-3 text-zinc-700 mb-8">
              <li>✔ 150+ Edited Photos</li>
              <li>✔ Full-Day Shoot</li>
              <li>✔ 4K Highlight Video</li>
              <li>✔ Photo Album</li>
              <li>✔ Drone Shots</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:scale-95 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
