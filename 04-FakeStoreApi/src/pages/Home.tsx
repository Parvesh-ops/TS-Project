import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover the Best <br />
              <span className="text-blue-600">Products Online</span>
            </h1>

            <p className="mt-6 text-gray-600">
              Shop the latest electronics, fashion, and accessories at
              unbeatable prices with fast delivery.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Shopping"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🚚 Fast Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">💳 Secure Payments</h3>
            <p className="text-gray-600 text-sm mt-2">
              Safe and encrypted payment methods.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🔄 Easy Returns</h3>
            <p className="text-gray-600 text-sm mt-2">
              Hassle-free returns within 7 days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">📞 24/7 Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              Friendly customer support anytime.
            </p>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            Shop by Category
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Electronics", "Fashion", "Accessories", "Home"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-gray-100 rounded-xl p-8 text-center hover:bg-blue-50 transition cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Ready to start shopping?
        </h2>
        <p className="mt-4">
          Browse thousands of products now.
        </p>

        <Link
          to="/products"
          className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Explore Products
        </Link>
      </section>

    </div>
  );
};

export default Home;
