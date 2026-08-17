export interface Reading {
  id: string;
  label: string;
  reference: string;
  page: string | null;
  intro?: string;
  body?: string;
  verses?: string[];
  reader?: string;
  contact?: string;
}

// Mass Readings for the Wedding — Saturday, 22 August
export const readings: Reading[] = [
  {
    id: "first-reading",
    label: "Somo la Kwanza",
    reference: "Tobiti 8:4b-8",
    page: "pg 582 – 801(5)",
    intro: "Bwana atufikishe pamoja mpaka uzeeni.",
    body: `Usiku wa siku yao ya ndoa, Tobia aliinuka toka kitandani, akamwambia Sara, "Haya, dada, simama! Tusali, na kumwomba BWANA wetu, atufanyie huruma na ulinzi." Tobiti akaanza kusema hivi,

"Umebarikiwa, ee Mungu wa baba zetu; na jina lako hubarikiwa katika vizazi vyote milele! Mbingu zikutukuze, navyo viumbe vyote milele yote!

Ndiwe uliyemuumba Adamu, ndiwe uliyemuumbia mkewe Eva, ili amsaidie na kumtegemeza; na watu wote wamezaliwa na hao wawili.

Ndiwe uliyesema, 'Si vema mtu awe peke yake, tumfanyie mmoja sawa naye, awe msaada wake.'

Na sasa, si kwa sababu ya tamaa ya mwili, mimi nampokea huyu dada yangu, lakini natenda kwa moyo mnyofu. Utujalie huruma, mimi na yeye, ukatufikishe pamoja nmpaka uzeeni! Utubariki na wana."

Wakasema kwa pamoja, "Amina, Amina!"

Neno la Bwana.`,
    reader: "Faith Muthoni",
    contact: "0790 935 485",
  },
  {
    id: "psalm",
    label: "Zaburi",
    reference: "Zaburi 34:2-3, 4-5, 6-7, 8-9",
    page: "pg. 593 – 803(2)",
    intro: "Onjeni, mwone jinsi Bwana alivyo mwema.",
    verses: [
      "Nitamtukuza Bwana kila wakati; sifa zake zi kinywani mwangu daima.\nNafsi yangu itajisifu katika Bwana; wanyonge wasikie na kufurahi. (K.)",
      "Mtukuzeni Bwana pamoja nami; tuliadhimishe jina lake pamoja.\nNilimkimbilia Bwana, akanisikiliza, akaniopoa katika hofu zangu zote. (K.)",
      "Mtazameni Mungu mkafurahiwe na nyuso zenu zisihuzunike.\nMnyonge huyu alilia, naye Bwana akamsikiliza, akamwokoa katika shida zake zote. (K.)",
      "Malaika wa Bwana ameweka kambi kwao, kuwazungukia wale wamchao Mungu na kuwaokoa.\nOnjeni, mwone jinsi Bwana alivyo mwema; heri mtu yule anayemkimbilia. (K.)",
    ],
    reader: "Gloria Amina",
    contact: "0720 044 258",
  },
  {
    id: "second-reading",
    label: "Somo la Pili",
    reference: "1 Petro 3:1-9",
    page: "pg 590 – 802(7)",
    intro: "Ninyi nyote muwe na nia moja na moyo mpole, mpendane kama ndugu.",
    body: `Ninyi wanawake, wanyenyekeeni waume zenu. Hivyo waume wasiofuata bado neno la Mungu wapatikane na mwenendo wa wake zao pasipo fundisho la pekee, wakiona tu uchaji na tabia yenu safi katika maisha ya kila siku.

Pambo lenu lisiwe la nje tu kama kusuka nywele, kujiremba kwa dhahabu na kuvaa kimaridadi, bali liwe katika mtu aliyefichika wa moyo, katika roho nyenyekevu na tulivu isiyoharibika, yenye thamani mbele ya Mungu. Hivyo ndivyo walivyojipamba wanawake watakatifu wa zamani: walimtumaini Mungu na kuwanyenyekea waume zao. Kwa mfano, Sara alimtii Abrahamu, akamwita 'bwana.' Nanyi ni watoto wake mkitenda mema bila kuogopa matisho yoyote.

Kadhalika ninyi waume, kaeni na wake zenu kwa taratibu. Ijapo wanawake ni dhaifu zaidi, muwaheshimu kama warithi wa neema ya uzima pamoja nanyi. Hivyo sala zenu hazitakutana na pingamizi.

Mwisho nasema hivi, ninyi nyote muwe na nia moja na moyo mpole, mpendane kama ndugu, muwe watu wa huruma na wanyenyekevu. Msilipe mabaya kwa mabaya, wala matusi kwa matusi, bali barikini maana mmeitwa kurithi baraka.

Neno la Bwana.`,
    reader: "Joseph Mwangi",
    contact: "0102 619 062",
  },
  {
    id: "acclamation",
    label: "Aleluya",
    reference: "1 Yoh 4:8b, 11",
    page: "pg 597 – 804(2)",
    body: `Mungu ni upendo;\nKama Mungu ametupenda hivyo, imetupasa kupendana.\nAleluya`,
  },
  {
    id: "gospel",
    label: "Injili Takatifu",
    reference: "Mathayo 7:21, 24-29",
    page: "pg 599 – 805(3)",
    intro: "Alijenga nyumba yake juu ya mwamba.",
    body: `Wakati ule: Yesu aliwaambia wafuasi wake, "Si kila mtu aniambiaye, 'Bwana, Bwana,' atakayeingia katika ufalme wa mbinguni; bali yeye afanyaye atakayo Baba yangu aliye mbinguni.

Basi kila ayasikiaye maneno yangu na kuyafanya, afanana na mtu busara aliyejenga nyumba yake juu ya mwamba. Mvua ikanyesha, mafuriko yakaja, pepo zikavuma, zikaishambulia nyumba ile, lakini haikubomoka, kwa kuwa msingi wake umewekwa mwambani.

Tena kila ayasikiaye hayo maneno yangu asiyafuate, atafana na mpumbavu aliyejenga nyumba yake juu ya mchanga. Mvua ikanyesha, mafuriko yakaja, pepo zikavuma, zikaishambulia nyumba ile, ikabomoka. Anguko lake likawa kubwa."

Hapo Yesu alimaliza mahubiri hayo. Mafundisho yake yaliwashangaza watu sana, kwa maana aliwafundisha kama mwenye mamlaka, si kama Waandishi wao.

Injili ya Bwana.`,
  },
];

export default readings;
