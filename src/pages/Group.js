import React from 'react'
import vmsg from 'vmsg'

const recorder=new vmsg.Recorder({
    wasmURL:'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
})

class App extends React.Component{
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
                <button onClick={this.record}>disabled={isLoading}
                {isRecording ? "Stop": "Record"}
                
                
                </button>
            </React.Fragment>
        )
    }
}


function Group() {
  return (
    <div>
      
    </div>
  )
}

export default Group
