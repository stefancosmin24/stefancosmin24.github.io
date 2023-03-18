<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ProductList from './components/ProductList.vue'
import Checkout from './components/Checkout.vue'
</script>

<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button v-if="cartEmpty" @click="toggleShowProduct">
        {{ this.cart.length }}
        <span class="fas fa-shopping-cart"></span>
        Shopping Cart
      </button>

      <div v-else>
        <button disabled class="disabled" @click="toggleShowProduct">
          {{ totalItemsInTheCart }}
          <span class="fas fa-shopping-cart"></span>
          Shopping Cart
        </button>
      </div>
    </header>

    <main>
      <component :is="currentView"></component>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      sitename: "Coursework Website",
      showProduct: "false",
      cartEmpty: "true",
      cart: [],
      errors: [],
      cart: [],
      order: {
        name: "",
        phone: "",
      },
      cartId: 0,
      sortby: "price",
      ascend: 1,
      searchQuery: "",
      searchQueryEmp: true,
      currentView: ProductList
    }
  },

  components: {ProductList, Checkout},


  methods: {
    totalItemsInTheCart: function () {
      return this.cart.length || "";
    },
    toggleShowProduct() {
      //this.showProduct = this.showProduct ? false : true;
      if(this.currentView=== ProductList)
      this.currentView= Checkout;
      else this.currentView = ProductList;
    },
    canAddToCart(product) {
      return product.availableSpaces > 0;
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) { count++; }

      }
      return count;
    },

    isClicked() {
      this.clicked = this.clicked ? false : true;
    },
  }
}
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
