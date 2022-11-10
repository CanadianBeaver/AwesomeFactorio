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
	if settings.startup["myGameStart-startup-mode"].value == "none" then
		if settings.startup["myGameStart-startup-with-belt-immunity"].value then
			player.insert{name="belt-immunity-equipment", count=1}
		end	
	elseif settings.startup["myGameStart-startup-mode"].value == "simple" then
		player.insert{name="modular-armor", count=1}
		if settings.startup["myGameStart-startup-with-belt-immunity"].value then
			player.insert{name="belt-immunity-equipment", count=1}
			player.insert{name="solar-panel-equipment", count=18}
		else 
			player.insert{name="solar-panel-equipment", count=19}
		end
		player.insert{name="battery-equipment", count=1}
		player.insert{name="personal-roboport-equipment", count=1}
		player.insert{name="construction-robot", count=10}
	elseif settings.startup["myGameStart-startup-mode"].value == "simple-with-exoskeleton" then
		player.insert{name="modular-armor", count=1}
		if settings.startup["myGameStart-startup-with-belt-immunity"].value then
			player.insert{name="belt-immunity-equipment", count=1}
			player.insert{name="solar-panel-equipment", count=10}
		else 
			player.insert{name="solar-panel-equipment", count=11}
		end
		player.insert{name="exoskeleton-equipment", count=1}
		player.insert{name="personal-roboport-equipment", count=1}
		player.insert{name="battery-equipment", count=1}
		player.insert{name="construction-robot", count=10}
	elseif settings.startup["myGameStart-startup-mode"].value == "advanced" then
		player.insert{name="power-armor", count=1}
		if settings.startup["myGameStart-startup-with-belt-immunity"].value then
			player.insert{name="belt-immunity-equipment", count=1}
		else 
			
		end
		player.insert{name="fusion-reactor-equipment", count=1}
		player.insert{name="battery-equipment", count=1}		
		player.insert{name="personal-roboport-equipment", count=1}
		player.insert{name="construction-robot", count=25}	
	end

end
