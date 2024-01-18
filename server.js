// INITIALIZE MIDDLEWARE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    const express = require("express");
    const mongoose = require("mongoose");
    const bodyParser = require("body-parser");
    require('dotenv').config();
    const ejs = require("ejs");

// INITIALIZE APP EXPRESS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////  

    const app = express();

// INITIATE BODY PARSER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true,}),);

// INITIATE VIEW ENGINE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    app.set("view engine", "ejs");

// PORT NUMBER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    const PORT = process.env.PORT || 8080;

// BRING IN STATICS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    app.use("/public/styles", express.static("./public/styles"));
    app.use("/public/scripts", express.static("./public/scripts"));


// CONNECT TO MONGOOSE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    // FOR BASE WITH LOVE MAIN ------------------------------------------------
    // ////////////////////////////////////////////////////////////////////////

    

        var monkey = "";

        var m0nkey = "";

        var monk3y = "";

        function mongoConnectWithLoveMainBase () {

            

            monkey = "";
            m0nkey = "";
            monk3y = "";

            var monkeyMake = [


                "Yv3y",
                "u00q",
                "ePk",
                "UC",
                "0v",

                "jk",
                "hsjh",
                "98aj",
                "llsk",
                "tyj",

                "klsk",
                "11rt",
                "klkjl",
                "lll",
                "jjsh"

            ];

            var m0nkeyMake = [


                "Yv3y",
                "u00q",
                "ePk",
                "UC",
                "0v",

                "jk",
                "hsjh",
                "98aj",
                "llsk",
                "tyj",

                "klsk",
                "11rt",
                "klkjl",
                "lll",
                "jjsh"

            ];

            var monk3yMake = [


                "Yv3y",
                "u00q",
                "ePk",
                "UC",
                "0v",

                "jk",
                "hsjh",
                "98aj",
                "llsk",
                "tyj",

                "klsk",
                "11rt",
                "klkjl",
                "lll",
                "jjsh"

            ];
            
            
            monkey += monkeyMake[0];
            monk3y += monk3yMake[0];
            m0nkey += m0nkeyMake[0];
            m0nkey += m0nkeyMake[2];
            monk3y += monk3yMake[2];
            monkey += monkeyMake[2];
            m0nkey += m0nkeyMake[3];
            monkey += monkeyMake[3];
            monk3y += monk3yMake[3];
            monk3y += monk3yMake[1];
            monkey += monkeyMake[1];
            m0nkey += m0nkeyMake[1];

            console.log("SHOWING MONKEY: " + monkey);
            console.log("SHOWING MONKEY: " + m0nkey);
            console.log("SHOWING MONKEY: " + monk3y);

            monk3y += "0v4";
            monkey += "0v4";
            m0nkey += "0v4";

            console.log("SHOWING MONKEY: " + monk3y);
            console.log("SHOWING MONKEY: " + monkey);
            console.log("SHOWING MONKEY: " + m0nkey);



            var mogoooseConnectionStringMainBase = `mongodb+srv://EdBear:${monk3y}@withlove.ejkplu1.mongodb.net/mainBase`;
            var mogooseConnectionStringMainBase = `mongodb+srv://EdBear:${monkey}@withlove.ejkplu1.mongodb.net/mainBase`;
            var mogooseConnectionStriingMainBase = `mongodb+srv://EdBear:${m0nkey}@withlove.ejkplu1.mongodb.net/mainBase`;
            
            
                mongoose.connect(mogooseConnectionStringMainBase, {
        
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });

                    


                setTimeout(() => {

                    mongoose.disconnect();

                    console.log("CONNECTION CLOSED...")

                }, 10000);
        
        
            };



                
                // CREATE SCHEMA FOR USERNAMES AND COMMENTS ---------------
                // ////////////////////////////////////////////////////////

                    const uNsSchemaMainSongBoxOne = {

                        lovinUsername: String,
                        lovingDescription: String,
                        lovinCommentsArtistRecommendationOne: String,
                        lovinCommentsSongRecommendationOne: String
                        
                    };


                    const uNsSchemaMainSongBoxTwo = {

                        lovinUsername: String,
                        lovingDescription: String,
                        lovinCommentsArtistRecommendationOne: String,
                        lovinCommentsSongRecommendationOne: String,
                        lovinCommentsArtistRecommendationTwo: String,
                        lovinCommentsSongRecommendationTwo: String
                        
                    };


                    const uNsSchemaMainSongBoxThree = {

                        lovinUsername: String,
                        lovingDescription: String,
                        lovinCommentsArtistRecommendationOne: String,
                        lovinCommentsSongRecommendationOne: String,
                        lovinCommentsArtistRecommendationTwo: String,
                        lovinCommentsSongRecommendationTwo: String,
                        lovinCommentsArtistRecommendationThree: String,
                        lovinCommentsSongRecommendationThree: String
                        
                    };


                    const uNsSchemaMainSongBoxFour = {

                        lovinUsername: String,
                        lovingDescription: String,
                        lovinCommentsArtistRecommendationOne: String,
                        lovinCommentsSongRecommendationOne: String,
                        lovinCommentsArtistRecommendationTwo: String,
                        lovinCommentsSongRecommendationTwo: String,
                        lovinCommentsArtistRecommendationThree: String,
                        lovinCommentsSongRecommendationThree: String,
                        lovinCommentsArtistRecommendationFour: String,
                        lovinCommentsSongRecommendationFour: String
                        
                    };


                    const uNsSchemaMainSongBoxFive = {

                        lovinUsername: String,
                        lovingDescription: String,
                        lovinCommentsArtistRecommendationOne: String,
                        lovinCommentsSongRecommendationOne: String,
                        lovinCommentsArtistRecommendationTwo: String,
                        lovinCommentsSongRecommendationTwo: String,
                        lovinCommentsArtistRecommendationThree: String,
                        lovinCommentsSongRecommendationThree: String,
                        lovinCommentsArtistRecommendationFour: String,
                        lovinCommentsSongRecommendationFour: String,
                        lovinCommentsArtistRecommendationFive: String,
                        lovinCommentsSongRecommendationFive: String
                        
                    };



                
                // CREATE SCHEMA FOR SELECTED USERNAMES AND DESCRIPTION ---
                // ////////////////////////////////////////////////////////


                    const userCommentsRetrieve = {

                        lovinUsernameSelected: String,
                        lovingDescriptionSelected: String,

                    }


    
                    var selectedComments = mongoose.model("lovelyselectedcomments", userCommentsRetrieve);











// ROUTES CREATIONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    // GET ROUTES -------------------------------------------------------------
    // ////////////////////////////////////////////////////////////////////////

        // INDEX ROUTES ///////////////////////////////////////////////////////
        // ////////////////////////////////////////////////////////////////////

            app.get("/", function(req, res){

                setTimeout(()=> {

                    mongoConnectWithLoveMainBase();

                    selectedComments.find().then((selectedCriteria) => {
    
                        res.render("index", {
    
                            selected: selectedCriteria
    
                        });
                        
                    })
                    .catch((err) => {
    
                        console.log(err);
    
                    });



                }, 2000);


            });







    // POST ROUTES ------------------------------------------------------------
    // ////////////////////////////////////////////////////////////////////////

        // INDEX ROUTES ///////////////////////////////////////////////////////
        // ////////////////////////////////////////////////////////////////////

            app.post("/", function(req, res){

                // CREATE VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // //////////////////////////////////////////////////////// 

                    var userNameTaker = req.body.nameInputOne;

                    var getBoxesContentNumbers = req.body.counterOne;

                    var getDescriptionTextBox = req.body.description;

                    var monkey = "";

                    var monkeyMake = [


                        "Yv3y",
                        "u00q",
                        "ePk",
                        "UC",
                        "0v",

                        "jk",
                        "hsjh",
                        "98aj",
                        "llsk",
                        "tyj",

                        "klsk",
                        "11rt",
                        "klkjl",
                        "lll",
                        "jjsh"

                    ];




                        // CHECK IF DESCRIPTION BOX IS FILLED IN ----------
                        // ////////////////////////////////////////////////

                            if ( getDescriptionTextBox == "" ) {

                                console.log("NUN TO SUBMIT...");

                            } else {


                                // POPULATE SCHEMAS -------------------------------
                                // ////////////////////////////////////////////////

                                    // CHECK IF ITEM NUMBER COUNTER ///////////
                                    // ////////////////////////////////////////

                                        // IF NUMBER IS ONE -------------------
                                        // ////////////////////////////////////

                                        if ( getBoxesContentNumbers == 1 ) {

                                            // ONE --------------------------------------------
                                            // ////////////////////////////////////////////////
                
                                                console.log("ONE READY...");

                                                // CREATE VARIABLES FOR EXTRACTION xxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////
            
                                                    var userArtistTakerOne = req.body.artistOne;
                                                    var userSongTakerOne = req.body.songOne;

                                                        // FOR USERNAMES AND COMMENTS ONE xxxxxxxxxxxxx
                                                        // ////////////////////////////////////////////
                            
                                                            var uNsAndCommentsOne = mongoose.model("lovelyNames", uNsSchemaMainSongBoxOne);
            
                                                        // SCHEMA POPULATE ONE ////////////////////
                                                        // ////////////////////////////////////////

                                                            // CHECK IF LAST INPUT IS EMPTY OR NOT
                                                            // ///////////////////////////////////

                                                                if ( userArtistTakerOne == "" || userSongTakerOne == "" ) {
                    
                                                                    console.log("NUN HERE TO START WITH...");

                                                                } else {
                    
                                                                    var newCommentOne = new uNsAndCommentsOne({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                            
                                                                    });

                                                                }
            
                                                        // OPEN DATABASE CONNECTION ///////////////
                                                        // ////////////////////////////////////////

                                                            monkey += monkeyMake[0];
                                                            monkey += monkeyMake[1];
                                                            monkey += monkeyMake[2];
                                                            monkey += monkeyMake[3];

                                                            console.log("SHOWING MONKEY: " + monkey);

                                                            monkey += "0v4";

                                                            console.log("SHOWING MONKEY: " + monkey);
                    
                                                            mongoConnectWithLoveMainBase();
            
                                                        console.log("THATS ONE SAVED");
            
                                                            // THEN SAVE POST INPUTS //////////////////
                                                            // ////////////////////////////////////////
                        
                                                                newCommentOne.save();


                                        } else if ( getBoxesContentNumbers == 2 ) {

                                            // TWO --------------------------------------------
                                            // ////////////////////////////////////////////////
                
                                                console.log("TWO READY...");

                                                // CREATE VARIABLES FOR EXTRACTION xxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////
            
                                                    var userArtistTakerOne = req.body.artistOne;
                                                    var userSongTakerOne = req.body.songOne;
                
                                                    var userArtistTakerTwo = req.body.artistTwo;
                                                    var userSongTakerTwo = req.body.songTwo;

                                                    monkey = "";

                                                        // FOR USERNAMES AND COMMENTS ONE xxxxxxxxxxxxx
                                                        // ////////////////////////////////////////////
                            
                                                            var uNsAndCommentsTwo = mongoose.model("lovelyNames", uNsSchemaMainSongBoxTwo);
            
                                                        // SCHEMA POPULATE TWO ////////////////////
                                                        // ////////////////////////////////////////

                                                            // CHECK IF LAST INPUT IS EMPTY OR NOT
                                                            // ///////////////////////////////////

                                                                if ( userArtistTakerTwo == "" || userSongTakerTwo == "" ) {
                    
                                                                    var newCommentTwo = new uNsAndCommentsTwo({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                            
                                                                    });

                                                                } else {
                    
                                                                    var newCommentTwo = new uNsAndCommentsTwo({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                        lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                        lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                            
                                                                    });

                                                                }
            
                                                        // OPEN DATABASE CONNECTION ///////////////
                                                        // ////////////////////////////////////////

                                                            monkey += monkeyMake[0];
                                                            monkey += monkeyMake[1];
                                                            monkey += monkeyMake[2];
                                                            monkey += monkeyMake[3];

                                                            console.log("SHOWING MONKEY: " + monkey);

                                                            monkey += "0v4";

                                                            console.log("SHOWING MONKEY: " + monkey);
                    
                                                            mongoConnectWithLoveMainBase();
            
                                                        console.log("THATS TWO SAVED");
            
                                                            // THEN SAVE POST INPUTS //////////////////
                                                            // ////////////////////////////////////////
                        
                                                                newCommentTwo.save();


                                        } else if ( getBoxesContentNumbers == 3 ) {

                                            // THREE ------------------------------------------
                                            // ////////////////////////////////////////////////
                
                                                console.log("THREE READY...");

                                                // CREATE VARIABLES FOR EXTRACTION xxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////
            
                                                    var userArtistTakerOne = req.body.artistOne;
                                                    var userSongTakerOne = req.body.songOne;
                
                                                    var userArtistTakerTwo = req.body.artistTwo;
                                                    var userSongTakerTwo = req.body.songTwo;
            
                                                    var userArtistTakerThree = req.body.artistThree;
                                                    var userSongTakerThree = req.body.songThree;

                                                    monkey = "";

                                                        // FOR USERNAMES AND COMMENTS THREE xxxxxxxxxxx
                                                        // ////////////////////////////////////////////
                            
                                                            var uNsAndCommentsThree = mongoose.model("lovelyNames", uNsSchemaMainSongBoxThree);
            
                                                        // SCHEMA POPULATE THREE ///////////////////
                                                        // ////////////////////////////////////////

                                                            // CHECK IF LAST INPUT IS EMPTY OR NOT
                                                            // ///////////////////////////////////

                                                                if ( userArtistTakerThree == "" || userSongTakerThree == "" ) {
                    
                                                                    var newCommentThree = new uNsAndCommentsThree({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                        lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                        lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                            
                                                                    });

                                                                } else {
                    
                                                                    var newCommentThree = new uNsAndCommentsThree({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                        lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                        lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                                                                        lovinCommentsArtistRecommendationThree: userArtistTakerThree,
                                                                        lovinCommentsSongRecommendationThree: userSongTakerThree,
                            
                                                                    });

                                                                }
            
                                                        // OPEN DATABASE CONNECTION ///////////////
                                                        // ////////////////////////////////////////

                                                            monkey += monkeyMake[0];
                                                            monkey += monkeyMake[1];
                                                            monkey += monkeyMake[2];
                                                            monkey += monkeyMake[3];

                                                            console.log("SHOWING MONKEY: " + monkey);

                                                            monkey += "0v4";

                                                            console.log("SHOWING MONKEY: " + monkey);
                    
                                                            mongoConnectWithLoveMainBase();
            
                                                        console.log("THATS THREE SAVED");
            
                                                            // THEN SAVE POST INPUTS //////////////////
                                                            // ////////////////////////////////////////
                        
                                                                newCommentThree.save();


                                        } else if ( getBoxesContentNumbers == 4 ) {

                                            // FOUR -------------------------------------------
                                            // ////////////////////////////////////////////////
                
                                                console.log("FOUR READY...");

                                                // CREATE VARIABLES FOR EXTRACTION xxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////
            
                                                    var userArtistTakerOne = req.body.artistOne;
                                                    var userSongTakerOne = req.body.songOne;
                
                                                    var userArtistTakerTwo = req.body.artistTwo;
                                                    var userSongTakerTwo = req.body.songTwo;
            
                                                    var userArtistTakerThree = req.body.artistThree;
                                                    var userSongTakerThree = req.body.songThree;
            
                                                    var userArtistTakerFour = req.body.artistFour;
                                                    var userSongTakerFour = req.body.songFour;

                                                    monkey = "";

                                                        // FOR USERNAMES AND COMMENTS FOUR xxxxxxxxxxxx
                                                        // ////////////////////////////////////////////
                            
                                                            var uNsAndCommentsFour = mongoose.model("lovelyNames", uNsSchemaMainSongBoxFour);

                                                            // SCHEMA POPULATE FOUR ///////////////////
                                                            // ////////////////////////////////////////

                                                                // CHECK IF LAST INPUT IS EMPTY OR NOT
                                                                // ///////////////////////////////////

                                                                    if ( userArtistTakerFour == "" || userSongTakerFour == "" ) {
                        
                                                                        var newCommentFour = new uNsAndCommentsFour({
                                
                                                                            lovinUsername: userNameTaker,
                                                                            lovingDescription: getDescriptionTextBox,
                                                                            lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                            lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                            lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                            lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                                                                            lovinCommentsArtistRecommendationThree: userArtistTakerThree,
                                                                            lovinCommentsSongRecommendationThree: userSongTakerThree,
                                
                                                                        });

                                                                    } else {
                        
                                                                        var newCommentFour = new uNsAndCommentsFour({
                                
                                                                            lovinUsername: userNameTaker,
                                                                            lovingDescription: getDescriptionTextBox,
                                                                            lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                            lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                            lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                            lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                                                                            lovinCommentsArtistRecommendationThree: userArtistTakerThree,
                                                                            lovinCommentsSongRecommendationThree: userSongTakerThree,
                                                                            lovinCommentsArtistRecommendationFour: userArtistTakerFour,
                                                                            lovinCommentsSongRecommendationFour: userSongTakerFour,
                                
                                                                        });

                                                                    }
                
                                                            // OPEN DATABASE CONNECTION ///////////////
                                                            // ////////////////////////////////////////

                                                                monkey += monkeyMake[0];
                                                                monkey += monkeyMake[1];
                                                                monkey += monkeyMake[2];
                                                                monkey += monkeyMake[3];

                                                                console.log("SHOWING MONKEY: " + monkey);

                                                                monkey += "0v4";

                                                                console.log("SHOWING MONKEY: " + monkey);
                        
                                                                mongoConnectWithLoveMainBase();
                
                                                            console.log("THATS FOUR SAVED");
                
                                                                // THEN SAVE POST INPUTS //////////////////
                                                                // ////////////////////////////////////////
                            
                                                                    newCommentFour.save();


                                        } else if ( getBoxesContentNumbers == 5 ) {

                                            // FIVE -------------------------------------------
                                            // ////////////////////////////////////////////////
                
                                                console.log("FIVE READY...");

                                                // CREATE VARIABLES FOR EXTRACTION xxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////
            
                                                    var userArtistTakerOne = req.body.artistOne;
                                                    var userSongTakerOne = req.body.songOne;
                
                                                    var userArtistTakerTwo = req.body.artistTwo;
                                                    var userSongTakerTwo = req.body.songTwo;
            
                                                    var userArtistTakerThree = req.body.artistThree;
                                                    var userSongTakerThree = req.body.songThree;
            
                                                    var userArtistTakerFour = req.body.artistFour;
                                                    var userSongTakerFour = req.body.songFour;
            
                                                    var userArtistTakerFive = req.body.artistFive;
                                                    var userSongTakerFive = req.body.songFive;

                                                    monkey = "";

                                                        // FOR USERNAMES AND COMMENTS FIVE xxxxxxxxxxxx
                                                        // ////////////////////////////////////////////
                            
                                                            var uNsAndCommentsFive = mongoose.model("lovelyNames", uNsSchemaMainSongBoxFive);
            
                                                        // SCHEMA POPULATE FIVE ///////////////////
                                                        // ////////////////////////////////////////

                                                            // CHECK IF LAST INPUT IS EMPTY OR NOT
                                                            // ///////////////////////////////////

                                                                if ( userArtistTakerFive == "" || userSongTakerFive == "" ) {
                    
                                                                    var newCommentFive = new uNsAndCommentsFive({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                        lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                        lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                                                                        lovinCommentsArtistRecommendationThree: userArtistTakerThree,
                                                                        lovinCommentsSongRecommendationThree: userSongTakerThree,
                                                                        lovinCommentsArtistRecommendationFour: userArtistTakerFour,
                                                                        lovinCommentsSongRecommendationFour: userSongTakerFour,
                            
                                                                    });

                                                                } else {
                    
                                                                    var newCommentFive = new uNsAndCommentsFive({
                            
                                                                        lovinUsername: userNameTaker,
                                                                        lovingDescription: getDescriptionTextBox,
                                                                        lovinCommentsArtistRecommendationOne: userArtistTakerOne,
                                                                        lovinCommentsSongRecommendationOne: userSongTakerOne,
                                                                        lovinCommentsArtistRecommendationTwo: userArtistTakerTwo,
                                                                        lovinCommentsSongRecommendationTwo: userSongTakerTwo,
                                                                        lovinCommentsArtistRecommendationThree: userArtistTakerThree,
                                                                        lovinCommentsSongRecommendationThree: userSongTakerThree,
                                                                        lovinCommentsArtistRecommendationFour: userArtistTakerFour,
                                                                        lovinCommentsSongRecommendationFour: userSongTakerFour,
                                                                        lovinCommentsArtistRecommendationFive: userArtistTakerFive,
                                                                        lovinCommentsSongRecommendationFive: userSongTakerFive,
                            
                                                                    });

                                                                }
            
                                                        // OPEN DATABASE CONNECTION ///////////////
                                                        // ////////////////////////////////////////

                                                            monkey += monkeyMake[0];
                                                            monkey += monkeyMake[1];
                                                            monkey += monkeyMake[2];
                                                            monkey += monkeyMake[3];

                                                            console.log("SHOWING MONKEY: " + monkey);

                                                            monkey += "0v4";

                                                            console.log("SHOWING MONKEY: " + monkey);
                    
                                                            mongoConnectWithLoveMainBase();
            
                                                        console.log("THATS FIVE SAVED");
            
                                                            // THEN SAVE POST INPUTS //////////////////
                                                            // ////////////////////////////////////////
                        
                                                                newCommentFive.save();

                                        } else {

                                            console.log("COULDNT GET NUMBER...");

                                        }



                            }


                    // REDIRECT PAGE WHEN DONE POSTING xxxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        res.redirect("/");

            });












// OPEN AND LISTEN TO PORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    app.listen(PORT, () => {

        console.log("server started at " + PORT);

    });