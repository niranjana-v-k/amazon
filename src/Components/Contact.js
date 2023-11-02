import './Contact.css'
function Contact() { 
	return ( 
		<div className= "tri1">
			<h2 style={{marginTop:'5%'}}> 
				Contact Us 
			</h2>
		
		<div className="tri">
			
			<form action="#">
			<fieldset style={{borderBlockColor:'white'}}> 
				<div style={{marginTop:'2%',fontSize:'20px',flex:"30px"}}> 
					<div> 
						<label for="firstName"> 
							First Name 
						</label> <br/>
						<input type="text"
							placeholder="Enter First Name"
							required/> 
					</div> <br />
					<div style={{marginTop:'2%'}}> 
						<label for="firstName"> 
							Last Name 
						</label> <br />
						<input type="text"
							placeholder="Enter Last Name"/> <br />
					</div> 
				</div> 
				<div style={{marginTop:'2%',blockSize:'150px'}}> 
					<label for="email">
						Your email 
					</label> <br />
					<input type="email"
						placeholder="xyz@gmail/yahoo.com"
						required /> <br /><br />
				</div> 
				<button type="submit" style={{border:'2px white'}}> 
					Send message 
				</button> 
				</fieldset>  
			</form>
			
		</div> 
		</div>
	) 
}
export default Contact