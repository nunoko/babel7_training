// import
import React from 'react'
import ReactDOM from 'react-dom'

// create component class
class App extends React.Component {
    state = {count:0,}

    /*componentWillMount(){
        console.warn('App will mount')
    }

    componentWillUpdate(){
        console.warn('App will update')
    }

    componentDidMount(){
        // use after render when load data use jqery 
        console.warn('App did mount')
    }*/
    render(){
    console.log('App render')
    console.log(this.state)
    const {count} = this.state
    return(
        <div>
          <Display count={count} shake={this.shake} />
          <ClickButton updateCount={this.updateCount} />  
        </div>
        )
    }

    shake = () => {
        console.warn('shake')    
    }

    updateCount=()=>{
        this.setState((ps,p)=>({
            count : ps.count +1,
        }))
     }
}

class Display extends React.Component{
    state = {isCelebrate:false}
    /*componentWillMount(){
        console.warn('Display App will mount')
    }

    

    componentDidMount(){
        console.warn('Display App did mount')
    }*/

    componentWillReceiveProps(nextProps){
        // Check props
        console.warn('Display will receive',nextProps,this.props)
        if(nextProps.count === 5){
            this.setState((ps,p)=>{
                return{
                    isCelebrate: true,
                }
            })
        }
    
    }
    componentWillUpdate(nextProps,nextState){
        // check state
        // dispatch event ot change state
        // apprear rendering and don't set state 
        
        console.warn('Display App will update',nextProps.count,nextState.isCelebrate)
        console.warn('!isCelebrate = '+ !this.state.isCelebrate)
        console.warn('nextState.isCelebrate = '+nextState.isCelebrate)
        if(!this.state.isCelebrate && nextState.isCelebrate){
            this.props.shake()
        }
    }
    
    
    componentDidUpdate(prevProps, prevState) {
        // render already and new DOM before browse test
        // work third party , jquery , animation , auto save
        console.warn('Display did update')
    }
    
    render(){
        return(
            <div>
                <div>{this.props.count}</div>
                    {/*this.state.isCelebrate && <div>Yay!</div>*/}
                    {this.state.isCelebrate && <Celebrate onstopCelebrate={this.stopCelebrate} />}
            </div>
        )
    }

    stopCelebrate=()=>{
        this.setState({isCelebrate:false})
    }
}


class Celebrate extends React.Component{
    componentDidMount(){
        console.log('Celebrate did mount')
        this.timer = setTimeout(
        ()=> this.props.onstopCelebrate(),
        2000
        )
    }
    componentWillUnmount(){
        console.log('Celebrate will mount')
        clearTimeout(this.timer)
    }
    render(){
        return(
            <div>Yay!</div>
        )
    }
}
class ClickButton extends React.Component{
    
    componentWillReceiveProps(nextProps){
        console.warn('CickButton will receive',nextProps,this.props)
    }
    
    shouldComponentUpdate(nextProps,nextState){
        // No render set false,general True
        // clickButton no change, we set false
        return false
    }
    render(){
        console.warn('ClickButton render')
        return(
            <button onClick={this.props.updateCount} >Click</button>
        )
    }
}


// dom
ReactDOM.render(
    // Input component is prop
    <App />,
    //<App />,
    document.querySelector('#app')// select DOM node
)
