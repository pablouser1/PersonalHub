import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const get = async () => {
  const { ME_NAME } = import.meta.env

  return rss({
    title: `${ME_NAME}'s blog`,
    description: "My personal dev blog",
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(
      import.meta.glob("./blog/*.md")
    ),
  });
}
