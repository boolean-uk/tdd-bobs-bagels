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
<!--  <button @click="addToBasket(item)" class="btn">Add to Basket</button>-->
<!--  <Basket :items="basketItems" />-->
  <div class="flex">
    <div class="flex-auto">
      <div class="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure><img src="bagel.png" alt="Order" /></figure>
        <div class="card-body">
          <h2 class="card-title">Order a product</h2>
          <p>Choose from wide selection of our premium products</p>
          <div class="card-actions justify-end">
            <button class="btn" onclick="order_modal.showModal()">Order</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto">
      <div class="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure><img src="coffee.png" alt="Remove" /></figure>
        <div class="card-body">
          <h2 class="card-title">Remove a product</h2>
          <p>Seconds guesses? Get rid of it.</p>
          <div class="card-actions justify-end">
            <button class="btn">Remove</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto">
      <div class="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure><img src="basket.png" alt="basket" /></figure>
        <div class="card-body">
          <h2 class="card-title">Check your basket</h2>
          <p>Be careful not to spend too much!</p>
          <div class="card-actions justify-end">
            <button class="btn">Basket</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <dialog id="order_modal" class="modal">
    <form method="dialog" class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h3 class="font-bold text-2xl">Choose your order</h3>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
          <tr>
            <th></th>
            <th>SKU</th>
            <th>Price</th>
            <th>Variant</th>
          </tr>
          </thead>
          <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
          </tbody>
        </table>
      </div>
    </form>
  </dialog>
</template>

<style scoped>

</style>