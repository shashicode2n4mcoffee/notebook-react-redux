const initialState = {
  notes: [],
  loading: false,
}

const noteReducer = (previousState = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_LOADER':
      return {
        ...previousState,
        loading: true,
      }
    case 'ADD_NOTE':
      return {
        ...previousState,
        loading: false,
        notes: [...previousState.notes, payload],
      }
    case 'CHECK_IMP':
      const newNotes = previousState.notes.slice()
      const index = newNotes.findIndex((note) => note.id === payload)

      const note = newNotes[index]
      const newNote = {
        ...note,
        isImportant: !note.isImportant,
      }

      newNotes[index] = newNote
      return {
        ...previousState,
        loading: false,
        notes: newNotes,
      }

    //Added Delete note
    case 'DELETE':
      const noteBeforeDelete = previousState.notes.slice()
      const deletedNotes = noteBeforeDelete.filter(
        (note) => note.id !== payload
      )
      console.log(deletedNotes)

      return {
        ...previousState,
        notes: deletedNotes,
      }

    case 'LOAD':
      return {
        ...previousState,
        notes: payload,
        loading: false,
      }

    default:
      return previousState
  }
}

export default noteReducer
