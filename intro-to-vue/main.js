var product = "socks";

// creates a new Vue instance
var app = new Vue({
  // plug into id=app
  el: "#app",
  data: {
    product: "socks",
    image: "./vmSocks-green-onWhite.jpg",
    inStock: false,
    inventory: 10,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0,
    github: "https://github.com/vpvnguyen/vuetify-reference"
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    removeFromCart: function() {
      this.cart -= 1;
    },
    // ES6 shorthand
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
