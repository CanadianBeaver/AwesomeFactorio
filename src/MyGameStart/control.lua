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

function on_player_creation(player)
	player.insert{name="modular-armor", count=1}
	player.insert{name="solar-panel-equipment", count=10}
	player.insert{name="exoskeleton-equipment", count=1}
	player.insert{name="personal-roboport-equipment", count=1}
	player.insert{name="battery-equipment", count=1}
	player.insert{name="construction-robot", count=10}
	player.insert{name="belt-immunity-equipment", count=1}
end
