import { Shloka } from "./src/Shloka";
import { collection } from "./src/utils";

export type ShlokaDict = {
  adhyaya: Number;
  shloka: Number;
  speaker: String;
  original: String;
  romanised: String;
  translations: {
    hindi: String;
    hindi_translator: String;
    english: String | null;
    english_translator: String | null;
  };
};

export interface Adhyaya {
  adhyaya: Number;
  name: {
    original: String;
    romanised: String;
  };
  numberOfShlokas: Number;
  [shlokas: number]: Shloka;
}

export function getShloka(adhyaya: number, shloka: number): Shloka | null {
  if (adhyaya > 18) return null;
  // @ts-ignore
  let slk = collection[adhyaya][shloka];
  return slk || null;
}

export function getAdhyaya(adhyaya: number): Adhyaya | null {
  return (collection[adhyaya as keyof typeof collection] as Adhyaya) || null;
}
