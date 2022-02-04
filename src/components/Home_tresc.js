import React, { Component } from 'react';
 
class Home_tresc extends Component {
  constructor(props) {
    super(props);
    this.state = {
            test: "test"
        }
  }
  

  zaladowane = () => { //3 event
    console.log("Załadowane");
  }
 
  render() {
    return (
        <section>
            <h1>Cykl książek</h1>
            <h3>Opowiadania</h3>
            <p>
            Cykl wiedźmiński (jeszcze wówczas nie planowany przez autora) zaczął się jako seria opowiadań, pierwotnie publikowanych na łamach miesięcznika „Fantastyka”. Były głównie nowymi wersjami znanych legend i baśni (nazywanymi wersjami postmodernistycznymi; sam autor w wywiadach twierdzi, że pisząc opowiadania jako metodę twórczą wybrał euhemeryzację baśni).
            </p>
            <p>
            Pierwszym z nich było opowiadanie Wiedźmin z grudnia 1986 roku, napisane na konkurs „Fantastyki”, w którym zajęło III miejsce (I miejsce zajęło opowiadanie Wrócieeś Sneogg, wiedziaam... Marka S. Huberatha).
            </p>
            <p>
            Kolejne opowiadanie Droga, z której się nie wraca (niezwiązane bezpośrednio z postacią Geralta z Rivii) ukazało się w sierpniowym numerze pisma w 1988 roku. Początkowo autor nie chciał nawiązywać w nim do cyklu ze świata wiedźmina, jednak kiedy cykl ten zaczął powstawać, pojawiły się w nim nawiązania do fabuły tego opowiadania. Jak wspomina pisarz, kiedy Droga, z której się nie wraca po raz pierwszy ukazała się na łamach „Fantastyki”, dokonano poprawek redaktorskich bez zgody samego Sapkowskiego (pierwotna wersja opowiadania została później opublikowana w zbiorze Coś się kończy, coś się zaczyna).
            </p>
            <p>
            Pierwsze cztery opowiadania o Geralcie oraz Droga, z której się nie wraca, ukazały się w zbiorze opowiadań Wiedźmin, który został opublikowany nakładem wydawnictwa Reporter. Później trzynaście opowiadań wiedźmińskich ukazało się w dwóch zbiorach wydawnictwa SuperNowa – Ostatnie życzenie oraz Miecz przeznaczenia. Dwa opowiadania pośrednio związane z cyklem – Droga, z której się nie wraca oraz Coś się kończy, coś się zaczyna (opowiadanie-żart, opublikowane w 1994 w fanzinie „Czerwony Karzeł”, mylnie odczytywane przez niektórych jako alternatywne zakończenie sagi o wiedźminie) znaleźć można w przywołanym wcześniej zbiorze Coś się kończy, coś się zaczyna.
            </p>
            <p>
            W 2002 roku, nakładem wydawnictwa Libros, zostały wydane dwa tomy antologii Opowieści o wiedźminie zawierające 15 opowiadań jako zestawienie dziejów Geralta.
            </p>
            <h3>Saga o wiedźminie</h3>
            <p>
            „Saga o wiedźminie” to pięć powieści o wiedźminie Geralcie (Krew elfów, Czas pogardy, Chrzest ognia, Wieża Jaskółki, Pani Jeziora), w których Sapkowski łączy wiele wątków rozpoczętych w opowiadaniach oraz dodaje nowe. Oprócz samego wiedźmina, główną bohaterką jest również Ciri – dziecko-niespodzianka znane już z opowiadań. Nazwa „Saga o wiedźminie” została nadana przez wydawcę – Sapkowski zamierzał nazwać sagę „Krew elfów”, zaś pierwszy tom miał być pierwotnie zatytułowany Lwiątko.
            </p>
            <h3>Sezon Burz</h3>
            <p>
            Osobny artykuł: Sezon burz.
            W wywiadzie dla Radia Gdańsk (20 stycznia 2012), Sapkowski zapowiedział kontynuację wiedźmińskich przygód. Jako orientacyjną datę publikacji podał co najmniej rok lub dwa oczekiwania[1]. Sezon burz został opublikowany 6 listopada 2013.
            </p>
            <h2>Lista książek</h2>

            <h3>Zbiory opowiadań</h3>
            <p>Wiedźmin (REPORTER 1990) (wszystkie opowiadania z tego zbioru zawarte są też w trzech zbiorach wydawnictwa SuperNOWA)
            </p><p>
            Ostatnie życzenie (SuperNOWA 1993)
            </p><p>
            Miecz Przeznaczenia (SuperNOWA 1992)
            </p><p>
            Coś się kończy, coś się zaczyna (SuperNOWA 2000) (zawiera dwa opowiadania luźno związane z cyklem wiedźmińskim)
            </p><h3>
            Tzw. saga o wiedźminie
            </h3><p>
            Krew elfów (SuperNOWA 1994)
            </p><p>
            Czas pogardy (SuperNOWA 1995)
            </p><p>
            Chrzest ognia (SuperNOWA 1996)
            </p><p>
            Wieża Jaskółki (SuperNOWA 1997)
            </p><p>
            Pani Jeziora (SuperNOWA 1999)
            </p><p>
            Poza tzw. sagą o wiedźminie
            Sezon burz (SuperNOWA 2013)
            </p>

            <h1>SERIAL NETFLIX'A</h1>
            <p>Wiedźmin (ang. The Witcher) – amerykańsko-polski telewizyjny serial fantasy, stworzony przez Lauren S. Hissrich na podstawie książek Andrzeja Sapkowskiego o wiedźminie Geralcie.
            </p><p>
            Ośmioodcinkowa pierwsza seria udostępniona została w całości 20 grudnia 2019 w serwisie Netflix[2]. Drugi sezon serialu pojawił się 17 grudnia 2021[3].
            </p><p>
            Netflix wydał także prequel serialu - film animowany Wiedźmin: Zmora Wilka oraz produkuje serial aktorski The Witcher: Blood Origin.
            </p>
            <h2>Zwiastun:</h2>
            <center><iframe width="500" height="300" src="https://www.youtube.com/embed/ndl1W4ltcmg" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onLoad={this.zaladowane}></iframe></center>
        </section>
    );
  }
}
 
export default Home_tresc;