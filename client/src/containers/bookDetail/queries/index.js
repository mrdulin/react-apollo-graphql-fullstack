import gql from 'graphql-tag';

/**
 * 列表查询返回的数据必须包含特定查询所需的所有数据。如果特定的书籍查询获取列表查询不返回的字段Apollo Client无法从缓存中返回数据。
 * 下面就是一个对特定book的查询，messages字段就是books列表查询中没有的字段，因此该特定查询Apollo client无法从缓存中返回数据
 */
export const bookDetailQuery = gql`
  query bookDetailQuery($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      author
      messages {
        id
        text
      }
    }
  }
`;

export const bookQuery = gql`
  query bookQuery($bookId: ID!) {
    book(id: $bookId) {
      title
      author
    }
  }
`;