# Vue Training

## Attribute Binding

- v-bind dynamically binds and attribute to an expression
- v-bind:src="expression"

```javascript
<img v-bind:src="image" />
```

#### shorthand

```javascript
<img :src="image" />
```

- :alt="desc"
- :href="url"
- :title="toolTip"
- :class="isActive"
- :style="isStyled"
- :disabled="isDisabled"

## Conditional Rendering

- Html:

```javascript
<p v-if="inventory > 10">More than 10 in stock!</p>
<p v-else-if="inventory <= 10 && inventory > 0">
10 or less in stock!
</p>
<p v-else>Inventory is at 0!</p>
```

- JS:

```javascript
var app = new Vue({
  // plug into id=app
  el: "#app",
  data: {
    inStock: true,
    inventory: 10
  }
});
```

## List Rendering

- Html:

```javascript
<ul>
  <li v-for="detail in details">{{ detail }}</li>
</ul>

<div v-for="variant in variants" key="variant.variantId">
    <p @mouseover="updateProduct(variant.variantImage)">
        {{ variant.variantColor }}
    </p>
</div>
```

- JS:

```javascript
var app = new Vue({
  // plug into id=app
  el: "#app",
  data: {
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
    ]
  }
});
```

## Event Handling

- Html:

```javascript
<button v-on:click="addToCart">Add to Cart</button>
```

- JS:

```javascript
var app = new Vue({
  el: "#app",
  data: {...},
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
```

#### shorthand

```javascript
<button @click="removeFromCart">Remove from Cart</button>
```
