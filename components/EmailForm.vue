<template>
  <div class="container mx-auto flex flex-col items-center py-5">
    <form>
      <label for="email" class="text-center text-sm">Subscribe to get future posts via email.</label>
      <div class="flex gap-2">
        <input type="email" id="email" name="email" placeholder="E-mail" class="h-10 rounded-md px-3 py-2 text-sm w-64" required/>
        <button class="rounded-md text-sm bg-black px-4 py-2 font-medium text-white">Subscribe</button>
      </div>
    </form>
  </div>
</template>


<style>
#email {
  border: 1px solid #00000090;
}
</style>
<script setup lang="ts">
</script>
