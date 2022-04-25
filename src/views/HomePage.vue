<template>
  <h1>{{ restaurantName }}</h1>
  <p class="“description”">
    Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
    notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
    matin ou avec un goûter réconfortant. Mais attention, vous verrez qu’il est
    difficile de s’arrêter.
  </p>
  <section class="“menu”">
    <h2>Menu</h2>

    <MenuItem
      v-for="item in simpleMenu"
      :addToShoppingCart="addToShoppingCart"
      :name="item.name"
      :image="item.image"
      :price="item.price"
      :quantity="item.quantity"
      :inStock="item.inStock"
      :key="item.name"
    />
  </section>
  <aside class="“shopping-cart”">
    <h2>Panier : {{ shoppingCart }} articles</h2>
  </aside>
</template>
<script>
import MenuItem from "../components/MenuItem.vue";

export default {
  name: "HomePage",
  components: {
    MenuItem,
  },
  data() {
    return {
      restaurantName: "La belle vue",
      shoppingCart: 0,
      simpleMenu: [
        {
          name: "Croissant",
          image: {
            source: "/images/croissant.jpg",
            alt: "Un croissant",
          },
          inStock: true,
          quantity: 1,
          price: 2.99,
        },
        {
          name: "Baguette de pain",
          image: {
            source: "/images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 1,
          price: 3.99,
        },
        {
          name: "Éclair",
          image: {
            source: "/images/eclair.jpg",
            alt: "Éclair au chocolat",
          },
          inStock: false,
          quantity: 1,
          price: 6.99,
        },
      ],
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-item__image {
  width: 10%;
  border-radius: 60%;
  margin-top: 1em;
  object-fit: contain;
}
</style>
