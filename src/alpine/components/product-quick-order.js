import Alpine from "alpinejs";
import { selectOption } from "@/alpine/utils/global";

export const productQuickOrder = () => ({
  product: null,
  selectedVariant: null,
  productOptions: null,
  loading: false,
  init() {
    const { product, productOptions } = JSON.parse(
      this.$el.querySelector('[type="application/json"]').textContent
    );
    this.product = product;
    this.selectedVariant = product.variants.find(
      (variant) => variant.available
    );
    if (!this.selectedVariant) {
      this.selectedVariant = product.variants[0];
    }
    this.productOptions = productOptions;
  },
  async addToCart() {
    this.loading = true;
    await Alpine.store("cart").addToCart({
      item: {
        id: this.selectedVariant.id,
        quantity: 1,
      },
      product_handle: this.product.handle,
    });
    this.loading = false;
  },
  selectOption,
});
