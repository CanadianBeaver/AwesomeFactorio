# Добыча ресурсов

*![Пойдём с нами в забой](./images/index.01.jpg#right50)* Добычу ресурсов можно вести твёрдотопливными бурами `Burner mining drill` или электрическим бурами `Electric mining drill`. Тут капитан очевидность спешит на помощь, других буров в игре как бы не предусмотрено. Разве что киркой `Steel axe` махать собственноручно (*кстати, кирка почему-то называется стальным инструментом, оригинальный перевод, вот бы всем по стальному инструменту*). Добыча твёрдотопливными бурами стоит рассматривать как временный этап на начальной стадии игры, который стоит сменить как можно быстрее на добычу электрическими бурами. Добыча электрическими бурами ничем не отличается от ресурса к ресурсу. Все чертежи полностью одинаковы что для железной руды `Iron ore`, что для медной `Copper ore`, что для камней `Stone`, что для угля `Coal`. Даже добыча урановой руды `Uranium ore` не сильно отличается, главное чтобы электрические буры были полностью пристыкованы боками друг к другу или соединены трубами `Pipe`.

## Добыча твёрдотопливными бурами

Для начала игры чертежи не предусмотрены. Места добычи твёрдотопливными бурами `Burner mining drill` строятся руками в не большом количестве и подлежат последующему сносу. Стройте такое где-то на обочине, по краям ресурсных пятен, чтобы в последствии не мешать строительству электрических буров `Electric mining drill`. Исключение составляет разве что добыча угля, которая твердотопливными бурами может просуществовать довольно долго. Причина этого проста, как три советские копейки 1961 года чеканки. На начальном этапе игры могут случаться перебои с производством энергии, а твердотопливные буры никак не зависят от производимой энергии и способны поставлять уголь для паровых электростанций всегда. Перезапустить же производство паровой энергии при перебоях с поставкой угля бывает затруднительно и зачастую возможно только в ручную, нужно подбежать к бойлерам `Boiler` и загрузить топливо из рюкзака без никакой автоматизации. Но и злоупотреблять твёрдотопливными бурами не следует, они сжигают уголь намного быстрее чем электрические буры, подключённые к паровой электростанции.

Примеры самой ранней стадии игры на картинке, не забываем что топливо для печей и буров нужно загружать руками:

![Чертежи в игре](./images/MiningResources.02.jpg)

1. Простая добыча камней `Stone` в сундук. Камни нужны для производства каменных печей `Stone furnace` и бойлеров `Boiler`.
2. Добыча меди `Copper ore` и руды `Iron ore` с переплавкой в каменных печах. Выгружать выплавленные плиты опять-таки руками, как и уголь загружать для работы буров и печей.
3. Добыча угля `Coal` и выгрузка в твёрдотопливные буры, буровая многоножка так сказать, если понимаете пра чё я. Достаточно руками загрузить адын уголь в любой бур и добыча будет идти пока хватит места, а места хватает на 50 единиц в каждом буре. Даже если забрать все добытые угольки, буры продолжат добычу. Четыре бура могут нехило добыть таки 200 угля, восемь буров аж 400, на этом этапе игры хватит всем.
4. Добыча угля для паровой электростанции, дам чертеж одного звена, всё остальное стыкуется вниз. Загружаем руками адын уголь в первый бур, а дальше добыча идёт без остановки. [Подробнее об организации добычи угля твёрдотопливными бурами](../HowToStartNewGame/BurnerDevices.md#твёрдотопливные-буры).

*![Не чертёж](./images/MiningResources.03.jpg)*

```blueprint
0eNqd011Kw0AQB/CrlAHfktKk+dx3TyEi+RjKwGYSdrdiCAHx1UN4CkF88Azpjdw2UqSmmvq4H/PbP5NMB7ncYqOIDYgOStSFosZQzSBgeBk+hvfd4+559zS8Da9iEcZL7wocoKJmDeKmA00bzuS+1rQN2iIyWNkbnFX7Vb5VjMqtiIk3bqlISuhtPZf4AMLrbx1ANmQIR+6waO94W+Wo7IVfIQeaWtMYtgPruZEDLYhkZZ8oSWExnvm980P2j7JRGeumVsbNUZoJNFiGBzZOl+Hf8Ho+vD4LBxNwcNoLYo3K2KPzkZPVnMjhBbJ/Vo4m5Gh+M46wNweOL+/yz8RTXU7+AXtz4PTCX9n7sk97YSfmMGLi2+Q6IDMb0u5dZ0q2i6LO9uQ9Kj1+9MQL4tSPo9RfJWu/7z8B1IlS2Q==
```

:::warning По поводу добычи угля
Важно чтобы уголь, добываемый электрическими бурами, проходил по конвейеру через места, куда выгружают твёрдотопливные буры. Посмотрите на розовую пунктирную стрелку в четвёртой области. Так вы заставите твёрдотопливные буры работать меньше и меньше сжигать уголь. Альтернативно, можно соединять разные конвейеры от электрических и твёрдотопливных буров разделителем `Splitter` с приоритетом прохода угля от конвейера электрических буров.
:::

## Добыча электрическим бурами

А вот тут чертежи будут и не один как прежде. Начнём от простого к сложному, а потом к ещё сложнейшему.

### Самый ручной чертёж

Чертёж хорош тем, что легко возводится руками в четыре простых движений, ну может в пять и стыкается по всем направлениям. Такое можно строить с самого начала игры и даже роботами без зазрения совести. Можно использовать для добычи урановой руды, если добавить трубы в промежутках между бурами с той стороны, где проведена линия электропередач. Короче, маст хэв на все случаи жизни, рекомендую [научиться строить его руками](../HowToStartNewGame/ManualConstruction.md#добыча-ресурсов), это не сложно, [тут инструкция](https://youtu.be/ZI2aVerqCT4?t=854).

*![Самый ручной чертёж](./images/MiningResources.04.jpg)*

```blueprint title="Самый ручной чертёж"
0eNqdl91q2zAUx1/FCAYdOCWS/BH7NXa5lJEPkwkc2djuWCmBtrvZKFtht7voXmCQtU3Xr2SvIL/RjtwSxuxtR7pIgqTjn/45On8f+5CM0/0kL4SsSHxIpkk5KUReiUySmKhztVF39VF9Wp+oG7WKnTDaDZ4N5VCqz7D0Q13A95W6qU/q4/rMqT+qe7VSD/BZwxXL+kit1SYeSrrrqHMYbSDwTF0C60ItdaSj7oCwhuFK3apVfTSUDGK/QtQVLDw49XErpJlXPztxIOME1u/V9/rUUV/UN3Xu7IDOpboGOXrp1lEP8H/eN9Tb50PJtbYuZVoAYPRE/an+oBPgwMQ7nQ/YX20cHQCxN9uNG3FrALT/mFo6O42Aa435hyLiklKO8l6V9WaFmOpTeUvi0CUHJGZ04RIxyWRJ4peHpBQzOUp1RHWQJ3BgokrmcL0czfUoSZNJVYhJby6kkLPetBBpSjRBThNg0sWeSxJZiUokj8BmcPBK7s/HSQEB/0G5JM9K8VgsjUq66zc64Re2mYoCrmpW2cJt0dmWXhUjWeZZUfXGSVq1sfwJ2/8T63Vgualo/2+igw66ZyyaYUT7xliKwQa2B+hjDjDc0sv5KE172z3yLE3abPbE5g1bJmL2epztF7ryaLjXwR8YJ8XDJCUyxnIMlvZtC8/DFB6lxrIDlGxzG/oorrUPQ1Q6PNvSHmBKm5obcoDKSmDMDVFcSy/SftuMoctZlx2puR8p6o5NzR0ZYbjM2pFt3V01yOz7I0M1SHNrUlS3YdwcjOo3zLPOOEdl3LfOOKqjMXN7UlTPYaE5GNV1mIUpUX2BmZuSohoDt3dlgKkRbu/KCFMjnFneakPscw+3sCeq+3Dzp1eKaj/ctz7TCHWmFr5EtQhu7kvW0dPgPap59Yp/e5t2SToCEsy9EPO8qYw3SVE+1tWAemHEwiBi/QFni8UvURyXDA==
```

### Самый основной чертёж

Этот чертёж по сложнее, но также стыкуется, подходит без проблем для добычи урановой руды, имеет немного большее покрытие чем предыдущий (хотя и сомнительно). Руками строить сложновато, но посильно. Обходиться дороже предыдущего из-за подземных конвейеров. В основном используется [после запуска первого спутника](../HowToStartNewGame/README.md#после-запуска-спутника) на добывающих аутпостах `Mining outpost`, по-русски слышал вариант перевода как `шахтёрский аванпост`, где строится роботами из рюкзака играющего.

*![Самый основной чертёж](./images/MiningResources.05.jpg)*

```blueprint title="Самый основной чертёж"
0eNqdVe2K2kAUfZUwUGghionRaH72NWopfgwyECdhMikVCexuWdqypX2A/pA+QMG12nV1dV/h5o16Z1yCbQwb/RGGmXvmnDNnbpIJ6fkxDQXjkngTMqBRX7BQsoATj8AUdrBOL9Kb9ApWsDRggQu36Q3MYZZ+S7/AEu4NeMTFOSwRdw1b2KWXCu0ZrUbVfdHhHQ4/06v0AkErLCxhk37VkDnsvA63qgZMVRUx3+E3yiA3oh4MDdrBRgka8AN+wdR4CXdY/YPqqoTaD+jtM6zV5FWH24VkGrJVNuFeWf3H9YGUWuzwejHPbfpRBaL3GyqNA6/6kFtE5vVgZhoImcHaSD9pMX2qOdq/xslC8SkYhoJ6OwNVLjVe0c3RWWbhCbA3AjOU1gd5xOoCnw0uKF8L3LlSRlZwtz/sArNT+7dKM28QSYhJIt4NKzKoDAUbqIb4QDzXJGPitROTsH7AI+K9mZCIDXnXVwA5Dim2CpN0hNt5d6Rm1Kd9KVi/MmKc8WFlIJjvE8XABxQpreStSSiXTDK6J9ST8Tsej3pUIOAZKpOEQcT2bapNWtWGtokjygyYwF26aidmjt3O2KXo8igMhKz0qC/ztPUn2tr/tM4R2npGG+MxxVAEOD5DnPPrmFmkPIwlOaLjnBpOo0iseYS9cW70Tpnomxn7iA5YPKpkImHg0+KccEyO0LnnRuGUiaJ1cp80yvRJ+4w+cYr7JIhlQaNYtXPv0i1zl5Z1cj5umXys09/PZine+rnd4pbpFss52XYrbxs/jPpb6h38mE3id5EI1153I9bH+Xsqov29tCzHbdtus23XWnU7Sf4Cgl8+qA==
```

### Самый роботизированный чертёж

А вот и чудо роботизации. Чертёж не плох, имеет хорошее покрытие, имеет большее количество выходных конвейеров чем любой предыдущий. Но при этом, не стыкуется по вертикали, не подходит для добычи урановой руды, безумно дорог из-за подземных конвейеров, не ровно выровнены выходные конвейеры, имеет разное количество буров на стороны конвейера, руками такое чудо строить трудно. Деревянные опоры ЛЭП `Small electric pole`, можно заменить на средние `Medium electric pole`.

*![Самый роботизированный чертёж](./images/MiningResources.06.jpg)*

```blueprint title="Самый роботизированный чертёж"
0eNqdVm2K2zAQvYoR9J8dLDt2HF+iB+guJR8iFTiyseXSEAJJtqWUXVp6gFJ6g92lhpBs3StIN+rIyaaB2GysP1Ekzbz35klje46GUU6SlDKOwjkak2yU0oTTmKEQiZ+iFFu5lLdyLTaiCI2+3bFfXTHxQxSG+Au7v+Un9Ss2cm3AsJPf1FCKB8j5LDaGvJFLcS/+iPvOFYPEX3INC6WKl3cGQN+ILew/QSgEFRC/T4dJaaqlUuHdy+8K/wkit3IFUtS/nbxT+89KTnQeJYhHSP0qv1QZwPBwkAOTjlFVV6NffhQlRAGmXAFeKR5BSAG0OwVRqEUlffW/ElHsxQAhVLCs9JewfdsxkIkyNkgsHluTlI6Vxx9QiG0TzVAYLExERzHLUPhmjjI6YYNIRfBZQsB+yskU8tlgqmYkIiOe0pE1pYyyiTVOaRQhhcDGRGEurk1EGKeckj1gNZm9Zfl0SFIIOELlkJFO0hhGa0giDiRJnNH9qVcCg45XKbQ7HjCMaQrc1W7XPKpjSc6B/4zHacHjHngcDR73yJNNB1FkHQ1K4og0U7kVFSN08m4Y56myyjexd13D0H3B/EYO76ycGnSvLbrfhO7UoPvt3Hk+8O65O66J/Tp3em31Y7upAL8GPtC4rr7GNepr8HjNPHHOG4hU07c07EAXXHLgGGv0XaBhGNZp8J6WY25bx7ymuupuGG7d38EJfB2gp/dI6l/edFizr7F9+WMP9zRaAmOtEw407hJ2X6aCd2H1+gxPvm9MFA0AGdZeQ1Sc8QyW3pM02/dUgLu9vtPz+44duM5i8Q+oP2uL
```

:::warning Маленькое замечание
Данный чертёж предполагает размещение разного количества буров на каждую линию (сторону) одного конвейера, поэтому когда у вас будет прокачанный уровень продуктивности добычи `Mining productivity`, исследование такое, такой чертёж уже не айс. Например, на 65 уровне продуктивности добычи нужно всего лишь 12 электрических буров (по 6 с каждой стороны), чтобы полностью заполнить экспресс-конвейер `Express transport belt`, голубой который добываемым ресурсом.

*![Самый роботизированный чертёж](./images/MiningResources.08.jpg)*
:::

Пользовать такое творение есть смысл на месторождениях ресурсов для увеличения количества выходных конвейеров. Приемлемым временем применения является время чуть позже после запуска первого спутника и ещё какое-то время пока уровень продуктивности добычи не развит.

### Исчё один самый роботизированный чертёж

А вот следующий чертёж будет хорош на высоких уровнях продуктивности добычи `Mining productivity`, о чём говорилось выше. На обычных параметрах карты, можно начинать использовать на уровнях продуктивности 45+ баба ягодка опять или даже чуть раньше. В чертеже исправлены проблемы предыдущего чертежа, а количество выходных линий хватит на несколько погрузочных вокзалов на добывающих шахтерских аванпостах.

*![Второй самый роботизированный чертёж](./images/MiningResources.07.jpg)*

```blueprint title="Второй самый роботизированный чертёж"
0eNqllk2P2jAQhv/KyFJvCSIkIR/Hbntr1UN7K1UVwhCsOnZqO9UixH/vJFkFtGRZ5FwAk/H7zDszsXxiW9Fio7m0LD+xHZpS88ZyJVnOntQ/1EWFOaTxIvmwkR9RWPiCsrIHaFDDJ82FyCHbyM+FobB4IynoCLb4w2UF9oBAirySsNeq7tdPqm6KklS4HB8WcgdG8OpgxRHUfm/Q2nF/hzBgVb8SuLd9uO6iPQhhSykZ2gRKI5QFkbgFcjPEm6KmDwLiAn4cOOmQO4Gmf9htJcXRTY+CbWtB49+W65cwoSiVlzDitHKHutKKvqGr3ZDBYiOZx3ippGH5zxPrfBWiK6k9Nki15BZripCUEK1QYEmplH7NJTn1ezQ7kwKpP7M8OP/yGErLLcdBsF8cf8u23qKmgIvUc0OZGv8qL79LiWCNMnxo5YmRqB8s09Ui9tiR9gch/STgjnyWQ1DkjcnKprWUzg125YgNLtjYARs6YpcXbOqAjd7p1yQzGplR8Jq5moDEszt5y3nA23o+dvk2VrX2DW7iUtPlHa/rCUjqAgkvkOiRxmWz34UodKlgsHRwl2R33E2VMLicMDXueFv7I6xRAt+11r3mU7LzT5Db/B8Y9yB0GYmrYU8eGYkgmn1Q3YIecRfP566dZnHtMovpHbeTs5jMP6wyJ3vp7GmNV07gbHZD4/h9MF0y+ntJfnUL9JgoSJ/++7pewLf+NgbfRdE/ovugGaY/pd5lqyQJkyxOo/P5Pxc/YXE=
```

Выглядит примерно так (все добывающие буры работают без ожидания свободного места):

![Второй самый роботизированный чертеж в действии](./images/MiningResources.09.jpg)

## Как строить шахтёрские аванпосты?

Можно руками... но лучше роботами. Для этого есть `Personal roboport`, ну вы знаете как им пользоваться. А вот чего возможно не знаете, это то, что `Spidertron` может тоже носить персональную дронстанцию и возводить всё что нужно по чертежам. Чертежи я вам дал, загляните ещё в [Autotorio](Autotorio.md), тулза особенно полезна для строительства нефтедобывающих аванпостов.

Управлять паукотроном можно через режим карты и давать задания через размещение чертежей в нужных местах. Если разместить чертёж где-то далеко, а потом послать туда паучка, но всё застроит сам. Если карта закрыта в тумане, нужно вначале послать паукторона к нужному месту и потом уже размещать там чертежи. Радиус строительства у паукотрона такой же, как и у игрока, то есть не большой. Давать задания ходить туда-сюда паучку придётся много. Дать сразу много заданий ходить туда-сюда не поможет, роботам `Construction robot` нужно время на подзарядку, которая удаётся только когда паукотрон стоит. Для строительства больших добывающих шахтерских аванпостов отправляйте строительную бригаду из нескольких паукотронов.

Когда база разрастётся до больших размеров стоит рассмотреть вариант доставки игрока и стройматериалов к месту строительства на поезде. Поезда ездят быстрее всего и таскают с собой много вагонов разного хлама. Создайте, где-то рядом с вашим [магазином тысячи мелочей](../HowToStartNewGame/Mall.md) погрузочную станцию стройматериалов и катайтесь с ветерком. Можно и `Car` с собой возить, на случай если прибежит орава местных и придётся уносить ноги бросив всё, даже поезд с пожитками (пессимистический вариант)...

## Больше подробностей

:::tip Это интересно:
[Много разных чертежей](https://www.reddit.com/r/factorio/comments/ig96gm/big_book_of_mining_blueprints), есть интересные варианты

[Кое-что ещё, но не очень много](https://wiki.factorio.com/Mining)

[Расчёт количества буров в зависимости от уровня продуктивности добычи](https://factoriocheatsheet.com/#mining)
:::

И вот вам [сохранёнка со всеми няшками](../../website/static/saves/AwesomeFactorio%20-%20Resources.zip), чертежи в книге игры, разбор всех полётов [в этом вашем тубе](https://www.youtube.com/playlist?list=PLvB0qwWjZb4KL5HZqJnKbtlvfdKMYzCs2).

*![Чертежи в игре](./images/MiningResources.10.jpg)*

Детальный разбор добычи ресурсов смотрите на YouTube канале.

[*![Добыча ресурсов](http://img.youtube.com/vi/ZI2aVerqCT4/0.jpg)*](http://www.youtube.com/watch?v=ZI2aVerqCT4)
