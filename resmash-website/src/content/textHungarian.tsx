import terms from "./terms";

const data = {
  lang: "hu",
  title: "Resmash - a hely a padel számára",
  home: {
    header: {
      h1: "Csatlakozz a padel forradalomhoz velünk!",
      h2: (
        <>
          Indítsd el padel klubodat gyorsan és kedvező áron velünk! Kis
          csapatként személyesen gondoskodunk arról, hogy használt pályáink
          azonnal elérhetők legyenek, így rövid időn belül megérkezhetnek
          hozzád. Ha gyors és költséghatékony megoldást keresel, mi itt vagyunk,
          hogy segítsünk!
        </>
      ),
      cta1: "Foglalj időpontot",
      cta2: "Tudj meg többet",
    },
    secondSection: {
      title: "Üdvözlünk a csapatunknál! Örülünk, hogy velünk vagy!",
      content: (
        <>
          Mi egy lelkes, kis csapat vagyunk, akik használt padel pályák
          értékesítésére szakosodtunk. Külföldről segítünk jó minőségű pályákat
          találni. Mivel személyesen foglalkozunk minden egyes megrendeléssel,
          igyekszünk rugalmas és egyedi ajánlatokat adni. Célunk, hogy elégedett
          ügyfeleink legyenek és a vásárlás minél egyszerűbb legyen.
          <br />
          Gyorsak és elérhetők vagyunk, hogy segítsünk neked megtalálni a
          megfelelő használt padel pályát. Csapatunk mindig rendelkezésre áll a
          kiválasztás és a szállítás lebonyolításában. Külföldi partnereinkkel
          együttműködve könnyen segítünk a határokon átnyúló vásárlások során.
          Az ár-érték arányra összpontosítunk, hogy megfizethető alternatívákat
          kínáljunk.
        </>
      ),
      endTitle:
        "Köszönjük, hogy minket választottál! Alig várjuk, hogy segíthessünk!",
    },
    thirdSection: {
      title: "Így működünk",
      timeline: [
        <>
          <strong>Kapcsolatfelvétel:</strong> Írj nekünk, ha használt padel
          pályát szeretnél vásárolni.
        </>,
        <>
          <strong>Konzultáció:</strong> Beszélgessünk! Segítünk megérteni, mire
          van szükséged és mit keresel a pályával kapcsolatban.
        </>,
        <>
          <strong>Keresés:</strong> Kapcsolatainkat és forrásainkat felhasználva
          megtaláljuk a neked való használt pályát.
        </>,
        <>
          <strong>Inspekció:</strong> Ha megtaláltuk a megfelelő pályát,
          alaposan átnézzük, hogy minden rendben legyen.
        </>,
        <>
          <strong>Szállítás:</strong> Intézzük a pálya szállítását a kívánt
          helyszínre.
        </>,
        <>
          <strong>Telepítés:</strong> Ha szükséged van rá, partnerünk tud
          segíteni a pálya telepítésében is, mint extra szolgáltatás.
        </>,
        <>
          <strong>Utókövetés:</strong> Szállítás után is tartjuk a kapcsolatot,
          hogy gyorsan tudjunk reagálni, ha újabb pályákra lenne szükséged.
        </>,
      ],
      content: (
        <>
          Az előfoglalás garantálásához azonnali befizetés szükséges. Kérjük,
          hogy a pálya árának 50%-át és a szállítási költséget fizesse ki, hogy
          megkezdjük a szállítás tervezését és folyamatát. A fennmaradó összeg a
          szállítás után esedékes.
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
