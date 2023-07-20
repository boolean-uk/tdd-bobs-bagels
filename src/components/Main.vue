<script>
export default {
  data() {
    return {
      inventoryData: []
    };
  },
  created() {
    this.loadInventoryData();
  },
  methods: {
    async loadInventoryData() {
      try {
        const data = await fetch('inventory.txt')
        const text = await data.text();
        const lines = text.split('\n')
        this.inventoryData = lines.map((line) => {
          const [code, name, price, variant] = line.split(':');
          return {
            code,
            name,
            price: parseFloat(price),
            variant
          };
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <h1>BOB'S BAGELS<br></h1>
  <div>
    <div v-if="inventoryData">
      <h2>Inventory Data:</h2>
      <p v-for="(item, index) in inventoryData" :key="index">
        <strong>Code:</strong> {{ item.code }}<br />
        <strong>Name:</strong> {{ item.name }}<br />
        <strong>Price:</strong> {{ item.price }}<br />
        <strong>Variant:</strong> {{ item.variant }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>