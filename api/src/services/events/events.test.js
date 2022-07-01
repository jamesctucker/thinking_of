import { events, event, createEvent, updateEvent, deleteEvent } from './events'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('events', () => {
   scenario('returns all events', async (scenario) => {
      const result = await events()

      expect(result.length).toEqual(Object.keys(scenario.event).length)
   })

   scenario('returns a single event', async (scenario) => {
      const result = await event({ id: scenario.event.one.id })

      expect(result).toEqual(scenario.event.one)
   })

   scenario('creates a event', async (scenario) => {
      const result = await createEvent({
         input: {
            name: 'String',
            eventDate: '2022-07-01T05:10:26Z',
            userId: scenario.event.two.userId,
         },
      })

      expect(result.name).toEqual('String')
      expect(result.eventDate).toEqual('2022-07-01T05:10:26Z')
      expect(result.userId).toEqual(scenario.event.two.userId)
   })

   scenario('updates a event', async (scenario) => {
      const original = await event({ id: scenario.event.one.id })
      const result = await updateEvent({
         id: original.id,
         input: { name: 'String2' },
      })

      expect(result.name).toEqual('String2')
   })

   scenario('deletes a event', async (scenario) => {
      const original = await deleteEvent({ id: scenario.event.one.id })
      const result = await event({ id: original.id })

      expect(result).toEqual(null)
   })
})
