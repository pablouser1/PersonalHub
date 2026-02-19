export default class Language {
  private static flags = {
    en: "🇬🇧",
    es: "🇪🇸"
  }

  static name(code: string): string | null {
    const displayNames = new Intl.DisplayNames([code], { type: 'language' });
    const name = displayNames.of(code);
    return name !== undefined ? name.charAt(0).toUpperCase() + name.slice(1) : null;
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
