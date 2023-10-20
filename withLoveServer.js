// INITIALIZE MIDDLEWARE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    const express = require("express");
    const mongoose = require("mongoose");
    const bodyParser = require("body-parser");
    require('dotenv').config();

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

    const portListener = 3000;

// BRING IN STATICS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    app.use("/public/styles", express.static("./public/styles"));
    app.use("/public/scripts", express.static("./public/scripts"));


// CONNECT TO MONGOOSE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    // FOR BASE WITH LOVE MAIN ------------------------------------------------
    // ////////////////////////////////////////////////////////////////////////

        function mongoConnectWithLoveMainBase () {

            const monkey = process.env.monKey;

            var mogooseConnectionStringMainBase = `mongodb+srv://EdBear:${monkey}@withlove.ejkplu1.mongodb.net/mainBase`;
            
            
                mongoose.connect(mogooseConnectionStringMainBase, {
        
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
        
        
            };



                // RUN FOR LOOP TO CHECK NUMBER OF SONG BOXES xxxxxxxxxxxxxxxxx
                // ////////////////////////////////////////////////////////////



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











// ROUTES CREATIONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    // GET ROUTES -------------------------------------------------------------
    // ////////////////////////////////////////////////////////////////////////

        // INDEX ROUTES ///////////////////////////////////////////////////////
        // ////////////////////////////////////////////////////////////////////

            app.get("/", function(req, res){

                res.render("index", {

                });


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

    app.listen(portListener, () => {

        console.log("server started at " + portListener);

    });