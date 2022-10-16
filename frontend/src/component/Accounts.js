import React, { useEffect, useState } from "react";
import Toggle from "./Toogle"

const Accounts = () => {
  const [managerId, setManagerId] = useState("");

  const [sortBasis, setSortBasis]= useState("");
  const [order, setOrder] = useState("");

  const [managerIdS, setManagerIdS] = useState([]);
  const [customersData, setCustomersData] = useState([])
  const [tick, setTick] = useState(0);
  const [on, setOn]= useState(true)

  const [name, setName] = useState("")

  const fetchManagerid = async () => {
    await fetch("http://localhost:3000/all_managerId")
      .then((res) => {
        return res.json();
      })
      .then(async (data) => {
        setManagerIdS(data.AllmanagerId);
      });
  };


  const fetchCustomers = async ()=>{

    const res = await fetch("http://localhost:3000/",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
      
             managerId,
             sortBasis,
             order
            
          })
         
      })

      const result =await res.json();
      
      setCustomersData(result.customer)
  }




  useEffect(() => {
    fetchManagerid();
    fetchCustomers();

  }, [managerId,order,sortBasis]);
  return (
    <div>
      <select
        name="managerId"
        className="mangid-dropdown"
        value={managerId}
        onChange={(e) => {
          setManagerId(e.target.value);
        }}
      >
        <option value="">Manager ID</option>
        {managerIdS.map((m, i) => {
          return <option key={i}>{m.managerId}</option>;
        })}
      </select>

      <br/>
      <br/>
      <div className="toggles" >
        
        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("customerId")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Customer Id</h3>
        </div>
        <div style={{display: "flex",alignItems:'center'}}>
          <span  onClick={()=>{
            setName("firstName")
          }}>

        <Toggle setOn={setOn}/>
          </span>
       
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>First Name</h3>
        </div>
      
        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("lastName")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Last Name</h3>
        </div>


        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("picture")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Picture</h3>
        </div>

        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("birthDate")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Birth Date</h3>
        </div>

        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("gender")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Gender</h3>
        </div>

        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("businessUnit")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Buisness Unit</h3>
        </div>

        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("churnRisk")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Churn Risk</h3>
        </div>

        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("openSales")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Open Sales</h3>
        </div>
        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("revenueYTD")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Revenue YTD</h3>
        </div>

        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("costYTD")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Cost YTD</h3>
        </div>
        <div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("bonusEligible")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Bonus Eligible</h3>
        </div><div style={{display: "flex",alignItems:'center'}}>
          <span onClick={()=>{
            setName("meetingsYTD")
          }}>
          <Toggle setOn={setOn}/>
          </span>
        
        
        <h3 style={{margin:0,marginLeft:'0.5rem'}}>Meetings YTD</h3>
        </div>

      </div>
      <br />
      <br />

      <table>
        <tr>
          {( name!=="customerId" || on==true)&&<th>Customer ID 
            <div style={{marginTop:'10px'}}>
              {(order!=="desc" || tick!==1) && <span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("customerId");
                setOrder("desc")
                setTick(1)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              { (order!=="asc" || tick!==2) &&
                <span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("customerId");
                setOrder("asc")
                setTick(2)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
              </div> </th>
}
         {  ( name!=="firstName" || on==true) && <th>First name

          <div style={{marginTop:'10px'}}>
              { (order!=="desc" || tick!==3) && <span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("firstName");
                setOrder("desc")
                setTick(3)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              { (order!=="asc" || tick!==4) &&
                <span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("firstName");
                setOrder("asc")
                setTick(4)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
             
              </div>
          </th>
}
          
          { ( name!=="lastName" || on==true) &&
            <th>Last Name

          <div style={{marginTop:'10px'}}>
              {(order!=="desc" || tick!==5) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("lastName");
                setOrder("desc")
                setTick(5)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==6) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("lastName");
                setOrder("asc")
                setTick(6)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
             
              </div>

          </th>
}
{   ( name!=="picture" || on==true) &&
          <th>Picture

          </th>
}
         { ( name!=="birthDate" || on==true) &&
          <th>Birth Date

          <div style={{marginTop:'10px'}}>
              { (order!=="desc" || tick!==7) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("birthDate");
                setOrder("desc")
                setTick(7)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==8) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("birthDate");
                setOrder("asc")
                setTick(8)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
              </div>
          </th>
}
          {  ( name!=="gender" || on==true) &&
            <th>Gender</th>
          }

          { ( name!=="businessUnit" || on==true) &&
          <th>Buisness Unit

          <div style={{marginTop:'10px'}}>
              {(order!=="desc" || tick!==9) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("businessUnit");
                setOrder("desc")
                setTick(9)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==10) &&
                <span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("businessUnit");
                setOrder("asc")
                setTick(10)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
              </div>

          </th>
}

{ ( name!=="churnRisk" || on==true) &&
          <th>Churn Risk

          <div style={{marginTop:'10px'}}>
              { (order!=="desc" || tick!==11) && <span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("churnRisk");
                setOrder("desc")
                setTick(11)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==12) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("churnRisk");
                setOrder("asc")
                setTick(12)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
              </div>
          </th>
}

{ ( name!=="openSales" || on==true) &&
          <th>Open Sales
          <div style={{marginTop:'10px'}}>
              {
                (order!=="asc" || tick!==13) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("openSales");
                setOrder("desc")
                setTick(13)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==14) &&
                <span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("openSales");
                setOrder("asc")
                setTick(14)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
              </div>
          </th>
}

{ ( name!=="revenueYTD" || on==true) &&
          <th>Revenue YTD

          <div style={{marginTop:'10px'}}>
              {(order!=="asc" || tick!==15) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("revenueYTD");
                setOrder("desc")
                setTick(15)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              { (order!=="asc" || tick!==16) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("revenueYTD");
                setOrder("asc")
                setTick(16)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
              </div>

          </th>
}

{ ( name!=="costYTD" || on==true) &&
          <th>Cost YTD

          <div style={{marginTop:'10px'}}>
              {(order!=="desc" || tick!==17) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("firstName");
                setOrder("desc")
                setTick(17)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==18) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("firstName");
                setOrder("asc")
                setTick(18)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
             
              </div>
          </th>
}

{( name!=="bonusEligible" || on==true) &&
          <th>Bonus Eligible

          <div style={{marginTop:'10px'}}>
              {(order!=="desc" || tick!==19) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("bonusEligible");
                setOrder("desc")
                setTick(19)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==20) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("bonusEligible");
                setOrder("asc")
                setTick(20)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
             
              </div>
          </th>
}

{( name!=="meetingsYTD" || on==true) &&
          <th>Meetings YTD

          <div style={{marginTop:'10px'}}>
              {(order!=="desc" || tick!==21) &&<span style={{margin:'0 10px', cursor:'pointer'}} onClick={()=>{
                setSortBasis("meetingsYTD");
                setOrder("desc")
                setTick(21)
              }}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </span>}
              {(order!=="asc" || tick!==22) &&<span style={{cursor:'pointer'}} onClick={()=>{
                setSortBasis("meetingsYTD");
                setOrder("asc")
                setTick(22)
              }}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
}
             
              </div>
          </th>
}

        </tr>

        {customersData &&
        customersData.map((customer,i)=>{
        
          return (
            <tr>
            {( name!=="customerId" || on==true)&&
            <td>{customer.customerId}</td>
        }
            { ( name!=="firstName" || on==true) &&
              <td>{customer.firstName}</td>
            }
            
            {( name!=="lastName" || on==true) &&
              <td>{customer.lastName}</td>
            }
            
            { ( name!=="picture" || on==true) &&
              <td>{customer.picture}</td>
            }
            
            { ( name!=="birthDate" || on==true) &&
              <td>{customer.birthDate}</td>
          }
            
            {  ( name!=="gender" || on==true) &&
              <td>{customer.gender}</td>
            } 

            {   ( name!=="businessUnit" || on==true) &&
            <td>{customer.businessUnit}</td>
        }

        {  ( name!=="churnRisk" || on==true) &&
            <td>{customer.churnRisk}</td>
        }

        {  ( name!=="openSales" || on==true) &&
            <td>{customer.openSales}</td>
        }

        {   ( name!=="revenueYTD" || on==true) &&
            <td>{customer.revenueYTD}</td>
        }

{ ( name!=="costYTD" || on==true) &&
            <td>{customer.costYTD}</td>
      }

      { ( name!=="bonusEligible" || on==true) &&
            <td>{customer.bonusEligible}</td>
      }

      { ( name!=="meetingsYTD" || on==true) &&
            <td>{customer.meetingsYTD}</td>
      }
            </tr>
          )
        })
}
      </table>
    </div>
  );
};

export default Accounts;
