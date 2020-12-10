import * as React from "react" // den här importen kanske ska vara useDispatch

function Show({hash, children}){
  const [, setRoute]= React.useState(window.location.hash);
  React.useEffect(function() { 
      const removeThisLater = () => setRoute({});
      
      window.addEventListener("hashchange", removeThisLater);
          
      return ()=>window.removeEventListener("hashchange", ()=>setRoute(window.location.hash));
      }, 
  []); 
  return hash===window.location.hash? children: false;
}

export default Show;