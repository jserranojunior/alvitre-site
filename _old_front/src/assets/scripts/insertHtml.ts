export const insertHtml = async (link: string, tag: string) => {
  try {
    const res = await fetch(link);
    const template = await res.text();
    const selectTag = document.querySelector(tag);
    if (selectTag) {
      selectTag.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};
