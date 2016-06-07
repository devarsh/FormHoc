import React,{Component} from 'react'
import {setField} from 'utils/index.js'

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
        setField(myObj,field,{onChange:this.onChange,value:''})
      })
      return {fields:myObj}
    }
    onChange(evt) {   
      let value = evt.target.value
      let name = evt.target.name
      let temp = this.state.fields
      setField(temp,name,{value})
      this.setState({fields:temp})
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
  const {lastname,firstname,age,address,submit} = props
  return (<form>
  FirstName : <input type="text" {...firstname} />
  LastName  : <input type="text" {...lastname} />
  Age : <input type="text" {...age} />
  <Address {...address} />
  <button onClick={submit}>SubmitForm</button>  
  </form>)
}

export const DemoComponent = HocForm({
  fields:['firstname','lastname','age','address.add1','address.add2','address.pincode']
})(ChildComponent)

const Address = (props) => {
  const { add1,add2,pincode } = props
  return (
    <div>
    Add1 : <input type="text" {...add1} />
    Add2 : <input type="text" {...add2} />
    Pincode : <input type="text" {...pincode} />
    </div>)
}

/*

HocForm({
  fields:['firstname','lastname','age','person.name','person.']  
})(childComponent)

*/
