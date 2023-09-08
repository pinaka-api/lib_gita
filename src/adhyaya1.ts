import { Shloka } from "./Shloka";

export const speakers = {
  dhratarastra: "dhṛtarāṣṭra (धृतराष्ट्र)",
  sanjaya: "sañjaya (सञ्जय)",
  arjuna: "arjuna (अर्जुन)",
  krsna: "śhrī-bhagavān (श्रीभगवान)",
};

export default {
  adhyaya: 1,
  name: {
    original: "अर्जुन विषाद योग",
    romanised: "Arjuna Vishada Yoga",
  },
  numberOfShlokas: 47,

  // shlokas data

  1: new Shloka(
    1,
    1,
    speakers.dhratarastra,
    `धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ।।1.1।।`,
    `dharmakṣetre kurukṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya 1.1`,
    `।।1.1।। धृतराष्ट्र बोले (टिप्पणी प0 1.2) - हे संजय! (टिप्पणी प0 1.3) धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से इकट्ठे हुए मेरेे और पाण्डु के पुत्रों ने भी क्या किया?`,
    `1.1 Dhritarashtra said What did my people and the sons of Pandu do when they had assembled together eager for battle on the holy plain of Kurukshetra, O Sanjaya.`,
  ),
};
