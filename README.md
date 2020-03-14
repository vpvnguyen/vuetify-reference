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

```javascript
<p v-if="inventory > 10">More than 10 in stock!</p>
<p v-else-if="inventory <= 10 && inventory > 0">
10 or less in stock!
</p>
<p v-else>Inventory is at 0!</p>
```

## List Rendering

```javascript
<ul>
  <li v-for="detail in details">{{ detail }}</li>
</ul>
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
