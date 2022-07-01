import { db } from 'src/lib/db'

export const invitees = () => {
   return db.invitee.findMany()
}

export const invitee = ({ id }) => {
   return db.invitee.findUnique({
      where: { id },
   })
}

export const createInvitee = ({ input }) => {
   return db.invitee.create({
      data: input,
   })
}

export const updateInvitee = ({ id, input }) => {
   return db.invitee.update({
      data: input,
      where: { id },
   })
}

export const deleteInvitee = ({ id }) => {
   return db.invitee.delete({
      where: { id },
   })
}

export const Invitee = {
   event: (_obj, { root }) =>
      db.invitee.findUnique({ where: { id: root.id } }).event(),
}
