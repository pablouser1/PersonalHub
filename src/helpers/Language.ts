export default class Language {
  private static flags = {
    en: "🇬🇧",
    es: "🇪🇸"
  }

  static flag(lang: string): string {
    const keys = Object.keys(Language.flags)
    const index = keys.findIndex(el => lang === el)
    if (index !== -1) {
      return Object.values(Language.flags)[index]
    }
    return lang
  }
}
