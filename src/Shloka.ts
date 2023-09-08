import { ShlokaDict } from ".";

export class Shloka {
  adhyaya: Number;
  shloka: Number;
  speaker: String;
  original: String;
  romanised: String;
  hindi: String;
  english: String;
  constructor(
    adhyaya: Number,
    shloka: Number,
    speaker: String,
    original: String,
    romanised: String,
    hindi: String,
    english: String,
  ) {
    this.adhyaya = adhyaya;
    this.shloka = shloka;
    this.speaker = speaker;
    this.original = original;
    this.romanised = romanised;
    this.hindi = hindi;
    this.english = english;
  }
  dict(): ShlokaDict {
    return {
      adhyaya: this.adhyaya,
      shloka: this.shloka,
      speaker: this.speaker,
      original: this.original,
      romanised: this.romanised,
      translations: {
        hindi: this.hindi,
        hindi_translator: "Swami Ramsukhdas",
        english: this.english,
        english_translator: "Swami Sivananda",
      },
    };
  }
}
