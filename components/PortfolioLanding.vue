<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const tl = gsap.timeline({ repeatDelay: 1 });

const title = ref(null);
const firstSummary = ref(null);
const secondSummary = ref(null);
const contactLink = ref(null);
const projectsLink = ref(null);
const image = ref(null);

onMounted(() => {
  tl.from(title.value, {
    opacity: 0,
    y: 10,
    delay: 1,
  });
  // gsap.matchMedia().add("(min-width: 768px)", () => {
  tl.from(firstSummary.value, {
    opacity: 0,
    x: -210,
  });
  // });
  tl.from(contactLink.value, {
    opacity: 0,
    y: -20,
  });
  tl.from(projectsLink.value, {
    opacity: 0,
    y: -20,
  });
  tl.from(image.value, {
    opacity: 0,
    x: 20,
  });
  // gsap.matchMedia().add("(max-width: 768px)", () => {
  tl.from(secondSummary.value, {
    opacity: 0,
    x: -210,
  });
  // });
});
</script>

<template>
  <main
    class="container flex flex-col md:flex-row items-center justify-center gap-10 md:min-h-screen mt-10 md:mt-0"
  >
    <div class="flex flex-col gap-3 flex-1">
      <h1 ref="title" class="cinzel-medium text-3xl text-green-200">
        React Developer
      </h1>
      <div ref="firstSummary">
        <Summary class="hidden md:block" />
      </div>
      <div class="flex gap-3">
        <button ref="contactLink">
          <NuxtLink
            to="#contact"
            class="grid place-content-center w-[8rem] h-[3rem] text-xl bg-green-400 text-black"
          >
            Contact
          </NuxtLink>
        </button>
        <button ref="projectsLink">
          <NuxtLink
            to="#projects"
            class="grid place-content-center w-[8rem] h-[3rem] text-xl border border-green-600 text-white"
          >
            Projects
          </NuxtLink>
        </button>
      </div>
    </div>
    <div
      class="grid place-content-center relative overflow-hidden rounded-full group flex-1"
      ref="image"
    >
      <img
        src="~/assets/images/abas.jpg"
        class="grayscale rounded-full group-hover:grayscale-0 transition-all duration-1000 w-[15rem] md:w-[30rem]"
        alt=""
      />
      <div
        class="absolute top-0 left-0 right-0 bottom-0 portfolio-image rounded-full"
      />
    </div>
    <div ref="secondSummary">
      <Summary class="md:hidden" />
    </div>
  </main>
</template>
