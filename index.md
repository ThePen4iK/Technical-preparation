---
layout: home
---

<script>
  // Проверяем, если текущий путь — корневой (/)
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    // Перенаправляем на английскую версию (/en/)
    window.location.href = '/en/';
  }
</script>
