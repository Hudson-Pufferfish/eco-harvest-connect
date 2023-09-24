import { createReducer, createAction, PayloadAction, nanoid, current } from '@reduxjs/toolkit'

// Define the type for your state

export type Session = {
  id: string
  name: string
  nickname: string
  picture: string
  updated_at: Date
  email: string
}

type SessionState = {
  session: Session | null
}

export const addSession = createAction('session/addSession', function (session: Session) {
  return {
    payload: {
      ...session,
      id: nanoid()
    }
  }
})

const initialSessionState: SessionState = {
  session: null
}

const sessionReducer = createReducer(initialSessionState, (builder) => {
  builder
    .addCase(addSession, (state, action: PayloadAction<Session>) => {
      state.session = action.payload
      console.log('Session added:', action.payload)
    })
    .addDefaultCase((state, action) => {
      console.log('Unhandled action:', action.type)
      return state
    })
})

export default sessionReducer
