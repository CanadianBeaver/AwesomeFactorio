# Улучшаем угольную электростанцию

Наша первая электростанция всегда будет [паровой электростанцией на угле](SteamPower.md#чертёж-угольной-паровой-электростанции), так устроена игра. [Вторую паровую электростанцию можно на твёрдом топливе](SteamPower.md#чертёж-паровой-электростанции-на-твёрдом-топливе), производя его из дизельного топлива *![Light oil](../icons/light-oil.png)* `Light oil` через продвинутую переработку нефти *![Advanced oil processing](../icons/advanced-oil-processing.png)* `Advanced oil processing`. Всё бы ничего, но первая электростанция у нас остаётся на угле, питаясь от начального месторождения угля, которое постепенно иссякает. Однако, после открытия производственного исследовательского пакета *![Production science pack](../icons/production-science-pack.png)* `Production science pack` (фиолетовая наука) станет доступна технология сжижение угля *![Coal Liquefaction](../icons/coal-liquefaction.png)* `Coal liquefaction`, что позволяет переводить уголь в твёрдое топливо перед сжиганием его в бойлерах. Перевод первой паровой электростанции с угля на твёрдое топливо путём его сжижения [может повысить эффективность](EfficientFuelForSteamPower#уголёк-coal-супротив-твёрдого-топлива-solid-fuel).

:::tip Вся статья, кратко
Возьмём обычную паровую электростанцию на угле и добавим заводиков по сжижению угля, а производимым твёрдым топливом будем питать исходную электростанцию
:::

## Предварительный расчёт

Наша первая электростанция питающаяся полным конвейером угля состоит из 34 бойлеров, её и будем улучшать до паровой электростанции состоящей из 40 бойлеров (максимум на двух насосах). Для этого потребуется примерно 360 единиц твёрдого топлива. С учетом потребностей в паре для сжижения угля и в воде для переработки мазута в дизельное топливо *![Heavy oil cracking](../icons/heavy-oil-cracking.png)* `Heavy oil cracking` можно рассчитывать примерно на 38 бойлеров, плюс один бойлер будет производить пар для сжижения угля. То есть, общее число бойлеров будет 39. [Примерный расчёт](https://kirkmcdonald.github.io/calc.html#data=1-1-19&rp=4&cp=4&min=2&p=coal&items=solid-fuel:r:360), плюс/минус колдовство и практическая пригонка говорят, что нам потребуется:

| Чего | Чего-чего? | Сколько | Зачем? | Примечание |
| :---: | :---: | ---: | :---: | --- |
| *![offshore-pump](../icons/offshore-pump.png)* | Насос | 2 | *![water](../icons/water.png)* | Водица для всего |
| *![boiler](../icons/boiler.png)* | Бойлер | 38 | *![steam](../icons/steam.png)* | Пар для паровых двигателей |
| *![steam-engine](../icons/steam-engine.png)* | Паровой двигатель | 76 | *![big-electric-pole](../icons/big-electric-pole.png)* | Выработка липестричества, где-то 68 с половиной мегаватт |
| *![boiler](../icons/boiler.png)* | Бойлер | 1 | *![steam](../icons/steam.png)* | Производим пар для сжижения угля |
| *![oil-refinery](../icons/oil-refinery.png)* | Нефтезавод | 4 | *![coal-liquefaction](../icons/coal-liquefaction.png)* | Сжижаем уголь |
| *![chemical-plant](../icons/chemical-plant.png)* | Химзавод | 1 | *![solid-fuel-from-petroleum-gas](../icons/solid-fuel-from-petroleum-gas.png)* | Производим твёрдое топливо и уничтожаем попутный газ полностью |
| *![chemical-plant](../icons/chemical-plant.png)* | Химзавод | 3 | *![heavy-oil-cracking](../icons/heavy-oil-cracking.png)* | Производим дизельное топливо из лишнего мазута |
| *![chemical-plant](../icons/chemical-plant.png)* | Химзавод | 12 | *![solid-fuel-from-light-oil](../icons/solid-fuel-from-light-oil.png)* | Производим твёрдое топливо из дизельного |

При такой конфигурации завода у нас не будет оставаться лишнего попутного газа и мазута, то есть превращаем всё в твёрдое топливо и производим электричество из пара.

## Само творение

![Upgraded steam power](../images/PowerProduction/UpgradingSteamPower.01.png)

и её чертёж:

``` blueprint
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
```

:::warning Категорически важная информация
Сия конструкция должна быть запущена руками (или роботами). Для старта сжижения угля нужно небольшое количество мазута. Его можно принести в рюкзаке, 10 бочек будет достаточно, заводик по расфасовке прилагается рядом с паровым двигателем на обочине. Или протянуть трубы от места где у вас много мазута.
:::

:::info Сколько мегаватт?
При полной нагрузке, электростанция выдаёт чистыми примерно 65 мегаватт, если модули эффективности проставлены.
:::

:::tip Какая выгода?
По сравнению с обычной угольной паровой электростанцией здесь мы получаем чуть больше мегаватт, всего пять или шесть больше. Стоит ли связываться с таким геморроем? На самом деле, выгода кроется в расходе угля. Новая электростанция под полной нагрузкой потребляет всего пол конвейера угля, тогда как паровая на угле потребляет полный конвейер. Профит 100%, можно построить ещё одну такую же электростанцию рядом, обе будут потреблять целый конвейер угля, а выдавать в два раза больше мегаватт, даже исчё больше.
:::

## Пояснения

К моменту нашей затеи уже будут открыты `Module` ([разные модули](https://wiki.factorio.com/Module)), поэтому в расчёт заложим по одному модулю производительности *![Productivity module](../icons/productivity-module.png)* `Productivity module` в нефтеперерабатывающий завод *![Oil refinery](../icons/oil-refinery.png)* `Oil refinery` и в химический завод *![Chemical plant](../icons/chemical-plant.png)* `Chemical plant`. Также запихнём модулей эффективности *![Efficiency module](../icons/efficiency-module.png)* `Efficiency module`, для сдерживания загрязнения. Все модули первого уровня, другие соответственно не стоит производить до запуска первого спутника. Хотя можно и без моделей, количество заводов будет таким же, только расход угля возрастёт, где-то на 50 в минуту под полной нагрузкой. *А ведь из угля мы могли бы сделать красных микросхем, которые *![Advanced circuit](../icons/advanced-circuit.png)* `Advanced circuit`, и из которых сделать ещё больше модулей.*

---

Бойлер, производящий пар для сжижения угля, производит пара чуть больше чем надо, Требуемая мощность ~60%, оставшийся пар можно складировать в `Storage tank` (Резервуар) и отдавать излишки на один паровой двигатель через `Pump` (помпу). Смотри на рисунке в нижнем правом и теперь в верхнем углу. А можно и забить, лишнего пара будет не так уж и много. *Как вы думаете, производство электричества этим паровым двигателем превысит расход электричества на содержание обслуживающей его помпы? Ваше мнение обязательно напишите в комментариях к видео... подпишитесь и залайкайте всё на канале, иначе говоря подымите мне рейтинг на немонетизируемом ютубе, се ля ви.*

---

Данный чертёж производит чуток больше дизельного топлива чем надо. В случае его переизбытка остановится процесс сжижения угля на нефтеперерабатывающих заводах, но не остановиться производство твёрдого топлива. Как только дизельного топлива станет малость меньше и освободиться место в трубах, процесс сжижения угля возобновиться. Избыток дизельного топлива можно хранить в резервуаре на случай перебоя с поставкой угля, а можно пускать на какое-то другое полезное дело, а можно и вовсе забить на всё это, как было с паром. *Далее следует квэст: "найди на чертеже резервуар с дизельным топливом", удачи.*

---

Чертёж выполнен для игры без бонусов вместимости манипулятора *![Inserter capacity bonus](../icons/inserter-capacity-bonus.png)* `Inserter capacity bonus`. Соответственно на чертеже пресутсвуют по два длинных манипулятора *![Long-handed inserter](../icons/long-handed-inserter.png)* `Long-handed inserter` загружающие уголь в нефтеперерабатывающий завод. При наличии [второго бонуса вместимости манипулятора](https://wiki.factorio.com/Inserter_capacity_bonus_(research)), достаточно и одного длинного манипулятора. Но эти исследования обычно пропускают, так как для запуска спутника они не нужны, ровно, как и исследование открывающее пакетный манипулятор *![Stack inserter](../icons/stack-inserter.png)* `Stack inserter`.

:::note На самом деле
Хотя пакетный манипулятор и можно пропустить, он полезен для разгрузки поездов. Исследование `Inserter capacity bonus` также полезно выполнить до второго уровня, что позволяет увеличить вместимость простых манипуляторов до двух предметов, а пакетных до четырёх. При этом тратятся только красные *![Automation science pack](../icons/automation-science-pack.png)* `Automation science pack` и зелёные *![Logistic science pack](../icons/logistic-science-pack.png)* `Logistic science pack` стеклянки, которые можно накопить заранее. Правда нужно много банок, аж(!!!) 600, и конечно же время на проведение исследований, которое оттянет запуск первого спутника.

Чтобы запустить спутник как можно быстрее, действительно есть смысл пропустить пакетный манипулятор и бонусы вместимости второго уровня. Пакетный манипулятор очень дорогой в производстве, требует много времени на сборку, а работает всего лишь в два раза быстрее чем быстрый манипулятор *![Fast inserter](../icons/fast-inserter.png)* `Fast inserter`. Дешевле поставить два манипулятора вместе, как на чертеже, чем рассчитывать на бонусы.
:::

*А исчё можно придумать другой чертёж, где вместо длинных манипуляторов будет один быстрый, сумеете?*

---

Конвейер сделан так, чтобы уголь подавался на бойлеры вместе с твёрдым топливом. Соответственно, когда производство твёрдого топлива станет достаточным, оно не пустит уголь по конвейеру к бойлерам. Приоритеты на разделителе конвейера *![Splitter](../icons/splitter.png)* `Splitter` расставлены так, чтобы твёрдое топливо от попутного газа забиралось всегда первым, затем твёрдое топливо от переработки дизельного топлива, затем уголёк. Это позволяет паровой электростанции работать постоянно, а сжижению угля не блокироваться от переизбытка попутного газа. Твёрдое топливо, производимое из попутного газа, выгружается на сторону конвейера, где больше бойлеров. Твёрдое топливо, производимое из дизельного, выгружается равномерно по всему конвейеру. Таким образом движение твёрдого топлива по конвейеру уравновешивается.

## Критика и антикритика

Идея перевести первую паровую электростанцию с угля на твёрдое топливо мягко говоря ни лыком сшита. Отовсюду торчат белые нитки костылей. Начнём с того, что исследование сжижение угля *![coal-liquefaction](../icons/coal-liquefaction.png)* `Coal liquefaction` ([очень информативная статья в WiKi](https://wiki.factorio.com/Coal_liquefaction_(research))) стоит аж(!) 200 различных научных склянок, включая голубые *![chemical science pack](../icons/chemical-science-pack.png)* и фиолетовые *![production science pack](../icons/production-science-pack.png)*. При этом данное исследование никак не приближает нас к запуску первого спутника, так как является полностью не обязательным и ничего другого полезного не открывает. А ведь мы хотим запустить спутник как можно раньше, за пять часов. Играя в базу на [45 научных пакетов в минуту](README.md#начальная-база-на-45-научных-пакетов-в-минуту) липестричества хватает от двух электростанций, а проблем с углём не возникает, если подобрать хорошую карту или вовремя позаботиться о вокзале.

С другой стороны, играя в базу на [75 научных пакетов в минуту](README.md#начальная-база-на-75-научных-пакетов-в-минуту) ситуация меняется. Липестричества нужно больше, может стать полезным не только улучшение первой угольной электростанции, но и её задвоение. В этом варианте игры запускать спутник за пять часов трудновато и можно позаботиться об ранеей оптимизации. Другой полезной шнягой может стать сам заводик после запуска первого спутника. Когда мы переведём все паровые электростанции в резерв, заводик производящий твёрдое топливо превращается в заводик по производству попутного газа. Тут нужно напомнить, что на стандартных настройках игры, нефти откровенно говоря не хватает. А наш завод, ранее производящий твёрдое топливо, теперь успешно может производить всё необходимое в помощь к основному нефтеперерабатывающему комплексу.

## Домашнее задание

> А ведь можно добавить ещё один бойлер *![boiler](../icons/boiler.png)* `Boiler` и два паровых двигателя *![steam-engine](../icons/steam-engine.png)* `Steam engine`, но тогда не будет хватать воды *![water](../icons/water.png)* `Water`.

Придумайте как выкрутиться оптимальным способом.

## Больше подробностей

И вот вам [сохранёнка со всеми няшками](../saves/AwesomeFactorio%20-%20Power%20Production.zip), чертежи в книге игры. Выпуск на ютуб подготавливается.
<!--
Детальный разбор смотрите на YouTube канале.

[![Улучшаем угольную электростанцию](http://img.youtube.com/vi/[number]/0.jpg)](http://www.youtube.com/watch?v=[number])
-->