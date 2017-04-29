Project 
====================

* **Category Chosen**: Data Concierge https://2017.spaceappschallenge.org/challenges/ideate-and-create/data-concierge/details
    * Create/Show Groups https://2017.spaceappschallenge.org/challenges/ideate-and-create/data-concierge/teams
    * Members https://2017.spaceappschallenge.org/challenges/ideate-and-create/data-concierge/teams/apollo-bot/members
* **Goal**: Facebook chatbot to automate earth data processing pipelines
all the way from looking for datasets to visualising them with graphs
   * Delivery Strategy:
        * Group 1 - Natural language processing AI implementation tutorial https://github.com/hunkim/Wit-Facebook
        * Group 2 - Messenger Chatbot Tutorial https://developers.facebook.com/docs/messenger-platform/guides/quick-start
            * https://wit.ai/home
            * https://wit.ai/ltfschoen/MyFirstApp/entities
   * **Name**: **Apollo-bot**
   * **Motto**: Making data universally accessible
   * **Logo**:
        * Create Logo with **Canva**

* **Tag Sponsors**  
    * TODO Tweet to Sponsors: i.e. #academyxi, #spaceapps, aws, canva, coderfactory
    * CityConnect https://cityconnect.co/
    * AWS Voucher $100 valid for 1 year (must get this year)
        * https://pages.awscloud.com/2017spaceapps.html
    * AcademyXi (Ben Wong)

* **Wit**
    * About: Natural Language interface for apps and devices
    * **Wit Testing / Understanding** https://wit.ai/ltfschoen/MyFirstApp/entities
    (of entities)
        * Training
            * Add one or more new **Entity** (captures and normalise free text or query intent)
            https://wit.ai/docs/recipes#which-entity-should-i-use
            * Search Strategy technique Wit uses to extract entities
                * Trait
                * Free text
                * Keywords
            * Train app
            * Test app understanding of sentence
        * Communication
            * Actions vs Responses
                ```
                - Action
                - Only if... (context or entity fields to be/not be present for action to fire)
                - Always if... (context or entity fields that when satisfied trigger the action,
                                for use as escape hatch for cases when Wit's model predicts wrong action)
                ```
            * Stories
                * User says something
                * **Entities** extracted from what users say
                    * `intent`  (user-defined Entity)
                    * `Wit/...` (pre-defined Entities)
                * Bot says response (**Bot Sends**)
                    * Use **Variables** (i.e. "`Hello {name}`"), where `name` is either:
                        * Extracted as **Entity** from user's last message, OR
                        * Obtained from **Context Object** as `name` key `({name: "Alex"})
                    * Optionally use **Variable for Dynamic Data**)
                    * Note: Click **Bot Says** when Bot is ready
                    to send a direct response to user
                * **Bot Executes**
                    * Enter the Action that Bot needs perform
                    which is a function name that modifies the Context.
                    The function
                    takes arguments current Context and
                    Entities extracted from last user message
                     (i.e. store extracted Entities,
                    or do calculation, or call external API)
                * **Bot Jumps**
                    * Instruct the Bot to jump to different
                    part of Story (provide Story Location to Jump To,
                    create a Bookmark).
                    * Usage: Click "Jump", enter "Bookmark" name
                    you created to jump to it
    * **Wit Stories** https://wit.ai/ltfschoen/MyFirstApp/stories
    * **Wit Docs Quickstart** https://wit.ai/docs/quickstart
    * **Wit Docs Recipes** https://wit.ai/docs/recipes
    * **Wit Docs API HTTP** https://wit.ai/docs/http/20170307
    * **Wit SDK**
        * Node https://github.com/wit-ai/node-wit
        * Python https://github.com/wit-ai/pywit
        * Ruby https://github.com/wit-ai/wit-ruby
    * **Wit Blog** https://wit.ai/blog
    * **Wit Logs** https://wit.ai/ltfschoen/MyFirstApp/logs/-1
        * Mode: Debug/Reading
    * **Wit Settings**
        * https://wit.ai/ltfschoen/MyFirstApp/settings
            * cURL
                ```
                curl \
                 -H 'Authorization: Bearer PCNJGE5L6I2JSAIEHP3OE4BVXNBXVF3I' \
                 'https://api.wit.ai/message?v=29/04/2017&q='
                ```
            * API details
            * Export data as .zip
    * **Wit GitHub Issues** https://github.com/wit-ai/wit/issues
    * **Wit Social**
        * Facebook group https://www.facebook.com/groups/wit-hackers
    * **Wit Help** `help@wit.ai`

# Other

    * NPL
        * Semantic space (similarity between keywords)


SpaceApps 2017 Links
====================

* Pre-Event 
	* Website - https://2017.spaceappschallenge.org/locations/sydney/pre-event/
	* Slides Info Night - General - https://drive.google.com/file/d/0B9eL2xI6bfA3WmpBLWM3ZGNPWHM/view
	* Slides Dr Jason - https://files.slack.com/files-pri/T4EFQBRG8-F542VA34J/download/workshop_-_jason.pptx

* Event 
	* Sydney Info - https://2017.spaceappschallenge.org/locations/sydney/
	* Challenges - http://www.spaceappssydney.org/challenges

* Slack Forum - https://spaceappssyd.slack.com/

* Social Media 
	* Facebook NASASpaceAppsSydney - https://www.facebook.com/NASASpaceAppsSydney
	* Twitter - https://twitter.com/spaceapps (tags "#SpaceApps" and "#SpaceAppsSydney")

Goals
====================

* Chose Categories, from either of these:
	* Fires - https://2017.spaceappschallenge.org/challenges/warning-danger-ahead/and-you-can-help-fight-fires/details
	* Solar - https://2017.spaceappschallenge.org/challenges/earth-and-us/you-are-my-sunshine/details

* Aim to successfully download any useful data for either of the categories prior to devising a solution

Resources
====================

* UN Global Goals for Sustainable Development (17 OFF) - http://www.globalgoals.org/

* NASA Event Info
	* Space Apps 2017 website - https://www.nasa.gov/feature/space-apps-2017-earth
	* SpaceApps 2016 Resources - https://github.com/SpaceApps2016/Resources
	* SpaceApps 2016 Judging Criteria - https://2016.spaceappschallenge.org/about/judging
	* SpaceApps 2015 Accelerator Toolkit - https://data.nasa.gov/docs/spaceapps/sa-acceleratortoolkit.pdf 

* Resources incl. Data
	* NASA 
		* Open Data (incl. Data, Code, APIs, Glossary) - https://open.nasa.gov/open-data/
			* API Key Application https://api.nasa.gov/index.html#apply-for-an-api-key
		* Data https://www.nasa.gov/open/data.html
		* Earthdata Search - https://search.earthdata.nasa.gov/
		* Worldview - https://worldview.earthdata.nasa.gov/
		* Hazards and Population mobile app - https://itunes.apple.com/us/app/hazards-and-population-mapper/id1092168898?mt=8
		* Code
			* GitHub - https://github.com/nasa
	* SkyWatch API (30-day trial, wait 1-2 days for access) - http://www.skywatch.co/
	* Kaggle Data Science Datasets- https://www.kaggle.com/datasets
	* GIBS 
		* Global Imagery Browse Services (GIBS) - https://earthdata.nasa.gov/about/science-system-description/eosdis-components/global-imagery-browse-services-gibs
		* Available Imagery Products - https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+Available+Imagery+Products
		* API for Developers - https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+API+for+Developers
		* Map Library Usage - https://wiki.earthdata.nasa.gov/display/GIBS/Map+Library+Usage
		* Usage - https://wiki.earthdata.nasa.gov/display/GIBS/Geographic+Information+System+%28GIS%29+Usage
	https://www.kaggle.com/datasets

* VR and AR
	* A-Frame (WebVR) framework - https://aframe.io/ 
	* Links - https://www.spaceappshsv.com/community-challenges/2017/3/1/virtual-and-augmented-reality-worlds-for-earth-science-missions

* Other
	* Hope Spots (Mission Blue) - https://www.mission-blue.org/hope-spots/