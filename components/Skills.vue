<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const container = ref(null);
const exp = ref(null);
const circle = ref(null);
onMounted(() => {
  const tl = gsap.timeline({
    repeatDelay: 1,
    scrollTrigger: {
      trigger: container.value,
      toggleActions: "restart none restart none",
    },
  });
  tl.from(container.value, { color: "#000", duration: 0.6 });
  tl.from(exp.value, { color: "#000", duration: 0.4 });
  tl.from(circle.value, { x: -60, opacity: 0 });
});
</script>

<template>
  <section class="md:min-h-screen container mx-auto" ref="container">
    <div class="text-3xl text-center my-3 cinzel-medium">Skills</div>
    <div
      class="flex flex-col md:flex-row-reverse items-center justify-center gap-10"
    >
      <div class="flex-1" ref="circle">
        <div
          class="md:w-[400px] md:h-[400px] w-[200px] h-[200px] relative my-[50px] mx-auto border border-green-500/30 rounded-full bg-green-950/30"
        >
          <div
            class="w-3/4 h-3/4 border border-green-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-900/10"
          />
          <div
            class="w-1/2 h-1/2 border border-green-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black"
          />
          <div
            style="--angle: 0deg"
            class="w-10 h-10 icon p-6 !rounded-md border-2 border-green-500/30 bg-black"
          />
          <Icon class="icon" style="--angle: 0deg" name="logos:react" />
          <div
            style="--angle: 72deg"
            class="w-10 h-10 icon p-6 !rounded-md border-2 border-green-500/30 bg-black"
          />
          <Icon
            class="icon"
            style="--angle: 72deg"
            name="vscode-icons:file-type-graphql"
          />
          <div
            style="--angle: 144deg"
            class="w-10 h-10 icon p-6 !rounded-md border-2 border-green-500/30 bg-black"
          />
          <Icon class="icon" style="--angle: 144deg" name="devicon:nextjs" />
          <div
            style="--angle: 216deg"
            class="w-10 h-10 icon p-6 !rounded-md border-2 border-green-500/30 bg-black"
          />
          <Icon class="icon" style="--angle: 216deg" name="logos:nodejs-icon" />
          <div
            style="--angle: 288deg"
            class="w-10 h-10 icon p-6 !rounded-md border-2 border-green-500/30 bg-black"
          />
          <Icon class="icon" style="--angle: 288deg" name="mdi:github" />
        </div>
      </div>
      <div
        ref="exp"
        class="flex-1 text-green-50 border-l border-lime-100/20 md:pl-3"
      >
        <p>
          "With a robust background in technologies such as React, Next.js, Git,
          Node.js, and GraphQL, I have gained extensive experience in developing
          dynamic web applications, managing version control efficiently, and
          implementing seamless data interactions. My passion for technology
          extends beyond my current knowledge, as I am constantly driven by a
          curiosity and excitement to explore and master new tools and
          frameworks. This eagerness to learn keeps me at the forefront of
          innovation, ensuring I continually grow and adapt in the ever-evolving
          tech landscape." Feel free to tweak it to fit your style! Need help
          with anything else? 😊📚
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.circle {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 50px auto;
  border: 2px solid lightgray; /* Optional, for visualizing the circle */
  border-radius: 50%;
}

.icon {
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: lightblue; */
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(var(--angle)) translate(200px)
    rotate(calc(var(--angle) * -1));
  top: 50%;
  left: 50%;
}

@media screen and (max-width: 768px) {
  .icon {
    transform: translate(-50%, -50%) rotate(var(--angle)) translate(100px)
      rotate(calc(var(--angle) * -1));
  }
}
</style>
