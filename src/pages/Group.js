import React from 'react';
import vmsg from 'vmsg';
import "./Group.css";


const recorder=new vmsg.Recorder({
    wasmURL:'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
})

class Group extends React.Component{
    state={
        isLoading:false,
        isRecording: false,
        recordings:[]
    }

    record= async()=>{
        this.setState({isLoading:true})
    

        if(this.state.isRecording){
            const blob =await recorder.stopRecording()
                this.setState({
                    isLoading:false,
                    isRecording:false,
                    recordings:this.state.recordings.concat(URL.createObjectURL(blob))

        })
    }
        else{
            try{
                await recorder.initAudio()
                await recorder.initWorker()
                recorder.startRecording()
                this.setState({isLoading:false,isRecording:true})
            }
            catch(e){
                console.error(e)
                this.setState({isLoading:false})
            }
        }
}
    render(){
        const {isLoading,isRecording,recordings}=this.state

        return(
            <React.Fragment>
                 <nav>
        <h1 className="logo"><a href="/dashboard">Podium Live</a></h1>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/group">Group</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
                <button class="btn-4"  onClick={this.record}disabled={isLoading}>  
                {isRecording ? "Stop": "Record"}
                </button>
                <ul style={{listStyle:'none',padding:0}}></ul>
                {recordings.map(url=>(
                    <li key={url}>
                        <audio src={url} controls></audio>
                    </li>
                ))}
            </React.Fragment>
        )
    }
}
export default Group
