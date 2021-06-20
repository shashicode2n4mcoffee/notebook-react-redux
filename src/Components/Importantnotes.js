import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const Importantnotes = ({ notes }) => {
  return (
    <div className='importantNotes'>
      {notes
        .filter((note) => note.isImportant === true)
        .map((note) => (
          <Note key={note.id} note={note} />
        ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
})

export default connect(mapStateToProps)(Importantnotes)
