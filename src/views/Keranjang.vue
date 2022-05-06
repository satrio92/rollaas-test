<template>
    <Navbar />
    <div id="keranjang">
        <table class="flex flex-col gap-4 w-full">
            <div>
                <tr class="border-2 border-green-700 py-4 px-6 rounded-lg flex justify-between items-center">
                    <!-- v-if="user.user_role == 'useronly'" -->
                    <td class="flex gap-4 items-center">
                        <div class="justify-center"><img src="../assets/img/profile/karyawan2.png" alt="Foto Profile" class="rounded-full w-12"></div>
                        <div class="text-xl font-medium">{{ user.nama_lengkap }}</div>
                    </td>
                    <td class="flex gap-8 items-center">
                        <div class="bg-green-700 text-white rounded-md py-2 px-4 text-sm">{{ user.status_aktif ? 'Active' : 'Non-Active' }}</div>
                        <div class="text-xl flex gap-3">
                            <router-link :to="'/dashboard/karyawan/'+user._id"><i class="bi bi-pencil-square text-green-700"></i></router-link>
                            <i class="bi bi-trash text-red-700 cursor-pointer" @click="clickDelete(user._id)"></i>
                        </div>
                    </td>
                </tr>
            </div>
        </table>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Keranjang',
    components: {
        Navbar
    }
}
</script>