<template>
  <Navbar />
  <div id="about" class="font-poppins flex flex-col items-center py-12 gap-4 bg-base-200 px-24">
    <div class="flex gap-4">
      <div class="flex flex-col gap-4 w-1/2">
        <h1 class="text-2xl font-bold">Tentang Rollaas Cafe</h1>
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. In non dignissimos cupiditate similique rem vero sequi deserunt quasi iure assumenda nesciunt, placeat harum eum tempore iusto alias labore eos eaque amet, possimus enim. Ullam blanditiis eius iure, unde dolores itaque odio amet ratione eum voluptatibus ea nobis debitis distinctio quae soluta harum asperiores pariatur quibusdam tempore? Quasi exercitationem dolorem architecto velit natus iure asperiores illo quos! Tenetur totam minima neque quibusdam vero excepturi labore possimus. Nulla qui vitae architecto harum.</p>
      </div>
      <div class="bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] w-2/5 absolute right-0">
        <img src="../assets/illustration.png" alt="Gambar Rollaas Cafe">
      </div>
    </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  name: 'About',
  components: {
    Navbar,
  }
}
</script>
