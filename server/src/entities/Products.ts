import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Products extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  productId: number;

  @Field()
  @Column({ nullable: true })
  productName: string;

  @Field()
  @Column()
  productImage: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
