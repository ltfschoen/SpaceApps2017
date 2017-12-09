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
    * **About** Apollo-bot is designed to lower the barrier of entry to NASA Earth data.
    Apollo-bot is a smart Chatbot AI tool, designed using Wit (built with NLU algorithms upon proven Facebook technologies including Facebook's AI and NLP platforms: DeepText and FBLearner Flow) that integrates with Facebook's Messenger API and GUI.
    Apollo-bot was designed to help communication between people (i.e. Earth science data enthusiasts and consumers) with the terabytes of NASA's Earth science datasets and resources obtained from 18 satellites and 3 instruments aboard the ISS that observes Earth:

    * Checklist:
        * [ ] - Helping users with their searches with suggestions that identify which datasets are useful to them AND how to access them
        * [ ] - Helping users with their searches with suggestions that identify what resources are useful to them AND how to access them
        * [ ] - Identify how would determine if tool was helpful or needs improvement
        * [ ] - Identify how our tool learns as it is being used, in order to improve its capabilities
        * [ ] - Consider perspectives and user flows of various professionals, outdoor enthusiasts, and those with specific curiosities, and what types of information they would be interested in (i.e. datasets, images, articles)
        * [ ] - Tweet to Sponsors with Hash Tags (i.e. @spaceappssydney @nasaspaceappssydney @dotCO @academyxi ‏@NASAKennedy @BlueChilliGroup @CityConnectBC @coderfactory @UTSEngage @canva @awscloud #nasaapps #SpaceApps #SpaceAppsSydney)

    * API
        * Create Token
            * https://wiki.earthdata.nasa.gov/display/echo/Creating+a+Token
        * ECHO REST https://wiki.earthdata.nasa.gov/display/echo/Earth+Observing+System+Clearing+House+-+ECHO
        * Guide curl https://cmr.uat.earthdata.nasa.gov:443/search/concepts/G1000005515-ORNL_DAAC/7 | grep "URL"
        * Forum https://wiki.earthdata.nasa.gov/display/CMR/CMR+Client+Developer+Forum

* **Wit**
    * **About**: Natural Language interface for apps and devices
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
            * **Stories** (create example conversations)
            		* **Purpose** Write different examples of questions 
            		the user may ask and answers from the Bot in browser 
            		UI, then can click "Export App" to export it all in
            		JSON format to the custom Bot server we are creating 

                * User says something
                	* **Import Note:** 
                		```
                		i.e.
                		Step 1: Enter Sentence "What's your age?"
                		Step 2: Click + to Add a new entity, choose "intent"
                		Step 3: Select (i.e. double click a word in the 
                		original Sentence such as "age" to make this the 
                		Variable)
                		```
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
                    * **Updates context-keys with...**
                    	* **Predicates** Wit can predict the
                    	next step to perform based on **context-keys**
                    	in the **context-object**. **context-keys** 
                    	that are described by the developer are
                    	updated by an Action (i.e. function).
                    	When multiple **context** conditions must be
                    	met to continue on a **path** of a Story,
                    	use `&&` (i.e. `x && y`) 
                * **Bot Jumps**
                    * Instruct the Bot to jump to different
                    part of Story (provide Story Location to Jump To,
                    create a Bookmark).
                    * Usage: Click "Jump", enter "Bookmark" name
                    you created to jump to it
    * **Wit Stories** https://wit.ai/ltfschoen/MyFirstApp/stories
    * **Wit Docs Quickstart** https://wit.ai/docs/quickstart. See Quickstart notes below.
    * **Wit Docs Recipes** https://wit.ai/docs/recipes
    * **Wit Docs API HTTP** https://wit.ai/docs/http/20170307
    * **Wit SDK**
        * Node https://github.com/wit-ai/node-wit
        * Python https://github.com/wit-ai/pywit
        * Ruby https://github.com/wit-ai/wit-ruby
    * **Wit Blog** https://wit.ai/blog
    * **Wit Logs** https://wit.ai/ltfschoen/MyFirstApp/logs/-1
        * Mode: Debug/Reading
        * Setup: To see logs, first create Stories, and then perform a HTTP request
        using cURL, which will be recorded in the logs 
        	```
          curl \
           -H 'Authorization: Bearer PCNJGE5L6I2JSAIEHP3OE4BVXNBXVF3I' \
           'https://api.wit.ai/message?v=29/04/2017&q='
        	```
    * **Wit Settings**
        * https://wit.ai/ltfschoen/MyFirstApp/settings
            * API details
            * Export data as .zip
    * **Wit GitHub Issues** https://github.com/wit-ai/wit/issues
    * **Wit Social**
        * Facebook group https://www.facebook.com/groups/wit-hackers
    * **Wit Help** `help@wit.ai`

# Other

    * NPL
        * Semantic space (similarity between keywords)
    * AWS Voucher $100 valid for 1 year (must get this year)
        * https://pages.awscloud.com/2017spaceapps.html
    * https://www.neuralink.com/

# Quickstart Notes

Wit.ai can help you parse a message into structured data (Understand) or predict the next action your bot should perform (Converse).

* QuickStart
    * Configure Wit to parse a message into structured data "**Understand**"
    what users say to the Apollo-bot by providing "Stories" to Teach and configure Wit by example.
    Wit is able to infer and recognise your "**intent**" (i.e. to get a temperature) based on just a few questions you provide,
    so it may provide a response. Teach Wit what a sentence means by using **Entities** (pieces of info to detect from user input)
    such as the "Trait Entity" that Apollo-bot can detect and improve its understanding each time "Validate" is
    performed https://wit.ai/ltfschoen/MyFirstApp/entities.
    Wit can help you predict the next Action your bot should perform (**Converse**).
    **Recipes** are designed to help with both the **Understand** and **Converse** capabilities by looking at common problems
    and recipes to address them.
    i.e.
    1) Add value "temperature_get" to an "intent" Entity (Trait Entity) with : https://wit.ai/ltfschoen/MyFirstApp/entities/intent
    2) Add user question "What's the current temperature?", click "intent", select "temperature_get" Trait Entity from the drop-down. Click "Validate" https://wit.ai/ltfschoen/MyFirstApp/entities
    3) Go back to https://wit.ai/ltfschoen/MyFirstApp/entities/intent, and see the sentence under "Expressions"
    4) Query the app via Wit..ai API using cURL. Go to Settings https://wit.ai/ltfschoen/MyFirstApp/settings, type in "what's the temperature in there?" to populate the cURL request query value, then copy/paste and run in terminal.
        ```
        curl \
        -H 'Authorization: Bearer PCNJGE5L6I2JSAIEHP3OE4BVXNBXVF3I' \
        'https://api.wit.ai/message?v=29/04/2017&q=what%27s%20the%20temperature%20in%20there%3F'
        ```
    5) View response to see if the intent was correctly captured by Wit:
        ```
        {
          "msg_id" : "47d88f85-03d4-43c1-a1db-d0b17bf8af05",
          "_text" : "what's the temperature in there?",
          "entities" : {
            "intent" : [ {
              "confidence" : 1.0,
              "value" : "temperature_get"
            } ]
          }
        }
        ```
    6) Add value "temperature_set" to "intent" associated with Expression
    "Set the temperature to 70 degrees" and Validate
    7) Capture specific info (i.e. the provided temperature).
    Add New Entity, select existing `wit/temperature`, then we need to select
    the relevant text in our sentence that has the specific info (i.e. "70 degrees") and
    Validate
    Repeat 6) and 7) for another statement "Set the temperature to 62 degrees"
    8) Test response with cURL
        ```
        {
          "msg_id" : "6e1e7b0a-fa36-4550-ba4d-283703c06f80",
          "_text" : "Set the temperature to 70 degrees",
          "entities" : {
            "temperature" : [ {
              "confidence" : 0.9879510810528682,
              "value" : 70,
              "type" : "value",
              "unit" : "degree"
            } ]
          }
        }
        ```
    9) Build custom logic for bot/app to Get or Set temperature
    10) Integrate Wit into bot/app using HTTP API with either:
        * Node.js client
        * Python client
        * Ruby client

* Recipes
	* Understand
		* Natural Language Processing (NLP) allows understand user input by parsing text or speech into structured data
		by using Duckling linguist (Clojure library) https://duckling.wit.ai/
		* User "intent" may be mapped to many different "Expressions".
		* More "Expressions" Validated for each "intent" value improves performance of NLP confidence
		* Normalise data to from a raw message to provide a specific Type of value (i.e. "tomorrow" mapped to `datetime`)
		* **Using Entity Types**
			* **Build-in (select a built-in i.e. "wit/...")**
			(pre-trained across Wit dataset so perform well)
				* Example:
					```
					Given inputs:
						"What weather here?"
						"What weather Sydney?"
					Provide a "location" Entity (keyword type) with respective values of "here", "Sydney"
					Use the Recipe of Extracting using "wit/location"
					```
			* **Keyword Types** (select only "keyword")
				* i.e. Create Entity "pizza_type". Add **keyword** values to it
				(i.e. "cheese", "mexican", etc). Type a sentence with a **keyword**
				and Wit will identify its type and extract it

			* **Predefined List + Inference** (select both "free-text" and "keyword")
				* If have a type (i.e. pizza) and specific values added (i.e. cheese)
				then it will infer a sentence even if non-existant value provided
				(i.e. "tomatoe pizze")

			* **Entity Substrings** (select "free-text" and "keyword" search strategies)
				* Select substring of text from original sentence.


    * Context object is managed and updated by the developer and tells Wit.ai about current state of conversation.
    Wit.ai predicts next Action to take by comparing Context (from Stories)
    with the Context sent to /converse endpoint.
    One Context Object per Session.

    * Session ID is uniquely generated by developer to Group Messages from same user Request/Conversation


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