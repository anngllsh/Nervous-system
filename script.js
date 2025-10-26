document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Удаляем активный класс у всех ссылок
      links.forEach((l) => l.classList.remove("active"));
      // Добавляем активный класс текущей
      link.classList.add("active");

      const pageId = link.getAttribute("data-page");

      // Переключение страниц
      pages.forEach((page) => {
        if (page.id === pageId) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
    });
  });
});
