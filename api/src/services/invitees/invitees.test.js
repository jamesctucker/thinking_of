import {
   invitees,
   invitee,
   createInvitee,
   updateInvitee,
   deleteInvitee,
} from './invitees'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('invitees', () => {
   scenario('returns all invitees', async (scenario) => {
      const result = await invitees()

      expect(result.length).toEqual(Object.keys(scenario.invitee).length)
   })

   scenario('returns a single invitee', async (scenario) => {
      const result = await invitee({ id: scenario.invitee.one.id })

      expect(result).toEqual(scenario.invitee.one)
   })

   scenario('creates a invitee', async (scenario) => {
      const result = await createInvitee({
         input: {
            firstname: 'String',
            email: 'String2187225',
            eventId: scenario.invitee.two.eventId,
         },
      })

      expect(result.firstname).toEqual('String')
      expect(result.email).toEqual('String2187225')
      expect(result.eventId).toEqual(scenario.invitee.two.eventId)
   })

   scenario('updates a invitee', async (scenario) => {
      const original = await invitee({ id: scenario.invitee.one.id })
      const result = await updateInvitee({
         id: original.id,
         input: { firstname: 'String2' },
      })

      expect(result.firstname).toEqual('String2')
   })

   scenario('deletes a invitee', async (scenario) => {
      const original = await deleteInvitee({ id: scenario.invitee.one.id })
      const result = await invitee({ id: original.id })

      expect(result).toEqual(null)
   })
})
