<script>
export default {
  data() {
    return {
      inventoryData: null
    };
  },
  created() {
    this.loadInventoryData();
  },
  methods: {
    async loadInventoryData() {
      try {
        const response = await fetch("inventory.json");
        const data = await response.json();
        console.log(data);

        this.inventoryData = data.inventory;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<template>
  <h1 class="text-xl">BOB'S BAGELS<br></h1>
  <button class="btn">CLICK ME</button>
  <div>
    <div v-if="inventoryData">
      <h2>Inventory Data:</h2>
      <p v-for="(item, index) in inventoryData" :key="index">
        <strong>SKU:</strong> {{ item.sku }}<br />
        <strong>Name:</strong> {{ item.name }}<br />
        <strong>Price:</strong> {{ item.price }}<br />
        <strong>Variant:</strong> {{ item.variant }}
        <br />
        <strong v-if="item.fillings">Fillings:</strong>
        <ul v-if="item.fillings">
          <li v-for="(filling, index) in item.fillings" :key="index">{{ filling }}</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>