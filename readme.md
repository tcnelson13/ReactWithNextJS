// Step 1 allows for our development REST endpoints called w/axios
To see the data hosted and hit the port
http://localhost:4000
http://localhost:4000/speakers
http://localhost:4000/speakers/8367
http://localhost:4000/sessions

npm run json-server

// Step 2
To allow for nextjs server landing pages, run your server locally
node server.js


// Optional process to run, but doesn't allow for landing pages
// like speakers/:id
npm run dev fires the application up

// Notes
If you can see the page data when you view source, then you are
rendering server-side with nextjs

The ugly code in next.config.js can be better managed with
next-compose-plugins if we had more than two plugins
-CDN is configured in the next.config.js and this is a huge performance gain

We use lru-cache to delete the least recently used items

// curl commands to test page response time
curl -s -w "%{time_total}\n" -o /dev/null http://localhost:3000/speakers

hosted application - this doesn't work
curl -s -w "%{time_total}\n" -o /dev/null http://138.197.211.70/speakers
ps.reactu.net

react-placeholder is the npm package that allows us to load
a placeholder graphic - this wouldn't load locally, but I could force it
to display by inverting the logic