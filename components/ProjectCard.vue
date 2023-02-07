<template>
  <NuxtLink
    :to="`/portfolio/${project.slug}`"
    class="grid grid-cols-12 md:gap-x-40 justify-between items-center bg-white dark:bg-[#212121] text-brown dark:text-[#8892b0] hover:dark:text-white shadow-[0_4px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] no-underline hover:dark:bg-[#535353] hover:bg-[hsl(209,23%,22%)] hover:bg-opacity-10 hover:scale-[1.02] transition-all duration-300 ease-in-out transform-gpu"
  >
    <div class="col-span-12 lg:col-span-6">
      <!-- Image  -->
      <img
        :src="project.logo"
        :alt="`A screenshot of ${project.title}'s home page`"
        class="h-auto w-auto object-cover"
      />
    </div>

    <div class="col-span-12 lg:col-span-6">
      <!-- Title  -->
      <h5
        class="capitalize pt-40 pl-16 md:pl-0 text-[28px] font-futurabold no-underline"
      >
        {{ project.title }}
      </h5>

      <!-- color divider -->
      <div
        role="divider"
        class="h-[2px] w-full"
        :style="{ backgroundColor: project.tag }"
      ></div>

      <div class="pt-12 pb-32 px-16 md:pr-24 lg:pl-0">
        <!-- description  -->
        <p class="text-base md:text-[20px]">{{ project.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
