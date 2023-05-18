import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="h-[1000px] w-[700px] border-red-300 border-2 m-auto">
        <h1 className="bg-yellow-400 h-[100px] text-[25px] font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="w-[600px] text-center">
          Ans: An access token and refresh token are commonly used in
          authentication and authorization systems. They serve different
          purposes and work together to provide secure access to protected
          resources. Here's an explanation of each token and their functions: 1.
          Access Token: An access token is a credential that is used to access
          protected resources on behalf of a user. It is typically short-lived
          and has an expiration time. When a user logs in or authenticates with
          a server, they are issued an access token. The access token contains
          information about the user's identity and permissions, and it is sent
          with each request to the server to prove the user's authorization to
          access certain resources. 2. Refresh Token: A refresh token is a
          long-lived credential that is used to obtain a new access token when
          the current one expires. It is typically issued alongside the access
          token during the authentication process. The refresh token is securely
          stored by the client application and sent to the server to request a
          new access token when needed. This helps maintain user sessions and
          prevents the need for frequent logins. The workflow typically involves
          the following steps: 1. User authentication: The user provides their
          credentials (username, password, etc.) to the server. 2. Token
          issuance: The server verifies the credentials and, if valid, generates
          an access token and a refresh token. 3. Access token usage: The client
          application includes the access token in the authorization header or
          another secure mechanism with each request to access protected
          resources on the server. 4. Access token expiration: The access token
          has an expiration time, after which it becomes invalid. 5. Refresh
          token usage: When the access token expires, the client uses the
          refresh token to request a new access token from the server. 6. Token
          refresh: The server verifies the refresh token, and if valid, issues a
          new access token and a new refresh token. 7. Repeat steps 3-6 until
          the user logs out or the refresh token expires. As for storing tokens
          on the client-side, it is crucial to follow secure practices to
          prevent unauthorized access. Access tokens should be stored securely,
          typically in memory or in a short-lived storage mechanism (e.g.,
          browser's session storage) to minimize the risk of token theft.
          Refresh tokens, on the other hand, should be stored in a secure,
          long-lived storage mechanism (e.g., browser's local storage or an
          HTTP-only cookie) to persist across sessions. Storing tokens securely
          helps protect against potential attacks, such as cross-site scripting
          (XSS) and cross-site request forgery (CSRF).
        </p>
      </div>
      <div className="h-[200px] w-[500px] border-2 border-red-300 m-auto mt-[20px]">
        <h1 className="text-[25px] font-bold bg-yellow-400 ">
          Compare SQL and NoSQL databases?
        </h1>
        <p className="w-[400px] text-center">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="h-[550px] w-[700px] border-2 border-red-300 m-auto mt-[20px]">
        <h1 className="text-[25px] font-bold bg-yellow-400 text-center">
          What is express js? What is Nest JS
        </h1>
        <p className="w-[600px] text-center">
          Express.js and Nest.js are both popular frameworks for building web
          applications in JavaScript or TypeScript, but they have different
          approaches and target different use cases. Express.js: Express.js is a
          minimalist web application framework for Node.js. It provides a simple
          and flexible set of features for building web servers and APIs.
          Express.js is known for its lightweight nature and unopinionated
          design, which allows developers to have fine-grained control over
          their application's structure and behavior. It provides a routing
          mechanism, middleware support, and integration with various template
          engines and database libraries. Express.js is often considered a
          foundational framework for Node.js web development and is widely used
          in the Node.js ecosystem.<br></br> <br></br>Nest.js: Nest.js is a
          progressive, TypeScript-first framework for building scalable and
          maintainable server-side applications. It is built on top of
          Express.js and provides an opinionated structure and set of features
          inspired by Angular, which is a popular front-end framework. Nest.js
          embraces modular and component-based architecture, dependency
          injection, and decorators to create highly structured and extensible
          applications. It offers a powerful CLI, built-in support for
          TypeScript, dependency injection container, robust routing system,
          middleware support, and integration with various databases and
          libraries. Nest.js is often used for building enterprise-grade
          applications, microservices, and APIs.
        </p>
      </div>
      <div className="h-[550px] w-[700px] border-2 border-red-300 m-auto mt-[20px]">
        <h1 className="text-[25px] font-bold bg-yellow-400 text-center">
          What is MongoDB aggregate and how does it work
        </h1>
        <p className="w-[600px] text-center">
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline. One of the most common use cases of Aggregation
          is to calculate aggregate values for groups of documents. This is
          similar to the basic aggregation available in SQL with the GROUP BY
          clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes
          further though and can also perform relational-like joins, reshape
          documents, create new and update existing collections, and so on.
          While there are other methods of obtaining aggregate data in MongoDB,
          the aggregation framework is the recommended approach for most work.
          There are what are called single purpose methods like
          estimatedDocumentCount(), count(), and distinct() which are appended
          to a find() query making them quick to use but limited in scope. The
          map-reduce framework on MongoDB is a predecessor of the aggregation
          framework and much more complex to use. MongoDB have deprecated.
          <br></br>
          $match stage – filters those documents we need to work with, those
          that fit our needs
          <br></br>
          $group stage – does the aggregation job
          <br></br>
          $sort stage – sorts the resulting documents the way we require
          (ascending or descending) The input of the pipeline can be a single
          collection, where others can be merged later down the pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blog;
