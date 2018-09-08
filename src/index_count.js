// import
import React from 'react'
import ReactDOM from 'react-dom'

// create component class
class App extends React.Component {
    /*constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
       // this.handleClickCount = this.handleClickCount.bind(this)
        this.handleLinkClick = this.handleLinkClick.bind(this)
        // set begin state
        this.state = {
            count: 0,
            isShown: false,
        }
    }*/
    state = {
        count:0,
        //isShown: false,
    }
    render(){
    // Don't revise the props but reassign within variable because read only
    //console.log(this.props)
    console.log(this.state)
    const upperCaseAppName = this.props.appName.toUpperCase()
    return(
        <div>
            {/* Order is important and we must replace appName={upperCaseAppName} after {...this.props} */}
             <Header  {...this.props} appName={upperCaseAppName}  /> 
            {/*<Header appName={this.props.appName} showHeaderBG={this.props.showHeaderBG}/>*/}
            <div>I am body in {this.props.appName}</div>
            {/*<button onClick={this.handleClick}>Show Pizza</button>*?}
            { /*ใน jsx เป็นแค่ตัวครอบที่บอก babel ว่าข้างใน { } คือ js expression ครับ
            ซึ่ง && ใน js เป็น expression ที่แปลว่า AND ครับ คือ ถ้าด้านซ้ายเป็น true ให้ทำด้านขวา
            กลับกัน ถ้าด้านซ้ายเป็น false ก็ไม่ต้องทำด้านขวาครับ
            this.state.isShown && <img src='xxx' /> เลยแปลว่า ถ้า isShown เป็น true ให้แสดง <img />
            
            เมื่อเรา bind เราจะได้ function ใหม่ ทุกครั้ง
            react เมื่อ setState จะมาสั่ง re render ทุกครั้ง
            */
            /*    this.state.isShown && <img src='https://1112.minorcdn.com/1112/public/images/products/pizza/website/Pan_Hawaiian.png' alt='Smiley face' style={{height:100 ,width:100}}></img>}
            <a href='#' onClick={this.handleLinkClick}>Click me</a>*/
            <button onClick={this.handleClickCount}>
                {this.state.count} counts
    </button>}
        </div>
        )
    }

    handleClickCount=()=>{
        this.setState({
            count : this.state.count +1,
        })
    }

    handleLinkClick(event){
        // I don't wanna click link <a href="#">
        event.preventDefault()
        console.warn(this.props)
    }

    // react send event
    handleClick(event){
        //console.log(event.target)
        //console.warn(this.props)
        // api react is setState
        this.setState((prevState,props)=>{
            //return new state
            return {
                isShown : !prevState.isShown,
            }
        })

    }
}

App.defaultProps = {
    appName : 'Kaprao',
}

Header.defaultProps = {
    showHeaderBG:true ,
}

// create component function 
function Header(props){
    console.warn(props)
    const headingStyle = {
        color:'blue',
        fontSize:60,
       // backgroundColor:'orange'
    }
    if(props.showHeaderBG){
        headingStyle.backgroundColor = 'orange'
    }
    return(
        <div>
            <h1 style={headingStyle}>I am {props.appName}</h1>
            
        </div>
    )
}

// create component funtion
function Hello(){
    return (
        <div>Hello Functional Component</div>
    )
}

// element
// JSX
//const element = <div>Hello {Math.random()}</div>
const element = (
<div>
    <h1 className='a' tabIndex='0'>Hello {Math.random()}</h1>
    <div className='a' tabIndex='0'>Good Morning</div>
    <ul>
        <li>1st</li>
        <li>2nd</li>
    </ul>
</div>
)
/*const element = React.createElement("div","","Hello  NOKY")
console.warn(element)*/


// dom
ReactDOM.render(
    // Input component is prop
    <App appName='Pizza' showHeaderBG={true}/>,
    //<App />,
    document.querySelector('#app')// select DOM node
)
// dom
/*ReactDOM.render(
    <Hello />,
    document.querySelector('#app')
)*/