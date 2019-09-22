# sunhacks

HOW TO LIKE A YOUTUBE VIDEO WITHOUT PRESSING THE LIKE BUTTON

1. Install the extension on chrome through developer mode

2.  Install requirements for hand recognition - "sudo pip3 install -r requirements.txt"

3. make personal google account json (google developer console -> credentials->create credentials)

4. download and save google credentials into source folder

5. edit web_server line 26 "client_secrets_file" with title of your .json file (include .json)

6. edit web_server line 36 with your desired youtube video id (example = "id="mSFwyM2L5h4")

7. navigate to source folder and run web_server.py - "python3 web_server.py"  - on console

8. copy and paste authorization link into browser

9. confirm google account

10. copy and paste returned authorization code into console

11. click chrome extension button or go to "http://localhost.8080" in browser

12. accept camera permissions

13. thumbs up the camera

14. refresh youtube video

15. video is now liked!
