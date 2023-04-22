import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
class CreateProject extends Component {
    state={
        title:'',
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefalt();
        this.props.createProject(this.state);
        //console.log(this.state);
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className='white'>
            <h5 className="grey-text-darken-3">Create New Project</h5>
            <div className='input-field'>
                <label htmlFor='lastname'>Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
                <label htmlFor='lastname'>Project Content</label>
                <textarea type="text" className="materialize-textare" id="title" onChange={this.handleChange}/>
                {/* <input type="text" id="title" onChange={this.handleChange}/> */}
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0" >Create</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createProject: (project)=>dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToProps)(CreateProject)
