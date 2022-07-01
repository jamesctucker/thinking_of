export const standard = defineScenario({
   invitee: {
      one: {
         data: {
            firstname: 'String',
            email: 'String7197255',
            event: {
               create: {
                  name: 'String',
                  eventDate: '2022-07-01T05:10:33Z',
                  createdBy: {
                     create: {
                        email: 'String7532589',
                        hashedPassword: 'String',
                        salt: 'String',
                     },
                  },
               },
            },
         },
      },

      two: {
         data: {
            firstname: 'String',
            email: 'String4641033',
            event: {
               create: {
                  name: 'String',
                  eventDate: '2022-07-01T05:10:33Z',
                  createdBy: {
                     create: {
                        email: 'String1618427',
                        hashedPassword: 'String',
                        salt: 'String',
                     },
                  },
               },
            },
         },
      },
   },
})
