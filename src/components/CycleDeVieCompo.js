/**
 * @author Emmanuel Nativel
 * 
 * Composant exploitant l'ensemble des étapes du cycle de vie d'un composant.
 */

 import React from 'react';

 class CycleDeVieCompo extends React.Component {
    constructor(props){
        super(props);
        this.states = {}
        console.log("1- Initialisation dans le constructeur");
        
    }

    // Appelé avant que l'affichage (avant le Render)
    componentWillMount(){
        console.log("2- ComponentWillMount : Exécuté avant l'affichage du composant");
    }

    // Affichage du composant
    render(){
        console.log("3- Render : Affichage du composant");
        return(
            <div>
            </div>
        )
    }

    // Appelé une fois que l'affichage est terminé (après le Render)
    componentDidMount(){
        console.log("4- ComponentDidMount : Exécuté après l'affichage du composant");
    }

    // Appelé avant la destruction du composant
    componentWillUnmount(){
        console.log("5- componentWillUnmount : Exécuté avant que le composant soit détruit");
    }


    /**
     * Lors de la mise à jour du composant...
     * Gestion des Props et des States
     */

    // Appelé avant de recevoir une nouvelle props (uniquement pour les props)
    componentWillReceiveProps(){
        console.log("-- componentWillReceiveProps : Exécuté avant la réception d'une props");
    }

    // Je peux décider de faire le rendu de la nouvelle modification ou pas dans cette fonction (pour améliorer les performences par exemple)
    shouldComponentUpdate(){
        console.log("-- shouldComponentUpdate : Je décide si je veux mettre à jour le composant ou pas");
    }

    // Appelé juste avant la mise à jour du composant (avant le render)
    componentWillUpdate(){
        console.log("-- componentWillUpdate : Exécuté avant la mise à jour de l'affichage");
    }

    // Appelé juste après la mise à jour du composant (après le render)
    componentDidUpdate(){
        console.log("-- componentDidUpdate : Exécuté après la mise à jour de l'affichage");
    }

 }

 export default CycleDeVieCompo;