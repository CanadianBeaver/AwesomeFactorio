if not exist ./publish mkdir publish
REM powershell Compress-Archive ./src/MyGameStart ./publish/MyGameStart_2020.10.0.zip -Force
powershell Compress-Archive ./src/MyGameStart %appdata%/Factorio/mods/MyGameStart_2020.10.0.zip -Force
