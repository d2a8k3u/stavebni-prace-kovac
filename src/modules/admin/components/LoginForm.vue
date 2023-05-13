<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/modules/admin/stores/user';

const router = useRouter();
const userStore = useUserStore();

const credentials = reactive({
  email: '',
  password: '',
});

function handleSubmit() {
  userStore.login(credentials).then(() => {
    router.push({ name: 'admin-page' });
  });
}
</script>

<template>
  <form>
    <div class="relative w-full mb-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">
        {{ $t('login.email') }}
      </label>

      <input
        v-model="credentials.email"
        type="email"
        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        placeholder="Email"
        style="transition: all 0.15s ease 0s"
      />
    </div>

    <div class="relative w-full mb-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">
        {{ $t('login.password') }}
      </label>

      <input
        v-model="credentials.password"
        type="password"
        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        placeholder="Password"
        style="transition: all 0.15s ease 0s"
        autocomplete
      />
    </div>

    <div class="text-center mt-6">
      <button
        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        type="button"
        style="transition: all 0.15s ease 0s"
        @click="handleSubmit"
      >
        {{ $t('login.submit') }}
      </button>
    </div>
  </form>
</template>

<style scoped></style>
