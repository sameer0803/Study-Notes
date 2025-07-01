Index :- 
(
react whan Use kro jahan complex front end use krna hai 
Learn React after Java Script mastery.--> thread execution ,memory me kaise jaate hain,Dom manipulation,

Phantom message problem :- facebook :- chat me message ka count aata tha wo gayab nahi hota tha 
Notification hat ta nahi tha .
sliye ye problem ko hataya gaya .

State :- variable kop generally dikhane ko bolte hain 
Javascript or UI (DOM) dono ko sync hona chahiye.

Javascript important topic to know :- 

Javascript internal work
Single thread pr execution hota hai
global context
execution context 
method :- bind ,this 
DOM me tree kaise banta 


React ko kaise seekhna hai .?
Indepth --> babel, fibre,virtual DOM, diffing algorithm.


Core of React (State or UI ,manipulation,JSX(Java script ke andar HTML)
Componenent of Reusability
Reusing of Components(Props)
How to propogate change(hooks)---> hooks ke through UI me reflect krte hain.

additional :-

Router (React Dont have router -)
State management (React dont have State management)
redux,Redux toolkit,zustand,ciontext API,
class based component ( No need to learn)

Apprite,Firebase,Superbase: BAAS :- BAckened as service

FreeApi.

After React :- 
We can learn Next JS(BAckened and Fronte end ) ,Gatsby,Remix

React me :- SEO nahi hai ,browser randering hota hai )
)

Tools required :- 
(
1.VS Code ,sublime text :- Code editor
Node JS -->
2.JS sirf browser ke andar run krta hai 
 Environment deta hai JS ko run krne ke liye.
ek tarike ka installer hai jo ki compile karta hai .
3. react ka documentation .
)

Project Set Up :-
( gitHub pr ek repo bana lo 

1.Git me repo bnaao use vs code se link krlo 
2.ab documentation par jaao react.dev par 
Learn react --> Installation

Choose without a framework--> Vite or parcel 
they are bundler 
combine krke ek file de deta hai .

Main Library ---> React --->react dom 
						--> react-native
						
React ke project banane ka tariqa hai npx
node ke sath npm aata hain---> npm agr syatem me hai to npm 
npm syatem me nahi hai to npx

1.
create-react-app--> utility hai --> matlb software hai --> par hata diya un log ne 
bulky utility hai ..ab use nahi kiya jata qki itna sara qinsall  krenge  
browser ko abhi bhi Js hee samjh aata hai . 
script jo hai :- chalane ke liye 

always check package.json --> project name and version
 
projects chalane ke liye scripts chalaao
cd project ke andar aao 

start scripts ko chalana hai 
npm run start----> ye start script ka naam hai .
npm run build ---> ye build folder create kr dega 
Sare static aseets aa jaynge 
build folder hee dalte hain production me .

jo folder kaam ke nahi delete krte chalo 
jaise report-veb vitals --> ye track krta hai kaisi performance aa rhai hai app se.
logo.svg
Apptest
App.css

index.js 
Web vital wala code hata do .  




***************************************************************

2. faster tarika aa gaya hai --Vite ( Ab ye use kiya karenge)
vIte ke through react ka project bnaaynge 
Vite --> ek bundler hai 

npm create vite@latest
Project Name:- 01_vite_react
Framework:- React 
Javascript.

iske package.json me jaao 

scripts dekho isme dev hai 

to npm run dev 

depenedencies me react or react-dom hai 
dev-dependencies --> production me nahi jaati 

npm install --> jo bhi required projects hain wo install ho jaaynge.
npm run dev

assets hata do 
index.css

main.JSX
app.jsx

)

React ka flow:-
(
Java script ko HTML me laana hee hoga 
yaani ke tag <script ke andar daalna hee hoga>


public me --> index.html hai 
div --> id="root"

src :-
index.js --->
getElementById--> root

React apna khud ka DOM banata hai --> tree structure -->jise virtual DOM bolte hain .
<App />

JSX  

index.js ----> uske andar strict wala hta denge tab bhi chalega .

function ke andar html lo 
or use return krwa do 

Faeda ye hai ke programming capabilities aa gyi hai html ke andar 
pehle nahi thi 


Kahin bhi javascript load nahi ki to load kaise ho rahi ?
Answer?
Ye create-raect app wale se .
react-scripts:- chupke se jakr load kr deti hai 
use source code or inspect me dekh sakte hain .
 
 Answer from vite wale se :- 
 
 vite wale me to react-scripts bhi nahi hai ab kaise load kr diya ??
 index.html bahar hee rkha hua hai .
 
 iske index.html me hee script tag dala hua hai .

viet ke andar problem hai ke ---> jsx se hee krna hai .

viet thoda strict hai naming convention ko lekar balki create-react wala thoda liberal tha .js file chal jaati thi 
par vite .jsx par hee kaam krta hai .
)

Custom react app
(

//tough things will do after completing JS 

)

05-Creating project:------------Come HERE------
(Vite react search kro google pr.
npm create 
Isme project create karo .
Tailwind utilities hain isme.

Commands
npm create vite@latest --
<projectName>
react
Javascript
cd project Name
npm i

Always try to run once so that it will work


Now we will install Tailwind
Go to website---tailwindcss.com

Select vite wala Option

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

index.css --->top most line pr

@tailwind base;
@tailwind components;
@tailwind utilities;
npm run dev

)

06-Why You need hooks UseState(

It is a hook --> Fo reflecting update on UI

)


07-Tailwind and Props In JS (

jsx --> className q likhte hain ??
qki html ke liye class or javascript ke liye class confuse ho jata hai 
for ke liye bhi htmlfor 
  <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind test</h1>
  Test Above code
  
  Now take card frm tailwind
  
img tags ko band kro hmesha	
Actual me sare tags band karo.
Think props as parameter in java 
from object we opass the data and from function we get the data and we use 
name can be anything in the parameter as we observe in java.


 String ,array or object anything could bbe passed from it.
 by default use props bolta hai.
 
 original sytax
 function Card(props) --> isi parameter me se sab nikaal lo 
  Object se data kaise nikaale ?
 object.<key>
 
 ya fir directly destructuring kar do 
  function Card({key})
 Hamara Syntax
  function Card({key})
  
    function Card({key1,key2})
 multiple bhi pass kar skte hain
 
 agr hame bydefault value deni hai 
 
   function Card({key}1,key2="Hello dear")
   Agr peeche se value pass nahi ki to hellodear print hoga nahi to peeche wali pass hogi
   
   
   Feature	Example	Output
Copying an array	[...arr]	New array
Merging arrays	[...arr1, ...arr2]	Merged array
Removing duplicates	[...new Set(arr)]	Unique values
Converting string to array	[...'hello']	['h', 'e', 'l', 'l', 'o']
Copying an object	{...obj}	New object
Merging objects	{...obj1, ...obj2}	Combined object
Function arguments	func(...arr)	Spread elements
)

08-interview Question on React JS(
agr addValue me 10 baar setCounter add kr diya jaaye to kya add hoga?

const[counter,setCounter]=useState(15);

const addValue=()=>{
	setCounter=counter+1;
	setCounter=counter+1;
	setCounter=counter+1;
	
}


const removeValue()=>{
	setCounter=counter-1;
}

Fiber algorithmm ke hisaab se same kaam ho raha hai 
ek batch banega or ek kaam kr dega setCounter=counter+1; qki ek hee kaam repeat kr rhe hain 

lekin agar hem karana hee hai to ham ise :- Situation hee hai agr krane ki to 
callback me kar lenge 
setCounter =(()=>{})
	{}---> agr ye lagayua to return likhna padega
	sliye hata denge ise
	
	setCounter =(()=>)


setcounter((prevCounter) =>prevCounter+1)
kuch or bhi naam de sakte hain 

setcounter((x) =>x+1);
state propogate hoti hain 

aage ke bracket me ek hee paramter aata hai sliye wo bhi hata dete hain.

setcounter(x=>x+1)//using call back kar sakte hain qki ek callback khtm hoga then dusra start hoga



const addValue=()=>{
		
		setCounter=(prevCounter=>prevCounter+1);
	setCounter=(prevCounter=>prevCounter+1);
		setCounter=(prevCounter=>prevCounter+1);
			setCounter=(prevCounter=>prevCounter+1);
				setCounter=(prevCounter=>prevCounter+1);
	
}



)

09-background-changer Project(
Create project from above step 5 :- 

here we are chaning the backgrounf from background color properties
 <button
            className="p-4 text-white rounded-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
              console.log("Color changed to Red"); /
			}}/ Debug
			  
			Yahan par onClick ek function hai to iske andar ham function de sakte hain bas 
			sliye hamne yhan call back function use kiya hai .
			() => {
              setColor("red");
			  akela setcolor("red") nahi diya qki setColor() ek function KO diya 
			  sliye ya to ham refrence paas kar skte hain ya fir callback function .
			  
			}
			  

)
|

10-10.useEffect, useRef and useCallback(
Create project from above step 5 :- 


h1 tag le liya 

jo bhi chize hain use UI me dikhana hai to useState to lgega hee.
is case me ham UI pr update change dikha rhe hain 

UseState:-
html me jaise input feild me type krke reflect hota tha 
yahan usko krne ke liye bhi use state lgega 
e.target.value kle sath 

const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );


or callbck hook tab lagta hai jab hamara function kisi or chiz pr depend hota hai 
usk dependency ke change hone pr 
function bhi change ho jaaye tab ham lagatae hain usecall back function 

const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (CharAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

useeffect 

sliye chahiye hotya hai ke wo chala dega bina button ki help se 
uski dependency ke change hote hee chal jaayega 



useEffect(() => {
  passwordGenerator();
}
, [length, numberAllowed, CharAllowed, passwordGenerator]);

//User ref Hook 
useref:-
ab copy ke liye ham useref use karenge 






example":-

coDE--------------------------(
 const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
   
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (CharAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharAllowed, passwordGenerator]);)

AB MERE NOTES JO MAINE AB TAK SAMJHA:-( 

usecallback,useref function ko ko hamesha ek variable me save karo  
usecallback ka variable use krlo fir button me .
agre button me use nahi karna apne aap chalana hai to useEffect hook ke andar use krlo 
Useref ko ham input value ke refrence se nikal lenge 

usestate--> UI kop change krne ke liye 
usecallback--->function hai jo ki kisi or pr depend krega agr to use kro (many depenedency hain agar to)
useeffect ---> agr usecallback ko button ke andar nahi chalana to useeffect ke andar chala do 
useref --> kisi chiz ka refrence value utha leta hai uski refrence value ko ham use kr skte hain . )


)

Router (

Intro(
It is a third party library
react-router-dom ke sath milta hai --->Link,navlink)

Link --> (
a tag ke bjaaye use hota hai 
a tag pure page ko reload krta haiLink use dobara reload nahi krta 
slitye link use krta hai 
Link a tag ka sara kaam kr deta hai 
href ke bjaaye use krte hain to:- )

Navlink( :- Additional chize provide krta hai .
ise ham generally tab dete hain jaise HOME ,About,ContactUs banana hai 
jise ham redirect krenge --> Layout ya route me )

Extra:-( this is a thing to tell the react ke ham is page pr hain ise active krdo 
yo ham tailwind ke sath khel lenge :-

pehle :_
className={() =>
 `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
}

classname :- ko callback me likhenge ke callback se 
qki call back functions provide kr deta hai
To ek tarike se ham apne tailwind ko bhi functionality provide kr rhe hain.

taki ham bata sake ke ham abhi home par hain 
or use highlight kar saken 
jis bhi tag par ho use highlight kar denge .

ye ham kr rhe hain :- 

className={(isActive) =>
  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`

}
is Active se ham apna variable inject kr denge 
url se match kr leta hai 

{isActive ?"text-orange":"text-gray"}

Code:-(
 <li>
<NavLink
    className={({isaActive}) =>
        `block py-2 pr-4 pl-3 duration-200
    ${isaActive ? 'text-orange-700 border-b-2 border-orange-700' : 'text-gray-800'}
    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    }
>
    Home
</NavLink>)
			)					
				
				
Working :-(				
App.jsx ki zarurat hee nahi padegi . render ke liye ---> pehle ham aise krte the na <Header><Home><Footer>
to ye nahi krenge 
App ko return hee nahi krenge Yahan

ham krenge :-
main.jsx me jaao --->
 react router ka use karenge

isme RouterProvider --> ye ek prop leta hai --> ye router leta hai ...ab router kaise banate hain?
main .jsx me hee 
 const router=	creatBrowserRouter([{}])
iske andar hota hai array or hota hai diffrent objects

par usse pehle hame kuch kaam krna pdega :-jisko route krna hai wo banan padega  

Layout banane ka tariqa(
ham chahte hain ke header footer same rahe or <<beech ka portion >> change hota rahe 
 
 rfce---> 
 isme <header/> 
  Oulet bula lo  --> <Outlet> ---> raect router dom se milta hai --> uske andar jo bhi chize aayngi wo change krta rhega 
  isme header footer sam rhega --> Outlet change hota rhega.
 <Footer/>
 layout ko as a base use kr lega
 
 hame index file ko batana padta hai --> ke ham layout use kr rhe  hain ..
  to aaise hamara layout/route ban gaya hai .)

1. Pehla tariqa:- (

 new file bana lo--> Layout naam se ya Route kisi bhi naam se bana lo 
:-isme ham lete hain array sare ke sare list dal dete hain jsiem hame list chahiye 


const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      }    ,
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
 

 
2. Second tarika :-(
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<GitHub />} />
    </Route>
  )
)
  )
  
  user ke baad 
      <Route path="user/:userId" element={<User />} />

User Bana lo then uske andar 
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
  return (
    <div className=" flex py-16 text-white align-middle justify-center border-l-2 bg-gray-900"> 
      <h1>User:{userid}</h1>	  
  userid --> same as that we passed into Route 
  
  Github ke liye 
  function Github() {
    const [data, setData] = React.useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/sameer0803')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data)
    })
    }, [])



  return (
    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xlo'>
      GitHub followers:{data.followers}
      <img src={data.avatar_url} alt="avatar" className="" />
    </div>
  )
  
  Ek or property mili hai jiska naam hai loader 
  
jaise hee hamara cursor jaayega wo use load kr dega automatically 

Koi bhi data fetch karna hai to direct api call yahi se maar do 
link par click ekrene se pehle data fetcjing pehle hee shuru ho jaayegi 
fetaching shuru ho jaayegi or catch krke rkh lega 
optimisation 
loader 
Yahan bhi likh sakte hain 
ya fir ek alag file bana lo , ham github file ke andar likhenge loader ka method  

      <Route path="github"
loader={}
	  element={<GitHub />} />
	  
	  
	loader ---> ke andar ka method hamne   
  
  
  
   Link define kr do Home or Footer me 
 
 Home ke andar ab about nahi aa rha 
 
 Header ke andar jaao ab --->Home,about likh do 
 
 Navlink ke andar likh do --> to=""
 )
 )
 
 
 API Context (
 Its all about managing state 
 
 Whenever we want  to escapr from prop drilling 
 
 agr parent se child ke child ke child me dat daalna hai agr to sare child me data daalna padega tabhi uske supper child tak data pohchega 
 nahi to 
 
 Step1 .
 ek folder banaya context  
 uske Andar --> UserContext.JS
 
 ek variable bana liya create
 Context hame ek variable dega provider
 
 Jo bhi UserContext  ke andar aa jata hai wo global variable ban jata hai 
   ek or file banaayi jsx --> 
   
  
 Summary :-
 Usercontext ke andar hamne abhi react.createContext(); dala hai 
  ek or file banaayi jsx --> 
  
  ye code me ham user,setUser ---> pass kar rhe hain 
  
  
  -------------------------------------------------------------
  import react from 'react';
const UserContext = react.createContext();
export default UserContext; 
  
  ---------------------------------------------------------------
  import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
  ---------------------------------------------------------------

UserContextProvider--> ko ham App me wrap kr denge to uske andar automatically 
value={{ user, setUser }}
qki UserContextProvider ---->ke andar UserContect.provider return ho rha hai -->
to hamne ise global bana diya 

Ab App ke andar ham sari classes daal denge .---> usse ye chiz sab ke liye available ho jaayegi 

Ab particular  class me kaise daalni hai ?
Process:- useContext hooks se--> UserContext se dono value available ho jaayngi . 
  const{setUser} = useContext(UserContext)
  
  
  Login wali class se --> setUser object nikaal liya --> uske andar value set kar di 
  or wo value get karli ---> Profile class se 
  
    const {user} = useContext(UserContext);
	


-------------------------------------------------------------------------
 
FLow :- Flow 1 smjhane ke liye
Setup karo :- createcontext se banta hai --UserContext.Provider ---> props me value send kr do --> App me use wrap krdo 
to sabme available ho jaayega 
uske baad jis bhi class me use krna hai 
usme   const {user} = useContext(UserContext); --> useContext se nikaal lo wo variable or apne hisab se play kro uspr
 
 
 Flow 2 more detail samjhane ke liye :- 
 
 pehle create context karo--->Usercontext naam se--> then ek or .jsx file bana kr --->
 usme hamne UserContextProvider --> iske andar hamne ek 
 usestate ---. isse ham ek variable or ek method mil gaya . 
 UserContext.provider value={yahan pr variable or method paas kr diya object ke form me}--->
ye direct pass kr diya hmane App.jsx me --> jisse ye variable global ban agaya 
 use App.js me paas kr do--->
 then use context karo.--> jahan bhi use krne ho
 
 
 Part 2 :- (Used in Corporate )
 Project 12 :-theme switcher --> isme bhi global object bnaynge dark mode or light mode --> jo check krega ke konsa mode lagana hai sab chizo me 
 toggle hote hee wo global object ko update kr dega or accordngly sare chize update ho jaayinge.
 
 direct ek file me 
 createContext --->
 useContext import krlo 
 
 ek hee js file me  ----> Context bana lo --> use ek variable me daal do

pr is baar context ke andar pehle se hee value daal rkhi hai .
jo User wale me alag .jsx file bana kr daal rahe the . UserContextProvider variable me 

to yahan ham direct hee App me daal denge . or wohi se value bhi pass kr denge  ...

yahan ek or chiz hai --> ab login or profile me bar baar useContext hook ko call krna pd rha tha 
to yahan isi file me ek variable me daal diya 

Ek hee file me sab kaam kr liya :- 

export const ThemeContext = createContext( 
    {
        theme: 'light',
        darkTheme: () => {},
        lightTheme: () => {}
    })

    export const ThemeContextProvider = ThemeContext.Provider;

    export default function useTheme(){
       return useContext(ThemeContext);
    };

ab ye ThemeContextProvider pass kr diya App.jsx me to theme darkTheme,lightTheme sab available ho jaaynge 
globally 

App.jsx me -->Wrap kar do --> 



Ab ye kaam kaise kar rha hai ?



ab props me pass kr do jahan chahe get kr lenge 
 
 ))
 
 Context with Local Storage (
 
 
 
 
 )
 
 Redux with Toolkit(I will make notes on it)
 create Store :- 
 
 
 
 ))))))
 
 
 
 4project:- Mega Project (
 
Step 1:- (//Setup
 
 project discusssion :- 
 ye dependency hamne install kr li hai .....
 redux-toolkit
 react-redux --. isse global banane ke liye
 react-router-dom --> routing ke liye 
 appwrite --> ye backened APi dega
 tinymce --> ye editor dega 
 HTML-REACT-PARSER --> ye parsing ke liye use hoga 
 REACT-HOOK-form --> isse form bnaanynge --> aage pata chlega q abhi mujhe pura nahi pata hai 
 
uske baad hamne appwrite ke andar ek project banaya 
uske andar database ke andar attributes banaye --> article banaya --> usko permission di  
.env file bnaayi uske andar ye sare variables bnaaye 

------------------------------------
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="67f8ab47003418412a28"
VITE_APPWRITE_DATABASE_ID="67f8ac3a0035652a3cb4"
VITE_APPWRITE_COLLECTION_ID="67f8ac8400158ac5395f"
VITE_APPWRITE_BUCKET_ID="67f8af3a002beaf4d350"
 
------------------------------------
 .env--> password save krenge --->
 variable-="password"
 REACT_APP_APPWRITE_URL-->create-reactApp (Now deprecated) --> ye Use hota tha  process.env.Variable--> createReactApp.
 process.env.sampleFile
 

 Vite-->bundling 
 import.meta.env
------------------------------------ 
 
  ab ek config.js file bnayi uske andar ye sare methods call kr liye or use String me convert kar diya hai.
 taki hame ek variable mil jaaye or baad me ise ham ya to context Api ya fir redux se global bana kr use kr lenge.
 
 example:- 
     appWriteURL:String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),)
	
Step 2:- (//Authentication
Creating Auth Service---> 4 methods
CRUD:- create,read,update,delete
create Account 
Read ---> login ,current User
delete --logout 
update :- user detail change karna hai 

)
		
Step 3:- (//Custom Queries
//Writing Posts Methods --> creatingDocuments .updatingDocuments

	)

Step 4:- (//Redux toolkit :- Store ko ye pata hone chahiye ke aap logged in ho logged out ho)
Step 5:- ()
Step 6:- ()
Step 7:- ()
Step 8:- ()


 
 )