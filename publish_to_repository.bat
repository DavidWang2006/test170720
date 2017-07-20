@echo off
echo *****************************************************************
echo      publish_to_repository.bat
echo                     by niuren.zhu
echo                           2016.06.21
echo  ˵����
echo     1. ����ȷ��compile_and_package.bat��Ч�����á�
echo     2. ����apache-maven�����ҵ�conf\setting.xml��
echo     3. ��^<servers^>�ڵ�����ӣ������û�����������Ҫ�����Ա���룩
echo             ^<server^>
echo               ^<id^>nexus-3rd^<^/id^>
echo               ^<username^>�û���^<^/username^>
echo               ^<password^>����^<^/password^>
echo             ^<^/server^>
echo     4. �˽ű�����ô���ű����ϴ���������maven�ֿ⡣
echo *****************************************************************

REM *******���ò�������*******
SET WORK_FOLDER=%~dp0
SET RELEASE_FOLDER=%WORK_FOLDER%release
SET h=%time:~0,2%
SET hh=%h: =0%
SET OPNAME=%date:~0,4%%date:~5,2%%date:~8,2%_%hh%%time:~3,2%%time:~6,2%
SET LOGFILE=%WORK_FOLDER%publish_to_repository_log_%OPNAME%.txt
SET URL=http://ibas.club:8877/nexus/content/repositories/thirdparty/
SET REPOSITORYID=nexus-3rd

if not exist "%WORK_FOLDER%compile_and_package.bat" (
  echo --û���ҵ�[compile_and_package.bat]
  goto :EOF
)
rem call compile_and_package.bat
echo --��ʼ����������ַ[%URL%]
if exist %WORK_FOLDER%\pom.xml (
  echo --����[.parent]
  call "%MAVEN_HOME%\bin\mvn" deploy:deploy-file -DpomFile=%WORK_FOLDER%\pom.xml -Durl=%URL% -DrepositoryId=%REPOSITORYID% >>%LOGFILE%
)
REM ��ʼ��������
for /f %%m in (%WORKFOLDER%compile_order.txt) do (
  if exist %WORK_FOLDER%%%m\pom.xml (
    echo --����[%%m]
    for /f %%l in ('dir /s /a /b %WORK_FOLDER%release\%%m-*.jar' ) do (
      call "%MAVEN_HOME%\bin\mvn" deploy:deploy-file -DpomFile=%WORK_FOLDER%%%m\pom.xml -Dfile=%%l -Durl=%URL% -DrepositoryId=%REPOSITORYID% >>%LOGFILE%
    )
  )
)

echo --������ɣ�������Ϣ��鿴[publish_to_repository_log_%OPNAME%.txt]
