# Добыча урана

Добыча урановой руды `Uranium ore` самое простое, что может быть в Factorio. Для добычи урана подходят многие из рассмотренных ранее чертежей, особенно [самый основной чертеж](../MiningResources/README.md#самый-основной-чертеж):

![Самый основной чертеж](../images/MiningResources/MiningResources.05.jpg)

```blueprint
0eNqdVe2K2kAUfZUwUGghionRaH72NWopfgwyECdhMikVCexuWdqypX2A/pA+QMG12nV1dV/h5o16Z1yCbQwb/RGGmXvmnDNnbpIJ6fkxDQXjkngTMqBRX7BQsoATj8AUdrBOL9Kb9ApWsDRggQu36Q3MYZZ+S7/AEu4NeMTFOSwRdw1b2KWXCu0ZrUbVfdHhHQ4/06v0AkErLCxhk37VkDnsvA63qgZMVRUx3+E3yiA3oh4MDdrBRgka8AN+wdR4CXdY/YPqqoTaD+jtM6zV5FWH24VkGrJVNuFeWf3H9YGUWuzwejHPbfpRBaL3GyqNA6/6kFtE5vVgZhoImcHaSD9pMX2qOdq/xslC8SkYhoJ6OwNVLjVe0c3RWWbhCbA3AjOU1gd5xOoCnw0uKF8L3LlSRlZwtz/sArNT+7dKM28QSYhJIt4NKzKoDAUbqIb4QDzXJGPitROTsH7AI+K9mZCIDXnXVwA5Dim2CpN0hNt5d6Rm1Kd9KVi/MmKc8WFlIJjvE8XABxQpreStSSiXTDK6J9ST8Tsej3pUIOAZKpOEQcT2bapNWtWGtokjygyYwF26aidmjt3O2KXo8igMhKz0qC/ztPUn2tr/tM4R2npGG+MxxVAEOD5DnPPrmFmkPIwlOaLjnBpOo0iseYS9cW70Tpnomxn7iA5YPKpkImHg0+KccEyO0LnnRuGUiaJ1cp80yvRJ+4w+cYr7JIhlQaNYtXPv0i1zl5Z1cj5umXys09/PZine+rnd4pbpFss52XYrbxs/jPpb6h38mE3id5EI1153I9bH+Xsqov29tCzHbdtus23XWnU7Sf4Cgl8+qA==
```

Тут нужно чтобы электрические буры `Electric mining drill` были соединены какими-нибудь сторонами, чтобы серная кислота `Sulfuric acid` проходила от бура к буру и сквозь них. Если не получается, буры можно соединить трубами, но это не кошерно.

И собственно, нужно решить вопрос с доставкой кислоты к месту добычи. Самый эффективный способ доставки серной кислоты, это вагон-цистерна `Fluid wagon`. Ставьте её в начале состава, сразу за локомотивом `Locomotive` или локомотивами, если используется несколько.

![Обычное дело при добыче урановой руды](../images/MiningResources/MiningResources.03.png)

Почему именно в начале состава? Для совместимости, если придётся увеличивать длину состава.

Почему именно жидкость, а не бочки? Потому как цистерна перевозит больше жидкости за раз, на 5 тыщ больше. К тому же бочки нужно ещё разлить, перелить, вылить, нужен завод на добывающем аванпосте, отвезти пустые бочки назад на базу, оно того не стоит.

Почему не роботами? Потому как бочками в вагоне было бы лучше. Роботы действую в ограниченной области, не более 50 клеток, на большие расстояния они не эффективны.

А если протянуть трубы до шахтерского аванпоста? Ну если аванпост не далеко, то вариант рабочий, но на будущее не подходит. Когда близлежащее месторождение истощится, то придётся переходить опять на вагон-цистерну.

## Больше подробностей

Детальный разбор добычи урановой руды смотрите на YouTube канале.

[*![Добыча урановой руды](http://img.youtube.com/vi/ErwjhRdBRJ8/0.jpg)*](http://www.youtube.com/watch?v=ErwjhRdBRJ8)
