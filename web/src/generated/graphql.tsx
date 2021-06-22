import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PaginatedProducts = {
  __typename?: 'PaginatedProducts';
  products: Array<Products>;
  hasMore: Scalars['Boolean'];
};

export type Products = {
  __typename?: 'Products';
  productId: Scalars['Float'];
  productName: Scalars['String'];
  productImage: Scalars['String'];
  createdAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllproducts: Array<Products>;
  getProducts?: Maybe<Array<Products>>;
  products: PaginatedProducts;
};


export type QueryGetProductsArgs = {
  name: Scalars['String'];
};


export type QueryProductsArgs = {
  cursor?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type ProductSnippetFragment = (
  { __typename?: 'Products' }
  & Pick<Products, 'productName' | 'productId' | 'productImage' | 'createdAt'>
);

export type GetProductsQueryVariables = Exact<{
  productName: Scalars['String'];
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { getProducts?: Maybe<Array<(
    { __typename?: 'Products' }
    & ProductSnippetFragment
  )>> }
);

export type ProductsQueryVariables = Exact<{
  name: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'PaginatedProducts' }
    & Pick<PaginatedProducts, 'hasMore'>
    & { products: Array<(
      { __typename?: 'Products' }
      & ProductSnippetFragment
    )> }
  ) }
);

export const ProductSnippetFragmentDoc = gql`
    fragment ProductSnippet on Products {
  productName
  productId
  productImage
  createdAt
}
    `;
export const GetProductsDocument = gql`
    query GetProducts($productName: String!) {
  getProducts(name: $productName) {
    ...ProductSnippet
  }
}
    ${ProductSnippetFragmentDoc}`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      productName: // value for 'productName'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const ProductsDocument = gql`
    query Products($name: String!, $cursor: String, $limit: Int!) {
  products(name: $name, cursor: $cursor, limit: $limit) {
    hasMore
    products {
      ...ProductSnippet
    }
  }
}
    ${ProductSnippetFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;