import { ShlokaDict } from "..";

export class Shloka {
  constructor(
    public adhyaya: Number,
    public shloka: Number,
    public speaker: String,
    public original: String,
    public romanised: String,
    public hindi: String,
    public english: String,
  ) {}
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
