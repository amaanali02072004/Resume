@echo off
cls
@REM Color 0C
title GitHub Pushing
set /p COM=Commit message: 
if defined COM (echo Commit is defined, proceeding...) else (echo [91mCommit is not defined, exiting...[0m && exit)
set /p BR=Branch Name: 
if defined BR (echo Branch Name is defined) else (echo [91mBranch Name is not defined, exiting...[0m && exit)
set hyp=----------------------------------------------------------------------------------------
git add *
git commit -m "%COM%"
git push origin %BR%

@echo %hyp%

git status

@echo %hyp%

Color 0A
@echo Pushed and Committed succesfully [%COM%]

@echo %hyp%
git pull origin main
setlocal
:PROMPT
SET /P EXIT=Exit? (y/n)
IF /I "%EXIT%" NEQ "Y" GOTO EEND

exit
:EEND
branch


endlocal
