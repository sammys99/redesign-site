import React from "react";
import styles from "./introduction.module.css";
import myImg from "../../img/village.png"; /* Need two ../ to get src and img files*/ 

function Introduction(){

return(
<section className={styles.sectionOne}>
  <div className={styles.intro}>
  
  <div className={styles.text}>
  <p className={styles.name}>Sam Padilla</p>
  <p className={styles.prhase}>Crafting Digital Experiences: <br/> Where Design Meets Code <br/>and Imagination Comes to Life </p>
  </div>
  
  <img src={myImg} className={styles.village}   alt="Village img" />

  </div>


</section>



);


}
export default Introduction;