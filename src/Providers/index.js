import { SupplierProvider } from "./supplier/index";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <SupplierProvider>
      <CartProvider>{children}</CartProvider>
    </SupplierProvider>
  );
};

export default Providers;
