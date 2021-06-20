import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { add_new_note } from '../Redux/Action/NotesAction'

const Createnote = ({ add_new_note }) => {
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      note,
      id: new Date().getTime(),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    }
    // store.dispatch({
    //   type: 'ADD_NOTE',
    //   payload: data,
    // })
    // console.log(data)
    data.note && add_new_note(data)
    setNote('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <textarea
            cols='3'
            className='form-control'
            placeholder='Write your note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className='btn' type='submit'>
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add_new_note: (data) =>
//       dispatch({
//         type: 'ADD_NOTE',
//         payload: data,
//       }),
//   }
// }

// export default connect(null, mapDispatchToProps)(Createnote)
export default connect(null, { add_new_note })(Createnote)
