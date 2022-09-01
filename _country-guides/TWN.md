`Intro to Taïwan`


---

# Subdivisions

Taïwan is divided in 16 counties and 6 special municipalities. They're often named after the capital of the county, followed by the title "county" or "city".

## 16 counties

- Changhua county	`彰化縣`
- Chiayi City	`嘉義市`
- Chiayi county	`嘉義縣`
- Hsinchu City	`新竹市`
- Hsinchu county	`新竹縣`
- Hualien county	`花蓮縣`
- Keelung City	`基隆市`
- Kinmen county	`金門縣`
- Lienchiang county	`連江縣`
- Miaoli county	`苗栗縣`
- Nantou county	`南投縣`
- Penghu county	`澎湖縣`
- Pingtung county	`屏東縣`
- Taitung county	`臺東縣`
- Yilan county	`宜蘭縣`
- Yunlin county	`雲林縣`

##6 special municipalities

- New Taipei City 	`新北市` 	
- Taipei City 	`臺北市` 	
- Taoyuan City 	`桃園市` 
- Taichung City 	`臺中市` 	
- Tainan City 	`臺南市` 	
- Kaohsiung City 	`高雄市`


<CountryMap code="TWN" scale="800" />
                
To learn the cities and counties you can use the [Seterra quiz](https://www.geoguessr.com/seterra/en/vgp/3273) and the [City quiz](https://super-duper.fr/country/quizz_cities_en.php). 

---

# Geography

Taïwan has a main island and quite a few secondary islands, some of which are quite near continental China.
<img src="/img/TWN/islands.png" alt="map of Taïwan islands" />
The Chungyang mountain range (Zhongyang shanmo in chinese) covers the center and eastern part of the main island.
All the islands have streetview coverage except the small Wuqiu islands.

---

# Roads, Markings, and Signage

## road types

There are 4 types of roads in Taïwan :
- National freeways : <RoadNumber style="flower" num="1" bg="green"/> 
- Regional highways :<RoadNumber style="tri" num="1" bg="blue"/> or <RoadNumber style="tri" num="60" bg="red"/>
- County roads : white square.
- Township roads : they have a county symbol in front of their number.
<img src="/img/TWN/roads.png" alt="road types in Taïwan">
A road can be split in different sections, identified by a symbol after the number. For example road <RoadNumber style="tri" num="7甲" bg="blue"/> has several branches like <RoadNumber style="tri" num="7丙" bg="blue"/> and , which is the equivalent of road 7A and road 7C.
<img src="../img/TWN/subroads.png" alt="road subsections in Taïwan">

## National freeways

National freeways are numbered <RoadNumber style="flower" num="1" bg="green"/> to <RoadNumber style="flower" num="10" bg="green"/>. Every 100m, there s a kilometer sign telling you the distance with the north end of the road for north-south roads, or the west end of the road for east-west roads. Exit numbers also match this same distance.
<img src="/img/TWN/national_highways.png" alt="national freeways in Taïwan">

## Regional highways

On the map, the triangle logo appears in blue, unless the number is 60+ in which case they appear in red. Beware, the color on the map doesnt necessarily match the color in the streetview.</p>           
Some noteworthy regional highways :
- <RoadNumber style="tri" num="1" bg="blue"/> and <RoadNumber style="tri" num="3" bg="blue"/> follow the west coast.
- <RoadNumber style="tri" num="2" bg="blue"/> follows the north coast.
-<RoadNumber style="tri" num="9" bg="blue"/> and <RoadNumber style="tri" num="11" bg="blue"/> follow the east coast.
There is no global order but here are a few tricks : <RoadNumber style="tri" num="2" bg="blue"/>/<RoadNumber style="tri" num="4" bg="blue"/>/<RoadNumber style="tri" num="6" bg="blue"/>... until <RoadNumber style="tri" num="26" bg="blue"/> go from north to south, <RoadNumber style="tri" num="60's" bg="red"/> roads are rather north, <RoadNumber style="tri" num="70's" bg="red"/> rather center, and <RoadNumber style="tri" num="80's" bg="red"/> rather south.

## County roads</h3>

They range from 101 in the north to 200 in the south of the main island. Roads 201 to 205 are in Penghu county.

## Township roads

Township roads have a symbol in front of their number.
You can learn the symbols with the [township roads quiz Taïwan](https://super-duper.fr/country/quiz_taiwan_roads_en.php), but you can also find them by scanning the map. Indeed, the road symbol is one of the first 2 symbols of the county name :
<img src="/img/TWN/countyroad_example.png" alt="Township road ">
Exception : Keelung city, Hsinchu city et Chiaoyi city all use the 市 symbol which simply means "city".

---

# Phone codes

In Taïwan, area codes range from 02 in the north to 08 in the south. 09 is for cell phone numbers.
<img src="/img/TWN/areacodes.png" alt="map of phone area codes in Taïwan">
You can learn them with the [area codes quiz](https://super-duper.fr/country/quizz_tel_en.php?country=TW).


---

# Electric poles

## Recognize taïwanese electric poles

The main characteristic of taïwanese electric poles are the black and yellow diagonal stripes at the bottom. The stripes are :
- similar to the japanese ones, except the japanese stripes are vertical.
- the same as the korean stripes, except in taïwan they go all the way down to the ground.

<img src="/img/TWN/electric pole.png" alt="Township road">

other characteristic that are found on many (but not all) electric poles include :
- a blue plaque
- a sticker, which could be either vertical or horizontal, and either yellow or green. The sticker has a big number written on it.

## Electric poles geolocation system

### Find the coordinates

On the main island, there is a blue plaque screwed to many of the electric poles.
<img src="/img/TWN/blue_plaque.png" alt="blue plaque on Taïwan electric poles">
The string "E3264 BE08" on the image is the location of the pole in a coordinate system specific to the Taïwan power grid, which indicates the location of electric pole with a 10 meter precision.

### The theory

We take our example "E3264 BE08", and read left to right.
The most important information is letter E, which gives us a 50 km by 80 km rectangle.
<img src="../img/TWN/twd67.png" alt="map of Taïwan power grid coordinates system">
The second most important information is "3264", it tells us that within rectangle E, we are 32% eastward and 64% northward.
<img src="../img/TWN/twd67bis.png" alt="detail of Taïwan power grid coordinates" >
The string "BE08" is for precision but it is of no practical use ingame.
If you want to know more about this coordinate system, this [wiki page](https://wiki.osgeo.org/wiki/Taiwan_Power_Company_grid) explains how to translate them in TWD67 coordinate system, which can then be converted in classic [WGS84 coordinates](https://mygeodata.cloud/cs2cs/).    
  


### Practical use

You can train with the [Taïwan power grid coordinates geoguessr map](https://www.geoguessr.com/maps/630f95ff91121015c983c4a0) and the [Taïwan power grid quiz](https://super-duper.fr/country/quiz_taiwanpower_en.php).
Once you know the repartition of the letters, remembering 6 or 7 points is good enough to recreate the whole grid.
<img src="/img/TWN/grid.png" alt="recreating the grid">
The easiest landmarks are :
- B slightly north of Hsinchu, C in Jiaoxi.
- F in Nanao township, on the west coast the border between Miaoli county and Hsinchu city is on the same horizontal.
- H is near Puli, where the google map indicates either Taïwan or Nantou county depending on the zoom.
- K is n the west coast at the border between Yunlin county and Chiayo county.
- N is just north of Tainan city, on the same horizontal you find Guanshan.
- R is in Taïmali.

---

# Languages

Mainly chinese with some english.

- Chinese
- English (Latin)

## Samples

### Chinese

> 人人生而自由，在尊嚴和權利上一律平等。 他們被賦予了理性和良心，應該本著兄弟情誼的精神對彼此採取行動。


### English

> All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.

---

# Most Similar

## [Hong Kong](/countries/HKJ)


