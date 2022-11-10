if settings.startup["myGameStart-armors-upgradable"].value then
    table.insert(data.raw.recipe["heavy-armor"].ingredients, {"light-armor", 1})
    table.insert(data.raw.recipe["modular-armor"].ingredients, {"heavy-armor", 1})
    table.insert(data.raw.recipe["power-armor"].ingredients, {"modular-armor", 1})
    table.insert(data.raw.recipe["power-armor-mk2"].ingredients, {"power-armor", 1})
end