import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const get = async () => {
  return rss({
    title: "Pablo Ferreiro's blog",
    description: "My personal dev blog",
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(
      import.meta.glob("./blog/*.md")
    ),
  });
}
