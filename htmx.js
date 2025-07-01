All Events :-

-----------------------------------------------------

Mouse Events
click: Triggered when a mouse button is clicked on an element.
dblclick: Triggered when an element is double-clicked.
mousedown: Triggered when a mouse button is pressed down on an element.
mouseup: Triggered when a mouse button is released over an element.
mouseover: Triggered when the mouse pointer enters an element.
mouseout: Triggered when the mouse pointer leaves an element.
mousemove: Triggered when the mouse pointer is moving while over an element.
contextmenu: Triggered when the right mouse button is clicked on an element.
mou


Keyboard Events
keydown: Triggered when a key is pressed down.
keypress: Triggered when a key is pressed and released (not fired for all keys).
keyup: Triggered when a key is released.



Form Events
submit: Triggered when a form is submitted.
change: Triggered when the value of an input, textarea, or select element changes.
focus: Triggered when an element gains focus.
blur: Triggered when an element loses focus.
input: Triggered when the value of an element is changed by user.


Window Events
load: Triggered when the page has finished loading (including all resources).
unload: Triggered when the user navigates away from the page.
resize: Triggered when the browser window is resized.
scroll: Triggered when the user scrolls the page.


Touch Events
touchstart: Triggered when a touch point is placed on the touch surface.
touchmove: Triggered when a touch point is moved along the touch surface.
touchend: Triggered when a touch point is removed from the touch surface.
touchcancel: Triggered when a touch interaction is interrupted.


Drag and Drop Events
dragstart: Triggered when an element starts to be dragged.
drag: Triggered while an element is being dragged.
dragenter: Triggered when the dragged element enters a drop zone.
dragleave: Triggered when the dragged element leaves a drop zone.
dragover: Triggered when the dragged element is over a drop zone.
drop: Triggered when the dragged element is dropped in a drop zone.
dragend: Triggered when the drag operation is completed.



Media Events
play: Triggered when the media starts playing.
pause: Triggered when the media is paused.
ended: Triggered when the media has finished playing.
volumechange: Triggered when the volume of the media changes.
seeking: Triggered when the user starts moving/skipping to a new position in the media.
seeked: Triggered when the user has finished moving/skipping to a new position in the media.


Other Events
error: Triggered when an error occurs during the loading of an external resource.
select: Triggered when text is selected.
hashchange: Triggered when the fragment identifier (hash) of the URL changes.

--------------------------------------------------------


Sabse pehle hame 
CDN ---> script ke form me add kr do .html file me 

button ke andar 
hx-post(
hx-post ="link of server/<erver ke andar ka call krna hai >"
hx-post="link of server-withport/message"

Example :- 

<button 
    hx-post="http://localhost:1330/message" 
    hx-target="#response"
    hx-swap="innerHTML"
  >
    Click to Test HTMX
  </button>

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Node Hypermedia 🎉</h1>");
})
})}
}
button ke andar 
hx-get(
hx-get ="link of server/<Server ke andar ka call krna hai >"
hx-get="link of server-withport/"
Agr target nahi diya to usi jagah aa jaayega.
button ke andar hee jaise. 

Elements --> check kr skte hain ke ye change ho rha hai 
netwrok mew bhi check kr skte hain ke change ho rha hai --> 

hx-get
hx-post
hx-put
hx-delete
HTTP And Forms --> Get wala
------------------------------------------------------------------------------------------------------------------

Triggers -->ye lagta hai div ke sath --> to trigger chahiye hota hai -->

hx-trigger="mouseenter"
ya fir lgega --> input wale me  hx-trigger="change"

Trigger Modifier:-
trigger ko bhi modifier kar sakte hain  --> trigger ko button se control kra ja sakta hai .

hx-trigger="click delay :5s"

    <div hx-post="http://localhost:1330/message" hx-trigger="click from:#requestTrigger" >make delayed request</div>
  <button type="button" id="requestTrigger">Trigger The Post Request</button>
  
 Trigger Filters:- Trigger me condition laga sakte hain.
 
hx-trigger="click[1+3=5]" --> will not work 
 hx-trigger="click[111 ==='111']" --> not work
 hx-trigger="click[111 ='111']"  --> will work
 hx-trigger="click[111 =='111']" --> will work
 
 Using Special Events :- 
 hx-trigger="load"
  hx-trigger="revealed" --> Fire when it revealed
   hx-trigger="intersect:threhold:0.5" --> Fire when it revealed 50%
    hx-trigger="intersect:threhold:1.0" --> Fire when it revealed 100%
	
	Polling Content :- 
	      hx-target="#response"
        hx-swap="beforeend"
    >
	

	
------------------------------------------------------------------------------------------------------------------
	Adding Progress Indicators:-
	We can make progress Indicators :
	
	We can put setTimeOut in response to make it delay and then it will be act as loading function by replacing it .
	
	
------------------------------------------------------------------------------------------------------------------
Form :-

button --> call post request 

1 type:- 

        <input type="text" name="email" placeholder="Enter your name" required />
        <br>
        
        <input type="password"  name="pass" placeholder="Enter your Password" required />
        <br>
        <button hx-post="http://localhost:1330/echo" type="submit" hx-target="#response">Submit</button>
2nd Type :- 
 <button
      hx-post="http://localhost:1330/echo"
      hx-target="#response"
      hx-include="#emailId,#passwId"
    >
      Submit
    </button>
    <div id="response"></div>

    <input type="text" name="email" id="emailId"><br>
    <input type="password" name="pass" id="passwId">
	
	server :- 
	
app.post("/echo",async (req,res)=>{
    const email =req.body.email;
    const pass =req.body.pass;
    console.log(email);
    console.log(pass);
    const message = 
    res.send(`<div> <b>Email :${email} </b>  <b>Password :${pass} </b>  </div>`);
})
	
	Note :- name will be same as  that in server .

------------------------------------------------------------------------------------------------------------------

Adding Alerts 

hx-confirm =""


photo upload :-



app.post ("/upload",upload.single("file"),async (req,res)=>
{
	const filePath=req.file.path;
	console.log(filePath);
	res.send(`<b> Upload succesull</b>:${filePath}`);
})
------------------------------------------------------------------------------------------------------------------