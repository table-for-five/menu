const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
// const connection = require('./db');
const mysql = require('mysql');


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

var connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'menu'
});

connection.connect();

app.post('/menu', (req, res) => {

    let des = ["A light yoghurt made with saffron and fresh kiwi fruit",
        "A crunchy salad featuring pepperoni and dried parsley",
        "A crunchy salad featuring fresh chickpea and baby courgette",
        "Fresh redcurrant and horseradish served on a bed of lettuce",
        "A crunchy salad featuring fresh juniper berry and cashew",
        "Fresh damson and jasmine served on a bed of lettuce",
        "Cornmeal and peppermint served on a bed of lettuce",
        "A crisp salad featuring peanut and halibut",
        "Gochu jang and piccalilli served on a bed of lettuce",
        "Fresh beetroot and ruby grapefruit served on a bed of lettuce",
        "A crisp salad featuring toenjang and irish whiskey",
        "A crisp salad featuring button mushroom and fresh jalape",
        "Bean and prosciutto served on a bed of lettuce",
        "A crunchy salad featuring fresh chamomile and venison",
        "Lea bacon and flaxseed oil served on a bed of lettuce",
        "Pork sausage meat and tuna served on a bed of lettuce",
        "A crunchy salad featuring tumeric and buckwheat",
        "A crunchy salad featuring fresh chilli and mascarpone",
        "Marinaded tofu and italian dressing served on a bed of lettuce",
        "Tripe and cider vinegar served on a bed of lettuce",
        "Sharon fruit and fresh cherimoya served on a bed of lettuce",
        "A crunchy salad featuring cumin seeds and smoked salmon",
        "Kalonji and sweet dessert wine served on a bed of lettuce",
        "Black mustard seeds and red cabbage served on a bed of lettuce",
        "A crisp salad featuring fresh potato and chervil",
        "A crunchy salad featuring swordfish and fried paneer",
        "A crunchy salad featuring Spanish chorizo and ostrich",
        "Pecan and baby onion served on a bed of lettuce",
        "A crisp salad featuring fresh longan and mandarin",
        "A crunchy salad featuring fresh jerusalem artichoke and acorn squash",
        "A crisp salad featuring galliano and fresh mint",
        "Limpa and fresh cranberries served on a bed of lettuce",
        "Fresh mangetout and spring onion served on a bed of lettuce",
        "Fresh quinoa and adobo seasoning served on a bed of lettuce",
        "Mizuna and rainbow trout served on a bed of lettuce",
        "Socca and tiger prawns served on a bed of lettuce",
        "A crisp salad featuring fresh marrow and pheasant",
        "A crisp salad featuring plum sauce and vinegar",
        "A crisp salad featuring fresh cucumber and canned corned beef",
        "A crunchy salad featuring fresh jujube and wensleydale",
        "A crisp salad featuring fresh star fruit and loquat",
        "A crunchy salad featuring hp sauce and fresh spaghetti squash",
        "Dulse and kaffir lime leaf served on a bed of lettuce",
        "A crisp salad featuring fresh ugli fruit and eel",
        "Bouquet garni and gorgonzola served on a bed of lettuce",
        "Radiatori and emu served on a bed of lettuce",
        "A crisp salad featuring le roule cheese and caviar",
        "Free-range turkey and duck served on a bed of lettuce",
        "A crunchy salad featuring angelica and pork tenderloin",
        "A crunchy salad featuring haroset and pollock",
        "Spaghetti and edam served on a bed of lettuce",
        "Instant coffee powde and cherry tomato served on a bed of lettuce",
        "A crisp salad featuring garlic powder and pumpkin seeds",
        "Fresh cloudberry and stilton served on a bed of lettuce",
        "A crunchy salad featuring dill and fresh blackcurrant",
        "Fresh shallot and tamarillo served on a bed of lettuce",
        "A crisp salad featuring weetabix and granny smith apple",
        "Poussin and italian seasoning served on a bed of lettuce",
        "A crisp salad featuring gurnard and millet",
        "Squid and pork served on a bed of lettuce",
        "A crunchy salad featuring smoked haddock and costmary",
        "Phyllo and fresh water chestnut served on a bed of lettuce",
        "A crisp salad featuring rice paper and dried rosemary",
        "Cornstarch and fresh delicata served on a bed of lettuce",
        "A crisp salad featuring nasturtium and potato starch",
        "Crab and fresh daikon served on a bed of lettuce",
        "Fresh elderberry and sultana served on a bed of lettuce",
        "A crunchy salad featuring fresh mozzarella and currant",
        "Savoy cabbage and thyme served on a bed of lettuce",
        "A crisp salad featuring urid dal and chinese cabbage",
        "A crunchy salad featuring orange flower water and vermicelli",
        "Fresh arugula and kelp powder served on a bed of lettuce",
        "Fresh blueberry and raspberry vinegar served on a bed of lettuce",
        "Fresh rambutan and plum tomatoes served on a bed of lettuce",
        "A crisp salad featuring fresh lobster and pollack",
        "A crisp salad featuring jaggery and ragu",
        "A crisp salad featuring veal and bocconcini",
        "A crisp salad featuring smoked cheese and fresh yam",
        "A crunchy salad featuring fresh boysenberry and skate",
        "Grappa and bison served on a bed of lettuce",
        "A crisp salad featuring coconut milk and crunchy date",
        "A crunchy salad featuring shrimp and marsala",
        "A crisp salad featuring fresh raisin and calamari",
        "Chinese cabbage and kielbasa served on a bed of lettuce",
        "Cham and roasted chestnut served on a bed of lettuce",
        "Romaine lettuce and fresh raspberry served on a bed of lettuce",
        "A crisp salad featuring fresh borlotti bean and tongue",
        "Tubetti and masa harina served on a bed of lettuce",
        "Fresh kale and minced lamb served on a bed of lettuce",
        "A crisp salad featuring kirschwasser and hazelnut",
        "A crisp salad featuring green cabbage and licorice",
        "A crisp salad featuring dried tarragon and fresh thai basil",
        "A crunchy salad featuring pecorino and fettuccine",
        "A crisp salad featuring anchovy and cialledda",
        "Denjang and mussel served on a bed of lettuce",
        "A crisp salad featuring hogget and john dory",
        "A crunchy salad featuring olive and tia maria",
        "Goat cheese and wheat served on a bed of lettuce",
        "Chicory and shellfish served on a bed of lettuce",
        "A crunchy salad featuring cheddar cheese and cocoa"];

    let food = ["Caprese Zucchini Noodle Salad",
        "Chipotle Chicken Grilled Cheese",
        "Mediterranean Crab ",
        "Chicken Fajita Casserole",
        "Bird's Nest Egg Salad",
        "Caprese Mac and Cheese",
        "Faggots with onion gravy",
        "Low Carb Peanut Butter ",
        "Super Mom Stir Fry",
        "Penne Beef ",
        "Flattened Chicken ",
        "Pork Chops Romano ",
        "Grilled chicken with chilli",
        "Coconut Pound Cake",
        "Steak Sandwiches ",
        "Chicken and Corn Chowder",
        "Creamy Green Chile ",
        "Healthy Chicken Burgers ",
        "Grilled Pork Chops",
        "Shepherd's Pie",
        "Fruit Salad ",
        "Slow-Cooker",
        "Spinach ",
        "Pan-seared Salmon ",
        "Snapper",
        "Chicken Fajita Burgers",
        "Chicken Cacciatore",
        "Guinea fowl tagine",
        "Skinnified Pork ",
        "Salmon Sandwiches with Fries",
        "Stir-Fried Udon",
        "Instant Pot Turkey Chili",
        "The TJ Hooker Pizza",
        "Slow Cooker ",
        "Beef Curry",
        "Pork Tacos ",
        "Roasted Summer",
        "Grilled Watermelon Salad",
        "Mexican Chicken ",
        "Coconut ",
        "Cheesy Chicken ",
        "Sweet Thai Shrimp Curry",
        "Roasted Garlic Macaroni and Cheese",
        "One Pot Garlic Butter Chicken",
        "Slow Cooker Chicken ",
        "Grilled Chicken",
        "Kale Pesto Avocado",
        "Slow Cooker Meatball Subs",
        "Contest-Winning ",
        "Chicken Salad ",
        "Seared Scallops",
        "Skirt Steak ",
        "Almond-Thyme-Crusted Mahi Mahi",
        "Seared Short Rib ",
        "Creamy Baked Risotto",
        "Creamy chicken & mango curry",
        "Smoked Salmon ",
        "Spinach Burrata",
        "Golden Beet ",
        "Cornmeal-Crusted Catfish ",
        "Minty carrot",
        "Bang-Bang Shrimp",
        "Pan-Seared Cod ",
        "Slow Cooker Coq au Vin",
        "Calamari",
        "Homemade Creamy",
        "Avocado BLT",
        "Oven Baked Chicken Tacos",
        "Thai Peanut Chicken",
        "Tofu Kabobs ",
        "Greek pasta salad",
        "Tacos",
        "Ravioli",
        "French Toast",
        "Coleslaw",
        "Porridge",
        "Fried Egg",
        "Bratkartoffeln",
        "Chicken Nuggets",
        "Mashed Potato",
        "Mashed Potato",
        "Wrap",
        "Lasagne",
        "Egg Fried Rice",
        "Spaghetti Bolognese",
        "Cucumber Salad",
        "Spaetzle",
        "Quesadilla",
        "Scallops",
        "Ravioli",
        "Tiramisu",
        "Couscous",
        "Antipasto",
        "French Toast",
        "Ratatouille",
        "Bratwurst",
        "Chicken Nuggets",
        "Barbecue",
        "Chicken Noodle Soup",
        "Apple Pie"];


    for (let i = 0; i < 100; i++) {
        let name = food[i];
        let description = faker.lorem.sentence();
        let price = Math.random() * (25 - 9) + 9;



        let params = [name, description, price];

        let queryStr = 'insert into dinner(name, description,price) \
        values (?,?,?)';

        connection.query(queryStr, params, function (err, result) {
            if (err) {
                console.log("error message: ", err);
                return;
            }
            console.log('done: ', result);
        });

    }


});
let port = 3030;
app.listen(port, function () {
    console.log('listening on port', port);
});

