# Большой литейный завод

:::tip Вся статья, кратко
Представим, что в нашей игре появилось очень много ресурсов, из которых мы можем произвести много `Speed module 3` и `Productivity module 3`. А также имеется есть очень много энергии, которой можно питать много маяков `Beacon`. А не построить ли нам большую кузницу на электрических печах, с маяками и модулями?
:::

Например, некое масштабируемое творение на много-много входных экспресс-конвейеров `Express transport belt`, которые можно стыковать до бесконечности. Плавильня, в которой манипуляторы выгружали бы выплавляемые предметы не по одному-два за раз, а сразу всей пачкой по 12 штук, как у `Stack inserter`. И ещё чтобы предметы сразу ложились на свободные места движущегося конвейера и манипуляторы не зависали бы над конвейером с пачкой предметов, пока не докатятся до них свободные места.

Фантастика? Не думаю...

Проблема с манипуляторами существует, они выгружают предметы из печей сразу при их появлении. То есть, как только что-то выплавилось в печи, оно сразу же будет выгружено, вне зависимости от того количества предметов, которое способен перемешать манипулятор. Манипулятор не ждет, чтобы в печи накопилось достаточно предметов, чтобы взять их всех за один раз. Это плохо сказывается на скорости игры *Factorio*. Если у вас 100500 таких печей с манипуляторами, то игра обязательно начнёт тормозить. [А не гик ли ты часом, аффтар?](../Additionals/NerdsVsGeeks.md)

## Начнём с теории

*Factorio* старается [симулировать виртуальный](../Additionals/FPSandUPS.md) мир 60 раз в реальную секунду времени, если хватает мощности центрального процессора (прям как *XNA*). Если же мощности центрального процессора не хватает, то игра замедляется в реальном мире. Но виртуальному миру пофиг, в нём всё равно будет отсчитываться количество прошедших квантов (не, не *XNA*, всё в порядке) виртуального мира.

:::info внутри игры *Factorio* время квантуется
И не просто квантуется, а квантуется целыми числами. Никаких постоянных Планка, и прочих не нужных чисел с *ё*. Интересно, а не догадается ли наш инженер, находящийся внутри игры, что его мир это просто симуляция? Может послать ему знаки на полях солнечных панелей?
:::

Когда мы [переводили паровые и ядерные электростанции в резерв](../PowerProduction/BackupSteamPower.md#нудная-теория), то познакомились с такой вещью, как `вундершняга`. Там она выступала в роли ячейки памяти, запоминая пришедшие сигналы. Тут такое тоже можно использовать, отсчитывая временные промежутки, чтобы дождаться большего количества предметов в печах. Напомню, что для создания ячейки памяти мы использовали сравнивающий комбинатор `Decider combinator`, у которого вход был соединён с выходом.

### `Вундершняга` как таймер

Начнём с малого, сделаем обычный таймер отсчитывающий кванты времени в *Factorio*. Для этого берём `вундершнягу`, которая `Decider combinator` с замкнутым входом и выходом зелёным проводом. Нужно выбрать какой-то виртуальный сигнал, который мы и будем считать за единицы таймера. Пусть это будет [белая точка](https://wiki.factorio.com/Circuit_network#Virtual_signals), хотя можно выбрать любой другой сигнал, а также и несколько сигналов сразу. Задаём в качестве условия `Condition` выбранный сигнал и максимальное его количество, по достижению которого, таймер сбрасывается и начинает считать всё заново. В качестве выхода `Output` задаём количество пришедшего сигнала `Input count`. Также устанавливаем постоянный комбинатор `Constant combinator` подающий единицу подсчитываемого сигнала на вход `вундершняги` красным проводом.

Следующий чертёж будет подсчитывать количество квантов *Factorio* и будет сбрасываться каждые 60 квантов в виртуальном мире, что соответствует (почти всегда) одной секунде в реальном мире:

![Вундершняга как таймер](../_images/RawResourcesProcessing/BigOreFoundry.02.png)

Теперь нашу `вундершнягу` можно смело считать за таймер в виртуальном мире *Factorio*. Вне зависимости от скорости симуляции, в самой симуляции таймер работает правильно.

### `Вундершняга` как генератор импульсов

Создадим теперь `генератор импульсов` по таймеру, он нам потребуется для управления манипуляторами. Генератор импульсов, будет создавать определённые сигналы, в зависимости от значения таймера. Подключим красным проводом три сравнивающих комбинатора `Decider combinator` к `вундершняги` и на каждом зададим условия `Condition` связанные с нашим подсчитывающим сигналом (белой точкой). На первом пусть будет ноль, на втором 20, на третьем 40. В `Output` поставим разные виртуальные сигналы с цифрами, которые `Signal 0`, `Signal 1` и `Signal 2`. В качестве выходных значений `Output` установим единичное значение:

![Вундершняга как генератор импульсов](../_images/RawResourcesProcessing/BigOreFoundry.03.png)

Вот собственно и готово. Мы получили компуктер, который в равные промежутки виртуального времени генерируют разные сигналы. На эти сигналы у нас "подпишутся" манипуляторы (*EventHandler*, всё таки *XNA*), выгружающие предметы из печей.

### Объединяем с манипуляторами

Зеленым проводом подключим три манипулятора, которые реагируют на сигналы от генератора импульсов. Первый на сигнал `Signal 0`, второй на сигнал `Signal 1`, третий на сигнал `Signal 3`.

![Объединяем с манипуляторами](../_images/RawResourcesProcessing/BigOreFoundry.04.png)

Получили что надо. Есть манипуляторы, срабатывающие в определённые моменты игрового времени. Всё что нам нужно, это подобрать такие числа на таймере и такое количество генераторов импульсов, чтобы срабатывание манипуляторов соответствовало выплавке достаточного количества предметов в печах. Подробнее про `вундершняги` читать в разделе, посвященному [логической сети](../CircuitNetwork/README.md).

## Плавим руду большими кузницами

А вот какие значения для этого использовать я вам не скажу, зырьте ютуб.  Шутка. Вот готовый чертёж:

![Плавим руду большими кузницами](../_images/RawResourcesProcessing/BigOreFoundry.01.png)

```blueprint
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
```

Идея у нас тут такая, что первые четыре печи выгружают на одну сторону конвейера, потом одна печь выгружает и туда и сюда, оставшиеся четыре печи выгружают на вторую сторону конвейера. Итого, девять печей, ускоренные маяками. Все манипуляторы соединены между собой и подключены к компуктеру. Компуктер выдаёт такие значения, что выгрузка происходит полными пачками, по дюжине предметов за раз. При этом манипуляторы срабатывают только тогда, когда есть свободное место на конвейере. Ву а ля.

Чертёж стыкуется по линии маяков, вверх и вниз. Можно повторять до кучи таких чертежей, объединяя всё это в большую кузницу. Копировать компуктер в каждый новый стык не нужно, одного генератора импульсов хватает. Достаточно соединить зелёным проводом крайние манипуляторы посередине чертежа, надеюсь сообразить какие.

Использовать его можно только для плавки `Iron ore` и `Copper ore`. Для `Stone` не подходит, но можно попытаться подобрать нужные значения. Подбирайте и делитесь, посмотрим что у вас выйдет. Хотя камней много и не нужно и [обычной кузницы вполне хватает](./README.md#после-запуска-первого-спутника). Что касается плавки стальных балок, тут всё сложно до невозможности.

Потребление электричества и производимое загрязнение в этом чертеже просто ужасны. Никаких ядерных электростанций может не хватать. Если планируете такое сооружать в массовом количестве, то фауну можно сразу отключать, проблем не наберётесь.

Стоит ли применять такой чертёж в игре? Ну смотря в какой игре. А вообще, решайте сами, когда доиграетесь до такого момента, что сможете построить и обслуживать эту махину. Свои мнения пишите в комментариях ТвоегоТуба, ну вы поняли, индекс цитирования.

И вот вам [сохранёнка со всеми чертежами](../_saves/AwesomeFactorio%20-%20Resources.zip), которые в книге игры. Но в ролике на Youtube всё разжёвано и показано с большими интересностями. Заходите:

[*![Плавим ресурсы](http://img.youtube.com/vi/e3mbmKIWLns/0.jpg)*](http://www.youtube.com/watch?v=e3mbmKIWLns)
