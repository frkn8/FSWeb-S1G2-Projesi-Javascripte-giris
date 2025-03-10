/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZDEN EMİN OLUNUZ (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığınız kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanızı öneririz.
Bunu sağlamak için cevabı direk console'a loglayın veya çağırdığınız fonksiyondan dönen değeri console'a loglayın.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. surucuYasi isimli bir değişken yaratın ve bir sayı atayın.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let sürücüYaşı1 = 17;
if(sürücüYaşı1>18){
  console.log(true)
  }else{
    console.log(false)
  }

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yapınız:   
   1. 2 değişken tanımlayın ve bunlara değerler atayın (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/


let birinciDeger = 55;
let ikinciDeger = 45;
if (birinciDeger > ikinciDeger) {
  birinciDeger = 25;
  console.log (birinciDeger);
  }


/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/


const stringsayi = "1999";
const numbersayi = Number (stringsayi);
console.log (stringsayi);
console.log (numbersayi);


/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamlayın:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsiniz)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığınız fonsiyonu test edin. Console'da sonucu 28 olarak görmelisiniz.
*/

function carpma(a, b) {
  return a * b;
}
console.log(carpma(7,4))



/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yapın:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımlayın.
 2. Gelen değeri kullanarak köpeğin yaşını hesaplayın (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(yas){
  
  
  return yas*7;
}
kopeginYasi(2);


/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yapın.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

function oyun(oyuncu, bilgisayar){
  switch(oyuncu)
  {
      case "Taş":
      return bilgisayar === "Makas" ? "Kazandın!" : ( bilgisayar === "Kağıt" ? "Kaybettin!" : "Beraberlik");
     
      case "Kağıt":
      return bilgisayar === "Makas" ? "Kaybettin!" : ( bilgisayar === "Kağıt" ? "Beraberlik" : "Kazandın!");
      case "Makas":
      return bilgisayar === "Makas" ? "Beraberlik" : ( bilgisayar === "Kağıt" ? "Kazandın!" : "Kaybettin!");
  }
}
console.log("Oyuncu taş, bilgisayar kağıt seçiyor... ve... " + oyun("Taş","Kağıt"));

// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yapın:
1. Bilgisayarın seçimini rastgele oluşturacağımız bir fonksiyon tanımlayın. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımlayın
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğiniz bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığınız oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/
function bilgisayarinSecimi()
{
  let bilgisayarSecimi = null;
  bilgisayarSecimi = 3 * Math.random();
  return bilgisayarSecimi < 1 
  ? "Taş" : ( bilgisayarSecimi < 2 ? "Kağıt" : "Makas");
}
const bilgisayarSecti = bilgisayarinSecimi();
console.log("Oyuncu taş seçiyor, bilgisayar da " + bilgisayarSecti.toLowerCase() + " seçti, sonuç... " + oyun("Taş",bilgisayarSecti));
/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamlayın:
1. Kilometre değerini argüman olarak alın.
2. Aldığınız bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(kilometreOlarakDeger){
  return 0.621371 * kilometreOlarakDeger;
}
console.log("100 km/s hızla giden araba, " + 
Math.round(milDonusturucu(100) * 10) / 10 + " mil/s hızıyla gitmektedir.");


//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yapın:
1. Santimetre değerini argüman olarak alın.
2. Aldığınız bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(santimetreOlarakDeger){
  return santimetreOlarakDeger / 30.48;
}



/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımızı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yapın:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

function cocukSarkisi(oAnkiMaymunAdedi){
  return oAnkiMaymunAdedi + " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!";
}
let maymunAdedi = 3;
for( let i = maymunAdedi; i > 0 ; i--)
console.log(cocukSarkisi(i));


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yapın.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(grade) {
  if (grade >= 90) {
    return 'A aldın';
  } else if (grade >= 80) {
    return 'B aldın';
  } else if (grade >= 70) {
    return 'C aldın';
  } else if (grade >= 60) {
    return 'D aldın';
  } else {
    return 'F aldın';
  }
}
console.log(notHesapla(54));



/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yapın.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/


function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}



/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla
}
