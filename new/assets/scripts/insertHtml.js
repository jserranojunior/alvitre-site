export const insertHtml = async (link, tag) => {
        try {
          const res = await fetch(link);
          const template = await res.text();
          const selectTag = document.querySelector(tag);
          selectTag.innerHTML = template;
        } catch (err) {
          console.log(err);
        }
      }