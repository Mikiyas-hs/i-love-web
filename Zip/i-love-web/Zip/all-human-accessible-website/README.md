# Accessible Website

Ontwerp en maak voor een opdrachtgever een component/pagina/site toegankelijk volgens WCAG richtlijnen.

De instructie van deze leertaak staat in [INSTRUCTIONS](https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/INSTRUCTIONS.md)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

in deze sprint heb ik de opdracht gekregen om mijn website die ik voor redpers had gemaakt toegankelijk te maken voor mensen en voor mensen met beperkingen. in de vorige sprint had ik geprobeerd om de website zo identiek mogelijk te maken ten opzichte van het design die we opgestuurd gekregen hadden dit keer heb ik een paar aanpassingen en betere technieken in mijn html toegepast om de toegankelijkheid van mijn website te verbeteren waardoor je dus goed kunt tabben door de site en bijv door te tabben en alleen het toetsenbord te gebruiken de hamburger menu kunt openen en sluiten en een screen reader kunt gebruiken die bepaalde dingen op je site kan voorlezen 

<img src="/images/Schermafbeelding 2024-10-18 122520.png">
<img src="/images/Schermafbeelding 2024-10-24 010600.png">

https://mikiyas-hs.github.io/all-human-accessible-website/


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De html van mijn website is semantisch opgezet. hiervoor geef ik een overzicht van de belangrijkste dingen die voorkomen in mijn html
<header>: in de header kan je het logo een hamburger-menu en de navigatie terug vinden
<article>: in de article kun je bijv terug vinden wat de publicatiedatum is en het artikel word weergegeven
<main>: de main bevat de belangrijkste inhoud van mijn pagina zoals de afbeelidng het artikel en de tekstgedeelte daarvan

ik heb voor de toegankelijkheid van mijn website ook mijn html structuur veranderd zodat mijn code er overzichtelijker uit kon zien waardoor je beter kon tabben door de site en ik heb aanpassingen gemaakt in mijn code zoals het weghalen van mijn hr en dat stukje van de website gewoon te stijlen in css hierdoor werd mijn site iets semantischer en bijv lijn 30-31 heb ik al die codes aangepast en alle tekst in de a-tag gezet en ik heb bijv ook overal waar het nodig was mijn code aangepast na mijn site te laten runnen door lighthouse om de toegankelijkheid van mijn site te kunnen verbeteren ik heb ook een aantal buttons groter gemaakt omdat ik mijn site door een test had gehaald waarbij je kon zien hoe je website eruit ziet als je website bijv wazig is door dat te doen heb ik een kleine designing aanpassing gemaakt 

mijn css bevat een aantal goede elementen zoals het gebruik van:
@font-face: ik heb aangepaste lettertypes hiermee in kunnen laden met
flexbox: De header maakt goed gebruik van flexbox om elementen zoals het logo en de menu-button correct te postioneren 
mobile-first aanpak: ik heb de mobile first methode gebruikt wat inhoud dat ik eerst ben begonnen met het maken van de website voor op de telefoon 

mijn css is niet helemaal goed en bevat ook een aantal verbeter punten waar rekening mee gehouden word
posities: Er zijn veel elementen met position: absolute vooral binnen de artikelen en tekstgedeelten dit maakt het moeilijker om mijn ontwerp responsive te maken voor bijv een desktop 
## Bronnen

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
