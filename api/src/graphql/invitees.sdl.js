export const schema = gql`
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

   type Query {
      invitees: [Invitee!]! @requireAuth
      invitee(id: Int!): Invitee @requireAuth
   }

   input CreateInviteeInput {
      firstname: String!
      email: String!
      eventId: Int!
      hasUploaded: Boolean!
   }

   input UpdateInviteeInput {
      firstname: String
      email: String
      eventId: Int
      hasUploaded: Boolean
   }

   type Mutation {
      createInvitee(input: CreateInviteeInput!): Invitee! @requireAuth
      updateInvitee(id: Int!, input: UpdateInviteeInput!): Invitee! @requireAuth
      deleteInvitee(id: Int!): Invitee! @requireAuth
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
