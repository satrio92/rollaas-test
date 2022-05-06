<template>
    <div id="tambah-karyawan" class="font-poppins flex justify-center py-12 bg-base-200 bg-gray-100">
        <div class="md:w-1/3 px-10 py-10 bg-white shadow-lg rounded-xl">
            <h1 class="text-2xl font-semibold text-green-700 text-center mb-6">Tambah Product</h1>
            <form class="flex flex-col gap-4" @submit.prevent>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="nama" class="text-xs text-gray-500">Nama Product</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama Product..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.nama_lengkap">
                </div>
                <div v-if="preview" class="relative">
                    <img :src="preview" alt="" class="w-full">
                    <div class="bg-white w-8 h-8 rounded-full absolute top-2 right-2 flex justify-center items-center bg-opacity-80" @click="gambar='',preview=''">
                        <i class="bi bi-x text-2xl"></i>
                    </div>
                </div>
                <label for="foto" class="border-2 rounded-xl h-48 flex justify-center items-center" v-if="preview == ''">
                    <div class="flex flex-col items-center gap-2">
                        <i class="bi bi-upload text-green-700 text-6xl"></i>
                        <p class="text-green-700">Silahkan upload foto</p>
                    </div>
                </label>
                <input type="file" name="foto" id="foto" v-on:change="upload" hidden>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="deskripsi" class="text-xs text-gray-500">Deskripsi</label>
                    <textarea name="deskripsi" id="deskripsi" cols="30" rows="10" placeholder="Masukkan Dsekripsi ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal"></textarea>
                    <!-- <input type="text" name="username" placeholder="Masukkan Username ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.username"> -->
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md" @click="tambahuser">Tambah Karyawan</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TambahKaryawan',
    components: {
    },
    data() {
        return {
            pass: false,
            product: {},
            preview: '',
        }
    },
    methods: {
        upload(event) {
            this.product.gambar = event.target.files[0].name
            this.preview = URL.createObjectURL(event.target.files[0])
        },
        tambahuser() {
            user.description = "Low Key"
            user.contact = "08955557332",
            user.user_role = "useronly",
            user.keranjang_belanja = [ ],
            user.daftar_pemesanan = [ ],
            user.daftar_pemesanan_meja = [ ],
            user.user_products_rating = [ ],
            user.status_aktif = false,
            axios.post('https://rollaascafeapinodejs.herokuapp.com/users', this.user)
            .then(() => console.log(this.user))
            .catch((error) => console.log("Error : ", error))
        }
    }
}
</script>

<style>

</style>