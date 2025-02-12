import ProfilePic from "./assets/download (1).jpeg" 

function Card(){
    return (
        <div className="card" >
        <img   className="card-image" src={ProfilePic} alt="profile-picture" />
        <h1  className="card-title"  >Usama Rabi</h1>
        <p  className="card-text" >Hi I am Usama Rabi Junior web developer Live in Islamabad My passion is to make  a website that is user friendly and easy to use !</p>

        </div>
    );
}


export default Card;