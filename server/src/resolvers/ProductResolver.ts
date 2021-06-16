import { Arg, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Products } from "../entities/Products";

@Resolver(Products)
export class ProductResolver {
  @Query(() => [Products])
  getAllproducts() {
    return Products.find()
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
}
