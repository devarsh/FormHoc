import React,{Component} from 'react'

const HocForm = (config) => (WrappedComponent) => {
  return class WrapperComponent extends Component {
    constructor(props) {
      super(props)
      this.onChange = this.onChange.bind(this)
      this.submitFn = this.submitFn.bind(this)
      this.state = this.SetInitialState(config.fields)
    }
    SetInitialState(fields) {
      let myfields = fields
      let myObj = {}
      myfields.forEach((field)=> {
        myObj[field] = {
          name:field,
          onChange : this.onChange,
          value : ''
          
        }
      })
      return {fields:myObj}
    }
    onChange(evt) {
      
      let value = evt.target.value
      let name = evt.target.name
      let temp = this.state.fields
      let newFields = {...temp,[name]:{...temp[name],value:value}}
      this.setState({fields:newFields})
    }
    submitFn(evt) {
      evt.preventDefault()
      //evt.stopPropogation()
      let temp = this.state.fields
      //let fields = Object.keys(temp).map((name)=> {[name]:temp[value]})
      console.log(temp)
    }
    render() {
      return <WrappedComponent submit={this.submitFn} {...this.state.fields} />
    }
  }
}

const ChildComponent = (props) => {
  const {lastname,firstname,age,submit} = props
  return (<form>
  FirstName : <input type="text" {...firstname} />
  LastName  : <input type="text" {...lastname} />
  Age : <input type="text" {...age} />
  <button onClick={submit}>SubmitForm</button>  
  </form>)
}

export const DemoComponent = HocForm({
  fields:['firstname','lastname','age']
  validate : 
})(ChildComponent)



/*

HocForm({
  fields:['firstname','lastname','age']  
})(childComponent)

*/
