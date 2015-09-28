# Thinking outside the block
A presentation on detached drupal (and notes) for drupal camp Baltimore 2015.

Thinking outside the block. Embracing a (sometimes) decoupled architechture
The Headless, or Decoupled Drupal concept has been around for a bit now, but what is it really? In this session we will go over some basics of a few key concepts around decoupling some (or all) content from the Drupal rendering pipeline, and how you can use this concept to create fast, lean, and modern applications while relying on Drupal to do the bulk of the content modeling work, and the less sexy, yet important bits like user and content management. The key takeaway here is that it is far from an all or nothing approach, hence: “Render unto Caesar that which is Caesars, and render unto Drupal that which is Drupals.” Use Drupal to render the content it's great at, and use something else to render the content it's not. Lots of Clients approach us these days looking for a specific tool. Maybe it’s a map, maybe it’s a timeline, maybe it’s a native application. Drupal isn’t necessarily always the best tool for the job for making these dreams come into fruition on the front end, but lots of our clients are already using it for their main web presence. While we could spend time building custom modules/etc within their existing install, sometimes this doesn’t really make sense. Enter the API. We will take a look at a few simple, real world examples where we have chosen to decouple content for clients, how we did it, and how you can too!

## What it is 

## Why we care

## Why we would do it
- seperation of church and state
- unchain your front end developers from the platform.

## Why we would be hesitant.
- recreating the wheel.
- It still depends on the backend, duh.
- http requests like whoa.
- Different skillsets like whoa.
- 

## Real world examples of why/why not.
- PCCR
- WRA Timeline
- Howard (blurs the line between full or not)

## So, youve decided to do it, whats next?
- Build yerself an API.
  * Services/RESTful/Others
  * What's up w/D8?
- Consume coffee, and your API.
  * language/project dependant obvi.
- 

## Roadblocks to avoid
- Lots and lots of seperate endpoints.
  * I get it. You need some different endpoints, but try and make those as robust, and queryable as possible. 
  * Try to keep extra http requests down by combinig things within views, perhaps.
- Authenticated requests
- Permmisions based submissions, and moderations (OR, the devil that is Workbench).

## Some tools to get you through
- Postman
- 


## Resources
- http://buytaert.net/the-future-of-decoupled-drupal
- https://www.lullabot.com/articles/should-you-decouple
