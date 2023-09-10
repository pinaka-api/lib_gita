# lib_gita

Library for Gita handler.

## How to Contribute

Contributions are welcomed ...

To add a shloka in a particular adhyaya

- open the adhyaya file in the src folder
- in the default export object, add the shloka in this format

```ts
{
    shloka_number: new Shloka(
        adhyaya_number,
        shloka_number,
        speakers.<speaker>, // speaker is an object containing speakers in the gita.
        original_shloka,
        romanised_form,
        hindi_translation,
        english_translation
    )
}
```

Translations from gitasupersite.iitk.ac.in are used:

- hindi: Swami Ramsukhdas
- english: Swami Sivananda

Ref url: https://www.gitasupersite.iitk.ac.in/srimad?language=dv&field_chapter_value=1&field_nsutra_value=1&htrskd=1&etsiva=1&choose=1
