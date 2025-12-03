
const App = () => {
  const pagescrolling =(elem)=>{
    if(elem>0){
      console.log("sidha scrolling");
    }else{
      console.log("ulta scrolling");
      
    }
  }
  return (
    <div onWheel={function(elem){
      pagescrolling(elem.deltaY)
      
    }}>
     <div className="page1"></div>
     <div className="page2"></div>
     <div className="page3"></div>
    </div>
  )
}

export default App
