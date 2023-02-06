<template>
 <p class="text-[32px] font-bold text-black dark:">{{ title }}</p>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Project description",
        },
    },

  }
</script>

<style lang="scss" scoped>

</style>
