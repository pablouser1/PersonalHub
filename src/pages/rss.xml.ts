import rss from "@astrojs/rss";

export const get = () => {
  return rss({
    title: "Pablo Ferreiro's blog",
    description: "My personal dev blog",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/*.md"),
  });
}
