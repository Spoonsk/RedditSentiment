import RedditRequestHandler from "./requestHandlers/redditRequestHandler/redditRequestHandler"

let requestHandler = new RedditRequestHandler();
//let databaseAdapter = new postgresDBAdapter()

//let analyzer = new dataAnalyser

// Listen to RSS feed
    // on new RSS feed item
        // get comment that mention came from
        // get parent comment
        // get user from parent comment
        // get user's last n comments
