# mixcloud-live-all-followers
Based on <a href="https://github.com/LKHetzel/mixcloud-live-data">Mixcoud API data parser by LKHetzel</a>, this will provide a dynamic text list of all your Mixcloud followers rather than just the most recent, for use within your dynamic text sources in your livestreaming app
# Requirements:
  - NodeJS
  - For npm dependencies, please view package-lock.json.
 
# How to Use:
  - Clone or extract archive into your NodeJS file system, (default will be: C: > ProgramFiles > nodejs > node_modules > npm >   )
  - Open the .env.template file in any text editor (such as notepad or notepad ++)
  - Append the following data after all the equals signs:
  -   USERNAME = your mixcloud username (as displayed in the url after mixcloud/ when viewing your own page - no spaces)
  -   FILE_DIR = the path to the folder on your hard drive that you want to store your dynamic text file for use in your streaming app
  -   FOLLOWER_FILE = the name you want to give the text file (must include .txt file extension, so something like - followers-list.txt - no spaces)
  -   API_URL = This should REMAIN https://api.mixcloud.com/ unless Mixcloud changes it in the future
  -   UPDATE_TIME = Amount of time in seconds between successive queries to the API and updates to the data. 60 is recommended so as to not get rate-limited by Mixcloud API
  - Save the file
  - Rename the file so that the .template is removed, leaving only the filename:  .env
  - Run Node.js or Powershell
  - Point app to the correct directory by typing the following:   Set-Location -Path "C:\Program Files\nodejs\node_modules\npm\mixcloud-live-data-master"
  - press enter
  - type:   npm istall   then hit enter (this entry should make all the dependencies the script needs, so only needs to be done once, not every time you use it)
  - Type:   node index.js  then hit enter


  If everything has been set up properly, you should see the log display all your followers, and will keep displaying an updated list every minute, also, your text file should have been created and will be overwritten every minute, showing additional followers almost as soon as they begin to follow you.
  
  To safely cease the script running before closing it, click beneath the latest list iteration in your log and click: Ctrl + C
  
  TIP FOR STREAM APP USAGE:
  You can still use this version for the same intended purpose as when LKHetzel shared the original code; for only displaying the most recent follower, by manipulating the text box in OBS/Streamlabs?etc, for instance, if you set up the text box size and text size suitably, there will only be enough room to show one name, the top one - your latest follower. Alternatively, you can have a box that is only big enough to display, say, 10 names, set the text to scroll vertically, have most of the text box outside the main canvas so only one name shows in your stream at a time, ultimately you could use this to show only your latest follower, your latest 3, 10, 20 followers or any number, or your entire followers list, as long as all the text will fit into the maximum size text box your streaming app will permit.
