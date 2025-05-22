# About the proyect

In this React project I decided to make a page themed on a (fictional) bar where you can play and compete with other customers in fighting games. The page has:

## Home

The main page, where you will find the introduction to the site and an events section. In this there is a calendar (a third party component) that marks in red colour (this is modifiable in the code) the day that there is an event, and clicking on it will show a text about it.

## Games

This section displays a list showing the name, developer and cover of each game available to play in the bar. This list is created from firebase, making it easy to modify if you want to add or remove a game.

## Users

As in Games, it has a list that shows information created and modifiable from firebase, with the difference of being able to add and delete information from the page itself. In this one there is a form that asks for your name, game of preference and user name in this one. Once you fill in the form and click the button, the information will be added and visible on the page. The idea with this is to facilitate interaction between customers, to meet people with a common taste and to have more to fight against.
