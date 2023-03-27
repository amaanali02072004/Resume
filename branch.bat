@echo off
cls
title GitHub Pushing
set /p COM=Commit message:
if defined COM (echo Commit is defined, proceeding...) else (echo [91mCommit is not defined, exiting...[0m && exit)
set /p BR=Branch Name:
if defined BR (echo Branch Name is defined) else (echo [91mBranch Name is not defined, exiting...[0m && exit)
git branch -m %BR%
git add *
git commit -m "%COM%"
git push origin %BR%
@REM ------
git checkout main
@REM explorer "https://bitbucket.org/sulaman/ats-react/pull-requests/new?source=%BR%&t=1"
git pull origin main

setlocal
:PROMPT
SET /P EXIT=Exit? (y/n)
IF /I "%EXIT%" NEQ "Y" GOTO EEND
git pull origin main
exit
:EEND
branch


endlocal
