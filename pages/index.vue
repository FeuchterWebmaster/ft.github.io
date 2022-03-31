<template>
  <div>
    <div class="container-fluid mt-5 px-4">
      <div class="row">
        <div class="col-md-1" v-for="video in videos" :key="video._id">
          <VideoThumb :video="video" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3 d-flex justify-content-center">
          <ul class="pagination">
            <li>
              <nuxt-link to="/seite/2/" v-if="nextPage">
                <button class="pageButtons buttons btn btn-primary">
                  Next page
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h1>Feuchte Tube - dein kostenloser Sender für deutsche Pornos</h1>
          <p>
            Willst du unglaublich geile Sachen erleben und hast die Schnauze
            voll vom langweiligen Filme schauen auf Youtube oder den
            amerikanischen Pornos auf Youporn, von denen man kein Wort versteht?
            Dann bist du hier bei Feuchte Tube genau richtig. Feuchte Tube ist
            Deutschlands erste Community für deutsche Pornofilme und Sexkontakte
            zu Amateuren und Pornostars, bei denen du real mitmachen kannst!
          </p>
          <p>
            Schalte die langweiligen Videos, die du dir gerade anschaust, ab und
            hol dir hier bei Feuchte Tube den absolut neuen persönlichen Kick!
            Lade dein persönliches Pornovideo hoch und teile es mit anderen
            Benutzern oder stell deine privaten Sexfilme nur für deine Freunde
            zur Verfügung. Endlich vorbei mit den langweiligen Abenden, an denen
            man vor dem Fernseher oder Computer daheim, oder im Arbeitsbüro
            sitzt und nichts mit der Zeit anzufangen weiß. Nimm deine Freundin
            und guckt euch gemeinsam die geilen deutschen Pornos an und
            Spannung, Spiel und Spaß sind garantiert.
          </p>

          <p>
            Du hast keine Freundin? Gar kein Problem, lerne Sie einfach hier bei
            Feuchte Tube kennen - Deutschlands erster Porn Tube Community. Hier
            hast du die Möglichkeit die Amateur-Darsteller persönlich
            anzuschreiben und mit ihnen Kontakt aufzunehmen. Fix kostenlos
            anmelden, Profil erstellen und ab geht's. Lade auch gleich deinen
            privaten Porno hoch und stelle ihn gratis der Community zur
            Verfügung und wir versichern auch dir, dass du genügend Anfragen von
            anderen Fickfreunden bekommst, oder erstelle dir einfach deine ganz
            persönliche Pornovideothek, auf welche nur du Zugriff hast. Somit
            ist garantiert das deine Ex-Freundin den heimlich aufgenommen Porno
            und Pornobilder nicht entdeckt. ;-) Aber am besten, du teilst den
            Porno natürlich mit anderen Usern aus der Community, doch das ist
            natürlich dir überlassen.
          </p>

          <h2>Kostenlose deutsche Pornofilme</h2>
          <p>
            Erlebe den ultimativen Kick! Feuchte Tube ist dein Gratis-Sender für
            kostenlose Pornos. Endlich hast du die Möglichkeit, dir geile
            deutsche Pornofilme von zu Hause aus anzuschauen ohne lästige
            Anmeldung oder Geld dafür zu bezahlen. Dein Schwanz oder deine
            feuchte Muschi werden sich freuen. Dir reicht das Ganze noch nicht?
            Dann melde dich jetzt an und nehm direkten Kontakt zu Amateuren und
            Profis aus deiner Umgebung auf. So etwas hat es noch nie gegeben,
            und das alles ohne tausende von Webseiten zu besuchen! Also wenn du
            den Pornosender auf Youtube, Clipfish und Co. suchst, hast du ihn
            endlich gefunden, er heißt Feuchte Tube, und feucht ist die Röhre
            ganz sicher. Ein Sender voller nackter deutscher Tatsachen. Du
            findest Orgien mit wilden Stöhnereien, spritzende Schwänzen,
            feuchten Muschis, reife analsüchtige Mütter, Lesben und Teens mit
            dreckigen deutschen Flüstereien und Dialogen, die nur darauf warten,
            dass du sie begaffst oder mitmachst. Privater geht es nicht? Irrtum,
            es geht! Aber so viel verraten wir dir noch nicht, also lass dich
            überraschen und bring endlich wieder etwas neues in dein Leben.
            Pornos, Sexclips und Fetisch-Pornos in deiner Sprache mit
            Sexkontakt, darauf hat unser geliebtes Germany nur gewartet.
          </p>

          <p>
            Übrigends, weißt du eigentlich was bei deinem Nachbarn im
            Schlafzimmer abgeht? Oder was die nette Schülerin aus der 10. Klasse
            privat so für Hobbys ausführt? Oder doch vielleicht die liebe
            Lehrerin die sich am Wochenende im Swinger Club von 3 harten
            Schwänzen in die Muschi und Arsch ficken lässt. Ja, meine
            Pornofreunde, Pornopaare und Nymphomaninnen, es ist soweit! Du
            kannst dir ALLES sofort anschauen - und zwar GRATIS! Überzeug dich
            selbst und nicht vergessen, die Feuchte Tube ist immer für einen
            Überraschungsschuss geladen. Und schau doch auch bei unserem Partner
            rein, dieser bietet euch auch einen geilen Porno Stream.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head: {
    title: "Feuchte Tube - dein Sender für kostenlose Pornos",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Dein kostenloser feuchter Porno-Sender. Feuchte Girls rund um die Uhr. Schalte gratis ein und finde dein tabuloses feuchtes Mädchen. Amateur Porno aus Deutschland.",
      },
    ],
  },
  data: () => ({}),
  async asyncData({ $axios, store }) {
    const includeTags = store.state.includeTags;
    const excludeTags = store.state.excludeTags;
    const skip = 0;
    const limit = store.state.limit;
    const url = store.state.apiUrl + "/videos";
    const params = {
      includeTags,
      excludeTags,
      skip,
      limit,
    };
    // const url = `${url}/videos?tag=${mainTag}&skip=${skip}&limit=${limit}`
    const data = await $axios.$get(url, { params });
    const nextPage = data.videos.length === store.state.limit;
    const videos = nextPage ? data.videos.slice(0, -1) : data.videos;
    return {
      videos,
      nextPage,
    };
  },
};
</script>