import React,{useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState('');
	
		const btnClicked=()=>{
			console.log(typeof text)
			 let newText=text.toUpperCase();
				setText(newText);
				console.log(newText)
		}

		const btnlowclicked=()=>{
			  let newlowtext=text.toLowerCase();
					setText(newlowtext);
					
		}

		const btnClearText=()=>{
			  setText('');			
		}

		const handleChange=(event)=>{
     setText(event.target.value)
		}

    return (
					<>
      <div className="container">
							<h2>{props.heading}</h2>
        <div className="mb-3">
  								<textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleChange}></textarea>
										</div>
										<button className="btn btn-primary"  onClick={btnClicked}>convert in uppercase</button>
										<button className="btn btn-primary mx-2" onClick={btnlowclicked}>convert in lowercase</button>
										<button className="btn btn-primary mx-2" onClick={btnClearText}>Clear Text</button>
							</div>
							<div className="container my-3">
								 <h2>Your Text summary</h2>
									<p>Number of characters in your text are :-{text.length}</p>
									<p>Number of words in your text are :-{text.split(" ").length}</p>
									<p>Time to read the text :-{0.008* text.split(" ").length}</p>
							</div>
							</>
    )
}
