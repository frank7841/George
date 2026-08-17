export interface Song {
  id: number;
  title: string;
  number: string | null;
  lyrics: string[];
}

export interface Moment {
  id: number;
  name: string;
  songs: Song[];
}

// FILLER DATA — replace `title` (and `number` if applicable) with the real hymn list.
export const moments: Moment[] = [
  { 
    id: 1, 
    name: "Kuingia", 
    songs: [
      {
        id: 1,
        title: "Nalifurahi Sana Waliponiambia",
        number: null,
        lyrics: [
          "Chorus",
          "Sop/ Nalifurahi sana waliponiambia,",
          "All/ Natwende",
          "Sop/ furahi sana waliponiambia,",
          "All/ Natwende,",
          "{Nyumbani mwa Baba twende, nyumbani mwa Baba twende} x2",
          " ",
          "Verse 1",
          "Nitakushukuru kwa moyo wangu wote - Nitakushukuru",
          "Mbele ya miungu kuimba zaburi - Nitakushukuru",
          " ",
          "Verse 2",
          "Nitakusujudu katika nyumba yako - Nitakushukuru",
          "Nitalishukuru jina lako ee Bwana - Nitakushukuru",
          " ",
          "Verse 3",
          "Kwa fadhili zako na uaminifu wako - Nitakushukuru",
          "Nitakushukuru Kwa maana wewe umekuza ahadi - Nitakushukuru",
          
          " ",
          "Verse 4",
          "Nilipokuita uliniitikia - Nitakushukuru",
          
          " ",
          "Verse 5",
          "Ukanifariji ukanitia nguvu - Nitakushukuru"
        ]
      },
      {
        id: 11,
        title: "Twende Nyumbani Mwa Bwana Hoyaa",
        number: null,
        lyrics: [
          "Chorus",
          "Twende Nyumbani mwa Bwana hoya twende nyumbani mwa Bwana hoya *2",
          "Tuimbe tushangilie tupige vigelegele tupige makofi hoya hoya * 2",
          " ",
          "Verse 2",
          "Twende tumsifu kwa nyimbo za Zaburi wakristu, hoya -",
          "Tumsujudie twende tukamwabudu wakristu hoya",
          " ",
          "Verse 3",
          "Twende tumsifu kwa ngoma na kayamba wakristu, hoya -",
          "Tumsujudie twende tukamwabudu wakristu, hoya",
          " ",
          "Verse 4",
          "Twende tukacheze vinanda na vinubi wakristu, hoya -",
          "Tumsujudie twende tukamwabudu wakristu, hoya",
          " ",
          "Verse 5",
          "Tujitayarishe kwa nyimbo zake Bwana wakristu, hoya -",
          "Tumsujudie twende tukamwabudu wakristu, hoya"
        ]
      }
    ]
  },
  { 
    id: 2, 
    name: "Misa", 
    songs: [
      {
        id: 2,
        title: "Amecea",
        number: null,
        lyrics: [
          "BWANA UTUHURUMIE (MISA AMECEA)",
          "[ s/a ] { Bwana utuhurumie (ee Bwana)",
          "[ w ] Bwana utuhurumie } *2",
          "[ t/b ] { Kristu utuhurumie (ee Kristu)",
          "Kristu utuhurumie } *2",
          "[ s/a ] { Bwana utuhurumie (ee Bwana)",
          "Bwana utuhurumie } *2",
          " ",
          "UTUKUFU KWA MUNGU (AMECEA)",
          "[ t ] Utukufu kwa Mungu juu Mbinguni",
          "[ w ] Na amani kote duniani",
          "( Kwa watu ) wenye mapenzi mema",
          "Tunakusifu Baba, tunakuheshimu,",
          "Twakuabudu sisi tunakutukuza",
          "Twakushukuru Mungu kwa tukufu",
          "Wako mkuu ewe Mungu mfalme",
          "(Ee Baba) wa Mbingu Baba yetu",
          "Bwana wetu Mwokozi Yesu Kristu",
          "Mwana wa pekee wake Mungu",
          "(Uliye) Mwanakondoo wa Mungu",
          "Unayeziondoa dhambi zote",
          "Za dunia utuhurumie",
          "(Pokea) pokea ombi letu",
          "Wewe unayeketi kuume",
          "Kwake Baba utuhurumie",
          "(Sikia) sikia ombi letu",
          "Kwani pekee yako ndiwe Bwana",
          "Peke yako mkuu na mkombozi",
          "(Pekee) pekee Yesu Kristu",
          "Kwa umoja wa Roho Mtakatifu",
          "Ndani yake Baba watukuzwa",
          "(Ee Yesu) milele na milele"
        ]
      }
    ]
  },
  { 
    id: 3, 
    name: "Masomo", 
    songs: [
      {
        id: 3,
        title: "Injili Yake Bwana",
        number: null,
        lyrics: [
          "Verse 1",
          "Injili yake Bwana, ni neno lake Mungu,",
          "Injili iende mbele aah aah aa",
          "{ Injili iende mbele aah aah aa",
          "Injili iende mbele ni neno la wokovu aah aah aa } *2",
          "Ni neno lenye mwanga, ni neno lenye nguvu",
          "Ni neno la amani aah aah aa",
          "Injili yaokoa, injili yaponyesha",
          "Injili yadumisha aah aah aa",
          "Mkristu jiandae kusikiliza neno",
          "Neno lenye uzima aah aah aa"
        ]
      },
      {
        id: 12,
        title: "Neno lake Bwana",
        number: null,
        lyrics: [
          "Chorus",
          "{Neno lake Bwana ni la wokovu twende twende tusikie}*4",
          "{(Twende) twende tusikie(twende twende) twende (twende)tusikie}*2",
          " ",
          "Verse 1",
          "Neno lake Bwana ni neno la wokovu, tusimame sote tusikie neno",
          "Ngoma ma vifijo tumwimbie Bwana, ni neno kutoka kwa Mungu Baba",
          " ",
          "Verse 2",
          "Neno lake Bwana ni neno la baraka, sote kwa makini tusikie",
          "Chezeni kayamba chezeni hata vinanda, ni neno kutoka Kwa Mungu Baba",
          " ",
          "Verse 3",
          "Mapadre wote, simameni kwa shangwe, tangazeni neno, neno la wokovu",
          "Na watawa wote tukuzeni neno, ni neno kutoka, kwa Mungu Baba",
          " ",
          "Verse 4",
          "Waimbaji wote, imbeni kwa furaha, tumwimbie leo, kati yetu sisi",
          "Na vijana wote, chezeni kwa furaha, semeni kwa shangwe, alleluia"
        ]
      }
    ]
  },
  { 
    id: 4, 
    name: "Sadaka", 
    songs: [
      {
        id: 4,
        title: "Nikupe Nini Mungu Wangu",
        number: null,
        lyrics: [
          "Chorus",
          "{ Nikupe nini Mungu wangu, nikupe nini we Mwokozi",
          "Nikupe nini Bwana wangu cha kukupendeza } *2",
          " ",
          "Verse 1",
          "Kila nitakachoshika mbona bado ni kidogo",
          "Fadhili unazotenda kwangu mimi naogopa",
          "Ninakuomba Mwokozi, nifanyie msamaha na unipokee",
          "Mema unayoyatenda, nitafanya nini mimi nikurudishie",
          " ",
          "Verse 2",
          "Nakutolea mkate toka mmea wa ngano",
          "Nakutolea divai ni tunda la mzabibu",
          "Ninakuomba Mwokozi . . .",
          " ",
          "Verse 3",
          "Mchana hata siku wewe wanisimamia",
          "Na nikiwa safarini waniepusha ajali",
          "Ninakuomba Mwokozi . . .",
          " ",
          "Verse 4",
          "Nikiwa na matatizo Bwana wanisaidia",
          "Nikiwa kwenye majonzi Bwana unanifariji",
          "Ninakuomba Mwokozi . . .",
          " ",
          "Verse 5",
          "Kama njia siioni Bwana unaniongoza",
          "Na hata nikipotea kwako unanirudisha",
          " ",
          "Verse 6",
          "Nitatoa nini mimi, kitakachokuwa sawa, na fadhili zako",
          "Nitaimba vipi mimi, niyataje mema yote, utendayo kwangu"
        ]
      },
      {
        id: 13,
        title: "Sadaka Yangu",
        number: null,
        lyrics: [
          "Chorus",
          "Sadaka yangu, kwako ee Mungu",
          "Ni moyo mnyofu na uliopondeka",
          "Tazama wapendezwa na kweli ya moyo",
          "Nawe wanijulisha hekima kwa siri",
          "Nioshe kabisa na uovu wangu wote",
          "Na kinywa changu kitanena sifa zako",
          " ",
          "Verse 1",
          "Maana wewe Bwana hupendezwi",
          "Na dha-bihu za kuteketezwa",
          "Ama- sivyo mimi ningalikutolea",

          " ",
          "Verse 2",
          "Wapendezwa na dhabihu za haki",
          "Kuto-ka- kwa moyo mnyofu",
          "Zitolewazo juu ya madhabahu yako",
          " ",
          "Verse 4",
          "Ee Mungu Mungu wa wokovu wangu",
          "Unipe moyo radhi wa utii",
          "Usiniondolee Roho wako Mtakatifu"
        ]
      },
      {
        id: 14,
        title: "Sasa Wakati Umefika",
        number: null,
        lyrics: [
          "Verse 1",
          "Sasa wakati umefika, wa kushika nilicho nacho (mimi)",
          "Kwa wema niende kwa Mungu nitoe zawadi",
          "Sasa wakati umefika kwenda mbele ya Mungu wangu (mimi)",
          "aone nilivyoandaa zawadi ya leo",
          " ",
          "Chorus",
          "Nitamwambia Bwana pokea hiki kidogo nilichonacho",
          "Kwani Mungu wewe wanijua mimi siwezi hata kueleza",
          "Nakusihi sana Baba unipokee",
          "Nigawie na baraka niwe salama",
          " ",
          "Verse 3",
          "Mema yote niliyokuwa nayo yametoka kwa Mungu",
          "Hivyo nami ni kosa kusahau, kumshukuru",
          "Kwani kuwepo hapa leo hii ni kazi ya nani",
          "Kamwe mimi sitapata uwezo, pasipo Mungu",
          " ",
          "Verse 4",
          "Mema aliyotenda Mungu nijibu lini na vipi,",
          "Mbona hofu yazidi kuwa ndani, ya moyo wangu",
          "Mbele ya Bwana Mungu wangu kufanya siri ni bure",
          "Yeye ndiye mpanga mambo yote, ya wanadamu",
          " ",
          "Verse 5",
          "Pumzi inayonipa uhai inatoka kwa nani",
          "Bila Mungu hakika mwanadamu, siwezi kitu",
          "Nimepata nafasi ya leo ya kwenda kutoa zawadi",
          "Heri niende ya kesho sio yangu, ajua Mungu",
          " ",
          "Verse 6",
          "Ewe mwumba wa vyote duniani na vyote mbinguni,",
          "mimi leo nakuja kwako Baba, nihurumie.",
          "Baba we ndiwe unayetawala kulala na kuamka kwangu,",
          "Juu yangu utake nini Baba, kisifanyike."
        ]
      }
    ]
  },
  { 
    id: 5, 
    name: "Matoleo", 
    songs: [
      {
        id: 5,
        title: "Tunakuja na Vipaji",
        number: null,
        lyrics: [
          "Verse 1",
          "Tunakuja na vipaji vyetu, mbele zako ee Bwana",
          "Tunatoa shukurani zetu, kwako Baba Muumba",

          "Chorus",
          "Tunaleta mavuno, Bwana Mungu pokea",
          "Tunaleta na fedha, Bwana Mungu pokea",
          "Mkate na divai, Twakuombda upoke",
          " ",
          "Verse 2",
          "Ni matunda ya mashamba yetu, uliyotujalia",
          "Ndilo jasho letu sisi Bwana, twakuomba pokea",
          " ",
          "Verse 3",
          "Watumishi wako tunakuja, na zawadi kidogo",
          "Twakusihi sana Mungu Baba, pokea mikononi",
          " ",
          "verse 4",
          "Nafsi zetu zote mali yako, utupokee sisi",
          "Ee Bwana utujalie afya, uzima na baraka"
        ]
      },
      {
        id: 15,
        title: "Yamba yamba Yaweh",
        number: null,
        lyrics: [
          "Verse 1",
          "Yamba yamba yamba mampa nanbeto, Yaweh yamba yamba Yaweh *2",
          " ",
          "Verse 2",
          "Yamba yamba yamba vinu nanbeto, Yaweh yamba yamba Yaweh *2",
          " ",
          "Verse 3",
          "Yamba yamba yamba kiese nanbeto, Yaweh yamba yamba Yaweh *2",
          " ",
          "Verse 4",
          "Yamba yamba yamba mpasi nanbeto, Yaweh yamba yamba Yaweh *2",
          " ",
          "Verse 5",
          "Yamba yamba yamba bongo nanbeto, Yaweh yamba yamba Yaweh x2",
          " ",
          "Verse 6",
          "Yamba yamba yamba bana nanbeto, Yaweh yamba yamba Yaweh *2"
        ]
      },
      {
        id: 16,
        title: "Sala yangu na ipae mbele yako",
        number: null,
        lyrics: [
          "Chorus",
          "Sala yangu na ipae mbele yako (na ipae) kama moshi wa ubani x 2",
          " ",
          "Verse 1",
          "Ee Bwana upokee sadaka yetu, tunayokutolea kama shukrani zetu, Ee Bwana pokea.",
          " ",
          "Verse 2",
          "Ee Bwana upokee dhabihu zetu, tunayokutolea kutoka mashambani, Ee Bwana pokea.",
          " ",
          "Verse 3",
          "Ee Bwana upokee pia nia zetu, tunazokutolea kwa moyo wetu wote, Ee Bwana pokea."
        ]
      }
    ]
  },
  { 
    id: 6, 
    name: "Amani", 
    songs: [
      {
        id: 6,
        title: "Thayu wa Kristo",
        number: null,
        lyrics: [
          "Chorus",
          "Thayu wa Kristu uromuikurukira",
          "Giai na thayu na mugie naguo muno",
          " ",
          "verse 1",
          "Kristu uomireire arekio akimera",
          "Giai na thayu na mugie naguo muno",
          " ",
          "Verse 2",
          "Athuri na inyui kristu aramwira . . .",
          " ",
          "Verse 3",
          "Atumia na inyui kristu aramwira . . .",
          " ",
          "Verse 4",
          "Ona inyui ciana kristu aramwira . . .",
          " ",
          "Verse 5",
          "Riria mwarawara kristu aramwira . . .",
          " ",
          "Verse 5",
          "Hindi ya thina kristu aramwira . . ."
        ]
      }
    ]
  },
  { 
    id: 7, 
    name: "Komunio", 
    songs: [
      {
        id: 7,
        title: "Ukarimu wa Bwana Yesu",
        number: null,
        lyrics: [
          "Verse 1",
          "Nani kati ya watala wote, wafalme wa dunia hii",
          "Aliyewahi kuandaa karamu, akaalika watu wote",
          " ",
          "Chorus",
          "{ Ni nani kama Bwana Yesu, mfalme wa mbingu na nchi",
          "Anayetualika sote kwenye karamu aliyoiandaa,",
          "bali tuwe na moyo safi } *2",
          " ",
          "Verse 2",
          "Sote tunaalikwa kushiriki, kwenye karamu yake Bwana,",
          "Tukiwa tajiri au masikini, bali tuwe na moyo safi.",
          " ",
          "Verse 3",
          "Ishara ya mapendo makubwa kwetu, kutoka kwake Bwana Yesu",
          "Kutoa mwili kutoa damu yake, kuzishibisha Roho zetu",
          " ",
          "Verse 4",
          "Ni fundisho kutoka kwake Bwana, tuuonyeshe ukarimu",
          "kwa ndugu rafiki au majirani, daima maishani mwetu"
        ]
      },
      {
        id: 17,
        title: "Nakukaribisha Yesu Wangu",
        number: null,
        lyrics: [
          "Verse 1",
          "Nakukaribisha Yesu wangu ukae moyoni mwangu, (Bwana),",
          "Nakukaribisha Yesu wangu chakula chenye uzima",
          " ",
          "Chorus",
          "(Nishibishe) unishibishe (kwa chakula) chakula cha uzima",
          "Niyweshe kinywaji safi cha roho",
          " ",
          "Verse 3",
          "Mwili wako ni chakula kinacho iburudisha roho yangu",
          "Yesu karibu moyoni mwangu ukae nami daima",
          " ",
          "Verse 4",
          "Damu yako ni kinywaji kinacho iburudisha roho yangu,",
          "Yesu karibu moyoni mwangu, ukae nami daima",
          " ",
          "Verse 5",
          "Kwa Mwili na Damu yako Ee Yesu tunapata uzima tele",
          "Yesu karibu moyoni mwangu, ukae nami daima"
        ]
      },
      {
        id: 18,
        title: "Anayekula Mwili Wangu",
        number: null,
        lyrics: [
          "Verse 1",
          "Anayekula mwili wangu, na anywe damu yangu",
          "Anaishi ndani yangu, 'ye hatakufa milele",
          " ",
          "Verse 2",
          "Yesu wangu nakuomba, nishibishe na mwili",
          "Nayo damu yako ninywe, japo sistahili mimi",
          " ",
          "Verse 3",
          "Ndani yangu Mwokozi yumo kwa mwili na damu yake",
          "Ni rafiki yangu kweli nami sitamwacha kamwe",
          " ",
          "Verse 4",
          "Alikuja kutuokoa, tuliokuwa dhambini",
          "Kwa kifo chake msalabani, naye katupa uzima",
          " ",
          "Verse 5",
          "Yesu wangu unibariki, nifundishe njia zako",
          "Nipe moyo wa shukrani, nitembee nawe leo"
        ]
      }
    ]
  },
  { 
    id: 8, 
    name: "Shukrani", 
    songs: [
      {
        id: 8,
        title: "Tarora irathimo",
        number: null,
        lyrics: [
          "Chorus",
          "Tarora irathimo wone (wone wone)",
          "Uria ngai ekite wone (wone)",
          "Ngai Ari hamwe na adu ake *2",
          " ",
          "Verse 1",
          "Kuuma twaigua mugambo wa mwathani-",
          "Ngai ari hamwe na adu ake",
          "Waingira ngoro-ini riu no gwathika-",
          "Ngai ari hamwe na adu ake",
          "Irathimo nacio ikiura ta mbura-",
          "Ngai ari hamwe na adu ake",
          " ",
          "Verse 2",
          "Micii itu Ngai niarathimite-",
          "Wendi na gikeno ituraga na ithui-",
          "Ciana ciitu nacio niciathikaga-",
          " ",
          "Verse 3",
          "Mawira ma moko niarathimite-",
          "Makumbi maitu no kuiyuririra-",
          "Tuhunite ngoro na miiri itu-",
          " ",
          "Verse 4",
          "Kwaya itu Ngai niarathimite-",
          "Twinagire Ngai twina gikeno-",
          "Wirutiri witu niarathimite-"
        ]
      },
      {
        id: 19,
        title: "Ngwanirira",
        number: null,
        lyrics: [
          "Chorus",
          "Ngwanirira ndina gikeno nnjuge Mwathani niundathimite nndatara irathimo ciakwa nutamburukitie moko iguru riakwa",
          " ",
          "Verse 2",
          "Ningukuinira Ngai ndina gikeno nna ndahe riri Wa ritwa riaku nngugoce na ngukumie nduriri ini ngukenerere ngoro ini yakwa",
          " ",
          "Verse 3",
          "Uhoti waku Ngai ni munene nna ugutura tene na tene nmaitho maku nimo manjuthagiriria ukangitira mitino yothe",
          " ",
          "Verse 4",
          "Ndagukaire Ngai nawe ukinjigua ugithikiriria kiriro giakwa ndwanjehereirie Ngai utugi waku niwanjokeirie ihoya riakwa",
          " ",
          "Verse 5",
          "Niuminjaminjiirie mbura yotana nna nii gukena ningenukite nnguga ngemi na ihuni ngugathe Ngaiurotugira iguru muno",
          " ",
          "Verse 6",
          "Kurathima Ngai niuturathimaga ugakumbatura guoko gwakunkiria giothe ki muoyo ugakihunianna nii ngutura o ngugocaga"
        ]
      }
    ]
  },
  { 
    id: 9, 
    name: "Sahihi", 
    songs: [
      {
        id: 9,
        title: "Mimi na wewe damdam",
        number: null,
        lyrics: [
          "Chorus",
          "Mara ya kwanza tu nilipokuona nilikupenda (na ukajua) nimekupenda (mwishowe) tukapendana(tena) Japo haikua rahisi lakini, nilikupenda (na ukajua) nimekupenda (mwishowe) tukapendana(na sasa)",
          "Mimi na wewe damdam milele (And i swear) I wanna love you darling forever (Naapa) Nitakupenda mpenzi milele (And i swear) I wanna love you darling forever",
          " ",
          "Verse 1",
          "Asante mungu kwa kuniletea huyu Asante mungu kunileta kwa huyu Asante sweetie kwa kunichagua mimi Asante mama kunikubali, mimi",
          " ",
          "Verse 2",
          "Tazama ni Mungu-katenda hakika Kanipa nilicho-muomba kabisa Ni tunda lang'aa-mbele ya macho yangu Asante Mungu kwa kunitunzia"
        ]
      }
    ]
  },
  { 
    id: 10, 
    name: "Mwisho", 
    songs: [
      {
        id: 10,
        title: "Mama Maria Pokea Zetu Salamu",
        number: null,
        lyrics: [

          "Chorus",
          "Mama Maria pokea zetu salamu, twakusalimu ee Mama wa Mkombozi, leo twakuimbia tukikushangilia x2",
          " ",
          "Verse 1",
          "Utuombee kwa mwanao yesu kristu,",
          "Tupate heri na maisha ya furaha",
          " ",
          "Verse 2",
          "Maombi yetu pamoja na sala zetu",
          "zifike kwake yesu mkombozi wetu",
          " ",
          "verse 3",
          "Twakusalimu salamu mama Maria",
          "mbarikiwa uliyejaa neema",
          " ",
          "verse 4",
          "Twakuimbia kwa shangwe pia furaha,",
          "twakusalimu pokea zetu salamu"
        ]
      },
      {
        id: 11,
        title: "Ngemi Ciumaga Naku",
        number: null,
        lyrics: [
          "Chorus",
          "{ Ngemi ciumaga naku ii",
          "Ngemi ciumaga na mucii, wega umaga na mucii } *2",
          " ",
          "Verse 1",
          "Mucii niguo gitugii (namaa),",
          "giaguaka kanitha (uiyaa)",
          "Na giaguaka bururi (iii),",
          "niguo muthingi wa thii (namaa),",
          "Ngai athondekire (uiyaa)",
          "oriria ombire andu eri (iii)",
          " ",
          "Verse 2",
          "Aciari wira wanyu i (namaa)",
          "uria mwihokeirwo (uiyaa)",
          "Wakumba na gwaka thii (iii),",
          "urutei na kioi (namaa)",
          "Micii itu ikure (uiyaa),",
          "imokoni ma Kristu (iii)",
          " ",
          "Verse 3",
          "Muthuri wira waku i (namaa),",
          "nyita mutumia (uiyaa)",
          "Na ciana ciaku wega iii,",
          "muhunie no mahumbe i (namaa),",
          "Monie hagukoma i(uiyaa), na maikare na thayu iii",
          " ",
          "Verse 4",
          "Mutumia mukristu ii (namaa),",
          "kiheo kia goro (uiyaa)",
          "Uhetwo kia unyina (iii),",
          "thondeka mucii wakui (namaa),",
          "Na andu ara mwinao (uiyaa),",
          "umahe thayu muingi (iii)",
          " ",
          "Verse 5",
          "Ciana ona inyui muri oho (namaa),",
          "maciaro ma wendo (uiyaa)",
          "Mutiage aciari anyu (iii),",
          "mwathikagire aciari (namaa),",
          "Namumatiage (uiyaa)",
          "mwiigire muthithu (iii)",
          " ",
          "Verse 6",
          "Kristu giuke muciini uyu (namaa),",
          "mucii wa Maria (uiyaa)",
          "Na mucii wina thayu (iii),",
          "ti mbeca kana utonga (namaa),",
          "No nigwitikira (uiyaa),",
          "Kristu athane muciini ucio (iii)",
          " ",
          "Verse 7",
          "Ngaragu na mathina ii (namaa),",
          "ciamuhinyiriria (uiyaa),",
          "Mutigate mwihoko (iii),",
          "Tondu twina umwe witu ii (namaa),",
          "Utangitutiga namaa (uiyaa),",
          "Kristo mukuri witu (iii)"
        ]
      }
    ]
  },
];

export default moments;
