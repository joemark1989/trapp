import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Products } from "../entities/Products";

@ObjectType()
class PaginatedProducts {
  @Field(() => [Products])
  products: Products[];
  @Field()
  hasMore: boolean;
}

@Resolver(Products)
export class ProductResolver {
  @Query(() => [Products])
  getAllproducts() {
    return Products.find();
  }

  @Query(() => [Products], { nullable: true })
  async getProducts(
    @Arg("name", () => String) name: string
  ): Promise<Products[] | undefined> {
    const result = await getConnection()
      .createQueryBuilder()
      .select("products")
      .from(Products, "products")
      .where('"productName" ILIKE :name', {
        name: `%${name}%`,
      })
      .getMany();
    return result;
  }

  @Query(() => PaginatedProducts)
  async products(
    @Arg("limit", () => Int) limit: number,
    @Arg("name", () => String) name: string,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedProducts> {
    const realLimit = Math.min(20, limit);
    const realLimitPlusOne = realLimit + 1;

    const qb = getConnection()
      .getRepository(Products)
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

    const products = await qb.getMany();

    return {
      products: products.slice(0, realLimit),
      hasMore: products.length === realLimitPlusOne,
    };
  }
}
