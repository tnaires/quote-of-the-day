# quote-of-the-day

## Overview

This is a small API built to create booking projects through [VoiceBunny API](https://voicebunny.com/api/documentation) taking a [quote of the day](https://talaikis.com/api/quotes/random/) as script.

## How to run

You need to have [Node.js](https://nodejs.org/en/) installed on your machine.

You need to set the following environment variables with your VoiceBunny credentials: VOICE_BUNNY_USER_ID and VOICE_BUNNY_API_TOKEN.

After that, run `npm start` and access the test page under http://localhost:3000/quote-of-the-day/test to create a project.

## Endpoints

* GET /quote-of-the-day/test - displays a test page.
* POST /quote-of-the-day/project/new - fetches a quote of the day and uses it as a script to create a new project on VoiceBunny.

## Links

This application is deployed [on Heroku](https://boiling-tundra-82534.herokuapp.com/quote-of-the-day/test).
