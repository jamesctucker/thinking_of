export const schema = gql`
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

   type Query {
      events: [Event!]! @requireAuth
      event(id: Int!): Event @requireAuth
   }

   input CreateEventInput {
      name: String!
      description: String
      eventDate: DateTime!
      eventType: EventType!
      userId: Int!
   }

   input UpdateEventInput {
      name: String
      description: String
      eventDate: DateTime
      eventType: EventType
      userId: Int
   }

   type Mutation {
      createEvent(input: CreateEventInput!): Event! @requireAuth
      updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
      deleteEvent(id: Int!): Event! @requireAuth
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
`
