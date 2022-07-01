export const schema = gql`
   type User {
      id: Int!
      email: String!
      hashedPassword: String!
      salt: String!
      resetToken: String
      resetTokenExpiresAt: DateTime
      createdAt: DateTime!
      updatedAt: DateTime!
      events: [Event]!
   }

   type Query {
      users: [User!]! @requireAuth
      user(id: Int!): User @requireAuth
   }

   input CreateUserInput {
      email: String!
      hashedPassword: String!
      salt: String!
      resetToken: String
      resetTokenExpiresAt: DateTime
   }

   input UpdateUserInput {
      email: String
      hashedPassword: String
      salt: String
      resetToken: String
      resetTokenExpiresAt: DateTime
   }

   type Mutation {
      createUser(input: CreateUserInput!): User! @requireAuth
      updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
      deleteUser(id: Int!): User! @requireAuth
   }

   type Event {
      id: Int!
      name: String!
      description: String
      eventDate: DateTime!
      eventType: EventType!
      createdBy: User!
      createdAt: DateTime!
      updatedAt: DateTime!
      userId: Int!
      invitees: [Invitee]!
   }

   enum EventType {
      BIRTHDAY
      ANNIVERSARY
      GET_WELL
      MEMORIAL
   }

   type Invitee {
      id: Int!
      firstname: String!
      email: String!
      event: Event!
      eventId: Int!
      hasUploaded: Boolean!
      createdAt: DateTime!
      updatedAt: DateTime!
   }
`
