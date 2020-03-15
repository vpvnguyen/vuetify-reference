# Vue Training

- Learning the basics of Vue using Vue Mastery course.
- https://www.vuemastery.com/courses/intro-to-vue-js/

## Attribute Binding

- v-bind dynamically binds and attribute to an expression
- v-bind:src="expression"

```html
<img v-bind:src="image" />
```

- shorthand

```html
<img :src="image" />
<img :alt="desc" />
<a :href="url">Url</a>
<div :title="toolTip">Title</div>
<button :class="isActive">Active</button>
<button :disabled="isDisabled">Disabled</button>
<p :style="isStyled">Styling</p>
```

## Conditional Rendering

- Html:

```html
<p v-if="inventory > 10">More than 10 in stock!</p>
<p v-else-if="inventory <= 10 && inventory > 0">
  10 or less in stock!
</p>
<p v-else>Inventory is at 0!</p>
```

- JS:

```javascript
var app = new Vue({
  el: "#app",
  data: {
    inventory: 10
  }
});
```

## List Rendering

- Html:

```html
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

```html
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

- shorthand

```html
<button @click="removeFromCart">Remove from Cart</button>
<div @mouseover="updateProduct">Color</div>
<form @submit="addToCart">...</form>
<input @keyup.enter="send" />
```

## Class & Style Binding

- Html:

```html
<div
  v-for="variant in variants"
  key="variant.variantId"
  class="color-box"
  :style="{backgroundColor: variant.variantColor}"
  @mouseover="updateProduct(variant.variantImage)"
></div>
```

- With JS:

```html
<button
  v-on:click="addToCart"
  :disabled="!inStock"
  :class="{ disabledButton: !inStock}"
>
  Add to Cart
</button>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    inStock: false
  }
});
```

#### Class Binding

##### Binding Classes

- Html:

```html
<div
  class="color-box"
  :class="{ active activeClass, 'text-danger': errorClass }"
></div>
```

- JS:

```javascript
data: {
    activeClass: true,
    errorClass: false,
}
```

##### Binding Objects

- Html:

```html
<div class="classObject"></div>
```

- JS:

```javascript
data: {
    classObject: {
        active: true,
        'text-danger': false
    }
}
```

##### Binding Arrays

- Html:

```html
<div :class="[activeClass, errorClass]"></div>
```

- JS:

```javascript
data: {
    activeClass: 'active',
    errorClass: 'text-danger'
}
```

##### Binding Conditionals

- Html:

```html
<div :class="[isActive ? activeClass : '']"></div>
```

- JS:

```javascript
data: {
    isActive: true,
    activeClass: 'active'
}
```

## Computed Properties

- cached results are saved until changed; more efficient to use than a method
- Html:

```html
<div
  v-for="(variant, index) in variants"
  :key="variant.variantId"
  class="color-box"
  :style="{backgroundColor: variant.variantColor}"
  @mouseover="updateProduct(index)"
></div>
```

- JS:

```javascript
data: {
  brand: 'Vue Mastery',
  product: 'socks'
},
computed: {
  title() {
    return this.brand + ' ' + this.product
  }
}
```

## Components

- prop: custom attribute for passing data into our components

- Html:
- product is now a component which will have it's data, methods, and computed properties to be displayed within the app

```html
<div id="app">
  <product :premium="premium"></product>
</div>
```

- JS:

```javascript
Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  // specifies structure of the component with html body
  template: `
  <div class="product">
  ...
  </div>
    `,
  // turn data into a function that will return an object
  data() {
    return {
      ...
});

var app = new Vue({
  el: "#app",
  //   create data to pass into component as a prop
  data: {
    premium: true
  }
});

```
