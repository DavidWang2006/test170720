@echo off
echo *****************************************************************
echo      publish_to_repository.bat
echo                     by niuren.zhu
echo                           2016.06.21
echo  说明：
echo     1. 首先确保compile_and_package.bat有效及可用。
echo     2. 配置apache-maven程序，找到conf\setting.xml。
echo     3. 在^<servers^>节点下添加（其中用户名与密码需要向管理员申请）
echo             ^<server^>
echo               ^<id^>nexus-3rd^<^/id^>
echo               ^<username^>用户名^<^/username^>
echo               ^<password^>密码^<^/password^>
echo             ^<^/server^>
echo     4. 此脚本会调用打包脚本并上传打包结果到maven仓库。
echo *****************************************************************

REM *******设置参数变量*******
SET WORK_FOLDER=%~dp0
SET RELEASE_FOLDER=%WORK_FOLDER%release
SET h=%time:~0,2%
SET hh=%h: =0%
SET OPNAME=%date:~0,4%%date:~5,2%%date:~8,2%_%hh%%time:~3,2%%time:~6,2%
SET LOGFILE=%WORK_FOLDER%publish_to_repository_log_%OPNAME%.txt
SET URL=http://ibas.club:8877/nexus/content/repositories/thirdparty/
SET REPOSITORYID=nexus-3rd

if not exist "%WORK_FOLDER%compile_and_package.bat" (
  echo --没有找到[compile_and_package.bat]
  goto :EOF
)
rem call compile_and_package.bat
echo --开始发布包到网址[%URL%]
if exist %WORK_FOLDER%\pom.xml (
  echo --发布[.parent]
  call "%MAVEN_HOME%\bin\mvn" deploy:deploy-file -DpomFile=%WORK_FOLDER%\pom.xml -Durl=%URL% -DrepositoryId=%REPOSITORYID% >>%LOGFILE%
)
REM 开始发布子项
for /f %%m in (%WORKFOLDER%compile_order.txt) do (
  if exist %WORK_FOLDER%%%m\pom.xml (
    echo --发布[%%m]
    for /f %%l in ('dir /s /a /b %WORK_FOLDER%release\%%m-*.jar' ) do (
      call "%MAVEN_HOME%\bin\mvn" deploy:deploy-file -DpomFile=%WORK_FOLDER%%%m\pom.xml -Dfile=%%l -Durl=%URL% -DrepositoryId=%REPOSITORYID% >>%LOGFILE%
    )
  )
)

echo --发布完成，更多信息请查看[publish_to_repository_log_%OPNAME%.txt]
