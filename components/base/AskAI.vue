<script setup>

const aiStore = useAIAssistantStore()
const { aiModal } = storeToRefs(aiStore)


</script>

<template>
  <div
  @click="aiModal=true"
    class=""
    style="
      bottom: 64px;
      right: 64px;
      border-radius: 54px;
      background: linear-gradient(
          90deg,
          rgba(10, 64, 255, 0.1) 0%,
          rgba(10, 64, 255, 0) 95%
        ),
        rgb(255, 255, 255);
      border: 3px solid rgba(10, 64, 255, 0.4);
      cursor: pointer;
      color: rgb(10, 64, 255);
      transition: 0.5s;
      box-shadow: rgba(10, 64, 255, 0.11) 0px 3px 26.25px 0px;
      padding: 12px 24px;
      position: fixed;
      z-index: 9999;
    "
  >
    <div
      class=""
      style="
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div
        class=""
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        "
      >
        <StarIcon></StarIcon>

        <p
          class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
          style="
            font-family: Inter, sans-serif;
            text-align: center;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 1;
            color: rgb(0, 0, 0);
          "
        >
          Ask AI
        </p>
      </div>
    </div>
  </div>
</template>
