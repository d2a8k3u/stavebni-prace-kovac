<script setup>
import LoginForm from '@/modules/admin/components/LoginForm.vue';
</script>

<template>
  <div>
    <section class="absolute w-full h-full">
      <div class="login-background absolute top-0 w-full h-full bg-gray-900"></div>

      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
            >
              <div class="flex-auto px-4 lg:px-10 py-10">
                <div class="text-gray-500 text-center mb-3 font-bold">
                  {{ $t('login.title') }}
                </div>

                <LoginForm></LoginForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.login-background {
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url('@/modules/admin/assets/img/tools-background.jpg');
}
</style>
