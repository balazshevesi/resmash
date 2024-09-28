import terms from "./terms";

const data = {
  lang: "hu",
  title: "Resmash - a hely a padel számára",
  home: {
    header: {
      h1: "Csatlakozz a padel forradalomhoz velünk!",
      h2: (
        <>
          Vezesd a padel játékot egy sikeres pályával. Sokoldalú és
          felhasználóbarát pályáink kiváló játéktalajt biztosítanak tagjaid
          számára. Tökéletes kluboknak, ligáknak és versenyszervezőknek.
        </>
      ),
      cta1: "Foglalj időpontot",
      cta2: "Tudj meg többet",
    },
    secondSection: {
      title: "Üdvözlünk cégünknél! Örülünk, hogy itt vagy velünk",
      content: (
        <>
          Mi egy elkötelezett szakértői csapat vagyunk, akik használt padel
          pályák vásárlására és értékesítésére szakosodtak. Fő küldetésünk, hogy
          kiváló minőségű, jól karbantartott pályákat biztosítsunk Svédországból
          más EU-országok számára. Kiterjedt iparági ismereteinkkel személyre
          szabott ajánlatokat kínálunk, hogy megfeleljenek ügyfeleink egyedi
          igényeinek. Elkötelezettek vagyunk az ügyfelek elégedettsége és a
          zökkenőmentes élmény biztosítása iránt.
          <br />
          Büszkék vagyunk a használt pályák minőségére, kizárólag kiváló
          állapotban lévőket kínálunk. Csapatunk mindig elérhető, hogy segítsen
          a megfelelő pálya kiválasztásában és a szállítás lebonyolításában.
          Emellett kiválóan azonosítjuk a potenciális vásárlókat használt padel
          pályák és kapcsolódó tételek esetében, együttműködve a svéd
          csődgondnokokkal az EU-n belüli határokon átnyúló értékesítések
          elősegítése érdekében.
        </>
      ),
      endTitle:
        "Köszönjük, hogy minket választottál, és várjuk, hogy szolgálhassunk téged!",
    },
    thirdSection: {
      title: "Így működünk",
      timeline: [
        <>
          <strong>Kapcsolatfelvétel:</strong> Az ügyfél kapcsolatba lép velünk,
          hogy használt padel pályát vásároljon.
        </>,
        <>
          <strong>Konzultáció:</strong> Konzultálunk az ügyféllel, hogy
          megértsük igényeiket és preferenciáikat a megvásárolni kívánt padel
          pályával kapcsolatban.
        </>,
        <>
          <strong>Keresés:</strong> Kiterjedt hálózatunkat és erőforrásainkat
          használjuk, hogy megtaláljuk az ügyfél igényeinek megfelelő használt
          padel pályát.
        </>,
        <>
          <strong>Inspekció:</strong> Miután megtaláltunk egy megfelelő használt
          padel pályát, alaposan megvizsgáljuk, hogy biztosítsuk, hogy
          megfeleljen a magas minőségi előírásainknak.
        </>,
        <>
          <strong>Szállítás:</strong> Koordináljuk a padel pálya szállítását az
          ügyfél helyszínére.
        </>,
        <>
          <strong>Telepítés:</strong> Kérésre a padel pálya telepítését is el
          tudjuk intézni az ügyfél helyszínén.
        </>,
        <>
          <strong>Utókövetés:</strong> A szállítás és/vagy telepítés után
          felvesszük a kapcsolatot az ügyféllel, hogy biztosítsuk, hogy minden
          az elégedettségük szerint történt.
        </>,
      ],
      content: (
        <>
          Miután megtaláltuk a megfelelő pályát és megvizsgáltuk, hogy
          megfelel-e az ügyfél elvárásainak, előleget kérünk az ügyféltől. Ez a
          díj biztosítja a vásárlást, és fedezi a pálya leszerelésével,
          szállításával és újratelepítésével kapcsolatos költségeket. A
          fennmaradó összeg a pálya ügyfélhez történő szállításakor fizetendő.
          Célunk, hogy zökkenőmentes és problémamentes folyamatot biztosítsunk
          ügyfeleink számára, a kezdetektől a befejezésig.
        </>
      ),
    },
    fourthSection: {
      title: "Használt padel pályákban rejlő lehetőségek",
      content: (
        <>
          Egy használt padel pálya vásárlása számos előnnyel jár, különösen azok
          számára, akik bővíteni szeretnék létesítményeik kínálatát. Íme, miért:
          <br />
          <br />
          <strong className="font-semibold">Költséghatékony megoldás:</strong> A
          használt padel pálya kiválasztása költséghatékony módja annak, hogy
          ezt a népszerű sportot bevezessük a létesítménybe. A használt padel
          pályák költséghatékony alternatívát nyújtanak, lehetővé téve a klubok
          számára, hogy erőforrásaikat hatékonyabban osszák el.
          <br />
          <br />
          <strong className="font-semibold">
            Helyhasználat maximalizálása:
          </strong>{" "}
          Számos teniszklub sikeresen újrahasznosította területét azzal, hogy
          hagyományos teniszpályáikat használt padel pályákra cserélték. Ezzel a
          változtatással a klubok több játékost tudnak fogadni, és szélesebb
          körű tevékenységeket kínálhatnak, ezáltal maximalizálva a létesítmény
          kihasználtságát.
          <br />
          <br />
          <strong className="font-semibold">
            Közösségi elkötelezettség:
          </strong>{" "}
          A padel tenisz széles körben elterjedt népszerűséget élvez, és minden
          korosztály és képességű játékost vonz. A használt padel pályák
          beépítésével a létesítménybe kihasználhatja ezt a növekvő trendet, és
          új tagokat vonzhat a helyi közösségből. Ez egy nagyszerű módja az
          elkötelezettség növelésének és a játékosok közötti összetartás
          erősítésének.
        </>
      ),
    },
  },
  form: {
    title: "Árajánlat kérése",
    labels: {
      numberOfCourts: "Hány pálya?",
      type: "Milyen típus?",
      size: "Mekkora méret?",
      use: "Használat",
      firstName: "Keresztnév",
      lastName: "Vezetéknév",
      phoneNumber: "Telefonszám",
      email: "E-mail",
      questions: "További kérdések?",
    },
    placeholders: {
      numberOfCourts: "Válassza ki a pályák számát",
      type: "Válassza ki a típust",
      size: "Válassza ki a méretet",
      use: "Válassza ki a használatot",
      firstName: "Írja be a keresztnevét",
      lastName: "Írja be a vezetéknevét",
      phoneNumber: "Írja be a telefonszámát",
      email: "Írja be az e-mail címét",
      questions: "Írjon ide...",
    },
    options: {
      types: ["Klasszikus / Standard", "Panorámás", "Szuper Panorámás"],
      sizes: ["Duo (20x10m)", "Szimpla (20x6m)"],
      uses: ["Beltéri", "Kültéri"],
    },
    submitButton: "Elküld",
    successMessage: "Az űrlapot sikeresen beküldték",
    errorMessage:
      "Elnézést, valami hiba történt, kérjük, vegye fel velünk a kapcsolatot közvetlenül",
  },
  nav: {
    btn1: "Tudj meg többet",
    btn2: "Kapcsolatfelvétel",
    cta: "Érdeklődés benyújtása",
  },
  footer: {
    contact: {
      title: "Kapcsolat",
      companyName: "Resmash",
      streetName: "Ekvägen",
      streetNumber: "17",
      zipCode: "363 30",
      city: "Rottne",
      phoneDisplay: "+46 (0) 73 - 655 17 13",
      phone: "+46736551713",
      email: "info@resmash.com",
    },
    openingHours: {
      title: "Nyitvatartási idő",
      monday: {
        day: "Hétfő",
        openingTimes: "07.00 - 16.00",
      },
      tuesday: {
        day: "Kedd",
        openingTimes: "07.00 - 16.00",
      },
      wednesday: {
        day: "Szerda",
        openingTimes: "07.00 - 16.00",
      },
      thursday: {
        day: "Csütörtök",
        openingTimes: "07.00 - 16.00",
      },
      friday: {
        day: "Péntek",
        openingTimes: "09.00 - 15.00",
      },
      saturday: {
        day: "Szombat",
        openingTimes: "10.00 - 15.00",
      },
      sunday: {
        day: "Vasárnap",
        openingTimes: "10.00 - 15.00",
      },
    },
    other: {
      title: "Egyéb",
      termsOfUseBtn: "Felhasználási feltételek",
      termsOfUse: terms,
    },
  },
};

export default data;
export type Data = typeof data;
