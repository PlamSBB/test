import React, {Component} from 'react';
import './Contact.css';
import axios from 'axios';
import Modal from 'react-awesome-modal';
//import Rem';

class Contact extends Component {
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

        };
        this.updateItem = this.updateItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    openModal() {
        this.setState({
            visible : true
        });
       
    }

    handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    call = (user) => {
       this.openModal(); 
        this.handleUpdate(user.userid,user.firstname,user.lastname,user.villageID,user.villageName,user.Subdistrict,user.District,user.Province,user.zipcode)
    }

    handleUpdate = (userid = null,firstname = null , lastname = null , villageID = null , villageName = null , Subdistrict = null , District = null , Province = null , zipcode = null) => {
      this.setState({userid,firstname,lastname,villageID,villageName,Subdistrict,District,Province,zipcode})
    }
    /*async componentDidMount() {
        const id = this.props.match.params.id
        const {data} = await Axios.get('/data')
        this.setState({users: data})
    }*/

    delete(){
        var url = 'http://localhost:3200/data';
        axios.delete(url) 
    }

    componentDidMount(user){
       /*this.getUsers(user);
    }

    getUsers = _ => {*/
        var url = 'http://localhost:3200/data';
        axios.get(url)
        .then ((response) => {
            console.log(response.data);
            this.setState({
                users: response.data,
            })
        })
        /*.then(response => response.json())
        .then(response => this.setState({ users: response.data}))
        .catch(err => console.error(err))*/
    }

    updateItem (/*item_Id,firstname,lastname,email,password*/) {
        var url = 'http://localhost:3200/data';
        axios.put(url, {
            userid:this.state.userid,
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

    onDelete() {
        axios.get('http://localhost:4000/data/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    handleSubmit(e){
        e.preventDefault();
         var url = 'http://localhost:3200/data';
        axios.put(url, {
            userid:this.state.userid,
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
        
        <div class="bg-text2">

                <h2 id='HeaderCon' >Users Information</h2>
                <hr/>
                <table>
                
                <tr>
                                    <th id="txts">First Name</th>
                                    <th id="txts">Last Name</th>
                                    <th id="txts">villageID</th>
                                    <th id="txts">villageName</th>
                                    <th id="txts">Subdistrict</th>
                                    <th id="txts">District</th>
                                    <th id="txts">Province</th>
                                    <th id="txts">Zipcode</th> 
                                    <th id="txts">Delete</th>
                </tr>

                {this.state.users.map((user) => {
                    return(
                        <tr>
                            <td id="txt">{user.firstname}</td>
                            <td id="txt">{user.lastname}</td>  
                            <td id="txt">{user.villageID}</td>
                            <td id="txt">{user.villageName}</td>
                            <td id="txt">{user.Subdistrict}</td>  
                            <td id="txt">{user.District}</td>
                            <td id="txt">{user.Province}</td>
                            <td id="txt">{user.zipcode}</td>
                            <td><button class="BEDIT" onClick={() => this.call(user)}>Edit</button></td>
                            <td><button class="BDELETE" onClick={() => this.onDelete(user.zipcode)} >Delete</button></td>
                            
                        <div>
                            <Modal visible={this.state.visible}
                                    
                                    width="1200"
                                    height="600"
                                    effect="fadeInUp"
                                    onClickAway={() => this.closeModal()}
                                    
                            >
                            <form class="bg-text1" onSubmit={this.handleSubmit} >  
                            <h2 id="Header1">Register</h2>
                            <hr/>

                            <label for="fname" id="Tf1">Name</label>
                            <input type="text11" id="firstname" name="firstname" placeholder="first name" onChange={this.handleChange} value={this.state.firstname}/>
                            <input type="text11" id="lastname" name="lastname" placeholder="last name" onChange={this.handleChange} value={this.state.lastname}/>
                            <br/>
                            <label id="des11">firstname</label>
                            <label id="des111">lastname</label>    
                            <br/>

                            <label for="lname" id="Tid1" >Address</label>
                            <input type="vilID1" id="villageID" name="villageID" placeholder="Village ID" onChange={this.handleChange} value={this.state.villageID}/>
                            <input type="vilName1" id="villageName" name="villageName" placeholder="Village Name" onChange={this.handleChange} value={this.state.villageName} />
                            <br/>
                            <label id="des11">villageID</label>
                            <label id="des111">villageName</label>    
                            <br/>
         
                            <input type="subdistrict1" id="Subdistrict" name="Subdistrict" placeholder="Subdistrict" onChange={this.handleChange} value={this.state.Subdistrict}/>
                            <input type="district1" id="District" name="District" placeholder="District" onChange={this.handleChange} value={this.state.District}/>
                            <br/>
                            <label id="des11">Subdistrict</label>
                            <label id="des111">District</label>    
                            <br/>
          
                            <input type="province1" id="Province" name="Province" placeholder="Province" onChange={this.handleChange} value={this.state.Province} />
                            <input type="zipcode1" id="zipcode" name="zipcode" placeholder="Zipcode" onChange={this.handleChange} value={this.state.zipcode} />
                            <br/>
                            <label id="des11">Province</label>
                            <label id="des21">zipcode</label>    
                            <br/>

                            <input type="submit" value="Submit">
              

                            </input>
                            </form>
                            </Modal>
                        </div>
                        </tr>
                    )
                })}
                </table>
        </div>
    )
  }
}

export default Contact;

