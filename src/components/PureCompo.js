/**
 * @author Emmanuel Nativel
 * Premier composant pur en React
 */

 import React from 'react'; 
 import './../css/PureCompo.css';

 export function PureCompo(){
     return(
         <div>
             <h1 className='pureH1' >Ce composant pure sera caché si on entre une valeur</h1>
         </div>
     );
 }

 export function PureCompoProps({label}){
    return(
        <div>
            <h1 className='pureH1' > Label récupéré dans un autre composant : {label}</h1>
        </div>
    );
}


 //export default PureCompo;

