<script>
import Basket from "@/components/Basket.vue"

export default {
  components: { Basket },
  data() {
    return {
      bagelData: null,
      coffeeData: null,
      fillingData: null,
      basketItems: []
    };
  },
  created() {
    this.loadInventoryData();
  },
  methods: {
    async loadInventoryData() {
      try {
        const response = await fetch("inventory-modified.json");
        const data = await response.json();

        this.bagelData = data.bagel;
        this.coffeeData = data.coffee;
        this.fillingData = data.filling;
      } catch (error) {
        console.error(error);
      }
    },
    addToBasket() {
      this.basketItems.push(this.bagelData[0]);
    }
  }
};
</script>

<template>
  <h1 class="text-5xl font-bold">BOB'S BAGELS<br></h1>
  <button @click="addToBasket(item)" class="btn">Add to Basket</button>
  <Basket :items="basketItems" />
<!--  <div>-->
<!--    <div v-if="bagelData">-->
<!--      <h2>Bagel Data:</h2>-->
<!--      <p v-for="(item, index) in bagelData" :key="index">-->
<!--        <strong>SKU:</strong> {{ item.sku }}<br />-->
<!--        <strong>Price:</strong> {{ item.price }}<br />-->
<!--        <strong>Variant:</strong> {{ item.variant }}-->
<!--        <br />-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped>

</style>