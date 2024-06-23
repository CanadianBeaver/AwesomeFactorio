# Большой литейный завод

:::tip Вся статья, кратко *![Сюрприз](./images/BigOreFoundry.Surprize.jpg#right)*
Представим, что в нашей игре появилось очень много ресурсов, из которых мы можем произвести много `Speed module 3` и `Productivity module 3`. А также имеется есть очень много энергии, которой можно питать много маяков `Beacon`. А не построить ли нам большую кузницу на электрических печах, с маяками и модулями?
:::

Например, некое масштабируемое творение на много-много входных экспресс-конвейеров `Express transport belt`, которые можно стыковать до бесконечности. Плавильня, в которой манипуляторы выгружали бы выплавляемые предметы не по одному-два за раз, а сразу всей пачкой по 12 штук, как у `Stack inserter`. И ещё чтобы предметы сразу ложились на свободные места движущегося конвейера и манипуляторы не зависали бы над конвейером с пачкой предметов, пока не докатятся до них свободные места.

Фантастика? Не думаю...

Проблема с манипуляторами существует, они выгружают предметы из печей сразу при их появлении. То есть, как только что-то выплавилось в печи, оно сразу же будет выгружено, вне зависимости от того количества предметов, которое способен перемещать манипулятор. Манипулятор не ждет, чтобы в печи накопилось достаточно предметов, чтобы взять их всех за один раз. Это плохо сказывается на скорости игры *Factorio*. Если у вас 100500 таких печей с манипуляторами, то игра обязательно начнёт тормозить. [А не гик ли ты часом, аффтар?](../Additionals/NerdsVsGeeks.md)

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

Вот собственно и готово. Мы получили компуктер, который в равные промежутки виртуального времени генерируют разные сигналы. На эти сигналы у нас "подпишутся" манипуляторы (*EventHandler*?, всё таки *XNA*), выгружающие предметы из печей.

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

Генератор импульсов вещь полезная при редактировании чертежа, чтобы играться с разными значениями таймера. А в реальной игре его можно убрать подключив манипуляторы напрямую к таймеру и расставив параметры срабатывания от таймера на манипуляторах. Получим маленькую экономию энергии, да 1 киловатт от каждого комбинатора это большая экономия с учётом того, что чертёж жрёт мегаватты.

Использовать его можно только для плавки `Iron ore` и `Copper ore`. Для `Stone` не подходит, но можно попытаться подобрать нужные значения. Подбирайте и делитесь, посмотрим что у вас выйдет. Хотя камней много и не нужно и [обычной кузницы вполне хватает](./README.md#после-запуска-первого-спутника). Что касается плавки стальных балок, тут всё сложно до невозможности.

Потребление электричества и производимое загрязнение в этом чертеже просто ужасны. Никаких ядерных электростанций может не хватать. Если планируете такое сооружать в массовом количестве, то фауну можно сразу отключать, проблем не наберётесь.

Стоит ли применять такой чертёж в игре? Ну смотря в какой игре. А вообще, решайте сами, когда доиграетесь до такого момента, что сможете построить и обслуживать эту махину. Свои мнения пишите в комментариях ТвоегоТуба, ну вы поняли, индекс цитирования.

И вот вам [сохранёнка со всеми чертежами](../../website/static/saves/AwesomeFactorio%20-%20Resources.zip), которые в книге игры. Но в ролике на Youtube всё разжёвано и показано с большими интересностями. Заходите:

[*![Плавим ресурсы](http://img.youtube.com/vi/e3mbmKIWLns/0.jpg)*](http://www.youtube.com/watch?v=e3mbmKIWLns)

Дополнительные материалы:
* [Синхронизация манипуляторов при разгрузке предметов](../LoadingAndUnloadingTrains/SyncUnloading.md)