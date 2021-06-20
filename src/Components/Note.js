import React from 'react'
import { connect } from 'react-redux'
import { checkImp, deleteNote } from '../Redux/Action/NotesAction'

const Note = ({ note, checkImp, deleteNote }) => {
  // console.log(note)
  return (
    <div className='card mb-3'>
      <div className='card-header'>{note.date}</div>
      <div className='card-body'>{note.note}</div>
      <button
        className='btn'
        onClick={() => {
          checkImp(note.id)
        }}
      >
        {note.isImportant ? 'Remove Important Note' : 'Add to Important Note'}
      </button>

      <button
        className='btn'
        onClick={() => {
          deleteNote(note.id)
        }}
      >
        Delete a note
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
})

export default connect(mapStateToProps, { checkImp, deleteNote })(Note)
