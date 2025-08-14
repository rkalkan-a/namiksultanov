import { useTranslation, Language } from "@/hooks/useTranslation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguageSelector() {
  const { language, changeLanguage } = useTranslation();

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'ru' as Language, name: 'Русский' },
    { code: 'az' as Language, name: 'Azərbaycan' },
    { code: 'tr' as Language, name: 'Türkçe' },
  ];

  return (
    <Select value={language} onValueChange={changeLanguage}>
      <SelectTrigger className="w-32 text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-black" data-testid="language-selector">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} data-testid={`language-${lang.code}`}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
