---
title: Простое решение или костыль?
tags: [power production, steam energy, backup steam power, design]
---

В очередной раз переработал статью посвященную переводу паровых и ядерных электростанций в резерв. И даже новый видеоролик на твойтуб выложил. Добавил подробнее описание простого решения отключения паровых электростанций, более похожее на костыли, или нет?

<!-- truncate -->

Добавил также описание того, как *Factorio* выбирает электричество из солнечных панелей, паровых агрегатов и аккумуляторных блоков. Добавил на сайт возможность создавать диаграммы, выглядит вот так:

```mermaid
flowchart LR;
    Solarpanel(Solar Panel):::solarpanel-->Steamengine(Steam Engine):::steampanel;
    Solarpanel-->Steamturbine(Steam Turbine):::steampanel;
    Steamengine-->Accumulator(Accumulator):::accumulatorpanel;
    Steamturbine-->Accumulator;
    classDef solarpanel color:#dedeff
    classDef solarpanel fill:#9999ff
    classDef solarpanel stroke:#9999ff
    classDef steampanel color:#333333
    classDef steampanel fill:#999999
    classDef steampanel stroke:#999999
    classDef accumulatorpanel color:#333399
    classDef accumulatorpanel fill:#9999cc
    classDef accumulatorpanel stroke:#9999cc
```

Читайте, [статья тут](pathname:///PowerProduction/BackupSteamPower). Видеоролик:

[*![Простой костыль для перевода паровой электростанции в резерв](http://img.youtube.com/vi/Nfm9Njib4tE/0.jpg)*](http://www.youtube.com/watch?v=Nfm9Njib4tE)
