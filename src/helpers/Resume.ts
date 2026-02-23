import { merge } from "ts-deepmerge";

export default class Resume {
  static async build() {
    const resume = await import('../data/resume.json');

    return merge({basics: {name: import.meta.env.ME_NAME, image: import.meta.env.ME_IMAGE}}, resume);
  }
}
