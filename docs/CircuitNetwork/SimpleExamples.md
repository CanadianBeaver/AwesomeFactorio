# Простые примеры

:::danger
Это заготовка для будущей статьи, сейчас она не рекомендуется для изучения, а в будущем может измениться или вообще исчезнуть.
:::

:::tip Вся статья, кратко
Здесь собраны простые примеры логических сетей, без комбинаторов и прочей лабуды, только красные `!Red wire` и зелёные `!Green wire` сигнальные провода.
:::

Использовать эти чертежи можно на любом этапе игры, с самого начала и до запуска [корованов ракет](../PowerProduction/README.md#этап-второй-и-корованы-ракет). Удивительно, но чертежи, содержащие сигнальные провода, можно строить без [исследования логической сети](https://wiki.factorio.com/Circuit_network_(research)) `Circuit network`.

## Ограничение движения предметов по конвейеру

Самым простым примером можем быть управление движением предметов на конвейере. Следует соединить два сочления конвейера, например зелёным проводом `Green wire`. Первое сочление (верхнее) ставим на считывание количества предметов. На втором сочлении (нижнее) задаём условие для минимального количества предметов, которые будем накапливать на предыдущем сочлении. Движение предметов по конвейеру продолжится, если накопилось достаточное количество предметов.

![Движение предметов по конвейеру](./images/SimpleExamples.01.jpg)

```blueprint title="Чертёж с настроенными значениями"
0eNqdUltuwyAQvMt+kyh23lyliixsNslKNliwjmpFHKAH6cV6koLdpmmSfqQ/INhhZmfYM5R1h60jwyDPQJU1HuTLGTwdjKrTHfctggRibECAUU06sVPGt9bxpMSaIQggo/EVZBZ2AtAwMeHINBz6wnRNiS4C/uIQ0Fofn1mTVCPVJM+mSwE9yNV8uowSmhxWI2AhILbKztZFiUd1IuvSq4pc1REXsaYvVHtynos7Qydy3MWbSz8jYoIndD0fyRySrRQIq5TOINm0yilOYvDx9j4AviTRqLLGQpNPO0h2Hf5UHSpdHJXRqTWOkcRs9qr2V5DvwohtrI4ks7EDM9r2qfssLQeHaK7TJQ0yD7sQgrhLPP9P4vmTid/avzH3yP/vhB7Zz56xnw324/QNkyqvBltA/FI/uMg32WK9zdeb1XY2ny1C+ASpXw5K
```

Схема позволяет удерживать движение предметов на конвейере для безостановочного производства и складировать произведённые излишки в сундуки.
