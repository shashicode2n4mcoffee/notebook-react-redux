import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'

const Allnotes = ({ notes }) => {
  // const notes = store.getState().notes
  // console.log(notes)
  return (
    <>
      <h5>All Notes</h5>
      <div className='my-3 allnotes '>
        {notes
          .filter((note) => note.isImportant === false)
          .map((note) => {
            return <Note key={note.id} note={note} />
          })}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
})

export default connect(mapStateToProps)(Allnotes)
