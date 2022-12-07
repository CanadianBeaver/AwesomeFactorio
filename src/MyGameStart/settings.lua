data:extend({{
    setting_type = "startup",
    name = "myGameStart-startup-armor",
    type = "string-setting",
    allowed_values = {"default", "light-armor", "modular-armor", "power-armor"},
    default_value = "light-armor",
    order = "b"
}, {
    setting_type = "startup",
    name = "myGameStart-startup-add-belt-immunity",
    type = "bool-setting",
    default_value = true,
    order = "c"
}, {
    setting_type = "startup",
    name = "myGameStart-startup-add-exoskeleton",
    type = "bool-setting",
    default_value = false,
    order = "d"
}, {
    setting_type = "startup",
    name = "myGameStart-startup-add-personal-roboport",
    type = "string-setting",
    allowed_values = {"none", "roboport", "roboport-mk2"},
    default_value = "roboport",
    order = "e"
}, {
    setting_type = "startup",
    name = "myGameStart-armors-upgradable",
    type = "bool-setting",
    default_value = true,
    order = "f"
}, {
    setting_type = "startup",
    name = "myGameStart-skip-intro",
    type = "bool-setting",
    default_value = true,
    order = "a"
}})
