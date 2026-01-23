const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold">
            About <span className="text-blue-600">ShopEasy</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering high-quality products,
            great prices, and an exceptional shopping experience.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
        
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            ShopEasy is a modern ecommerce platform built to make online
            shopping simple, fast, and secure. From electronics to fashion,
            we bring carefully selected products from trusted brands.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Our mission is to create a seamless shopping experience backed
            by reliable customer support and fast delivery.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="About ecommerce"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="mt-2 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="mt-2 text-sm">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-2 text-sm">Brands</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="mt-2 text-sm">Support</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Core Values
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Customer First</h3>
            <p className="text-gray-600 text-sm mt-2">
              Every decision we make starts with our customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Quality Products</h3>
            <p className="text-gray-600 text-sm mt-2">
              We ensure quality and reliability in every product.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Transparency</h3>
            <p className="text-gray-600 text-sm mt-2">
              Honest pricing and clear communication.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
