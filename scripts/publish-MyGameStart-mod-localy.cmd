REM if not exist ./build mkdir build
REM powershell Compress-Archive ./src/MyGameStart ./build/MyGameStart_2020.10.0.zip -Force
powershell Compress-Archive ./src/MyGameStart %appdata%/Factorio/mods/MyGameStart_2020.10.0.zip -Force
