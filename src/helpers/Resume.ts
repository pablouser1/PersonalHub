import { merge } from "ts-deepmerge";

export default class Resume {
  static langs(): string[] {
    const modules = import.meta.glob([
      '../data/resume/*.json',
      '!../data/resume/common.json',
    ]);

    return Object.keys(modules).map((path) => {
      const match = path.match(/\/([^/]+)\.json$/);
      return match ? match[1] : '';
    }).filter(Boolean);
  }

  static async build(lang: string) {
    const common = await import('../data/resume/common.json');
    const langResume = await import(`../data/resume/${lang}.json`);

    return merge({basics: {name: import.meta.env.ME_NAME, image: import.meta.env.ME_IMAGE}}, langResume, common);
  }
}
