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
exports.MockProducts1624335234825 = void 0;
class MockProducts1624335234825 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
        insert into products ("productName", "productImage", "createdAt") values ('Ham - Virginia', 'http://dummyimage.com/695x539.png/ff4444/ffffff', '2020-12-15T19:15:31Z');
        insert into products ("productName", "productImage", "createdAt") values ('Soupcontfoam16oz 116con', 'http://dummyimage.com/628x536.png/ff4444/ffffff', '2020-08-06T18:56:39Z');
        insert into products ("productName", "productImage", "createdAt") values ('Bread - Crumbs, Bulk', 'http://dummyimage.com/648x650.png/dddddd/000000', '2021-06-17T21:22:43Z');
        insert into products ("productName", "productImage", "createdAt") values ('Coffee - Flavoured', 'http://dummyimage.com/684x657.png/5fa2dd/ffffff', '2021-03-09T14:56:15Z');
        insert into products ("productName", "productImage", "createdAt") values ('Tray - 16in Rnd Blk', 'http://dummyimage.com/636x725.png/cc0000/ffffff', '2020-12-25T14:22:47Z');
        insert into products ("productName", "productImage", "createdAt") values ('Worcestershire Sauce', 'http://dummyimage.com/635x581.png/dddddd/000000', '2020-09-13T03:23:55Z');
        insert into products ("productName", "productImage", "createdAt") values ('Hickory Smoke, Liquid', 'http://dummyimage.com/632x726.png/dddddd/000000', '2020-12-01T21:16:41Z');
        insert into products ("productName", "productImage", "createdAt") values ('Veal - Brisket, Provimi, Bone - In', 'http://dummyimage.com/695x562.png/cc0000/ffffff', '2020-09-28T10:55:34Z');
        insert into products ("productName", "productImage", "createdAt") values ('Water - Perrier', 'http://dummyimage.com/647x571.png/cc0000/ffffff', '2020-12-20T15:37:31Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cherries - Frozen', 'http://dummyimage.com/690x614.png/cc0000/ffffff', '2020-12-29T02:10:50Z');
        insert into products ("productName", "productImage", "createdAt") values ('Bread - Pita', 'http://dummyimage.com/653x565.png/cc0000/ffffff', '2020-12-17T18:59:22Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cheese - Grie Des Champ', 'http://dummyimage.com/659x571.png/dddddd/000000', '2020-12-07T06:27:09Z');
        insert into products ("productName", "productImage", "createdAt") values ('Crush - Grape, 355 Ml', 'http://dummyimage.com/607x772.png/ff4444/ffffff', '2020-09-04T12:30:38Z');
        insert into products ("productName", "productImage", "createdAt") values ('Butcher Twine 4r', 'http://dummyimage.com/675x715.png/cc0000/ffffff', '2021-05-01T22:34:50Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Beringer Founders Estate', 'http://dummyimage.com/695x720.png/ff4444/ffffff', '2020-09-12T00:18:05Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cream Of Tartar', 'http://dummyimage.com/687x578.png/cc0000/ffffff', '2020-07-09T02:31:01Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Chianti Classica Docg', 'http://dummyimage.com/624x555.png/ff4444/ffffff', '2020-10-17T01:02:58Z');
        insert into products ("productName", "productImage", "createdAt") values ('Shrimp - Black Tiger 6 - 8', 'http://dummyimage.com/620x692.png/cc0000/ffffff', '2021-02-15T11:30:23Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Conde De Valdemar', 'http://dummyimage.com/676x583.png/dddddd/000000', '2020-10-30T18:04:25Z');
        insert into products ("productName", "productImage", "createdAt") values ('Syrup - Monin, Swiss Choclate', 'http://dummyimage.com/638x695.png/5fa2dd/ffffff', '2021-01-22T06:51:28Z');
        insert into products ("productName", "productImage", "createdAt") values ('Lettuce - Sea / Sea Asparagus', 'http://dummyimage.com/689x663.png/5fa2dd/ffffff', '2021-04-20T18:20:00Z');
        insert into products ("productName", "productImage", "createdAt") values ('Artichokes - Jerusalem', 'http://dummyimage.com/608x599.png/5fa2dd/ffffff', '2020-09-07T00:02:09Z');
        insert into products ("productName", "productImage", "createdAt") values ('Flour - Semolina', 'http://dummyimage.com/658x569.png/ff4444/ffffff', '2020-10-10T15:22:35Z');
        insert into products ("productName", "productImage", "createdAt") values ('Nut - Almond, Blanched, Whole', 'http://dummyimage.com/610x732.png/cc0000/ffffff', '2021-04-05T09:13:30Z');
        insert into products ("productName", "productImage", "createdAt") values ('Tequila - Sauza Silver', 'http://dummyimage.com/615x574.png/5fa2dd/ffffff', '2021-01-29T04:49:17Z');
        insert into products ("productName", "productImage", "createdAt") values ('Pur Source', 'http://dummyimage.com/625x557.png/ff4444/ffffff', '2020-06-27T17:07:27Z');
        insert into products ("productName", "productImage", "createdAt") values ('Ranchero - Primerba, Paste', 'http://dummyimage.com/646x612.png/cc0000/ffffff', '2021-05-14T18:33:00Z');
        insert into products ("productName", "productImage", "createdAt") values ('Vinegar - Tarragon', 'http://dummyimage.com/637x790.png/dddddd/000000', '2020-11-17T18:26:56Z');
        insert into products ("productName", "productImage", "createdAt") values ('Beef Striploin Aaa', 'http://dummyimage.com/612x597.png/dddddd/000000', '2020-08-17T12:17:42Z');
        insert into products ("productName", "productImage", "createdAt") values ('Chilli Paste, Ginger Garlic', 'http://dummyimage.com/610x504.png/cc0000/ffffff', '2020-10-21T22:15:47Z');
        insert into products ("productName", "productImage", "createdAt") values ('Island Oasis - Wildberry', 'http://dummyimage.com/604x659.png/dddddd/000000', '2020-07-19T15:35:27Z');
        insert into products ("productName", "productImage", "createdAt") values ('Appetizer - Southwestern', 'http://dummyimage.com/655x523.png/dddddd/000000', '2020-12-12T17:39:54Z');
        insert into products ("productName", "productImage", "createdAt") values ('Sea Bass - Whole', 'http://dummyimage.com/619x674.png/dddddd/000000', '2021-05-25T06:02:52Z');
        insert into products ("productName", "productImage", "createdAt") values ('Sprite, Diet - 355ml', 'http://dummyimage.com/600x663.png/5fa2dd/ffffff', '2021-06-06T09:42:58Z');
        insert into products ("productName", "productImage", "createdAt") values ('Venison - Denver Leg Boneless', 'http://dummyimage.com/629x600.png/5fa2dd/ffffff', '2021-03-26T08:46:30Z');
        insert into products ("productName", "productImage", "createdAt") values ('Pan Grease', 'http://dummyimage.com/606x629.png/ff4444/ffffff', '2021-04-13T10:46:07Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cloves - Ground', 'http://dummyimage.com/697x711.png/5fa2dd/ffffff', '2020-11-25T02:00:07Z');
        insert into products ("productName", "productImage", "createdAt") values ('Plate Pie Foil', 'http://dummyimage.com/690x652.png/ff4444/ffffff', '2020-08-02T05:35:32Z');
        insert into products ("productName", "productImage", "createdAt") values ('Island Oasis - Ice Cream Mix', 'http://dummyimage.com/698x727.png/ff4444/ffffff', '2020-09-26T19:11:34Z');
        insert into products ("productName", "productImage", "createdAt") values ('Green Scrubbie Pad H.duty', 'http://dummyimage.com/607x736.png/cc0000/ffffff', '2020-09-18T23:57:16Z');
        insert into products ("productName", "productImage", "createdAt") values ('Pop - Club Soda Can', 'http://dummyimage.com/677x520.png/ff4444/ffffff', '2020-09-26T09:40:03Z');
        insert into products ("productName", "productImage", "createdAt") values ('Garbage Bags - Clear', 'http://dummyimage.com/603x505.png/5fa2dd/ffffff', '2020-10-04T10:37:49Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Penfolds Koonuga Hill', 'http://dummyimage.com/657x639.png/cc0000/ffffff', '2020-12-30T09:18:02Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cheese - Comtomme', 'http://dummyimage.com/633x599.png/ff4444/ffffff', '2021-05-16T08:45:57Z');
        insert into products ("productName", "productImage", "createdAt") values ('Doilies - 12, Paper', 'http://dummyimage.com/607x748.png/5fa2dd/ffffff', '2021-04-15T02:49:19Z');
        insert into products ("productName", "productImage", "createdAt") values ('Icecream - Dstk Super Cone', 'http://dummyimage.com/645x561.png/dddddd/000000', '2021-04-10T03:02:34Z');
        insert into products ("productName", "productImage", "createdAt") values ('Amaretto', 'http://dummyimage.com/684x694.png/5fa2dd/ffffff', '2021-02-05T12:24:01Z');
        insert into products ("productName", "productImage", "createdAt") values ('Scallops - 20/30', 'http://dummyimage.com/693x640.png/cc0000/ffffff', '2021-03-25T14:27:39Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Red, Pinot Noir, Chateau', 'http://dummyimage.com/691x598.png/dddddd/000000', '2020-09-16T07:46:10Z');
        insert into products ("productName", "productImage", "createdAt") values ('Glaze - Clear', 'http://dummyimage.com/667x736.png/cc0000/ffffff', '2021-05-22T11:56:42Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cabbage - Red', 'http://dummyimage.com/619x587.png/5fa2dd/ffffff', '2021-03-16T11:52:43Z');
        insert into products ("productName", "productImage", "createdAt") values ('Veal - Leg', 'http://dummyimage.com/621x511.png/ff4444/ffffff', '2021-01-11T20:09:29Z');
        insert into products ("productName", "productImage", "createdAt") values ('Blouse / Shirt / Sweater', 'http://dummyimage.com/627x731.png/ff4444/ffffff', '2020-07-12T11:03:56Z');
        insert into products ("productName", "productImage", "createdAt") values ('Garlic - Peeled', 'http://dummyimage.com/664x724.png/cc0000/ffffff', '2021-05-30T14:58:05Z');
        insert into products ("productName", "productImage", "createdAt") values ('Island Oasis - Lemonade', 'http://dummyimage.com/689x619.png/dddddd/000000', '2021-03-30T23:18:47Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cut Wakame - Hanawakaba', 'http://dummyimage.com/605x702.png/5fa2dd/ffffff', '2020-08-15T13:08:41Z');
        insert into products ("productName", "productImage", "createdAt") values ('Rice - Basmati', 'http://dummyimage.com/604x564.png/ff4444/ffffff', '2020-10-10T21:06:31Z');
        insert into products ("productName", "productImage", "createdAt") values ('Muffin Carrot - Individual', 'http://dummyimage.com/635x767.png/dddddd/000000', '2020-12-15T03:18:01Z');
        insert into products ("productName", "productImage", "createdAt") values ('Broom And Broom Rack White', 'http://dummyimage.com/615x675.png/dddddd/000000', '2021-03-03T08:01:03Z');
        insert into products ("productName", "productImage", "createdAt") values ('Sour Cream', 'http://dummyimage.com/691x539.png/5fa2dd/ffffff', '2020-07-07T06:19:37Z');
        insert into products ("productName", "productImage", "createdAt") values ('Tomatoes - Orange', 'http://dummyimage.com/620x542.png/cc0000/ffffff', '2021-05-06T18:01:57Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Jaboulet Cotes Du Rhone', 'http://dummyimage.com/624x562.png/dddddd/000000', '2021-05-05T04:25:43Z');
        insert into products ("productName", "productImage", "createdAt") values ('Chips - Assorted', 'http://dummyimage.com/604x618.png/dddddd/000000', '2021-04-30T21:37:42Z');
        insert into products ("productName", "productImage", "createdAt") values ('Creme De Banane - Marie', 'http://dummyimage.com/687x673.png/dddddd/000000', '2021-05-02T03:54:25Z');
        insert into products ("productName", "productImage", "createdAt") values ('Beef Flat Iron Steak', 'http://dummyimage.com/636x746.png/5fa2dd/ffffff', '2020-10-27T12:47:03Z');
        insert into products ("productName", "productImage", "createdAt") values ('Wine - Red, Antinori Santa', 'http://dummyimage.com/652x746.png/ff4444/ffffff', '2020-09-17T03:47:14Z');
        insert into products ("productName", "productImage", "createdAt") values ('Longos - Chicken Caeser Salad', 'http://dummyimage.com/636x611.png/5fa2dd/ffffff', '2020-11-15T22:00:54Z');
        insert into products ("productName", "productImage", "createdAt") values ('Table Cloth 120 Round White', 'http://dummyimage.com/661x554.png/5fa2dd/ffffff', '2020-07-05T05:55:49Z');
        insert into products ("productName", "productImage", "createdAt") values ('Calypso - Strawberry Lemonade', 'http://dummyimage.com/696x800.png/cc0000/ffffff', '2020-07-04T22:23:33Z');
        insert into products ("productName", "productImage", "createdAt") values ('Lentils - Green Le Puy', 'http://dummyimage.com/673x654.png/cc0000/ffffff', '2021-03-12T21:02:36Z');
        insert into products ("productName", "productImage", "createdAt") values ('Assorted Desserts', 'http://dummyimage.com/665x767.png/dddddd/000000', '2020-09-07T23:31:06Z');
        insert into products ("productName", "productImage", "createdAt") values ('Island Oasis - Wildberry', 'http://dummyimage.com/660x726.png/cc0000/ffffff', '2021-04-27T05:55:27Z');
        insert into products ("productName", "productImage", "createdAt") values ('Grenadillo', 'http://dummyimage.com/656x597.png/cc0000/ffffff', '2020-11-21T20:35:19Z');
        insert into products ("productName", "productImage", "createdAt") values ('Potatoes - Pei 10 Oz', 'http://dummyimage.com/693x513.png/dddddd/000000', '2020-10-27T08:02:42Z');
        insert into products ("productName", "productImage", "createdAt") values ('Beef Cheek Fresh', 'http://dummyimage.com/680x688.png/dddddd/000000', '2020-11-24T00:39:40Z');
        insert into products ("productName", "productImage", "createdAt") values ('Pepper - Green Thai', 'http://dummyimage.com/660x502.png/5fa2dd/ffffff', '2021-03-12T14:07:39Z');
        insert into products ("productName", "productImage", "createdAt") values ('Lettuce - Boston Bib', 'http://dummyimage.com/696x562.png/5fa2dd/ffffff', '2020-07-16T05:30:39Z');
        insert into products ("productName", "productImage", "createdAt") values ('Vector Energy Bar', 'http://dummyimage.com/615x715.png/cc0000/ffffff', '2021-04-05T14:02:33Z');
        insert into products ("productName", "productImage", "createdAt") values ('Spice - Onion Powder Granulated', 'http://dummyimage.com/695x640.png/ff4444/ffffff', '2020-10-19T17:25:43Z');
        insert into products ("productName", "productImage", "createdAt") values ('Shortbread - Cookie Crumbs', 'http://dummyimage.com/664x613.png/ff4444/ffffff', '2021-04-11T21:16:41Z');
        insert into products ("productName", "productImage", "createdAt") values ('Beans - Navy, Dry', 'http://dummyimage.com/681x789.png/ff4444/ffffff', '2020-12-19T22:45:13Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cake Circle, Foil, Scallop', 'http://dummyimage.com/690x628.png/cc0000/ffffff', '2021-02-04T00:17:22Z');
        insert into products ("productName", "productImage", "createdAt") values ('Table Cloth 54x54 White', 'http://dummyimage.com/649x699.png/5fa2dd/ffffff', '2021-04-01T11:18:25Z');
        insert into products ("productName", "productImage", "createdAt") values ('Bread - Pullman, Sliced', 'http://dummyimage.com/691x684.png/cc0000/ffffff', '2021-05-11T12:17:08Z');
        insert into products ("productName", "productImage", "createdAt") values ('Flour - Pastry', 'http://dummyimage.com/699x556.png/dddddd/000000', '2020-07-05T02:54:34Z');
        insert into products ("productName", "productImage", "createdAt") values ('Buffalo - Short Rib Fresh', 'http://dummyimage.com/652x747.png/dddddd/000000', '2020-09-19T06:39:15Z');
        insert into products ("productName", "productImage", "createdAt") values ('Nori Sea Weed - Gold Label', 'http://dummyimage.com/650x590.png/ff4444/ffffff', '2021-03-07T10:40:42Z');
        insert into products ("productName", "productImage", "createdAt") values ('Cheese - Ricotta', 'http://dummyimage.com/696x731.png/cc0000/ffffff', '2021-05-27T23:16:10Z');
        insert into products ("productName", "productImage", "createdAt") values ('Okra', 'http://dummyimage.com/632x551.png/ff4444/ffffff', '2021-02-07T23:19:38Z');
        insert into products ("productName", "productImage", "createdAt") values ('Salt - Seasoned', 'http://dummyimage.com/639x768.png/5fa2dd/ffffff', '2020-11-10T20:38:27Z');
        insert into products ("productName", "productImage", "createdAt") values ('Guinea Fowl', 'http://dummyimage.com/672x798.png/ff4444/ffffff', '2021-02-01T19:26:07Z');
        insert into products ("productName", "productImage", "createdAt") values ('Brownies - Two Bite, Chocolate', 'http://dummyimage.com/657x610.png/dddddd/000000', '2020-12-15T16:54:43Z');
        insert into products ("productName", "productImage", "createdAt") values ('Lotus Root', 'http://dummyimage.com/690x536.png/ff4444/ffffff', '2021-01-07T03:24:41Z');
        insert into products ("productName", "productImage", "createdAt") values ('Island Oasis - Wildberry', 'http://dummyimage.com/638x726.png/5fa2dd/ffffff', '2021-01-15T19:33:41Z');
        insert into products ("productName", "productImage", "createdAt") values ('English Muffin', 'http://dummyimage.com/656x581.png/ff4444/ffffff', '2020-07-30T06:16:25Z');
        insert into products ("productName", "productImage", "createdAt") values ('Soup Campbells', 'http://dummyimage.com/694x609.png/ff4444/ffffff', '2020-11-13T10:20:52Z');
        insert into products ("productName", "productImage", "createdAt") values ('Lettuce - Arugula', 'http://dummyimage.com/646x643.png/ff4444/ffffff', '2020-08-06T17:44:18Z');
        insert into products ("productName", "productImage", "createdAt") values ('Sauce - Hoisin', 'http://dummyimage.com/633x797.png/dddddd/000000', '2020-10-06T14:38:34Z');
        insert into products ("productName", "productImage", "createdAt") values ('Edible Flower - Mixed', 'http://dummyimage.com/687x750.png/5fa2dd/ffffff', '2020-07-20T15:59:14Z');
        insert into products ("productName", "productImage", "createdAt") values ('Calypso - Strawberry Lemonade', 'http://dummyimage.com/613x761.png/5fa2dd/ffffff', '2020-12-07T19:39:14Z');
            `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.MockProducts1624335234825 = MockProducts1624335234825;
//# sourceMappingURL=1624335234825-MockProducts.js.map