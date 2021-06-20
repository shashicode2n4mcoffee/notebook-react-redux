import React from 'react'
import Allnotes from './Components/Allnotes'
import Createnote from './Components/Createnote'
import Importantnotes from './Components/Importantnotes'
import { loadNotes } from './Redux/Action/NotesAction'
import { useEffect } from 'react'
import { store } from './Redux/Store'
import { connect } from 'react-redux'

const App = ({ loading }) => {
  useEffect(() => {
    store.dispatch(loadNotes())
  }, [])
  return (
    <div className='container m-3 p-3'>
      <h5 className='card-header top'> Notes Taking Application</h5>
      <Createnote c />
      <hr />
      {loading && (
        <div className='text-center'>
          <div className='spinner-border my-3'></div>{' '}
        </div>
      )}
      <Importantnotes />
      <hr />
      <Allnotes />
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.noteReducer.loading,
})

export default connect(mapStateToProps)(App)
