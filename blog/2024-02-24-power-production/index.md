---
title: Улучшаем первую паровую электростанцию в два раза
tags: [power production, steam energy]
---

[Предыдущие старания](../2024-02-17-power-production/index.md) были направлены на уменьшение потребления угля паровой электростанцией путём перевода её на твёрдое топливо. Сейчас же пробую удвоить количество производимой энергии. [Статья тут](/PowerProduction/UpgradingSteamPower#удваиваем-количество-производимой-энергии).

<!-- truncate -->

Получается 77 бойлеров, 155 паровых двигателей на четырёх насосах. Один конвейер угля полностью перерабатывается в твёрдое топливо. Чистое производство энергии составляет примерно 130 мегаватт.

![Паровые электростанции](./screenshot1.png)

Чертёж для поиграться:

``` blueprint
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
```