import clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
  // 替换为你的 Clarity 项目 ID
  const clarityProjectId = "u33c3orphh";

  if (clarityProjectId && clarityProjectId) {
    clarity.init(clarityProjectId);
  }
});
