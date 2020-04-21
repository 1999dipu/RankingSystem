import React, { Component } from 'react';
const searchCriteria=[false,false,false,false]
export class Form extends Component {        
    state={
        address:'',
        zip:'',
        landmark:'',
        lockername:'',
        query:''
        
        

    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchbyaddress(this.state.address);
        this.props.searchbyzip(this.state.zip);
        this.props.searchbylandmark(this.state.landmark);
        this.props.searchbylockername(this.state.lockername);
        
        
    }
    onSiteChanged=(e) => this.setState({ query: e.target.value});
    onChangeadd=(e)=>this.setState({address:e.target.value});
    onChangezip=(e)=>this.setState({zip:e.target.value});
    onChangeland=(e)=>this.setState({landmark:e.target.value});
    onChangelocker=(e)=>this.setState({lockername:e.target.value});
    render() {
        return (
          <div>
              
              <form align="left" onSubmit={this.onSubmit} >
                  <div>
              <div style={{color:'orange'}}>
                  <h3><b>Search for a new Amazon Pickup Location</b></h3>
              </div>
              Amazon Pickup locations offer package pickup at self-service Amazon Lockers and at staffed locations.
              <br/>
              Please enter address, postal code, landmark, or Amazon Locker name.
              <br/>
              </div>
              <div>
                  <table cellSpacing="2" cellPadding="2">
                      <tbody>
                      <tr>
                          <td colspac="2">
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <b> Country/Region:</b>
                          </td>
                          <td>
                            <select name="country" id="country">
                                <option value="India">
                                    India
                                </option>
                            </select>
                          </td>
                      </tr>
                      
                      <tr>
                          <td align="left" vlign="top">
                              <input type="radio" name="searchCriteria" value="address" onChange={this.onSiteChanged}/>&nbsp;
                              <b>Search by Address:</b>
                          </td>
                          <td valign="top">
                              <input type="text" name="address" maxLength="50" value={this.state.address} onChange={this.onChangeadd}/><br/>
                            <font size="1">e.g. 333Boren Ave N,Seattle</font> 
                           
                                                       
                          </td>
                      </tr>
                      <tr>
                          <td align="left" vlign="top">
                              <input type="radio" name="searchCriteria" value="storeZip" onChange={this.onSiteChanged}/>&nbsp;
                              <b>Search by Zip Code:</b>
                          </td>
                          <td valign="top">
                              <input type="text" name="storeZip" size="5" maxLength="5" value={this.state.zip} onChange={this.onChangezip} />
                            <font size="1">&nbsp;e.g. 98109</font><br/>
                            
                                                       
                          </td>
                      </tr>
                      <tr>
                          <td align="left" vlign="top">
                              <input type="radio" name="searchCriteria" value="landmark" onChange={this.onSiteChanged}/>&nbsp;
                              <b>Search by Landmark:</b>
                          </td>
                          <td valign="top">
                              <input type="text" name="landmark" size="30" maxLength="50" value={this.state.landmark} onChange={this.onChangeland} /><br/>
                            <font size="1">&nbsp;e.g. Space Needle</font>
                            
                                                       
                          </td>
                      </tr>
                      <tr>
                          <td align="left" vlign="top">
                              <input type="radio" name="searchCriteria" value="storeName" onChange={this.onSiteChanged}/>&nbsp;
                              <b>Search by Locker or Store Name:</b>
                          </td>
                          <td valign="top">
                              <input type="text" name="storeName" size="30" maxLength="50" value={this.state.lockername} onChange={this.onChangelocker}/><br/>
                            <font size="1">&nbsp;e.g. Juno</font>
                            
                                                       
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <br/>
                              <button type="submit" value="Submit" style={{background: 'orange',borderRadius:'8px'}}>
                                 Search
                               </button>
                               <br/><br/>
                          </td>
                          <td colSpan="2">&nbsp;</td>
                      </tr>
                      
                      
                      </tbody>
                  </table>
              </div>

              </form>
          </div>
        )
    }
}

export default Form
