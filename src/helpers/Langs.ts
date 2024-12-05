export default class Langs {
  static items = {
    "es": "🇪🇸",
    "en": "🇬🇧"
  }

  static parse(lang: string): string {
    const keys = Object.keys(Langs.items)
    const index = keys.findIndex(el => lang === el)
    if (index !== -1) {
      return Object.values(Langs.items)[index]
    }
    return lang
  }
}
