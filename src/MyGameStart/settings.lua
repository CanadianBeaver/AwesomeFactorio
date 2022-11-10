data:extend(
{
	{
		setting_type = "startup",
		name = "myGameStart-startup-mode",
		type = "string-setting",
		allowed_values = {"none", "simple", "simple-with-exoskeleton", "advanced"},
		default_value = "simple",
    order = "a"
	},
  {
		setting_type = "startup",
		name = "myGameStart-startup-with-belt-immunity",
		type = "bool-setting",
    default_value = true,
    order = "b"
	},
  {
    setting_type = "startup",
		name = "myGameStart-armors-upgradable",
		type = "bool-setting",
    default_value = true,
    order = "c"
  },
  {
    setting_type = "startup",
		name = "myGameStart-skip-intro",
		type = "bool-setting",
    default_value = true,
    order = "d"
  }
})