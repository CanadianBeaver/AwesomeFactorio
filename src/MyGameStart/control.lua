script.on_event(defines.events.on_cutscene_cancelled, function(event)
    -- for singele player
    local player = game.players[event.player_index]
    on_player_creation(player)
end)

script.on_event(defines.events.on_player_created, function(event)
    -- For multiplyer
    local player = game.players[event.player_index]
    if not player.character == nil then
        on_player_creation(player)
    end
end)

script.on_init(function()
    if settings.startup["myGameStart-skip-intro"].value then
        local freeplay = remote.interfaces["freeplay"]
        if freeplay then
            if freeplay["set_skip_intro"] then remote.call("freeplay", "set_skip_intro", true) end
			--if freeplay["set_disable_crashsite"] then remote.call("freeplay", "set_disable_crashsite", true) end
        end
    end
end)

function on_player_creation(player)
	if settings.startup["myGameStart-startup-armor"].value ~= "default" then
		if settings.startup["myGameStart-startup-add-belt-immunity"].value then
            player.insert {name = "belt-immunity-equipment", count = 1}
		else
			player.insert {name = "solar-panel-equipment", count = 1}
        end
		if settings.startup["myGameStart-startup-armor"].value ~= "light-armor" then 
			if settings.startup["myGameStart-startup-add-exoskeleton"].value then
            	player.insert {name = "exoskeleton-equipment", count = 1}
			else
				player.insert {name = "solar-panel-equipment", count = 8}
        	end
		end
		if settings.startup["myGameStart-startup-add-personal-roboport"].value == "roboport" then
			player.insert {name = "battery-equipment", count = 1}
			player.insert {name = "personal-roboport-equipment", count = 1}
			player.insert {name = "construction-robot", count = 10}
		elseif settings.startup["myGameStart-startup-add-personal-roboport"].value == "roboport-mk2" then
			player.insert {name = "battery-mk2-equipment", count = 1}
			player.insert {name = "personal-roboport-mk2-equipment", count = 1}
			player.insert {name = "construction-robot", count = 25}
		else
			player.insert {name = "solar-panel-equipment", count = 4}
        end
		if settings.startup["myGameStart-startup-armor"].value == "light-armor" then
			player.insert {name = "light-armor", count = 1}
		elseif settings.startup["myGameStart-startup-armor"].value == "modular-armor" then
			player.insert {name = "modular-armor", count = 1}
			player.insert {name = "solar-panel-equipment", count = 10}
		elseif settings.startup["myGameStart-startup-armor"].value == "power-armor" then
			player.insert {name = "power-armor", count = 1}
			player.insert{name="fusion-reactor-equipment", count=1}
		end
	end
end
