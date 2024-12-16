<template>
  <div ref="container" class="container mx-auto md:min-h-screen" id="projects">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :loop="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="project in projects" class="cursor-default">
        <div class="group relative swiper-slider-container overflow-hidden">
          <p class="group-hover:text-white/10 transition-all p-3">
            <{{ project.name }} />
          </p>
          <img :src="project.image" alt="" />
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:md:translate-y-48 group-hover:translate-y-40 grid place-content-center transition-all md:w-[40rem] md:h-[30rem] w-[20rem] h-[20rem] bg-gradient-to-t from-black to-transparent radial-shadow duration-200"
          />
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full h-auto opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col items-center transition-all pb-6"
          >
            <p class="mb-1">{{ project.name }}</p>
            <div class="flex flex-col items-center">
              <div>
                <a
                  :href="project.github"
                  class="flex items-center gap-2 hover:text-green-400"
                  target="_blank"
                >
                  <Icon name="uil:github" />
                  <span>Github</span>
                </a>
                <a
                  :href="project.url"
                  class="flex items-center gap-2 hover:text-green-400"
                  target="_blank"
                >
                  <Icon name="tabler:world-www" />
                  <span class="flex-1">Site</span>
                </a>
              </div>
              <p
                v-if="project.description"
                class="text-gray-500 text-sm hover:text-white text-center"
              >
                {{ project.description }}
              </p>
            </div>
          </div>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const container = ref(null);
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Define the projects data
const projects = ref([
  {
    name: "Amdb",
    github: "https://github.com/AbasHasani/amdb",
    url: "https://amdb-kappa.vercel.app/",
    image: "./amdb.png",
    description: "",
    techStach: [],
  },
  {
    name: "Goalazo",
    github: "https://github.com/AbasHasani/FotmobClone",
    url: "https://goalazo.netlify.app/",
    image: "./fotmob-clone.png",
    description: "Ignore the google security error (caused by scraping)",
    techStach: ["Node js", "GraphQL"],
  },
  {
    name: "Health App",
    github: "https://github.com/AbasHasani/healthapp",
    url: "https://healthapp-phi.vercel.app/",
    image: "./healthapp.png",
    description: "",
    techStach: ["Appwrite"],
  },
  {
    name: "Real Time Text Editor",
    github: "https://github.com/AbasHasani/realtimetexteditor",
    url: "https://realtimetexteditor.vercel.app/",
    image: "./realtimetexteditor.png",
    description: "",
    techStach: ["Clerk"],
  },
]);

const modules = [EffectCoverflow, Pagination];
onMounted(() => {
  gsap.from(container.value, {
    opacity: 0,
    duration: 1.4,
    scrollTrigger: {
      trigger: container.value,
      toggleActions: "restart none restart none",
    },
  });
});
</script>
<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 80%;
}

.swiper-slide .swiper-slider-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.radial-shadow {
  background: radial-gradient(black, transparent 70%);
}
</style>
