"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Products_1 = require("../entities/Products");
let PaginatedProducts = class PaginatedProducts {
};
__decorate([
    type_graphql_1.Field(() => [Products_1.Products]),
    __metadata("design:type", Array)
], PaginatedProducts.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], PaginatedProducts.prototype, "hasMore", void 0);
PaginatedProducts = __decorate([
    type_graphql_1.ObjectType()
], PaginatedProducts);
let ProductResolver = class ProductResolver {
    getAllproducts() {
        return Products_1.Products.find();
    }
    getProducts(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("products")
                .from(Products_1.Products, "products")
                .where('"productName" ILIKE :name', {
                name: `%${name}%`,
            })
                .getMany();
            return result;
        });
    }
    products(limit, name, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(20, limit);
            const realLimitPlusOne = realLimit + 1;
            const qb = typeorm_1.getConnection()
                .getRepository(Products_1.Products)
                .createQueryBuilder("p")
                .orderBy('"createdAt"', "DESC")
                .take(realLimitPlusOne);
            if (name) {
                qb.where('"productName" ILIKE :name', {
                    name: `%${name}%`,
                });
            }
            if (cursor) {
                qb.where('"createdAt" < :cursor', {
                    cursor: new Date(+cursor),
                });
            }
            const products = yield qb.getMany();
            return {
                products: products.slice(0, realLimit),
                hasMore: products.length === realLimitPlusOne,
            };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Products_1.Products]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getAllproducts", null);
__decorate([
    type_graphql_1.Query(() => [Products_1.Products], { nullable: true }),
    __param(0, type_graphql_1.Arg("name", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    type_graphql_1.Query(() => PaginatedProducts),
    __param(0, type_graphql_1.Arg("limit", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("name", () => String)),
    __param(2, type_graphql_1.Arg("cursor", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
ProductResolver = __decorate([
    type_graphql_1.Resolver(Products_1.Products)
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=ProductResolver.js.map