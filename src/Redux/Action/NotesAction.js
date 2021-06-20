import { db } from '../../firebase'

export const add_new_note = (data) => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_LOADER',
    })

    await db.collection('notes').doc(data.id.toString()).set(data)
    dispatch({
      type: 'ADD_NOTE',
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const checkImp = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_LOADER',
    })
    const snapshot = db.collection('notes').doc(id.toString())
    const data = (await snapshot.get()).data()
    await snapshot.update({
      isImportant: !data.isImportant,
    })
    dispatch({
      type: 'CHECK_IMP',
      payload: id,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteNote = (id) => async (dispatch) => {
  const snapshot = db.collection('notes').doc(id.toString())

  await snapshot.delete()
  dispatch({
    type: 'DELETE',
    payload: id,
  })
}

export const loadNotes = () => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_LOADER',
    })
    const snapshot = await db.collection('notes').get()
    const allNotes = snapshot.docs.map((doc) => doc.data())

    dispatch({
      type: 'LOAD',
      payload: allNotes,
    })
  } catch (error) {
    console.log(error.message)
  }
}
