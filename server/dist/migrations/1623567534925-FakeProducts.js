"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeProducts1623567534925 = void 0;
class FakeProducts1623567534925 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
    insert into products ("productName", "productImage") values ('Pastry - Baked Scones - Mini', 'http://dummyimage.com/105x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Sugar - Cubes', 'http://dummyimage.com/196x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Ice Cream - Vanilla', 'http://dummyimage.com/248x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Beef - Ground Medium', 'http://dummyimage.com/208x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Grenadine', 'http://dummyimage.com/144x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Butter - Salted', 'http://dummyimage.com/243x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Cheese - Woolwich Goat, Log', 'http://dummyimage.com/151x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Lettuce - Iceberg', 'http://dummyimage.com/226x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Jicama', 'http://dummyimage.com/179x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Muffin Mix - Corn Harvest', 'http://dummyimage.com/241x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Toothpick Frilled', 'http://dummyimage.com/131x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Flour Dark Rye', 'http://dummyimage.com/161x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Sauce Bbq Smokey', 'http://dummyimage.com/156x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Liners - Baking Cups', 'http://dummyimage.com/186x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Tamarind Paste', 'http://dummyimage.com/250x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Oil - Sunflower', 'http://dummyimage.com/234x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Bread - Roll, Italian', 'http://dummyimage.com/109x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Sauce - Demi Glace', 'http://dummyimage.com/202x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Wine - Barbera Alba Doc 2001', 'http://dummyimage.com/186x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Chocolate Liqueur - Godet White', 'http://dummyimage.com/147x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Veal - Chops, Split, Frenched', 'http://dummyimage.com/169x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Grapefruit - Pink', 'http://dummyimage.com/143x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Bread Ww Cluster', 'http://dummyimage.com/209x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Napkin Colour', 'http://dummyimage.com/155x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Vol Au Vents', 'http://dummyimage.com/133x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Coffee - Frthy Coffee Crisp', 'http://dummyimage.com/112x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Table Cloth 90x90 Colour', 'http://dummyimage.com/110x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Chervil - Fresh', 'http://dummyimage.com/103x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Cookie Double Choco', 'http://dummyimage.com/250x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Tea - Earl Grey', 'http://dummyimage.com/131x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Plasticspoonblack', 'http://dummyimage.com/187x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Towels - Paper / Kraft', 'http://dummyimage.com/135x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Beer - Camerons Cream Ale', 'http://dummyimage.com/158x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Champagne - Brights, Dry', 'http://dummyimage.com/123x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Beer - Molson Excel', 'http://dummyimage.com/243x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Syrup - Monin - Granny Smith', 'http://dummyimage.com/161x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Peas - Frozen', 'http://dummyimage.com/234x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('V8 Splash Strawberry Kiwi', 'http://dummyimage.com/215x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Cranberries - Dry', 'http://dummyimage.com/175x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Bacon Strip Precooked', 'http://dummyimage.com/200x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Tea - Lemon Scented', 'http://dummyimage.com/179x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Sterno - Chafing Dish Fuel', 'http://dummyimage.com/152x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Pork - Kidney', 'http://dummyimage.com/132x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Bagel - Everything Presliced', 'http://dummyimage.com/219x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Quiche Assorted', 'http://dummyimage.com/240x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Wine La Vielle Ferme Cote Du', 'http://dummyimage.com/225x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Basil - Thai', 'http://dummyimage.com/163x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Hot Choc Vending', 'http://dummyimage.com/153x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Bread Crumbs - Panko', 'http://dummyimage.com/165x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Wine - Acient Coast Caberne', 'http://dummyimage.com/140x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Bread - Raisin', 'http://dummyimage.com/216x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Spice - Paprika', 'http://dummyimage.com/188x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Vanilla Beans', 'http://dummyimage.com/196x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Ham - Smoked, Bone - In', 'http://dummyimage.com/151x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Sugar - White Packet', 'http://dummyimage.com/248x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Bread Fig And Almond', 'http://dummyimage.com/134x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Carbonated Water - Blackberry', 'http://dummyimage.com/174x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Jolt Cola', 'http://dummyimage.com/184x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Appetizer - Mini Egg Roll, Shrimp', 'http://dummyimage.com/115x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Milk - Homo', 'http://dummyimage.com/176x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Pork - Bacon, Double Smoked', 'http://dummyimage.com/133x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Foie Gras', 'http://dummyimage.com/215x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Bread - Roll, Calabrese', 'http://dummyimage.com/245x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Mushroom - Crimini', 'http://dummyimage.com/226x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Barley - Pearl', 'http://dummyimage.com/223x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Muffin Puck Ww Carrot', 'http://dummyimage.com/168x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Cinnamon Buns Sticky', 'http://dummyimage.com/114x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Tomatoes - Diced, Canned', 'http://dummyimage.com/112x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Plums - Red', 'http://dummyimage.com/118x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Soupcontfoam16oz 116con', 'http://dummyimage.com/152x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Paper Towel Touchless', 'http://dummyimage.com/227x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Bread - Roll, Calabrese', 'http://dummyimage.com/247x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Cherries - Maraschino,jar', 'http://dummyimage.com/147x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Pepper - Paprika, Hungarian', 'http://dummyimage.com/148x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Orange - Blood', 'http://dummyimage.com/221x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Cheese - Roquefort Pappillon', 'http://dummyimage.com/164x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Cheese - Goat With Herbs', 'http://dummyimage.com/124x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Monkfish Fresh - Skin Off', 'http://dummyimage.com/213x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Lettuce - Spring Mix', 'http://dummyimage.com/156x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Soup - Campbells Beef Stew', 'http://dummyimage.com/215x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Lettuce - Iceberg', 'http://dummyimage.com/190x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Pepper - Orange', 'http://dummyimage.com/181x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Pecan Raisin - Tarts', 'http://dummyimage.com/153x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Tart - Butter Plain Squares', 'http://dummyimage.com/155x100.png/ff4444/ffffff');
    insert into products ("productName", "productImage") values ('Baking Powder', 'http://dummyimage.com/122x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Cheese - Ermite Bleu', 'http://dummyimage.com/142x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Sprite, Diet - 355ml', 'http://dummyimage.com/120x100.png/5fa2dd/ffffff');
    insert into products ("productName", "productImage") values ('Bagel - Ched Chs Presliced', 'http://dummyimage.com/181x100.png/dddddd/000000');
    insert into products ("productName", "productImage") values ('Apple - Delicious, Red', 'http://dummyimage.com/237x100.png/cc0000/ffffff');
    insert into products ("productName", "productImage") values ('Lamb Rack - Ontario', 'http://dummyimage.com/240x100.png/dddddd/000000');
        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FakeProducts1623567534925 = FakeProducts1623567534925;
//# sourceMappingURL=1623567534925-FakeProducts.js.map