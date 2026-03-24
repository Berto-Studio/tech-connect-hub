import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";

const ProductsPage = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <div className="bg-dark py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-foreground mb-2">
            Our Products
          </h1>
          <p className="text-dark-foreground/60 max-w-lg">
            Browse our full range of routers, modems, switches, and networking accessories.
          </p>
        </div>
      </div>
      <ProductsSection />
    </div>
    <Footer />
  </>
);

export default ProductsPage;
