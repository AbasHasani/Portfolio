<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const info = ref([
  {
    label: "Phone",
    value: "+98 991 622 4383",
    iconName: "i-material-symbols:call-outline",
  },
  {
    label: "Email",
    value: "14abbas.hassani@gmail.com",
    iconName: "i-material-symbols:stacked-email-outline-rounded",
  },
  {
    label: "Telegram",
    value: "@Abas142",
    iconName: "i-simple-icons:telegram",
  },
]);
const { copy, isSupported } = useClipboard();
gsap.registerPlugin(ScrollTrigger);
const contactContainerRef = ref(null);
const contactImageRef = ref(null);
onMounted(() => {
  gsap.from(contactContainerRef.value, {
    opacity: 0,
    x: 100,
    duration: 1.8,
    scrollTrigger: {
      trigger: contactImageRef.value,
      toggleActions: "restart none restart none",
    },
  });
  gsap.from(contactImageRef.value, {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: contactImageRef.value,
      toggleActions: "restart none restart none",
    },
  });
});
</script>
<!-- flex flex-col-reverse md:flex-row justify-around items-center -->
<template>
  <section
    class="max-w-screen overflow-hidden relative md:min-h-screen container flex flex-col-reverse md:flex-row justify-around items-center"
  >
    <div
      class="absolute md:w-[60rem] md:h-[60rem] radial-shadow rounded-full bottom-0 left-0 z-10"
    />
    <div
      class="flex-1 grid place-content-start md:place-content-center"
      ref="contactContainerRef"
    >
      <h1
        class="cinzel-medium md:text-6xl py-[3rem] text-green-200 hidden md:block"
      >
        Contact
      </h1>
      <div class="flex flex-col gap-6 z-30 relative">
        <div v-for="item in info" :key="item.label">
          <h2 class="my-2">{{ item.label }}:</h2>
          <div
            class="hover:border-green-500/40 bg-black hover:bg-slate-900/50 cursor-pointer group ml-2 inline-flex gap-3 items-center border p-3 rounded-sm border-gray-800/70"
            @click="copy(item.value)"
          >
            <Icon :name="item.iconName" />
            <p class="text-xs md:text-base">{{ item.value }}</p>
            <Icon
              class="opacity-10 group-hover:opacity-70"
              name="i-material-symbols:content-copy-outline-rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 grid place-content-center" ref="contactImageRef">
      <h1
        class="cinzel-medium text-xl md:text-3xl text-green-200 mb-6 md:hidden text-center"
      >
        Contact
      </h1>
      <img src="/contact.svg" class="w-[90%] h-[90%]" alt="" />
    </div>
  </section>
</template>

<style>
.radial-shadow {
  background: radial-gradient(rgba(34, 197, 94, 0.14), transparent 70%);
}
</style>
