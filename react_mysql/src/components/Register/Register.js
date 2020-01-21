import React, { Component } from 'react';
import './Register.css';
import axios from 'axios' ;

class Register extends Component {

    constructor(){
    super();
    this.state={
      users:[],
      userid:'' ,
      firstname:'',
      lastname:'',
      villageID: '',
      villageName: '',
      Subdistrict:'',
      District:'',
      Province:'',
      zipcode:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var url = 'http://localhost:3200/data';
        axios.post(url, {
            userid:this.state.userid ,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            villageID: this.state.villageID,
            villageName: this.state.villageName,
            Subdistrict: this.state.Subdistrict,
            District: this.state.District,
            Province: this.state.Province,
            zipcode: this.state.zipcode
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.setState({
            userid:'',
            firstname:'',
            lastname:'',
            villageID: '',
            villageName: '',
            Subdistrict:'',
            District:'',
            Province:'',
            zipcode:''
        });
    }

    render() {
        return (
        <form class="bg-text1" onSubmit={this.handleSubmit} >  
            <h2 id="Header">Register</h2>
            <hr/>

          <label for="fname" id="Tf">Name</label>
          <input type="text1" id="firstname" name="firstname" placeholder="first name" onChange={this.handleChange} value={this.state.firstname}/>
          <input type="text1" id="lastname" name="lastname" placeholder="last name" onChange={this.handleChange} value={this.state.lastname}/>
          <br/>
          <label id="des">firstname</label>
          <label id="des1">lastname</label>    
          <br/>

          <label for="lname" id="Tid" >Address</label>
          <input type="vilID" id="villageID" name="villageID" placeholder="Village ID" onChange={this.handleChange} value={this.state.villageID}/>
          <input type="vilName" id="villageName" name="villageName" placeholder="Village Name" onChange={this.handleChange} value={this.state.villageName} />
          <br/>
          <label id="des">villageID</label>
          <label id="des1">villageName</label>    
          <br/>
         
          <input type="subdistrict" id="Subdistrict" name="Subdistrict" placeholder="Subdistrict" onChange={this.handleChange} value={this.state.Subdistrict}/>
          <input type="district" id="District" name="District" placeholder="District" onChange={this.handleChange} value={this.state.District}/>
          <br/>
          <label id="des">Subdistrict</label>
          <label id="des1">District</label>    
          <br/>
          
          <input type="province" id="Province" name="Province" placeholder="Province" onChange={this.handleChange} value={this.state.Province} />
          <input type="zipcode" id="zipcode" name="zipcode" placeholder="Zipcode" onChange={this.handleChange} value={this.state.zipcode} />
          <br/>
          <label id="des">Province</label>
          <label id="des2">zipcode</label>    
          <br/>

          <input type="submit" value="Submit">
              

          </input>
        </form>
    );
    }
}
export default Register;